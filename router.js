const Router = require('express');
const postController = require('./PostController.js')

const router = new Router();

router.post('/posts', postController.create);
router.get('/posts', postController.getAll);
router.get('/posts/:id', postController.getOne);
router.put('/posts', postController.update);
router.delete('/posts/:id', postController.delete);

module.exports = router;