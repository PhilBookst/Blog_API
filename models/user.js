const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  status: { type: Number, required: true, default: 1 },
  posts: [ { type: Schema.Types.ObjectId, ref: 'Posts', refPath: 'userPosts' } ],
  comments: [ { type: Schema.Types.ObjectId, ref: 'Pomments', refPath: 'userComments' } ],
});

const Users = mongoose.model('Users', userSchema);

module.exports = Users;
