import React from "react";
import NoMessage from "../Assets/No Message illustration.svg";
export const Main = () => {
  return (
    <div className="bg-black flex-grow flex justify-center items-center flex-col gap-10 text-white">
      <img src={NoMessage} alt="No messages" />
      <div className="text-center">
        <h3 className=" font-bold text-2xl">
          It's the beginning of a legendary sales pipeline
        </h3>
        <h5 className="text-[#9E9E9E] text-lg pt-3">
          When you have inbound E-mails you'll see them here
        </h5>
      </div>
    </div>
  );
};
