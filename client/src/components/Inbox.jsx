import React from "react";

const Inbox = () => {
  return (
    <nav className="text-white w-80 p-4 h-screen border-r-[#33383F] border-r-2">
      <div className="flex flex-row justify-between">
        <div className="text-[#4285F4] font-bold">All Inbox(s)</div>
        <div className=" text-center bg-[#25262B] rounded-sm py-1 px-2">↻</div>
      </div>
      <div className="mb-4">
        <p className="text-sm font-bold">
          25/25{" "}
          <span className="text-gray-500 font-normal">Inboxes selected</span>
        </p>
      </div>
      <div className="mb-4">
        <input
          type="search"
          name="Search"
          id="Search"
          placeholder="Search"
          className="bg-[#23272C] rounded-sm px-2 py-1 text-sm"
        />
      </div>
      <div className="text-sm flex flex-row justify-between items-center font-semibold pb-3 border-b-2 border-[#33383F]">
        <div>
          <span className="text-[#5C7CFA] bg-[#222426] px-2 py-1 rounded-full">
            26
          </span>
          <span className="text-white"> New Replies</span>
        </div>
        <select name="Filter" id="Filter" className="bg-black">
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
        </select>
      </div>
    </nav>
  );
};

export default Inbox;
