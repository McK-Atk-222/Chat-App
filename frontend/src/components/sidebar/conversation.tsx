import { useSocketContext } from "../../context/socketContext";
import { ConversationType } from "../../zustand/useConversation"
import useConversation from "../../zustand/useConversation";



const Conversation = ({ conversation }: { conversation: ConversationType}) => {
    const { setSelectedConversation, selectedConversation } = useConversation(); 
    const isSelected = selectedConversation?.id === conversation.id
    const {onlineUsers} = useSocketContext();
    const isOnline = onlineUsers.includes(conversation.id);
    return (
        <>
        <div
            className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 
                py-1 cursor-pointer ${isSelected ? 'bg-sky-500' : ''}`}
            onClick={() => setSelectedConversation(conversation)}
        >
            <div className={`avatar ${isOnline ? "onoine" :"" } `}>

            </div>

        </div>
        </>
    )

}