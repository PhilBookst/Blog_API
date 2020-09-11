const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = Schema({
  author: { type: Schema.Types.ObjectId, ref: 'Users' },
  post: { type: Schema.Types.ObjectId, ref: 'Posts' },
  body: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
});

const Comments = mongoose.model('Comments', commentSchema);

module.exports = Comments;