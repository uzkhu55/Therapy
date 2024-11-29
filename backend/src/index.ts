import express, { Request, Response } from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import { connectDataBase } from "./database/config";
import { MessageModel } from "./database/models/message.model";
import userRouter from "./routers/users/userRouters";
import postRouter from "./routers/postRouter/postsRouter";
import cloudflareRouter from "./routers/cloudflareRouter";
require("dotenv").config();

connectDataBase();
const app = express();
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // Replace with your frontend URL in production
    methods: ["GET", "POST"],
  },
});

const users: { [key: string]: { name: string; room: string } } = {};
io.on("connection", (socket) => {
  socket.on("join-room", (room: string, name: string) => {
    users[socket.id] = { name, room };

    socket.join(room);

    socket.to(room).emit("user-connected", name);
  });

  socket.on("send-chat-message", async (message: Record<any, any>) => {
    const newMessage = new MessageModel({
      senderId: message.user.authId,
      content: message.inputValue,
      timeStamp: new Date(),
      isRead: false,
    });

    const result = await newMessage.save();

    io.emit("chat-message", {
      isRead: true,
      content: message.inputValue,
      senderId: message.user.authId,
      timeStamp: result.timeStamp,
    });
  });

  // Handle user disconnection
  socket.on("disconnect", () => {
    const userName = users[socket.id]?.name || "Anonymous";
    const room = users[socket.id]?.room;

    if (room) {
      socket.to(room).emit("user-disconnected", userName);
    }

    delete users[socket.id];
  });
});

app.use(cors());
app.use("/", userRouter);
app.use("/", postRouter);
app.use("/", cloudflareRouter);

server.listen(process.env.PORT || 8000, () => {
  console.log("Server running on port 8000");
});
