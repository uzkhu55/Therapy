import { Router } from "express";
import { signUpController } from "../../controllers/usersController/signUpController";
import { addMessage } from "../../controllers/messageController/addMessage";
import { getMessageController } from "../../controllers/messageController/getMessage";
import { getUserdetailController } from "../../controllers/usersController/getUserdetailController";
import { getPresignedUrl } from "../../controllers/cloudflareController";
import { getClientsController } from "../../controllers/usersController/getClients";
import { getSpecialistsController } from "../../controllers/usersController/getSpecialists";
import { createFolder } from "../../controllers/messageController/room";

const userRouter = Router();

userRouter.route("/user/signup").post(signUpController);
userRouter.route("/user/userdetail").get(getUserdetailController);
userRouter.route("/user/addmessage").post(addMessage);

userRouter.route("/user/getmessage").get(getMessageController);
userRouter.route("/user/getClients").get(getClientsController);
userRouter.route("/user/getSpecialists").get(getSpecialistsController);
userRouter.route("/folder").post(createFolder);

export default userRouter;
