

//const API_KEY = '44d55d61aa6741c3bfdb3d176b947432';
//const API_KEY = 'bRDOlIlapSXvKvx_X8u7Fcoh1SIhqjBAaQz3rrM_blE';
//const API_KEY= 'aba7de93b35877322414eac4926199b5';

const API_KEY = 'pub_23651e6d2b637e24b1a03a3eaa1ec3aea5448';

const defaultArticleDescription = "This is one of the top articles from its category. To know more about what this article is all about click to read it.";

function getApiKey() {
    return API_KEY;
}

const baseURL = "https://newsdata.io/api/1/news?apikey=";
const topHeadLines = `https://newsdata.io/api/1/news?apikey=pub_23651e6d2b637e24b1a03a3eaa1ec3aea5448`;

let country = null;
let searchQuery = null;

function getFetchURL(baseURL, type, parameter) {
    let url = baseURL;
    parameter = parameter.toLowerCase();

    console.log(`country: ${country}, search:${searchQuery}`);
    
    if(type=='country') url+=(getApiKey()+'&' + type + '=' + parameter + `${searchQuery!=null ? '&q=' + searchQuery : ''}`);
    else if(type=='q') url+=(getApiKey()+'&' + type + '=' + parameter + `${country!=null ? '&country=' + country : ''}`);

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

    let articleAuthor = makeArticleAuthor(Article.creator);

    let articlePublication = makeArticlePublication(Article.source_id);

    let articleMetaInfo = makeArticleMetaInfo(articleAuthor, articlePublication);

    let articleTitle = makeArticleTitle(Article.title);

    let articleDescription = makeArticleDescription(Article.description);

    let articleTextContent = makeArticleTextContent(articleTitle, articleMetaInfo, articleDescription);

    let vl = makeVl();

    let articleImage = makeArticleImage(Article.image_url);

    let articleContent = makeArticleContent(articleImage, vl, articleTextContent, Article.link);

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

let loading = document.querySelector("#loading");

function displayLoading() {
    loading.classList.add('display');
}

function hideLoading() {
    loading.classList.remove('display')
}

async function getArticles(url){
    displayLoading();
    let response  = await fetch(url);

    if(response.status >= 200 && response.status <= 300){

        const jsonObject = await response.json();
        clearCurrentArticles();
        if(jsonObject.totalResults  == 0) {
            let queryError = makeQueryError();
            showQueryError(queryError);
            return;
        }
        const articles = jsonObject.results;

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
        hideLoading();

    } else {
        console.log(response.status + ' : ' + response.statusText);
    }
}

let form = document.getElementsByTagName('form')[0];
form.addEventListener("submit", function(event) {
    event.preventDefault();
    let input = form.firstElementChild;
    const parameter= encodeURIComponent(input.value);
    searchQuery= parameter;

    const url = getFetchURL(baseURL, 'q', parameter);
    getArticles(url);
});


let countryButtons = document.getElementsByClassName('countryButtons')[0];
countryButtons.addEventListener("click", function(event) {
    if(event.target.tagName != 'BUTTON') return false;
    let btn = event.target;
    console.log(btn);
    let buttons = document.getElementsByClassName('countryButtons')[0].children;
    for(let button of buttons) {
        if(button != btn) button.classList.remove('selectedButton');
        else button.classList.add('selectedButton');
    }
    const parameter = btn.getAttribute("code");
    country = parameter.toLowerCase();
    const url = getFetchURL(baseURL, 'country', parameter);
    console.log(url);
    getArticles(url);
});

getArticles(baseURL+getApiKey());

