const mongoose = require('mongoose');

mongoose.connect($CONFIG.db.mongodb.url, { useNewUrlParser: true, useUnifiedTopology: true}, function (err, ret) {
    if (err) {
        console.error('connect to %s error: ', $CONFIG.db.mongodb.url, err.message);
        process.exit(1)
    }
});

require('./user_oauth');
require('./news');

exports.user_oauth = mongoose.model('user_oauth');
exports.news = mongoose.model('news');

console.log('init mongodb done');
