"use Client";
import Elements from "@/components/elements";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="min-h-screen relative flex items-center background-effect overflow-hidden">
      <div
        className="absolute inset-0 after:content-[''] after:bg-black bg-fixed bg-center bg-cover"
        style={{
          backgroundImage:
            "url(https://images7.alphacoders.com/128/1289694.jpg)",
        }}
      ></div>
      <div className="absolute inset-0 bg-slate-900/70"></div>
      <div className="container mx-auto px-auto relative z-1">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
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
              width={400}
              height={400}
              className="rounded-full"
              alt="Masayoshi"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
