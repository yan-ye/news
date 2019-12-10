const mongoose = require('mongoose');
let Schema = mongoose.Schema;
// Schema 架构图   schema 图式/概要
// Schema 架构图   schema 图式/概要
// Schema 架构图   schema 图式/概要
// Schema 架构图   schema 图式/概要
let schema = new Schema({
    title: {type: String, required: true}, //标题
    newsUrl: String, //链接
    keywords: String, //关键字
    create_date: {type: Date, default: Date.now()}, //添加时间
    info: Schema.Types.Mixed //自定义属性
});
schema.methods.console = function () {
  console.log('我是methods 扩展方法  >>>>>>>>>>');
};
schema.index({keywords:1});
mongoose.set('useCreateIndex', true);//建立索引
mongoose.model('news', schema);
