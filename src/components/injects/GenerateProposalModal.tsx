import { type FC, useState } from "react";
import "./../../index.css";

interface GenerateProposalModalProps {}

const GenerateProposalModal: FC<GenerateProposalModalProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out"
      >
        Generate Proposal
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100000] flex items-center justify-center bg-black/40 backdrop-blur-xl bg-opacity-50 p-4">
          <div className="relative bg-white rounded-lg shadow-xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex">
            {/* Left Section: Generate Proposal Form */}
            <div className="flex-1 p-6 flex flex-col overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-semibold text-gray-800">
                  Generate Proposal
                </span>
                <div className="flex items-center space-x-3">
                  <div
                    onClick={toggleModal}
                    className="text-gray-500 cursor-pointer hover:text-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Template Dropdown */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Template
                </label>
                <div className="relative">
                  <select className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm appearance-none pr-8">
                    <option>Select a template</option>
                    <option>Default Template</option>
                    {/* Add more options as needed */}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9l4.95 4.95z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Freelancer Profile Dropdown */}
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Freelancer Profile
                </label>
                <div className="relative">
                  <select className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm appearance-none pr-8">
                    <option>Taiwo I. - All work</option>
                    {/* Add more options as needed, maybe pull from user profile */}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9l4.95 4.95z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Text Editor Toolbar */}
              <div className="flex items-center space-x-1 border border-gray-300 rounded-t-md p-2 bg-gray-50">
                <button className="p-1 rounded hover:bg-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button className="p-1 rounded hover:bg-gray-200 font-bold">
                  B
                </button>
                <button className="p-1 rounded hover:bg-gray-200 italic">
                  I
                </button>
                <button className="p-1 rounded hover:bg-gray-200 underline">
                  U
                </button>
                <div className="border-l border-gray-200 h-6 mx-1"></div>{" "}
                {/* Separator */}
                <button className="p-1 rounded hover:bg-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button className="p-1 rounded hover:bg-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM7.07 9.293a1 1 0 00-1.414 1.414L8.586 13a1 1 0 001.414 0l4-4a1 1 0 10-1.414-1.414L10 10.586 7.07 7.707z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button className="p-1 rounded hover:bg-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <div className="border-l border-gray-200 h-6 mx-1"></div>{" "}
                {/* Separator */}
                <button className="p-1 rounded hover:bg-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 19V6l3-3m0 0l3 3m-3-3v14m-9 0H3.5a2.5 2.5 0 01-2.5-2.5v-7A2.5 2.5 0 013.5 6H7v4h10V6h3.5a2.5 2.5 0 012.5 2.5v7a2.5 2.5 0 01-2.5 2.5H15M9 19c-3.111 0-5.611-2.222-5.611-5s2.5-5 5.611-5 5.611 2.222 5.611 5-2.5 5-5.611 5z"
                    />
                  </svg>
                </button>
                <button className="p-1 rounded hover:bg-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </button>
                <span className="p-1 rounded hover:bg-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </span>
                <div className="border-l border-gray-200 h-6 mx-1"></div>{" "}
                {/* Separator */}
                <button className="p-1 rounded hover:bg-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.523 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.523 18.246 18 16.5 18s-3.332.477-4.5 1.253"
                    />
                  </svg>
                </button>
                <button className="p-1 rounded hover:bg-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 8h10M7 12h10M7 16h10M9 3h6a2 2 0 012 2v14a2 2 0 01-2 2H9a2 2 0 01-2-2V5a2 2 0 012-2z"
                    />
                  </svg>
                </button>
              </div>

              {/* Text Area */}
              <textarea
                rows={10}
                className="flex-1 border border-gray-300 rounded-t-none rounded-b-md p-4 text-gray-700 overflow-y-auto bg-white"
              >
                Use this area to combine text and AI prompts/snippets to create
                a unique cover letter template. Click the help icon (
              </textarea>

              <div className="w-full grid grid-cols-2 my-2 gap-2">
                <div
                  onClick={toggleModal}
                  className="border rounded-md p-2 flex items-center justify-center"
                >
                  Cancel
                </div>
                <div
                  onClick={() => {}}
                  className="border bg-green-600 text-white rounded-md p-2 flex items-center justify-center"
                >
                  Insert
                </div>
              </div>
            </div>

            {/* Right Section: Job Description */}
            <div className="w-96 border-l border-gray-200 p-6 flex flex-col bg-gray-50 overflow-y-auto">
              <p className="text-lg font-semibold text-gray-800 mb-4">
                Odoo Admin/Engineer (Python & Database Management)
              </p>
              <p className="text-sm text-gray-500 mb-6">Posted: Jul 10, 2025</p>

              <div className="flex-1 overflow-y-auto">
                <p className="text-md font-medium text-gray-700 mb-2">
                  Job Description
                </p>
                <div className="text-sm text-gray-600">
                  <p>We are looking for an experienced</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>
                      Manage Odoo server instances and ensure optimal
                      performance.
                    </li>
                    <li>Develop and customize Odoo modules using Python.</li>
                    <li>
                      Perform database management, including backup,
                      restoration, and optimization.
                    </li>
                    <li>Integrate Odoo with third-party applications.</li>
                    <li>
                      Provide technical support and training to end-users.
                    </li>
                    <li>
                      Participate in the full software development lifecycle.
                    </li>
                  </ul>
                  <p className="mt-2">
                    If you have a passion for open-source ERP systems and
                    excellent problem-solving abilities, we encourage you to
                    apply!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GenerateProposalModal;
