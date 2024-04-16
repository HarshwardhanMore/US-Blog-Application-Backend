const blogRouter = require("express").Router();
const blogController = require("../controllers/blogController");
const authenticate = require("../middlewares/auth");

blogRouter.post("/create", authenticate, blogController.create);
blogRouter.post("/delete", authenticate, blogController.delete);

blogRouter.post("/like", authenticate, blogController.likeOnBlog);
blogRouter.post("/comment", authenticate, blogController.commentOnBlog);

blogRouter.get("/getAllBlogs", authenticate, blogController.getAllBlogs);
blogRouter.post(
  "/getAllBlogsByUserId",
  authenticate,
  blogController.getAllBlogsByUserId
);
blogRouter.post(
  "/getBlogDetailsById",
  authenticate,
  blogController.getBlogDetailsById
);
blogRouter.post(
  "/getAllLikesByBlogId",
  authenticate,
  blogController.getAllLikesByBlogId
);
blogRouter.post(
  "/getAllCommentsByBlogId",
  authenticate,
  blogController.getAllCommentsByBlogId
);

module.exports = blogRouter;
