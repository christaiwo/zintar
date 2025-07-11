import { type FC, useState } from "react";
import "./../../index.css";
import CustomSelect from "./components/CustomSelect";
import { X } from "lucide-react";
import Button from "./components/Button";

interface GenerateProposalModalProps {}

const GenerateProposalModal: FC<GenerateProposalModalProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectChange = (value: string) => {
    console.log("Selected value:", value);
  };

  const options = [{ label: "Default", value: "1" }];

  return (
    <>
      <button
        onClick={toggleModal}
        className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out"
      >
        Generate Proposal
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100000] flex items-center justify-center bg-black/40 backdrop-blur-md bg-opacity-50 p-4">
          <div className="relative bg-white rounded-lg shadow-xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col">
            <div className="flex justify-between drop-shadow-2xl items-center py-2 px-4">
              <span className="text-xl font-semibold text-gray-800">
                Generate Proposal
              </span>
              <div className="flex items-center space-x-3">
                <div
                  onClick={toggleModal}
                  className="text-gray-500 cursor-pointer hover:text-gray-700"
                >
                  <X />
                </div>
              </div>
            </div>

            <div className="flex w-full bg-gray-50">
              {/* Left Section: Generate Proposal Form */}
              <div className="flex-1 p-6 flex flex-col overflow-y-auto">
                {/* Template Dropdown */}
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Template
                  </label>
                  <div className="w-full">
                    <CustomSelect
                      options={options}
                      onChange={handleSelectChange}
                      placeholder="Select a template"
                    />
                  </div>
                </div>

                {/* Freelancer Profile Dropdown */}
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Freelancer Profile
                  </label>
                  <div className="w-full">
                    <CustomSelect
                      options={[{ label: "Taiwo I, - All Work", value: "1" }]}
                      onChange={handleSelectChange}
                      placeholder="Select a profile"
                    />
                  </div>
                </div>

                {/* Text Area */}
                <textarea
                  rows={10}
                  className="flex-1 border border-gray-300 rounded-t-none rounded-b-md p-4 text-gray-700 overflow-y-auto bg-white"
                >
                  Use this area to combine text and AI prompts/snippets to
                  create a unique cover letter template. Click the help icon (
                </textarea>

                <div className="w-full grid grid-cols-2 my-2 gap-2">
                  <Button variant="danger">Cancel</Button>

                  <Button onClick={() => console.log("Generate clicked")}>
                    Generate
                  </Button>
                </div>
              </div>
              {/* Right Section: Job Description */}
              <div className="w-96 border-l border-gray-200 p-6 flex flex-col  overflow-y-auto">
                <p className="text-lg font-semibold text-gray-800 mb-4">
                  Odoo Admin/Engineer (Python & Database Management)
                </p>
                <p className="text-sm text-gray-500 mb-6">
                  Posted: Jul 10, 2025
                </p>

                <div className="flex-1 overflow-y-auto">
                  <p className="text-md font-medium text-gray-700 mb-2">
                    Job Description
                  </p>
                  <div className="text-sm text-gray-600">
                    <p>We are looking for an experienced</p>
                  </div>
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
