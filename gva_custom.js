//const full_article = window["__PRELOADED_STATE_GRAPH__UVSK47Vvb_V"];
console.log("Injected");

// Add css rule
const rules = '.italic { font-style: italic; }';
var stylesheet = document.createElement("style");
stylesheet.innerText = rules;
document.head.appendChild(stylesheet);

const id = document.querySelectorAll('div[data-mht-block="article-detail__article-main"] div[data-fragment-name="articleDetail"]')[0].id 
console.log("ID: " + id);
const t = '__PRELOADED_STATE_GRAPH__' + id;
console.log(t);

const full_article_data = document.querySelectorAll('script[data-fragment-type="PacoArticleContent"]')[0].firstChild.data;

const article = full_article_data.substring(full_article_data.indexOf("{"), full_article_data.lastIndexOf("}")+1);
const article_json = JSON.parse(article);

const body = article_json[Object.keys(article_json)[0]]["data"]["article"]["body"];
console.log(body);

var parser = new DOMParser();
var div = document.getElementById(id);

var elem, html;

for (var par of body) {
    for (var key in par) {
        elem = null;
        if (key === "p") {
            html = parser.parseFromString('<p>' + par[key] + '</p>', 'text/html');
            elem = html.querySelector('p');
        } else if (key === "subhead") {
            html = parser.parseFromString('<p style="font-weight: bold;">' + par[key] + '</p>', 'text/html');
            elem = html.querySelector('p');
        } else if (key === "image") {
            elem = document.createElement('div');

            var img = document.createElement('img');
            img.src = par[key].url;
            elem.appendChild(img);

            var figcaption = document.createElement('figcaption');
            var text = parser.parseFromString('<p class="gva-ebe0ecc6_root gva-ebe0ecc6_caption2 gva-300db776_none gva-91174671_system gva-66f0fec7_regular gva-1d70522a_marginbottom0 gva-1d70522a_marginleft0 gva-1d70522a_marginright0 gva-1d70522a_margintop3 gva-b48c4984_center" style="color:var(--color-grey-50); margin-bottom: 1.25rem;">' + par[key].caption + ' — ©  ' + par[key].credit + '</p>', 'text/html');
            figcaption.appendChild(text.querySelector('p'));
            elem.appendChild(figcaption);
        } else if (key === "legacy-ml") {
            html = parser.parseFromString(par[key], 'text/html');
            console.log(html);
            elem = html.querySelector('div');
        }

        // TODO: instagram
        // TODO: legacy-ml
        if (elem != null) {
            console.log(elem);
            div.appendChild(elem);
        }
    }
}