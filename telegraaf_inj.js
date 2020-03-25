
// Add css in page, to hide the popup
var sheet = window.document.styleSheets[0];
sheet.insertRule('.WebpushOptin__wrapper { display: none!important; }', sheet.cssRules.length);

// Inject js to reload page, when the background script didn't perform his job
var code = [
			'var toCheck = document.getElementById("TEMPRORARY_METERING_ID");', // Reload page, if the backgroundscript didn't his job
			'if (typeof(toCheck) != "undefined" && toCheck != null){location.reload();}', // reload page
			].join('\n');
var script = document.createElement('script');
script.textContent = code;
(document.head||document.documentElement).appendChild(script);
script.remove();
