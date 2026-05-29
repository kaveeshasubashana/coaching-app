interface Props {
  placeholder: string;
  type?: string;
}

export default function Input({
  placeholder,
  type = "text",
}: Props) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="
        w-full
        h-12
        px-5
        rounded-full
        border
        border-[#ECECEC]
        bg-white
        text-sm
        outline-none
        focus:border-[#143300]
      "
    />
  );
}