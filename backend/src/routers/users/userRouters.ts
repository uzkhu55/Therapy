import { Router } from "express";
import { signUpController } from "../../controllers/usersController/signUpController";
import { addMessage } from "../../controllers/messageController/addMessage";
import { getMessageController } from "../../controllers/messageController/getMessage";
import { getUserdetailController } from "../../controllers/usersController/getUserdetailController";
import { getPresignedUrl } from "../../controllers/cloudflareController";

const userRouter = Router();

userRouter.route("/user/signup").post(signUpController);
userRouter.route("/user/userdetail").get(getUserdetailController);
userRouter.route("/user/addmessage").post(addMessage);
userRouter.route("/user/getmessage").get(getMessageController);

export default userRouter;
