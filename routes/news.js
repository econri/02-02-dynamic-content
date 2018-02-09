var express = require('express');
var router = express.Router();

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('bff8f47e9f0e47879063c46578c078ce');

/* GET users listing. */
router.get('/', function(req, res, next) {
  newsapi.v2.everything({
    q: 'bitcoin',
    //sources: 'bbc-news,the-verge',
    //domains: 'bbc.co.uk, techcrunch.com',
    //from: '2017-12-01',
    //to: '2017-12-12',
    language: 'ru',
    sortBy: 'relevancy',
    //page: 2
  }).then(response => {
    console.log(response);
    /*
      {
        status: "ok",
        articles: [...]
      }
    */
    res.render('news', { posts: response.articles });
  });
  
});

module.exports = router;
