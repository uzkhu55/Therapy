import { Router } from "express";
import { signUpController } from "../../controllers/usersController/signUpController";
import { addMessage } from "../../controllers/messageController/addMessage";
import { getMessageController } from "../../controllers/messageController/getMessage";
import { getUserdetailController } from "../../controllers/usersController/getUserdetailController";
import { getPresignedUrl } from "../../controllers/cloudflareController";
import { getClientsController } from "../../controllers/usersController/getClients";
import { getSpecialistsController } from "../../controllers/usersController/getSpecialists";
import { createFolder } from "../../controllers/messageController/room";
import { getUsersMessages } from "../../controllers/messageController/getUser";
import { getMyConversations } from "../../controllers/messageController/getMyConversations";

const userRouter = Router();

userRouter.route("/user/signup").post(signUpController);
userRouter.route("/user/userdetail").get(getUserdetailController);

userRouter.route("/user/myConvorsations/:myId").get(getMyConversations);

userRouter.route("/user/addmessage").post(addMessage);
userRouter.route("/getUsersConversation").get(getUsersMessages);

userRouter.route("/user/getmessage/:conversationId").get(getMessageController);
userRouter.route("/user/getClients").get(getClientsController);
userRouter.route("/user/getSpecialists").get(getSpecialistsController);
userRouter.route("/folder").post(createFolder);

export default userRouter;
