import Fragments from "@/components/fragments";
import { FiGithub } from "react-icons/fi";

const PortfolioSection = () => {
  return (
    <section className="bg-slate-900 text-white relative px-5 md:py-24 py-16">
      <div className="grid grid-cols-1 pb-8 text-center">
        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
          My Projects
        </h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 mt-8">
        <Fragments.Portfolio
          image="/images/hero.jpeg"
          alt="Masayoshi"
          title="Portfolio"
          link="/#"
          icon={<FiGithub />}
        />
      </div>
    </section>
  );
};

export default PortfolioSection;
