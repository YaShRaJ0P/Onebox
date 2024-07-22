import React from "react";
import Logo from "../Assets/Short Logo.png";
import Bar from "../Assets/Bar.svg";
import Email from "../Assets/Email.svg";
import Home from "../Assets/Home.svg";
import List from "../Assets/List.svg";
import Search from "../Assets/Search.svg";
import Message from "../Assets/Message.svg";
import Inbox from "../Assets/Inbox.svg";
export const Navbar = () => {
  return (
    <nav className="bg-[#101113] text-white p-4 w-max h-screen flex flex-col border-r border-[#343A40]">
      <img src={Logo} alt="Logo" className="size-6 mb-12" />
      <ul className="flex flex-col h-full gap-y-6 flex-grow">
        <li>
          <img src={Home} alt="Home" className="size-6" />
        </li>
        <li>
          <img src={Search} alt="Search" className="size-6" />
        </li>
        <li>
          <img src={Email} alt="Email" className="size-6" />
        </li>
        <li>
          <img src={Message} alt="Message" className="size-6" />
        </li>
        <li>
          <img src={List} alt="List" className="size-6" />
        </li>
        <li>
          <img src={Inbox} alt="Inbox" className="size-6" />
        </li>
        <li>
          <img src={Bar} alt="Bar" className="size-6" />
        </li>
      </ul>
      <div className="bg-green-950 rounded-full py-1 px-2">AS</div>
    </nav>
  );
};
