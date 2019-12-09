var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    id: {type: String, required: true},//ID
    name: String,//名称
    username: String,//名称
    email: String,//邮箱
    avatar_url: String,//头像
    icon: String,//原始地址图标
    icon_fid: String,//图标文件ID
    description: String,//描述
    create_date: {type: Date, default: Date.now},//数据添加时间
    update_date: {type: Date, default: Date.now},//数据更改时间
    info: Schema.Types.Mixed//自定义属性
}, {collection: 'user_oauth', versionKey: false});

schema.index({id: 1}, {unique: true});//ID唯一索引
schema.index({username: 1, email: 1});//联合索引
mongoose.set('useCreateIndex', true);
mongoose.model('user_oauth', schema);