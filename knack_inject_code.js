// Hide addblocker and blury overlay
var sheet = document.createElement("style");
sheet.innerHTML = '.bcToaster, #adBlockerPopup, #paywall-modal, .rmgPaywall, .article-body p:first-of-type, .OUTBRAIN { display: none!important; } .rmgDetail-main.m-blurred * {text-shadow: none!important; color: inherit!important;} .article-body div:first-of-type {display: block!important;} body {overflow: auto!important}';
window.document.head.appendChild(sheet);
