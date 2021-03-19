// Cross browser support
var api = (function() {
	if (typeof browser !== 'undefined') {
		return browser;
	} else if (typeof chrome !== 'undefined') {
		return chrome;
	} else if (typeof msBrowser !== 'undefined') {
		return msBrowser;
	} else {
		throw new Error("Unsupported API");
	}
})();

// demorgen
api.webRequest.onBeforeRequest.addListener(
	function(details) {
		console.log("Canceling event on demorgen.be");
		return {cancel: true};
	},
	{urls: ["*://www.demorgen.be/temptation/resolve*"]},
	["blocking"]
);


// De tijd
api.webRequest.onBeforeSendHeaders.addListener(
	function(details) {
		removeHeader(details.requestHeaders, 'cookie');
		return {requestHeaders: details.requestHeaders};
	},
	{urls: ["*://www.tijd.be/*"]},
	["blocking", "requestHeaders"]
);
api.webRequest.onHeadersReceived.addListener(
	function(details) {
		removeHeader(details.responseHeaders, 'set-cookie');
		return {responseHeaders: details.responseHeaders};
	},
	{urls: ["*://www.tijd.be/*"]},
	['blocking', 'responseHeaders']
);

// Telegraaf: on url change, inject script
api.tabs.onUpdated.addListener(
	function(tabId, changeInfo, tab) {
		if (tab.url !== undefined && changeInfo.status == "complete") {
			if (tab.url.match(".*:\\/\\/www\\.telegraaf\\.nl\\/.*")) {
				api.tabs.executeScript(tabId, {file: "telegraaf_inj.js", runAt: "document_end"});
			}
		}
	}
);

// Bloomberg
api.webRequest.onBeforeRequest.addListener(
	function(details) {
		console.log("Canceling event on bloomberg.com");
		return {cancel: true};
	},
	{urls: ["*://assets.bwbx.io/s3/fence/*"]},
	["blocking"]
);

// Knack yea
api.tabs.onUpdated.addListener(
	function(tabId, changeInfo, tab) {
		if (tab.url !== undefined && changeInfo.status == "complete") { // Only when url has changed
			if (tab.url.match(".*:\\/\\/www\\.knack\\.be\\/.*")) {
				api.tabs.executeScript(tabId, {file: "knack_inject_code.js", runAt: "document_end"});
			}
		}
	}
);

// GVA
api.tabs.onUpdated.addListener(
	function(tabId, changeInfo, tab) {
		if (tab.url !== undefined && changeInfo.status == "complete") {
			if (tab.url.match(".*:\\/\\/www\\.gva\\.be\\/cnt\\/.*")) {
				api.tabs.executeScript(tabId, {file: "gva_injector.js", runAt: "document_end"});
			}
		}
	}
);

api.webRequest.onBeforeRequest.addListener(
	function(details) {
		console.log("Canceling event on gva.be");
		return {cancel: true};
	},
	{urls: ["*://fragments.1platform.be/v2/article-detail/cdn/*.js", "*://markup.gva.be/extra/assets/customer-journey/cj-react-flows.umd.js*"]},
	["blocking"]
);

/* some handy dandy functions */
function removeHeader(headers, name) {
	for (var i = 0; i < headers.length; i++) {
		if (headers[i].name.toLowerCase() == name) {
			headers.splice(i, 1);
			break;
		}
	}
}