import Chat from "./Chat";
import Conversation from "./Conversation";
import Nav from "./Nav";
import Form from "./Form";

const ChatWrapper = () => {
  return (
    <div className="relative">
      <Conversation />
      <Nav />
      <Chat />
      <Form />
    </div>
  );
};

export default ChatWrapper;
