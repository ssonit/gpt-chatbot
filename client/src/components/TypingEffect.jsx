import React, { useEffect, useState } from "react";

const TypingEffect = ({ message }) => {
  const [text, setText] = useState("");
  // console.log(text, message.charAt(2));

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText((prevText) => {
        console.log(message.charAt(i), i);
        return prevText + message.charAt(i);
      });
      // console.log(message.charAt(i), "index");
      i++;
      if (i >= message.length) clearInterval(timer);
    }, 100);

    return () => clearInterval(timer);
  }, [message]);

  return <p>{text}</p>;
};

export default TypingEffect;
