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

var urls_to_block = [
	"*://www.demorgen.be/temptation/resolve*",									// DeMorgen
	"*://assets.bwbx.io/s3/fence/*",											// Bloomberg
	"*://fragments.1platform.be/v2/article-detail/cdn/*.js",					// GVA
	"*://markup.gva.be/extra/assets/customer-journey/cj-react-flows.umd.js*",	// GVA
	"*://www.telegraaf.nl/cdn/statics/TextArticlePage.*.js"						// Telegraaf
];

// De tijd
api.webRequest.onBeforeSendHeaders.addListener(
	function(details) {
		removeHeader(details.requestHeaders, "cookie");
		for (var header of details.requestHeaders) {
			if (header.name === "Referer") {
				header.value = "https://www.google.com/";
				return {requestHeaders: details.requestHeaders};
			}
		}
		details.requestHeaders.push({name: "referer", value: "https://www.google.com/"})
		return {requestHeaders: details.requestHeaders};
	},
	{urls: ["https://www.tijd.be/*"]},
	["blocking", "requestHeaders"] // "extraHeaders" for chrome support.
);

// Block urls
api.webRequest.onBeforeRequest.addListener(
	function(details) {
		return {cancel: true};
	},
	{urls: urls_to_block},
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