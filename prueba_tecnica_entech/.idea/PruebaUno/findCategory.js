const rp = require('request-promise');
const $ = require('cheerio');
const appParse = require('./appParse.js');

const url = 'https://play.google.com/store/apps/category/:category';

rp(url)
    .then(function(html) {
        //success!
        const googleApps = [];
        for (let i = 0; i < 5; i++) {
            googleApps.push($('big > a', html)[i].attribs.href);
        }
        return Promise.all(
            googleApps.map(function(url) {
                return appParse('https://play.google.com' + url);
            })
        );
    })
    .then(function(findCategory) {
        console.log(findCategory);
    })
    .catch(function(err) {
        //handle error
        console.log(err);
    });
