const rp = require('request-promise');
const $ = require('cheerio');

const appParse = function(url) {
    return rp(url)
        .then(function(html) {
            return {
                nombre: $('.name', html).text(),
                descripción: $('.description', html).text(),
                descargas: $('.downloads', html).text(),
            };
        })
        .catch(function(err) {
            //handle error
        });
};

module.exports = appParse;
