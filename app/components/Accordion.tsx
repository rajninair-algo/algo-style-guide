import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="divide-y rounded border border-gray-200 bg-white shadow-sm">
      {items.map((item, index) => (
        <div key={index}>
          <button
            type="button"
            className="flex w-full items-center justify-between px-4 py-3 text-left font-medium text-gray-800 hover:bg-primary-light focus:outline-none"
            onClick={() => toggle(index)}
          >
            {item.title}
            <ChevronDown
              className={`h-5 w-5 transform transition-transform duration-300 ${
                openIndex === index
                  ? "rotate-180 text-primary"
                  : "text-gray-500"
              }`}
            />
          </button>
          <div
            className={`px-4 pb-4 text-gray-700 transition-all duration-300 ${
              openIndex === index ? "block" : "hidden"
            }`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
}
