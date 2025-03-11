import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

Const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setConversations } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault ();
    if (!search) return;
    if (search.length <3) {
      return toast.error("Search query must be at least 3 characters long");
    }

    const conversation = conversations.find((c: ConversationType) =>
      c.fullName,toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else toast.error("No such user found");
  }

return (
  onChange={(e) => setSearch(e.target.value)}
)

};