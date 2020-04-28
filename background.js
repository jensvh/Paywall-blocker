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
	{urls: ["*://www.tijd.be/*.html"]},
	["blocking", "requestHeaders"]
);
api.webRequest.onHeadersReceived.addListener(
	function(details) {
		removeHeader(details.responseHeaders, 'set-cookie');
		return {responseHeaders: details.responseHeaders};
	},
	{urls: ["*://www.tijd.be/*.html"]},
	['blocking', 'responseHeaders']
);

// De tijd krant
api.webRequest.onBeforeRequest.addListener(
	function(details) {
		console.log("Canceling event on tijd.be");
		return {cancel: true};
	},
	{urls: ["*://webreaders.twipecloud.net/webapp/mfn-tij/primary/1.0.0.21/partial/web.js"]},
	["blocking"]
);
api.tabs.onUpdated.addListener(
	function(tabId, changeInfo, tab) {
		if (tab.url.match(".*:\\/\\/krant\\.tijd\\.be\\/.*")) {
			api.tabs.executeScript(tabId, {file: "de_tijd_krant_injector.js"});
		}
	}
);

// Telegraaf
api.webRequest.onBeforeRequest.addListener(
	function(details) {
		const var_key = ((browser) ? "hostnames" : "origins"); // Cross browser
		api.browsingData.remove({
			"since": 0,
			[var_key]: ["telegraaf.nl"]
		  }, {
			"localStorage": true,
			"pluginData": true,

		  });
		return {cancel: false};
	},
	{urls: ["*://www.telegraaf.nl/*"]},
	["blocking"]
);

// Telegraaf: on url change, inject script
api.tabs.onUpdated.addListener(
	function(tabId, changeInfo, tab) {
		if (tab.url.match(".*:\\/\\/www\\.telegraaf\\.nl\\/.*")) {
			api.tabs.executeScript(tabId, {file: "telegraaf_inj.js"});
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

/* some handy dandy functions */
function removeHeader(headers, name) {
	for (var i = 0; i < headers.length; i++) {
		if (headers[i].name.toLowerCase() == name) {
			console.log('Removing "' + name + '" header.');
			headers.splice(i, 1);
			break;
		}
	}
}