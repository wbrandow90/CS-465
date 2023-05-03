var fs = require('fs');
var latestNews = JSON.parse(fs.readFileSync('./data/latestNews.json', 'utf8'));

/* GET homepage */
const index = (req, res) => {
    res.render('index', { title: 'Travlr Getaways', latestNews });
};
module.exports = {
    index
};