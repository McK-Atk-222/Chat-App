import useChatScroll from "../../hooks/useChatScroll";
import useListenMessages from "../../hooks/useListenMessages";


const Messages = () => {
const { loading, messages } = useGetMessages();
useListenMessages();
const ref = useChatScroll(messages) as React.MutableRefObject<HTMLDivElement>;
return (
    <div ref={ref}>
    

    </div>
)
}