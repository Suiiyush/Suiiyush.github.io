

//const API_KEY = '44d55d61aa6741c3bfdb3d176b947432';
//const API_KEY = 'bRDOlIlapSXvKvx_X8u7Fcoh1SIhqjBAaQz3rrM_blE';
const API_KEY= 'aba7de93b35877322414eac4926199b5';


const defaultArticleDescription = "This is one of the top articles from its category. To know more about what this article is all about click to read it.";

function getApiKey() {
    return API_KEY;
}

const baseURL = "http://api.mediastack.com/v1/news?access_key=";
const topHeadLines = `http://api.mediastack.com/v1/news?access_key=aba7de93b35877322414eac4926199b5`;

function getFetchURL(baseURL, type, parameter) {
    let url = baseURL;
    parameter = parameter.toLowerCase();
    
    if(type=='countries') url+=(getApiKey()+'&' + type + '=' + parameter);
    else if(type=='keywords') url+=(getApiKey()+'&' + type + '=' + parameter);

    console.log(url);
    return url;
}

function makeArticleAuthor(Author) {
    let articleAuthor = document.createElement('p');
    articleAuthor.classList.add('articleAuthor');
    const author = document.createTextNode(Author);
    articleAuthor.appendChild(author);
    return articleAuthor;
}

function makeArticlePublication(Publication) {
    let articlePublication = document.createElement('p');
    articlePublication.classList.add('articlePublication');
    const publication = document.createTextNode(Publication);
    articlePublication.appendChild(publication);
    return articlePublication;
}

function makeArticleMetaInfo(articleAuthor, articlePublication){
    let articleMetaInfo = document.createElement('div');
    articleMetaInfo.classList.add('articleMetaInfo');
    articleMetaInfo.appendChild(articleAuthor);
    articleMetaInfo.appendChild(articlePublication);
    return articleMetaInfo;
}

function makeArticleTitle(Title) {
    let articleTitle = document.createElement('p');
    articleTitle.classList.add('articleTitle');
    const title = document.createTextNode(Title);
    articleTitle.appendChild(title);
    return articleTitle;
}

function makeArticleDescription(Description){
    let articleDescription = document.createElement('p');
    articleDescription.classList.add('articleDescription');
    let description;
    if(Description) {
        description = document.createTextNode(Description);
    } else {
        description = document.createTextNode(defaultArticleDescription);
    }
    articleDescription.appendChild(description);
    return articleDescription;
}

function makeArticleTextContent(articleTitle, articleMetaInfo, articleDescription) {
    let articleTextContent = document.createElement('div');
    articleTextContent.classList.add('articleTextContent');
    articleTextContent.appendChild(articleTitle);
    articleTextContent.appendChild(articleMetaInfo);
    articleTextContent.appendChild(articleDescription);
    return articleTextContent;
}

function makeVl() {
    let vl = document.createElement('div');
    vl.classList.add('vl');
    return vl;
}

function makeArticleImage(imageURL) {
    let articleImage = document.createElement('img');
    articleImage.classList.add('articleImage');
    articleImage.addEventListener("error", function (event) {
        event.target.src = './defaultArticleImage.png';
        event.onerror = null;
    })
    articleImage.setAttribute("src", imageURL);

    let imgDiv = document.createElement('div');
    imgDiv.classList.add('imgDiv');
    imgDiv.appendChild(articleImage);
    return imgDiv;
}

function makeArticleContent(articleImage, vl, articleTextContent, articleURL) {
    let articleContent = document.createElement('a');
    articleContent.classList.add('articleContent');
    articleContent.setAttribute("href", articleURL);
    articleContent.setAttribute("target", "_blank");
    articleContent.appendChild(articleImage);
    articleContent.appendChild(vl);
    articleContent.appendChild(articleTextContent);
    return articleContent;
}

function makeHr() {
    return document.createElement('hr');
}

