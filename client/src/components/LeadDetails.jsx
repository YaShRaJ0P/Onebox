import React from "react";

const LeadDetails = () => {
  return (
    <div className="bg-black p-4 text-white text-xs">
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">Lead Details</h2>
        <div className="mb-4">
          <p className="font-semibold">Name</p>
          <p>Orlando</p>
        </div>
        <div className="mb-4">
          <p className="font-semibold">Contact No</p>
          <p>+54-9062827869</p>
        </div>
        <div className="mb-4">
          <p className="font-semibold">Email ID</p>
          <p>orlando@gmail.com</p>
        </div>
        <div className="mb-4">
          <p className="font-semibold">LinkedIn</p>
          <p>
            <a
              href="https://linkedin.com/in/timvadde/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              linkedin.com/in/timvadde/
            </a>
          </p>
        </div>
        <div>
          <p className="font-semibold">Company Name</p>
          <p>Reachinbox</p>
        </div>
      </div>

      {/* Activities */}
      <div>
        <h2 className="text-xl font-bold mb-4">Activities</h2>
        <div className="mb-6">
          <p className="font-semibold">Campaign Name</p>
          <p>3 Steps | 5 Days in Sequence</p>
        </div>
        <div>
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12H8m0 0l-4 4m4-4l4-4"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold">Step 1: Email</p>
                <p className="text-gray-400">Sent 3rd, Feb</p>
              </div>
            </div>
            <div className="flex items-center mb-2">
              <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12H8m0 0l-4 4m4-4l4-4"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold">Step 2: Email</p>
                <p className="text-gray-400">Opened 5th, Feb</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12H8m0 0l-4 4m4-4l4-4"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold">Step 3: Email</p>
                <p className="text-gray-400">Opened 5th, Feb</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadDetails;
