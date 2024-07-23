import React, { useState, useEffect } from "react";

const Inbox = ({ inboxModal }) => {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const response = await fetch(
          "https://hiring.reachinbox.xyz/api/v1/onebox/list",
          {
            credentials: "include",
          }
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setEmails(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEmails();
  }, []);

  return (
    inboxModal && (
      <nav
        className={`text-white w-80 p-4 h-screen border-r-[#33383F] border-r-2 bg-black ${
          inboxModal && "max-lg:absolute max-lg:z-50 max-lg:left-14"
        }`}
      >
        <div className="flex justify-between mb-4">
          <div className="text-[#4285F4] font-bold">All Inbox(s)</div>
          <button className="bg-[#25262B] rounded-sm py-1 px-2">↻</button>
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
            className="bg-[#23272C] rounded-sm px-2 py-1 text-sm w-full"
          />
        </div>
        <div className="text-sm flex justify-between items-center font-semibold pb-3 border-b-2 border-[#33383F] mb-4">
          <div>
            <span className="text-[#5C7CFA] bg-[#222426] px-2 py-1 rounded-full">
              26
            </span>
            <span className="ml-2 text-white">New Replies</span>
          </div>
          <select
            name="Filter"
            id="Filter"
            className="bg-black rounded-sm px-2"
          >
            <option value="Newest">Newest</option>
            <option value="Oldest">Oldest</option>
          </select>
        </div>
        <div className="overflow-auto h-[calc(100vh-200px)]">
          {loading && <p className="text-center">Loading...</p>}
          {error && <p className="text-center text-red-500">{error}</p>}
          {!loading && !error && emails.length === 0 && (
            <p className="text-center">No emails found</p>
          )}
          {!loading &&
            !error &&
            emails.length > 0 &&
            emails.map((email) => (
              <div
                key={email.id}
                className="mb-4 border-b-2 border-[#33383F] pb-2"
              >
                <div className="flex justify-between mb-2">
                  <p className="text-sm font-bold">{email.fromEmail}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(email.sentAt).toLocaleDateString()}
                  </p>
                </div>
                <p className="text-sm text-gray-400">{email.body}</p>
              </div>
            ))}
        </div>
      </nav>
    )
  );
};

export default Inbox;
