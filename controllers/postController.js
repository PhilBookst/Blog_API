var express = require('express');
var router = express.Router();
const User = require('../models/user');
const Post = require('../models/posts');
const Posts = require('../models/posts');

exports.getAll = async (req, res, next) => {

  try {

    const { username } = req.params;
    await User.findOne({ username }).populate('posts').exec((err, user) => {
      return res.json(user.posts);
    });
    
  } catch (error) {
    next(error);
  }

}

exports.getOne = async (req, res, next) => {

  try {
    
    const { username, postid } = req.params;
    
    const post = await Posts.findOne({ _id: postid }, (err, post) => post);
    return res.json(post);

  } catch (error) {
    
  }

}

exports.addOne = async (req, res, next) => {
  
  try {

    const { title, body } = req.body;
    const { username } = req.params;
    
    await User.findOne({ username }, (err, user) => {
      if(err) console.log(err);

      const post = new Post({
        author: user._id,
        title,
        body,
        status: 'unpublished',
        comments: [],
      })
    
      post.save((err) => {});
    
      User.updateOne({username}, { $push: { posts: post } }, (err) => {});
    
      return res.json('Post saved');
    })
    
  } catch (error) {
    next(error);
  }
  
}

exports.updateOne = async (req, res, next) => {

  try {
    const { postid } = req.params;
    const { title, body } = req.body;

    await Post.updateOne({ _id: postid }, { title, body }, (err) => {});
    return res.json({ message: 'Success'});

  } catch (error) {
    next(error);
  }

}

exports.deleteOne = async (req, res, next) => {

  try {
    const { postid } = req.params;

    await Posts.deleteOne({ _id: postid }, (err) => {console.log(err)});
    return res.json({ message: 'Deleted' });

  } catch (error) {
    next(error);
  }

}

