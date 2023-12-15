import React from "react";

type TOptions = {
  label: string;
  Icon: React.ElementType;
  active: string;
  handleActive: () => void;
};

export default function Options({
  label,
  Icon,
  active,
  handleActive,
}: TOptions) {
  return (
    <button
      className={`flex gap-x-2 ${
        active === label
          ? "text-[#6CCACB] bg-white"
          : "text-white bg-transparent"
      } px-4 py-2 rounded-t-lg font-[600] focus:outline-none`}
      onClick={handleActive}
    >
      <Icon size={20} />
      <p>{label}</p>
    </button>
  );
}
