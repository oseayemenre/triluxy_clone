import { button_labels } from "@/utils/data";
type TButton = (typeof button_labels)[number];

export default function Button({
  label,
  bgColor,
  borderColor,
  textColor,
}: TButton) {
  return (
    <button
      className={`bg-[${bgColor}] border-[${borderColor}] border-[1px] text-[${textColor}] px-4 py-2 font-[600] text-[14px] rounded-[4px] focus:outline-none`}
    >
      {label}
    </button>
  );
}
