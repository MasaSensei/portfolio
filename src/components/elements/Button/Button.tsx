import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  link: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { children, link } = props;
  return (
    <>
      <Link
        href={link}
        className="py-2 px-5 font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2 inline-flex items-center"
      >
        {children}
      </Link>
    </>
  );
};

export default Button;
