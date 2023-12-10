import { button_labels } from "@/utils/data";

type TButton = (typeof button_labels)[number];

export default function Button({
  label,
  bgColor,
  borderColor,
  textColor,
  hoverBorder,
  hoverText,
  hoverColor,
}: TButton) {
  return (
    <button
      className={`bg-[${bgColor}] border-[${borderColor}] border-[1px] text-[${textColor}] px-[15.7px] py-[7.5px] font-[600] rounded-[4px] focus:outline-none hover:text-[${hoverText}] hover:border-[${hoverBorder}] hover:bg-[${hoverColor}] duration-150 ease transition`}
    >
      {label}
    </button>
  );
}
