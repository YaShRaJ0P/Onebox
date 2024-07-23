import React, { useState } from "react";

const EmailReply = ({ setReplyModal }) => {
  const [from, setfrom] = useState("");
  const [to, setto] = useState("");
  const [subject, setsubject] = useState("");
  const [message, setmessage] = useState("");
  return (
    <div className="bg-[#141517] text-white rounded-lg z-50 absolute bottom-5 w-[96.5%] max-md:w-[90%] left-6">
      <div className="flex flex-row justify-between pl-2 pr-3 bg-[#23272C] py-1 items-center rounded-t-lg">
        <span className="text-[#BAB9BD]">Reply</span>
        <button onClick={() => setReplyModal(false)} className="text-2xl">
          ×
        </button>
      </div>
      <div className="flex flex-row gap-2 pl-2 items-center pb-2 border-b border-b-[#34383D]">
        <label className="block text-sm text-[#BAB9BD]">To:</label>
        <input
          type="email"
          name="to"
          value={to}
          onChange={(e) => setto(e.target.value)}
          className="w-full p-2 bg-inherit focus:outline-none"
        />
      </div>
      <div className="flex flex-row gap-2 pl-2 items-center pb-2 border-b border-b-[#34383D]">
        <label className="block text-sm text-[#BAB9BD]">From:</label>
        <input
          type="email"
          name="from"
          value={from}
          onChange={(e) => setfrom(e.target.value)}
          className="w-full p-2 bg-inherit focus:outline-none"
        />
      </div>
      <div className="flex flex-row gap-2 pl-2 items-center pb-2 border-b border-b-[#34383D]">
        <label className="block text-sm text-[#BAB9BD]">Subject:</label>
        <input
          type="text"
          name="subject"
          value={subject}
          onChange={(e) => setsubject(e.target.value)}
          className="w-full p-2 bg-inherit focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <textarea
          name="body"
          value={message}
          placeholder="Hi Jeanne"
          onChange={(e) => setmessage(e.target.value)}
          className="bg-inherit w-full p-2 rounded-sm h-32 resize-none placeholder:text-[#BAB9BD] focus:outline-none"
        ></textarea>
      </div>
      <div className="flex justify-between items-center border-t border-[#33383F] p-2">
        <button
          className="px-4 py-1 rounded-sm text-white font-bold"
          style={{
            background:
              "linear-gradient(91.73deg, #4B63DD -2.99%, rgba(5, 36, 191, 0.99) 95.8%)",
          }}
          onClick={() => setReplyModal(false)}
        >
          Send ▾
        </button>
        <div className="flex space-x-2">
          <button className="text-white">Variables</button>
          <button className="text-white">Preview Email</button>
          <button className="text-white">A</button>
          <button className="text-white">
            <i className="fas fa-link"></i>
          </button>
          <button className="text-white">
            <i className="fas fa-image"></i>
          </button>
          <button className="text-white">
            <i className="fas fa-smile"></i>
          </button>
          <button className="text-white">
            <i className="fas fa-user"></i>
          </button>
          <button className="text-white">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="text-white">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailReply;
