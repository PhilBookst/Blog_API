var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
const postController = require('../controllers/postController');
const { body } = require('express-validator');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


// GET ALL
router.get('/:username/posts/', postController.getAll);

// GET ONE
router.get('/:username/posts/:postid', postController.getOne);

// ADD ONE
router.post('/:username/posts/', postController.addOne);

// UPDATE ONE
router.put('/:username/posts/:postid', postController.updateOne);

// DELTE ONE
router.delete('/:username/posts/:postid', postController.deleteOne);

// router.get('/signup', function(req, res, next) {
//   res.render('signup');
// });

// router.get('/login', (req, res, next) => {
//   res.render('login');
// });

// router.post('/signup', [
//   body('username').isLength({ min: 5 }).trim().escape(),
//   body('password').isLength({ min: 5 }).trim().escape(),
// ], userController.signup);

// router.post('/login', passport.authenticate('local', {
//   successRedirect: '/',
//   failureRedirect: '/login',
// }));

module.exports = router;
