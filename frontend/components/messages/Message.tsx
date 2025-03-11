import {useAuthContext} from "../../context/AuthContext";
import useConversation, { MessageType } from "../../src/zustand/useConversation";

const Message = ({message}: { message: MessageType }) => {
  const {authUser} = useAuthContext();
  const { SelectedConversation } = useConversation();
  const fromMe = message?.senderId === authUser?.id;
  const img = fromMe ? authUser?.profilePic : selectedConversation?.profilePic;
  const chatClass = fromMe ? "chat-end" : "chat-start";

};
  