// Hide addblocker and blury overlay
var sheet = document.createElement("style");
window.document.head.appendChild(sheet);
sheet.sheet.insertRule('.bcToaster, #adBlockerPopup, #paywall-modal, .rmgPaywall, .article-body p:first-of-type, .OUTBRAIN { display: none!important; }');
sheet.sheet.insertRule('.rmgDetail-main.m-blurred * {text-shadow: none!important; color: inherit!important;}');
sheet.sheet.insertRule('.article-body div:first-of-type {display: block!important;}');
sheet.sheet.insertRule('body {overflow: auto!important}');