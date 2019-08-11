const express = require('express');
const router = express.Router();

const PostController = require('../controllers/post.controller');

// get all posts
router.route('/posts').get(PostController.getPosts);

// get one post
router.route('/posts/:id').get(PostController.getPost);

module.exports = router;