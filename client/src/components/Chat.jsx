import React, { useState } from "react";
import Form from "./Form";
import Head from "./Head";
import Messages from "./Messages";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="bg-secondaryColor text-white p-2 rounded-3xl w-96 min-h-[200px]">
      <div className="flex items-center py-4 mb-auto border-b border-gray-400">
        <Head></Head>
      </div>

      <Messages
        messages={messages}
        setMessages={setMessages}
        isLoading={isLoading}
      ></Messages>

      <div className="pt-5 border-t border-gray-400">
        <Form
          setMessages={setMessages}
          setIsLoading={setIsLoading}
          isLoading={isLoading}
        ></Form>
      </div>
    </div>
  );
};

export default Chat;
