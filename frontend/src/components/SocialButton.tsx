interface Props {
  text: string;
}

export default function SocialButton({ text }: Props) {
  return (
    <button
      className="
      w-full
      py-3
      rounded-full
      bg-gray-100
      hover:bg-gray-200
      transition
      font-medium"
    >
      {text}
    </button>
  );
}