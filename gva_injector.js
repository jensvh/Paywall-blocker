var s = document.createElement('script');
s.id = "boe";
// TODO: add "script.js" to web_accessible_resources in manifest.json
s.src = chrome.runtime.getURL('gva_injection_code.js');
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);