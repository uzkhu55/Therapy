import { Router } from "express";
import { createPostController } from "../../controllers/postController/createPost";
import { deletePostController } from "../../controllers/postController/deletePost";
import { updatePostController } from "../../controllers/postController/updatePost";
import { fetchPostController } from "../../controllers/postController/fetchPost";
import { fetchPostsController } from "../../controllers/postController/fetchPosts";

const postRouter = Router();

postRouter.route("/posts/createPost").post(createPostController);
postRouter.route("/posts/deletePost/:id").delete(deletePostController);
postRouter.route("/posts/updatePost/:id").put(updatePostController);
postRouter.route("/posts/fetchPost/:id").get(fetchPostController);
postRouter.route("/posts/fetchPosts").get(fetchPostsController);

export default postRouter;
