const Router = require('express');
const postController = require('./PostController.js')

const router = new Router();

router.post('/posts', postController.create);
router.get('/posts');
router.get('/posts/:id');
router.put('/posts');
router.delete('/posts/:id');

module.exports = router;