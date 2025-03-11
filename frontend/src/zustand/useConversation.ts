import { Message } from 'postcss';
import {create} from 'zustand';

export type ConversationType = {
  id: string;
  fullName: string;
  profilePic: string;
}

export type MessageType = {
  id: string;
  body: string;
  senderId: string;
  createdAt: string;
}

interface ConversationState {
  selectConversation: ConversationType | null;
  messages: MessageType[];
  setSelectedConversation: (conversation: ConversationType|null) => void;
  setMessages: (messages: MessageType[]) => void;
}

const useConversation = create<ConversationState>((set) => ({
selectConversation: null,
setSelectedConversation: (conversation) => set({selectConversation: conversation}),
messages: [],
setMessages: (messages) => set({messages: messages}),
}));

export default useConversation;