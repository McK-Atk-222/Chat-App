import { useEffect, useState } from "react";
import useConversation from "../src/zustand/useConversation";
import toast from "react-hot-toast";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {

      setLoading(true);
      setMessages([]);
      try {
        const res = await fetch(`/api/messages/${selectConversation.id}`);
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "An error occurred");
        setMessages(data);
      } catch (error: any) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    },

    getMessages ();
  }, [selectConversation, setMessages]);
  return { messages, loading};
}
export default useGetMessages;