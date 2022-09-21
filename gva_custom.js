//const full_article = window["__PRELOADED_STATE_GRAPH__UVSK47Vvb_V"];
console.log("Injected");

const id = document.querySelectorAll('div[data-mht-block="article-detail__article-main"] div[data-fragment-name="articleDetail"]')[0].id 
console.log("ID: " + id);
const t = '__PRELOADED_STATE_GRAPH__' + id;
console.log(t);

const full_article_data = document.querySelectorAll('script[data-fragment-type="PacoArticleContent"]')[0].firstChild.data;
console.log(full_article_data);

const article = full_article_data.substring(full_article_data.indexOf("{"), full_article_data.lastIndexOf("}")+1);
console.log(JSON.parse(article));