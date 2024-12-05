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
import { getUserDetailById } from "../../controllers/usersController/getUserDetailById";
import { createUserDetail } from "../../controllers/usersController/createUserDetail";
import { setAdmin } from "../../controllers/usersController/setAdmin";
import { neguser } from "../../controllers/usersController/neguser";
import { upload, uploadFile } from "../../controllers/messageController/file";
import { createTheraDetail } from "../../controllers/usersController/createTheraDetail";
import { getTheraDetailById } from "../../controllers/usersController/getTheraDetailById";
import { isThrepapist } from "../../controllers/usersController/isTherapist";
import {
  createAppointment,
  getAppointmentById,
} from "../../controllers/usersController/timeappointment";
import { sendMailer } from "../../controllers/emailsender";
import { fetchAppointmentTime } from "../../controllers/usersController/fetchAppointmentTime";

const userRouter = Router();

userRouter.route("/user/mail").post(sendMailer);

userRouter.route("/user/signup").post(signUpController);
userRouter.route("/user/setadmin").post(setAdmin);
userRouter.route("/upload").post(upload.single("file"), uploadFile); // .single("file") for a single file upload

userRouter.route("/user/userdetail").get(getUserdetailController);
userRouter.route("/user/neguser/:authId").get(neguser);

userRouter.route("/user/addmessage").post(addMessage);
userRouter.route("/user/appointment").post(createAppointment);
userRouter.route("/user/appointment/:authId").get(getAppointmentById);

userRouter.route("/user/myConvorsations/:myId").get(getMyConversations);

userRouter.route("/getUsersConversation").get(getUsersMessages);

userRouter.route("/user/getmessage/:conversationId").get(getMessageController);
userRouter.route("/user/getClients").get(getClientsController);
userRouter.route("/user/getSpecialists").get(getSpecialistsController);
userRouter.route("/folder").post(createFolder);

userRouter.route("/user/theradetail/:authId").get(getTheraDetailById);
userRouter.route("/user/detail/:authId").get(getUserDetailById);
userRouter.route("/user/detail").post(createUserDetail);
userRouter.route("/user/theradetail").post(createTheraDetail);
userRouter.route("/user/isthera").post(isThrepapist);

export default userRouter;