function developArticle(hr, articleContent) {
    let article = document.createElement('div');
    article.classList.add('article');
    article.appendChild(hr);
    article.appendChild(articleContent);
    return article;
}

function makeArticle(Article) {

    // Creating respective article HTML elements and appending theri respective classes and setting their attributes
    let article = document.createElement('div');
    article.classList.add('article');

    let articleAuthor = makeArticleAuthor(Article.author);

    let articlePublication = makeArticlePublication(Article.source);

    let articleMetaInfo = makeArticleMetaInfo(articleAuthor, articlePublication);

    let articleTitle = makeArticleTitle(Article.title);

    let articleDescription = makeArticleDescription(Article.description);

    let articleTextContent = makeArticleTextContent(articleTitle, articleMetaInfo, articleDescription);

    let vl = makeVl();

    let articleImage = makeArticleImage(Article.image);

    let articleContent = makeArticleContent(articleImage, vl, articleTextContent, Article.url);

    let hr = makeHr();

    return developArticle(hr, articleContent);
}

function showArticle(article) {
    let articles = document.getElementsByClassName('articles')[0];
    articles.appendChild(article);
}

function clearCurrentArticles(){
    let articles = document.getElementsByClassName('articles')[0];
    while(articles.hasChildNodes()){
        articles.removeChild(articles.firstChild); // Remove the first child of list everytime until the list is null.
     }
}

function makeSideArticles(Article) {
    let sideArticle = document.createElement('div');
    sideArticle.classList.add('sideArticle');

    let hr = document.createElement('hr');
    sideArticle.appendChild(hr);

    let sideArticleTitle = document.createElement('a');
    sideArticleTitle.classList.add('sideArticleTitle');
    sideArticleTitle.setAttribute('href', Article.link);
    sideArticleTitle.setAttribute('target', '_blank');

    let title = document.createTextNode(Article.title);
    sideArticleTitle.appendChild(title);

    sideArticle.appendChild(sideArticleTitle);

    return sideArticle;
}

function showSideArticles(sideArticle) {
    let articlesSidePanel = document.getElementsByClassName('articlesSidePanel')[0];
    articlesSidePanel.appendChild(sideArticle);
}

function showQueryError(queryError) {
    let articles = document.getElementsByClassName('articles')[0];
    articles.appendChild(queryError);
    console.log(articles);
}

function makeQueryError() {
    let queryError =  makeArticleTitle("No results found!");
    queryError.classList.add('queryError');
    return queryError;
}

async function getArticles(url){

    let response  = await fetch(url);

    if(response.status >= 200 && response.status <= 300){

        const jsonObject = await response.json();
        const articles = jsonObject.data;
        clearCurrentArticles();

        if(articles.length  == 0) {
            let queryError = makeQueryError();
            showQueryError(queryError);
            return;
        }

        for(let i = 0; i < articles.length; i++){
            let Article = articles[i]; 
            if(i != 0 && Article.title == articles[i-1].title) continue;

            // Creatign the article HTML structure
            let article = makeArticle(Article);
            if(url==topHeadLines){
                let sideArticle = makeSideArticles(Article);
                showSideArticles(sideArticle);
            }

            // Listing the article on homepage
            showArticle(article);
        }

    } else {
        console.log(response.status + ' : ' + response.statusText);
    }
}

let form = document.getElementsByTagName('form')[0];
form.addEventListener("submit", function(event) {
    event.preventDefault();
    let input = form.firstElementChild;
    const parameter= encodeURIComponent(input.value);
    input.value = "";

    const url = getFetchURL(baseURL, 'keywords', parameter);
    getArticles(url);
});


let countryButtons = document.getElementsByClassName('countryButtons')[0];
countryButtons.addEventListener("click", function(event) {
    let btn = event.target.closest('button');
    if(!btn || !countryButtons.contains(btn)) return false;
    const parameter = btn.getAttribute("code");
    const url = getFetchURL(baseURL, 'countries', parameter);
    console.log(url);
    getArticles(url);
});

getArticles(baseURL+getApiKey());

