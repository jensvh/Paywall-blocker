var script = document.createElement("script");
script.src = chrome.runtime.getURL("gva_inject_code.js");
script.onload = function() {
	this.remove();
};
(document.head || document.documentElement).appendChild(script);