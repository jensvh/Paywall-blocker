var s = document.createElement('script');
// TODO: add "script.js" to web_accessible_resources in manifest.json
s.src = "https://cdn.jsdelivr.net/gh/jensvh/paywall-blocker@master/gva_injection_code.js";
s.onload = function() {
    this.remove();
};
console.log("injected");
(document.head || document.documentElement).appendChild(s);