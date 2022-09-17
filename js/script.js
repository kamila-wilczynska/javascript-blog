'use strict';
/*
document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  });
*/

//Articles///////////////////////////////////
const titleClickHandler = function (event) {
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');

  /* [DONE] remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll('.titles a.active');

  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }

  /* [DONE] add class 'active' to the clicked link */
  clickedElement.classList.add('active');
  console.log('"clickedElement": ' + clickedElement);

  /* [DONE] remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.posts article.active');

  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
  }

  /* [DONE] get 'href' attribute from the clicked link */
  const articleSelector = clickedElement.getAttribute('href');
  console.log(articleSelector);


  /* [DONE] find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector);
  console.log('TargetArticle: ' + articleSelector);

  /* [DONE] add class 'active' to the correct article */
  targetArticle.classList.add('active');
  console.log(articleSelector);
};


const links = document.querySelectorAll('.titles a');
console.log(links);

for (let link of links) {
  link.addEventListener('click', titleClickHandler);
}



/* GENERATE TITLES */

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list',
  optArticleAuthorsSelector = '.post-author';

function generateTitleLinks(customSelector = '') {
  console.log('Generate titles'); {
    
    /* [DONE] remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);

    titleList.innerHTML = '';
    console.log('titleList removed');



    /*[DONE] for each article */
    const articles = document.querySelectorAll(optArticleSelector + customSelector);
    console.log(optArticleSelector);
    let html = '';
    for (let article of articles) {



      /*[DONE] get the article id */
      const articleId = article.getAttribute('id');
      console.log(articleId);

      /* [DONE] find the title element */
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;

      /*[IN PROGRESS] get the title from the title element */


      /* [DONE] create HTML of the link */
      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
      console.log(linkHTML);


      /* [DONE] insert link into titleList */

      html = html + linkHTML;

    }
    console.log(titleList);
    titleList.innerHTML = html;
    const links = document.querySelectorAll('.titles a');

    for (let link of links) {
      link.addEventListener('click', titleClickHandler);
    }
  }

  

}

generateTitleLinks();


/* GENERATE TAGS */////////////////////////////////////////

const generateTags = function() {
  
  /* find all articles */
  
  const articles = document.querySelectorAll(optArticleSelector);
  console.log(optArticleTagsSelector);

  /* START LOOP: for every article: */
  for (let article of articles) {
  /* find tags wrapper */
    const tags = article.querySelector(optArticleTagsSelector);
  
    console.log('"Tags warpper" ' + tags);
  
    /* make html variable with empty string */
    let html = '';
    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    console.log('"data-tags" attribute get from the article: ' + articleTags);
    /* split tags into array */
    const articleTagsArray = articleTags.split(',');
    console.log(articleTagsArray);  
    /* START LOOP: for each tag */
    for(let tag of articleTagsArray) {
    /* generate HTML of the link */


 
      const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>'; 
      console.log('Generated tag HTML code: ' + linkHTML);
  
      /* add generated code to html variable */
      html = html + linkHTML; 
      /* END LOOP: for each tag */
    
    }
    /* insert HTML of all the links into the tags wrapper */
    tags.innerHTML = html;
  } /* END LOOP: for every article: */


};



generateTags();





const tagClickHandler = function (event){
  /* prevent default action for this event */
  event.preventDefault();

  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = 'this';
  console.log('Tag was clicked!');
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  console.log('Href attribute get from the clicked tag: ' + href); 
  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');
  console.log('Clicked tag: ' + tag); 
  /* find all tag links with class active */
  const activeTags = document.querySelectorAll('a.active[href^="#tag-"]');
  /* START LOOP: for each active tag link */
  for (let activeTag of activeTags){
  /* remove class active */
    activeTag.classList.remove('active');
  /* END LOOP: for each active tag link */
  }

  /* find all tag links with "href" attribute equal to the "href" constant ---Znajdowanie linków do tagów*/
  
  const targetTags = document.querySelectorAll('a[href="' + href + '"]');
  /* START LOOP: for each found tag link */
  for (targetTag of targetTags) {
  /* add class active */
    targetTag.classList.add('active');
    console.log('Target Tag: ' + targetTags); 
  /* END LOOP: for each found tag link */
  }
  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
};

