import Link from "next/link";

const Button = ({ text, url }) => {
  return (
    <Link href={url}>
      <button className="bg-green-300 w-32 h-10 text-white rounded">
        {text}
      </button>
    </Link>
  );
};

export default Button;
