// const addMessage = async () => {
//   if (inputValue.trim() === "") return;

//   try {
//     const res = await axios.post("http://localhost:8000/user/addmessage", {
//       author: message.authId,
//       inputValue,
//     });
//     console.log(res.data);

//     socket.emit("send-chat-message", { inputValue, user: message });
//     setInputValue("");
//   } catch (error) {
//     console.error("Error adding message:", error);
//   }
// };
