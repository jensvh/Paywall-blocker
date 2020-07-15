// Hide overlay
function removeOverlay() {
	var sheet = document.createElement("style");
	window.document.head.appendChild(sheet);
	sheet.sheet.insertRule('.ad, .OUTBRAIN, #sidebar, .cj-root, #getsitecontrol {display: none!important; }');
	sheet.sheet.insertRule('.is-dialog-active { overflow: auto!important; }');
	sheet.sheet.insertRule('.bold { font-weight: bold; }');
	sheet.sheet.insertRule('.italic { font-style: italic; }');
}

// Show full article
// TODO: textContent => show html formatet tekst
function showFullArticle() {
	const father = document.querySelector('div[data-mht-block="article-detail__article-main"]');
	if (father == null || father == undefined) {
		return;
	}
	var src = father.getElementsByTagName("script");
	src = src[0];
	
	const json_str = src.textContent.substring(src.textContent.indexOf('{'));
	const json = JSON.parse(json_str);
	const premium = Object.values(json)[0]['premium'];

	if (premium == true) {
		var wrapper = father.getElementsByTagName("div")[0];
		var content = document.createElement("div");
		content.classList.add("gva-3ee037ad_root", "gva-3ee037ad_paragraph", "gva-68d24f7d_none", "gva-ef7ba41a_system", "gva-6c6ea21_marginbottom5",  "gva-6c6ea21_margintop0", "gva-21a3e72f_inherit");
		content.style.color = "#000000";
		const html_start = Object.values(json)[0]['body']['json'];

		for (i in html_start) {
			const array = html_start[i];
			Object.keys(array).forEach(function(key) {
				var lmt = document.createElement(key);
				if (key == "p") {
					lmt = beautify(array[key], lmt);
					//lmt.textContent = array[key]/*.replace(/<(.|\n)*?>/g, '')*/;
				} else if (key == "image") {
					lmt = document.createElement("img");
					lmt.src = array[key]['url'];
				}
				content.appendChild(lmt);
			});
		}
		wrapper.appendChild(content);
	}
}

function beautify(str, parent_element) {
	const matches = str.match('\<(.*?) .*class="(.*?)".*\>(.*?)\<\/(.*?)\>');
	if (matches == null || matches[1] != matches[4] || (matches[1] != "span" && matches[1] != "subhead")) {
		parent_element.appendChild(document.createTextNode(str));
		return parent_element;
	}
	var new_element = document.createElement(matches[1]);
	new_element.classList.add(matches[2]);
	new_element.textContent = matches[3];

	const blablabla = str.substring(0, str.indexOf(matches[0]));
	parent_element.appendChild(document.createTextNode(blablabla));
	parent_element.appendChild(new_element);
	const bliblabloe = str.indexOf(matches[0]) + matches[0].length;
	return beautify(str.substring(bliblabloe), parent_element);
}

removeOverlay();
showFullArticle();