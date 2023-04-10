import axios from "axios";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ setMessages, setIsLoading, isLoading }) => {
  const [message, setMessage] = useState("");

  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }
  const handleCreateMessage = async (e) => {
    e.preventDefault();

    if (!message) return;

    setMessages((prev) => [
      ...prev,
      {
        id: uuidv4(),
        type: "user",
        message,
        createdAt: new Date(),
      },
    ]);

    setMessage("");
    setIsLoading(true);

    const response = await axios.post(
      "https://free.churchless.tech/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: message,
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(response);

    // const response = { data: { message: "hello" + message } };
    // await timeout(1000);

    setMessages((prev) => [
      ...prev,
      {
        id: uuidv4(),
        message: response.data.choices[0].message.content,
        type: "bot",
        createdAt: new Date(),
      },
    ]);
    setIsLoading(false);
  };
  return (
    <form
      onSubmit={handleCreateMessage}
      className="flex relative items-center bg-[#2c3139]"
    >
      <input
        type="text"
        placeholder="Type a message..."
        className="flex-1 py-2 pl-3 pr-12 rounded outline-none bg-inherit"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        className="absolute p-1 mr-1 -translate-y-1/2 bg-white rounded-lg outline-none top-1/2 right-1"
        type="submit"
        disabled={isLoading}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-secondaryColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
          />
        </svg>
      </button>
    </form>
  );
};

export default Form;
