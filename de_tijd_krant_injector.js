var script = document.createElement("script");
script.src = chrome.runtime.getURL("de_tijd_krant_inj.js");
script.onload = function() {
	this.remove();
};
(document.head || document.documentElement).appendChild(script);