"use Client";
import Elements from "@/components/elements";
import styles from "./HeroSection.module.css";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      className={`min-h-screen bg-center bg-black ${styles.backgroundImage}`}
    >
      <div className="px-4 mx-auto max-w-screen-xl text-left pt-24 lg:py-56">
        <div className="container relative">
          <div className="grid grid-cols-1 md:grid-cols-12 mt-12 lg:mt-0 gap-[30px]">
            <div className="md:col-span-7">
              <div className="me-6">
                <h1 className="font-semibold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-black">
                  Hello My Name Is Masayoshi
                  <br />
                  <span className="text-indigo-600">Web Developer</span>
                </h1>
                <p className="text-slate-900 text-lg max-w-xl">
                  Aku telah menjadi web developer selama 2 tahun
                </p>
                <div className="mt-6">
                  <Elements.Button link={"/"}>Hire Me</Elements.Button>
                </div>
              </div>
            </div>
            <div className="md:col-span-5">
              <Image
                src={"/images/hero.jpeg"}
                width={350}
                height={350}
                className="rounded-full"
                objectFit="cover"
                alt="Masayoshi"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
