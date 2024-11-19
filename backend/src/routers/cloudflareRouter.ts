import { Router } from "express";
import { getPresignedUrl } from "../controllers/cloudflareController";

const cloudflareRouter = Router();

cloudflareRouter.route("/cloudflare").get(getPresignedUrl);

export default cloudflareRouter;
