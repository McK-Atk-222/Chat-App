import MessageInput from './MessageInput';
import Messages from './Messages';

import { MessageCircle } from "lucide-react";

const MessageContainer = () => {
  const { selectedConversation } = useConversation();

  return (
    <div className='w-full flex flex-col'>
      {!selectedConversation ? (
        <noChatSelected />
      ) : (
        <>
          {/*header**/}
          <div className='bg-slate-500 px-4 py-2 mb-2'>
            <span className='label-text'>To:</span> <span className='text-grey-900 font-bold'>John Doe</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  )
};