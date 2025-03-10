import { useState, useEffect } from "react"
import { ConversationType } from "../src/zustand/useConversation"
import toast from "react-hot-toast";

const useGetConverstations = () => {
    const [loading, setLoading] = useState(false)
    const [conversations, setConversations] = useState<ConversationType[]>([]);

    useEffect(() => {
        const getConversations = async () => {
          setLoading(true); 
          try{
            const res = await fetch("/api/messages/conversations");
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error)
            }
            setConversations(data);
          } catch (error:any) {
            toast.error(error.message);
          } finally {
            setLoading(false);
          }
        };

        getConversations();
    },[])

    return { loading, conversations };
};
export default useGetConverstations;