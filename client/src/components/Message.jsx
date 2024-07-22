import React from "react";

export const Message = () => {
  return (
    <div className="w-full text-white">
      <div className="flex flex-row justify-between items-center h-24 border-b-[#33383F] border-b w-full p-4">
        <div className="flex flex-col">
          <div className="text-white font-bold">Orlando</div>
          <div className="text-gray-500 text-sm">orlando@gmail.com</div>
        </div>
        <div className="flex flex-row gap-4">
          <select
            name="Meeting"
            id="Meeting"
            className="bg-[#1F1F1F] rounded-sm border border-[#343A40] px-2 py-1"
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
          >
            <option value="Completed">Move</option>
            <option value="Interested">Interested</option>
            <option value="Booked">Meeting Booked</option>
            <option value="Closed">Closed</option>
          </select>
          <button className="bg-[#1F1F1F] rounded-sm border border-[#343A40] px-2 py-1">
            •••
          </button>
        </div>
      </div>
      <div className="px-3">
        <div className="relative flex justify-center m-2">
          <span className="px-2 py-1 bg-[#171819] w-min z-20">Today</span>
          <div className="border-[#F8FAFC33] border absolute w-full top-1/2 -translate-y-1/2"></div>
        </div>
      </div>
    </div>
  );
};
