import moment from "moment/moment";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const ChatCard = ({ type, message, createdAt, id, handleDelete }) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      className={`${
        type === "bot"
          ? "bg-black rounded-br-2xl"
          : "bg-[#7a99fe] rounded-bl-2xl ml-auto"
      } rounded-t-2xl p-2 max-w-[70%] w-full relative`}
    >
      {isLoading ? (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(message)
              .callFunction(() => {
                console.log("String typed out!");
              })
              .pauseFor(30)
              .start()
              .callFunction(() => {
                setIsLoading(false);
              });
          }}
        />
      ) : (
        <p>{message}</p>
      )}
      <div className={`text-xs mt-2 ${type === "bot" && "text-[#949494]"}`}>
        {moment(createdAt).format("LT")}
      </div>
      <button
        onClick={() => handleDelete(id)}
        className={`absolute -translate-y-1/2 top-1/2 ${
          type === "bot" ? "-right-8" : "-left-8"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      </button>
    </motion.div>
  );
};

export default ChatCard;
