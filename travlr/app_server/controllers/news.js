var fs = require('fs');
var latestNews = JSON.parse(fs.readFileSync('./data/latestNews.json', 'utf8'));
var vacationTips = JSON.parse(fs.readFileSync('./data/vacationTips.json', 'utf8'));
var newsHeadline = JSON.parse(fs.readFileSync('./data/newsHeadline.json', 'utf8'));

/* GET news view */
const news = (req, res) => {
    res.render('news', { title: 'Travlr Getaways', latestNews, vacationTips, newsHeadline });
};

module.exports = {
    news
};