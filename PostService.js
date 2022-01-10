const Post = require('./Post.js');
const fileService = require('./FileService.js')

class PostService {
   async create(post, picture) {
       const fileName = fileService.saveFile(picture);
       const createdPost = await Post.create({...post, picture: fileName});
      return createdPost;
   }
   async getAll() {
      const posts = await Post.find();
      return posts;
   }
   async getOne(id) {
      if (!id) {
         throw new Error('не указан ID');
      }
      const post = await Post.findById(id);
      return post;
   }
   async update(post) {
      if (!post._id) {
         throw new Error('Id не указан');
      }
      const updatedPost = await Post.findByIdAndUpdate(post._id, post, { new: true });
      return updatedPost;
   }
   async delete(id) {
         if (!id) {
            throw new Error('Id не указан');
         }
         const post = await Post.findByIdAndDelete(id);
         return post;
   }
}

module.exports = new PostService();
