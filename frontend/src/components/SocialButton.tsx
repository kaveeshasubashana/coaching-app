import Image from "next/image";

interface Props {
  text: string;
  icon?: string;
  green?: boolean;
  onClick?: () => void;
}

export default function SocialButton({
  text,
  icon,
  green,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`w-full h-14 rounded-full flex items-center justify-center gap-3 font-medium cursor-pointer transition hover:opacity-90 ${
        green ? "bg-[#A4ED74]" : "bg-[#F2F4EF]"
      }`}
    >
      {icon && (
        <Image
          src={icon}
          alt={text}
          width={20}
          height={20}
        />
      )}

      <span>{text}</span>
    </button>
  );
}