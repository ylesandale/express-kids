import Post from "./PostSchema.js";
import PostFileService from "./PostFileService.js";

class PostService {
  async create(post, picture) {
    const fileName = PostFileService.saveFile(picture);
    const createdPost = await Post.create({ ...post, picture: fileName });
    return createdPost;
  }

  async getAll() {
    return Post.find();
  }

  async getOne(id) {
    if (!id) {
      throw new Error("Id не указан");
    }
    const post = await Post.findById(id);
    return post;
  }

  async update(post) {
    if (!post._id) {
      throw new Error("Id не указан");
    }
    const updatedPost = await Post.findByIdAndUpdate(post._id, post, {
      new: true,
    });
    return updatedPost;
  }

  async delete(id) {
    if (!id) {
      throw new Error("Id не указан");
    }
    const deletedPost = await Post.findByIdAndDelete(id);
    return deletedPost;
  }
}

export default new PostService();
