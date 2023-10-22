import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PortfolioProps {
  title: string;
  alt: string;
  image: string;
  link: string;
  icon: React.ReactNode;
}

const Portfolio: React.FC<PortfolioProps> = (props) => {
  const { title, link, image, alt, icon } = props;
  return (
    <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
      <Image src={image} alt={alt} width={400} height={400} />
      <div className="absolute inset-0 group-hover:bg-dark opacity-50 transition duration-500 z-0"></div>
      <div className="content">
        <div className="icon absolute z-10 opacity-0 group-hover:opacity-100 top-4 end-4 transition-all duration-500">
          <Link
            href={link}
            className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full lightbox"
          >
            {icon}
          </Link>
        </div>
        <div className="title absolute z-10 opacity-0 group-hover:opacity-100 bottom-4 start-4 transition-all duration-500">
          <h3 className="h6 text-md font-medium text-white hover:text-indigo-600 duration-500 ease-in-out">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
