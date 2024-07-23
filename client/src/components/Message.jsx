import React, { useState } from "react";
import Reply from "../Assets/Reply.svg";
import EmailReply from "./EmailReply";

export const Message = ({ inboxModal }) => {
  const [replyModal, setReplyModal] = useState(false);

  const handleReplyClick = () => {
    setReplyModal(true);
  };

  return (
    <div
      className={`w-full text-white relative max-md:text-sm border-r-2 border-[#343A40] ${
        inboxModal && "max-lg:opacity-65"
      }`}
    >
      {/* Header Section */}
      <div className="flex flex-row justify-between items-center border-b border-[#33383F] p-4 max-md:flex-col max-md:gap-2">
        <div className="flex flex-col">
          <div className="text-white font-bold">Orlando</div>
          <div className="text-gray-500 text-sm">orlando@gmail.com</div>
        </div>
        <div className="flex flex-row gap-4">
          <select
            name="Meeting"
            id="Meeting"
            className="bg-[#1F1F1F] rounded-sm border border-[#343A40] px-2 py-1"
            aria-label="Meeting Status"
          >
            <option value="Completed">Meeting Completed</option>
            <option value="Interested">Interested</option>
            <option value="Booked">Meeting Booked</option>
            <option value="Closed">Closed</option>
          </select>
          <select
            name="Move"
            id="Move"
            className="bg-[#1F1F1F] rounded-sm border border-[#343A40] px-2 py-1"
            aria-label="Move Status"
          >
            <option value="Completed">Move</option>
            <option value="Interested">Interested</option>
            <option value="Booked">Meeting Booked</option>
            <option value="Closed">Closed</option>
          </select>
          <button
            className="bg-[#1F1F1F] rounded-sm border border-[#343A40] px-2 py-1"
            aria-label="More Options"
          >
            •••
          </button>
        </div>
      </div>

      {/* Date Divider */}
      <div className="px-3">
        <div className="relative flex justify-center m-2">
          <span className="px-2 py-1 bg-[#171819] z-20">Today</span>
          <div className="border border-[#F8FAFC33] absolute w-full top-1/2 -translate-y-1/2"></div>
        </div>
      </div>

      {/* Message Content */}
      <div className="bg-[#141517] rounded-md border border-[#343A40] mx-4 p-3 flex flex-col gap-2">
        <div className="flex justify-between">
          <span className="font-semibold">New Product Launch</span>
          <span className="text-[#7F7F7F]">20 June 2022 : 9 : 16 AM</span>
        </div>
        <div className="text-[#AEAEAE]">
          from: jeanne@gmail.com cc: leennon.j@gmail.com
        </div>
        <div className="text-[#AEAEAE]">to: leennon.j@gmail.com</div>
        <div className="pt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          nulla ullam suscipit tenetur excepturi illum nemo omnis nesciunt quam
          sapiente! Veniam alias nam cupiditate pariatur deserunt laboriosam
          dolor architecto. Odio quis nesciunt necessitatibus quos.
        </div>
      </div>

      {/* Reply Button */}
      <button
        onClick={handleReplyClick}
        className="absolute top-[90%] left-7 w-max px-4 rounded-sm py-1 flex flex-row justify-center items-center gap-3"
        style={{
          background:
            "linear-gradient(91.73deg, #4B63DD -2.99%, rgba(5, 36, 191, 0.99) 95.8%)",
        }}
        aria-label="Reply"
      >
        <img src={Reply} alt="Reply" /> <span>Reply</span>
      </button>

      {/* Reply Modal */}
      {replyModal && <EmailReply setReplyModal={setReplyModal} />}
    </div>
  );
};

export default Message;
