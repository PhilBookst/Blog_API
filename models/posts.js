const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = Schema({
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  title: { type: String, required: true },
  body: { type: String, required: true },
  status: { type: String, required: true },
  comments: [ { type: Schema.Types.ObjectId, ref: 'Comments' } ],
  createdAt: { type: Date, default: Date.now() },
});

const Posts = mongoose.model('Posts', postSchema);

module.exports = Posts;