
// Add css in page, to hide the popup
var sheet = window.document.styleSheets[0];
sheet.insertRule('.WebpushOptin__wrapper { display: none!important; }', sheet.cssRules.length);

// Inject js to reload page, when the background script didn't perform his job
var code = [
			'function checkPayWall(){',
			'	var toCheck = document.getElementById("TEMPRORARY_METERING_ID");',
			'	if (typeof(toCheck) != "undefined" && toCheck != null){location.reload();}',
			'}',
			'window.onload = setTimeout(checkPayWall, 100);'
			].join('\n');
var script = document.createElement('script');
script.textContent = code;
(document.head||document.documentElement).appendChild(script);
script.remove();
