var s = document.createElement('script');
s.src = chrome.runtime.getURL('gva_custom.js');
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);