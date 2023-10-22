import Elements from "@/components/elements";

const JumbotronSection = () => {
  return (
    <section
      className="py-20 w-full table relative jarallax bg-fixed"
      style={{ backgroundImage: "url(/images/hero.jpeg)" }}
    >
      <div className="absolute inset-0 bg-slate-900/70"></div>
      <div className="container relative mx-auto">
        <div className="grid grid-cols-1 pb-8 text-center">
          <div className="mb-4 md:text-3xl text-2xl text-white font-medium">
            I Am Available For Freelancer Projects.
          </div>
          <div className="relative mt-8">
            <Elements.Button link={"/"}>Hire Me</Elements.Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JumbotronSection;
