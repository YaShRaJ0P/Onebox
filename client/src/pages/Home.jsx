import React from "react";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
// import { Main } from "../components/Main";
import Inbox from "../components/Inbox";
import { Message } from "../components/Message";
export const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex bg-black">
        <Navbar />
        {/* <Main /> */}
        <Inbox />
        <Message />
      </div>
    </div>
  );
};
