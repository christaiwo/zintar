import { useEffect, useRef, useState, type FC } from "react";

type Option = {
  label: string;
  value: string;
};

interface CustomSelectProps {
  options: Option[];
  placeholder?: string;
  onChange: (value: string) => void;
}

const CustomSelect: FC<CustomSelectProps> = ({
  options,
  placeholder = "Select an option",
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Option | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (option: Option) => {
    setSelected(option);
    onChange(option.value);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full bg-white border border-gray-300 rounded-md shadow-sm px-4 py-2 text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {selected ? (
          <span className="text-black">{selected.label}</span>
        ) : (
          <span className="text-black">{placeholder}</span>
        )}
        <span className="float-right text-black">&#9662;</span>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleSelect(option)}
              className={`px-4 py-2 cursor-pointer hover:bg-blue-100 ${
                selected?.value === option.value ? "bg-blue-50 font-medium" : ""
              }`}
            >
              <span>{option.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
