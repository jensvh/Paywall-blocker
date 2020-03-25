// demorgen
chrome.webRequest.onBeforeRequest.addListener(
	function(details) {
		console.log("Canceling event on demorgen.be");
		return {cancel: true};
	},
	{urls: ["*://www.demorgen.be/temptation/resolve*"]},
	["blocking"]
);


// De tijd
chrome.webRequest.onBeforeSendHeaders.addListener(
	function(details) {
		removeHeader(details.requestHeaders, 'cookie');
		return {requestHeaders: details.requestHeaders};
	},
	{urls: ["*://www.tijd.be/*.html"]},
	["blocking", "requestHeaders", "extraHeaders"]
);
chrome.webRequest.onHeadersReceived.addListener(
	function(details) {
		removeHeader(details.responseHeaders, 'set-cookie');
		return {responseHeaders: details.responseHeaders};
	},
	{urls: ["*://www.tijd.be/*.html"]},
	['blocking', 'responseHeaders', 'extraHeaders']
);

// Telegraaf
chrome.webRequest.onBeforeRequest.addListener(
	function(details) {
		chrome.browsingData.remove({
			"since": 0,
			"origins": ["https://www.telegraaf.nl"]
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
chrome.tabs.onUpdated.addListener(
	function(tabId, changeInfo, tab) {
		if (tab.url.match(".*:\\/\\/www\\.telegraaf\\.nl\\/.*")) {
			console.log(changeInfo);
			chrome.tabs.executeScript(tabId, {file: "telegraaf_inj.js"});
		}
	}
);

// Bloomberg
chrome.webRequest.onBeforeRequest.addListener(
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