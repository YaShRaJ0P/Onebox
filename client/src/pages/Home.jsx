import React, { useState } from "react";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
// import { Main } from "../components/Main";
import Inbox from "../components/Inbox";
import { Message } from "../components/Message";
import LeadDetails from "../components/LeadDetails";
export const Home = () => {
  const [inboxModal, setInboxModal] = useState(true);
  return (
    <div className="relative">
      <Header />
      <div className="flex bg-black">
        <Navbar setInboxModal={setInboxModal} inboxModal={inboxModal} />
        {/* <Main /> */}
        <Inbox inboxModal={inboxModal} />
        <Message inboxModal={inboxModal} />
        <LeadDetails />
      </div>
    </div>
  );
};
