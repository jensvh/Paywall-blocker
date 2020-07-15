function removePopups() {
	var sheet = document.createElement("style");
	window.document.head.appendChild(sheet);
	sheet.sheet.insertRule('.PopupBackdrop__block {display: none!important; }');
	sheet.sheet.insertRule('.TextArticlePage__bodyText { white-space: pre-line; }');
}

function showFullArticle() {
	var jsonScript = document.querySelector('[type="application/ld+json"][data-react-helmet="true"]');
	if (jsonScript == undefined || jsonScript == null) {
		return; // Probably it is a free article
	}
	var json = JSON.parse(jsonScript.textContent);
	var articleBody = json['articleBody'];
	// Create showable linebreaks
	const niceBody = articleBody.split("\\n\\n").join("\r\n");
	
	var articleElmt = document.querySelector('[class="TextArticlePage__bodyText"][data-element="articleBody"]');
	articleElmt.textContent = niceBody;
}

removePopups();
showFullArticle();


/*
Test gva, removed line with id

 */