import { Router } from "express";
import { createPostController } from "../../controllers/postController/createPost";
import { deletePostController } from "../../controllers/postController/deletePost";
import { updatePostController } from "../../controllers/postController/updatePost";
import { fetchPostController } from "../../controllers/postController/fetchPost";
import { fetchPostsController } from "../../controllers/postController/fetchPosts";
import { createCommentController } from "../../controllers/commentController/createComment";
import { likeCountController } from "../../controllers/postController/likeCount";
import { fetchCommentsController } from "../../controllers/commentController/fetchComments";
import { deleteCommentController } from "../../controllers/commentController/deleteComment";
import { fetchCommenttController } from "../../controllers/commentController/fetchComment";
import { createReplyCommentController } from "../../controllers/commentController/createReplyComment";
import { deleteReplyCommentController } from "../../controllers/commentController/deleteReplyComment";
import { fetchReplyCommentsController } from "../../controllers/commentController/fetchReplyComments";

const postRouter = Router();

postRouter.route("/posts/createPost").post(createPostController);
postRouter.route("/posts/deletePost/:id").delete(deletePostController);
postRouter.route("/posts/updatePost/:id").put(updatePostController);
postRouter.route("/posts/fetchPost/:id").get(fetchPostController);
postRouter.route("/posts/fetchPosts").get(fetchPostsController);

postRouter.route("/posts/likeCount/:id").put(likeCountController);

postRouter.route("/posts/fetchComments/:postId").get(fetchCommentsController);
postRouter.route("/posts/fetchComment/:commentId").get(fetchCommenttController);
postRouter.route("/posts/createComment").post(createCommentController);
postRouter.route("/posts/deleteComment/:id").delete(deleteCommentController);

postRouter
  .route("/posts/createReplyComment")
  .post(createReplyCommentController);
postRouter
  .route("/posts/deleteReplyComment/:id")
  .delete(deleteReplyCommentController);
postRouter
  .route("/posts/fetchReplyComments/:commentId")
  .get(fetchReplyCommentsController);

export default postRouter;
