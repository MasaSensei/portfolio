"use Client";
import Elements from "@/components/elements";
import styles from "./HeroSection.module.css";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      className={`min-h-screen bg-center bg-black ${styles.backgroundImage}`}
      id="home"
    >
      <div className="px-4 mx-auto  text-left h-screen w-full pt-24 lg:py-56 bg-black opacity-80">
        <div className="container mx-auto relative">
          <div className="grid grid-cols-1 mt-12 lg:mt-0 gap-[30px]">
            <div className="md:col-span-7">
              <div className="me-6 text-center">
                <h1 className="font-bold lg:leading-normal font-poppins leading-normal lg:text-7xl mb-5 text-lg text-center text-white mb-[22px] opacity-100">
                  Hello My Name Is Masayoshi
                  <br />
                  <span className="text-indigo-600">Web Developer</span>
                </h1>
                <p className="text-yellow-900 text-lg lg:text-2xl ">
                  Aku telah menjadi web developer selama 2 tahun
                </p>
                <div className="mt-6">
                  <Elements.Button link={"/"}>Hire Me</Elements.Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
