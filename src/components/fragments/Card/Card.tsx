import Link from "next/link";

interface CardProps {
  icon: React.ReactNode;
  link: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = (props) => {
  const { icon, link, children } = props;
  return (
    <>
      <div className="p-6 hover:shadow-xl hover:shadow-white transition duration-500 rounded-2xl mt-6">
        <div className="w-20 h-20 bg-gray-500 text-indigo-600 mx-auto rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-white">
          {icon}
        </div>
        <div className="content mt-7">
          <Link
            href={link}
            className="title text-center h5 text-lg font-medium text-white"
          >
            {children}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
