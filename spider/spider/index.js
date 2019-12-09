/*
*
*  百度新闻  - 河北新闻  - 获取数据 - 发送邮件
*  superagent 模块提供了很多比如get、post、delte等方法，可以很方便地进行Ajax请求操作。在请求结束后执行.end()回调函数。.end()接受一个函数作为参数，该函数又有两个参数error和res。当请求失败，error会包含返回的错误信息，请求成功，error值为null，返回的数据会包含在res参数中。。
*  cheerio模块的.load()方法，将HTML document作为参数传入函数，以后就可以使用类似jQuery的$(selectior)的方式来获取页面元素。同时可以使用类似于jQuery中的.each()来遍历元素。此外，还有很多方法，
*
* */

const superagent = require('superagent');
const cheerio = require('cheerio');
let hotNews = [];
let localNews = [];

return false; //----------------------------
//获取热点新闻链接函数
let getHotNews = res => {
    let hotNews = [];
    let $ = cheerio.load(res.text);
    $('div#pane-news ul li a').each((idx, ele) => {
        let news = {
            title: $(ele).text(),// 获取新闻标题
            href: $(ele).attr('href')// 获取新闻网页链接
        };
        hotNews.push(news)// 存入最终结果数组
    });
    return hotNews;
};
superagent.get('http://news.baidu.com/').end((err, res) => {
    if (err) {
        console.error(`访问http://news.baidu.com/失败--${err}`)
    } else {
        hotNews = getHotNews(res)
        console.error(hotNews , '>>>>>');
    }
});
