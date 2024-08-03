"use client";
import Chat from "./Chat";
import Conversation from "./Conversation";
import Nav from "./Nav";
import Form from "./Form";
import { useState } from "react";

const ChatWrapper = () => {
  const [sidebar, setSidebar] = useState<boolean>(false);
  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <div className="relative">
      <Conversation sidebar={sidebar} toggleSidebar={toggleSidebar} />
      <Nav toggleSidebar={toggleSidebar} />
      <Chat />
      <Form />
    </div>
  );
};

export default ChatWrapper;
