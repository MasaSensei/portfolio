import Fragments from "@/components/fragments";
import Image from "next/image";
import {
  BiLogoJavascript,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoMongodb,
  BiLogoNodejs,
} from "react-icons/bi";
import { SiNextdotjs, SiMysql, SiExpress } from "react-icons/si";

const AboutSection = () => {
  return (
    <section className="relative bg-slate-900 text-white min-h-screen md:py-24 py-16">
      <div className="container mx-auto relative">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
          <div className="lg:col-span-5 md:col-span-6">
            <div className="relative">
              <Image
                src={"/images/hero.jpeg"}
                width={400}
                height={400}
                className="rounded-full"
                alt={"Masayoshi"}
              />
            </div>
          </div>
          <div className="lg:col-span-7 md:col-span-6">
            <div className="lg:ms-5 text-center">
              <h3 className="mb-4 md:text-3xl  text-2xl lg:text-5xl font-semibold">
                About Me
              </h3>
              <p className="text-white">Beberapa Hal Yang Telah Aku Pelajari</p>
              <div className="mt-4">
                <div className="flex gap-2 justify-between">
                  <BiLogoHtml5 className="w-[50px] h-[50px]" />
                  <BiLogoCss3 className="w-[50px] h-[50px]" />
                  <BiLogoJavascript className="w-[50px] h-[50px]" />
                  <BiLogoReact className="w-[50px] h-[50px]" />
                  <BiLogoTailwindCss className="w-[50px] h-[50px]" />
                  <SiNextdotjs className="w-[50px] h-[50px]" />
                  <SiMysql className="w-[50px] h-[50px]" />
                  <BiLogoMongodb className="w-[50px] h-[50px]" />
                  <SiExpress className="w-[50px] h-[50px]" />
                  <BiLogoNodejs className="w-[50px] h-[50px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto relative md:mt-24 mt-16">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
            Apa Yang Biasa Aku Kerjakan
          </h3>
          <p className="text-slate-400 max-w-xl mx-auto">
            Aku Merupakan Web Developer Dari Sebuah Perusahaan Yang Biasanya
            Mengurus Sebuah Website
          </p>
        </div>
        <div className="flex gap-2 justify-between">
          <BiLogoHtml5 className="w-[50px] h-[50px]" />
          <BiLogoCss3 className="w-[50px] h-[50px]" />
          <BiLogoJavascript className="w-[50px] h-[50px]" />
          <BiLogoReact className="w-[50px] h-[50px]" />
          <BiLogoTailwindCss className="w-[50px] h-[50px]" />
          <SiNextdotjs className="w-[50px] h-[50px]" />
          <SiMysql className="w-[50px] h-[50px]" />
          <BiLogoMongodb className="w-[50px] h-[50px]" />
          <SiExpress className="w-[50px] h-[50px]" />
          <BiLogoNodejs className="w-[50px] h-[50px]" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