const addClickListenersToTags= function() {
  /* find all links to tags */
  const tagLinks = document.querySelectorAll('.post-tags .list a, .tags.list a');

  /* START LOOP: for each link */
  for(let tagLink of tagLinks){
  /* add tagClickHandler as event listener for that link */
    tagLink.addEventListener('click', tagClickHandler);
  /* END LOOP: for each link */
  }
};

addClickListenersToTags();





/*  AUTHORS *///////////////////////




function generateAuthors() {  
  
  const articles = document.querySelectorAll(optArticleSelector); /* [DONE] find all articles */ 
  for (let article of articles) { /* [DONE] START LOOP: for every article: */   
    const authors = article.querySelector(optArticleAuthorsSelector); /* [DONE] find author wrapper */   
    console.log('"Authors wrapper:" ' + authors);
    console.log('"optArticleAuthorsSelector:" ' + optArticleAuthorsSelector);
    let html = ''; /* [DONE] make html variable with empty string */   
    const author = article.getAttribute('data-author'); /* [DONE] get author from data-author attribute */
    console.log('"data-author" attribute get from the article: ' + author);   

    /* [DONE] generate HTML of the link */
    const linkHTML = '<li><a href="#author-' + author + '">' + author + '</a></li>'; 
   

    console.log('Generated author HTML code: ' + linkHTML);   
    html = html + linkHTML; /* [DONE] add generated code to html variable */  
    
    console.log('TEST' + html);
    authors.innerHTML = html; /* [DONE] insert HTML of all the links into the authors wrapper */
   
  } /* [DONE] END LOOP: for every article: */ 

 
}

generateAuthors(); 


function authorClickHandler(event){
  event.preventDefault();

  /* [DONE] make new constant named "clickedElement" and give it the value of "this" */

  const clickedElement = this;
  console.log('Author was clicked!');

  /* [DONE] make a new constant "href" and read the attribute "href" of the clicked element */

  const href = clickedElement.getAttribute('href');
  console.log('clicked author: ' + href);

  /* [DONE] make a new constant "tag" and extract tag from the "href" constant */

  const author = href.replace('#author-', '');
  console.log('Author: ' + author);

  /* [DONE] find all tag links with class active */

  const activeAuthors = document.querySelectorAll('a.active[href^="#author-"]');

  /* [DONE] START LOOP: for each active author link */

  for (let activeAuthor of activeAuthors) {

    /* [DONE] remove class active */

    activeAuthor.classList.remove('active');

    /* [DONE] END LOOP: for each active author link */

  }

  /* [DONE] find all author links with "href" attribute equal to the "href" constant */

  const targetAuthors = document.querySelectorAll('a[href="' + href + '"]');

  /* [DONE] START LOOP: for each found author link */

  for (let targetAuthor of targetAuthors) {

    /* [DONE] add class active */

    targetAuthor.classList.add('active');
    console.log('Target Author: ' + targetAuthor);

    /* [DONE] END LOOP: for each found author link */

  }

  /* [DONE] execute function "generateTitleLinks" with article selector as argument */

  
  generateTitleLinks('[data-tags~="' + author + '"]');

}


const addClickListenersToAuthors= function() {
  /* [DONE] find all links to tags */
  const authorLinks = document.querySelectorAll('a[href^="#author-"]');

  /* [DONE] START LOOP: for each link */
  for(let authorlink of authorLinks){
  /* add tagClickHandler as event listener for that link */
    authorLink.addEventListener('click', authorClickHandler);
  /* [DONE] END LOOP: for each link */
  }
};

addClickListenersToAuthors();