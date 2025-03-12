import Conversation from "./conversation.tsx";
import useGetConversations from "../../hooks/useGetConversations";

const Conversations = () => {

    const {conversations,loading}= useGetConversations();

    return (
        <div className='py-2 flex flex-col overflow-auto'>
            {conversations.map((conversation) => (
                <Conversation key={conversation.id} conversation={conversation} />
            ))}
            {loading ? (
                <span className="loading loading-spinner mx-auto"/>
            ):null}
        </div>
    );
};
export default Conversations;