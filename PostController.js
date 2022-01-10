const Post = require('./Post.js');

class PostController {
   async create(req, res) {
      try {
         const { author, title, content, picture } = req.body;
         const post = await Post.create({ author, title, content, picture });
         res.status(201).json(post);
      } catch (error) {
         res.status(500).json(error);
      }
   }
   async getAll(req, res) {}
   async getOne(req, res) {}
   async update(req, res) {}
   async delete(req, res) {}
}

module.exports = new PostController();
