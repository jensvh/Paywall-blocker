// Hide overlay
var sheet = document.createElement("style");
sheet.innerHTML = '.cj-root { display: none!important; } #getsitecontrol {display: none!important; }';
window.document.head.appendChild(sheet);


// Show full article
var father = document.querySelector('div[data-mht-block="article-detail__article-main"]');
var src = father.getElementsByTagName("script")[0];

var json_str = src.innerHTML.substring(src.innerHTML.indexOf('{'));
var json = JSON.parse(json_str);
var premium = Object.values(json)[0]['premium'];
console.log(premium);
if (premium == true && document.getElementById("paywall-blocker") == undefined) {
	var wrapper = father.getElementsByTagName("div")[0];
	var content = document.createElement("div");
	content.id = "paywall-blocker";
	var html_start = Object.values(json)[0]['body']['json'];

	for (i in html_start) {
		var array = html_start[i];
		Object.keys(array).forEach(function(key) {
			var lmt = document.createElement(key);
			if (key == "p") {
				lmt.innerHTML = array[key];
			} else if (key == "image") {
				lmt = document.createElement("img");
				lmt.src = array[key]['url'];
				
				
			}
			content.appendChild(lmt);
		});
	}
	wrapper.appendChild(content);
}