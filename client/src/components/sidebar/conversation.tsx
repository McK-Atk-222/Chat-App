import { useSocketContext } from "../../context/socketContext";
import useConversation, { ConversationType } from "../../zustand/useConversation";



const Conversation = ({ conversation }: { conversation: ConversationType}) => {
    const { setSelectedConversation, selectedConversation } = useConversation(); 
    const isSelected = selectedConversation?.id === conversation.id
    const {onlineUsers} = useSocketContext();
    const isOnline = onlineUsers.includes(conversation.id);
    return (
        <>
        <div
				className={`flex gap-2 items-center hover:bg-violet-500 rounded p-2
				 py-1 cursor-pointer ${isSelected ? "bg-violet-500" : ""}`}
				onClick={() => setSelectedConversation(conversation)}
			>
				<div className="relative">
    				<img className="w-10 h-10 rounded-full" src={conversation.profilePic} alt=""/>
						{isOnline && (
						<span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
						)}
				</div>

				<div className='flex flex-col flex-1'>
					<div className='flex gap-3 justify-between'>
						<p className='font-bold text-gray-200 text-sm md:text-md'>{conversation.fullName}</p>
					</div>
				</div>
			</div>

			<div className='divider my-0 py-0 h-1' />
        </>
    )

}

export default Conversation;