import { AnimatePresence } from "framer-motion";
import React, { useEffect, useRef } from "react";
import ChatCard from "./ChatCard";
import Loading from "./Loading";

const Messages = ({ messages, isLoading, setMessages }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleDelete = (id) => {
    setMessages(messages.filter((item) => item.id !== id));
  };

  return (
    <div className="flex flex-col gap-3 py-3 overflow-y-scroll scrollbar-hide h-96">
      <AnimatePresence>
        {messages.map((item) => {
          return (
            <ChatCard
              key={item.id}
              handleDelete={handleDelete}
              {...item}
            ></ChatCard>
          );
        })}
      </AnimatePresence>

      {messages.length === 0 && (
        <div className="flex items-center justify-center h-full">
          Ask the bot anything ...
        </div>
      )}
      {isLoading && (
        <div className="flex justify-center">
          <Loading></Loading>
        </div>
      )}
      <div ref={messagesEndRef}></div>
    </div>
  );
};

export default Messages;
