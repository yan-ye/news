const mongoose = require('mongoose');

mongoose.connect($CONFIG.db.mongodb.url, { useNewUrlParser: true, useUnifiedTopology: true}, function (err, ret) {
    if (err) {
        console.error('connect to %s error: ', $CONFIG.db.mongodb.url, err.message);
        process.exit(1)
    }
});

require('./user_oauth');

exports.user_oauth = mongoose.model('user_oauth');

console.log('init mongodb done');
