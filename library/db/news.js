const models = require('../models');
const model = exports.model = models.news;
const async = require('async');

//保存
exports.save = function (m, callback) {
    m.save(callback);
    m.console(); // ---测试
};


