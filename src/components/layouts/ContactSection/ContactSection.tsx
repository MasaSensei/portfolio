import Elements from "@/components/elements";

const ContactSection = () => {
  return (
    <section className="container relative md:py-24 py-16 mx-auto">
      <div>
        <div className="grid grid-cols-1 text-center">
          <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
            Have A Question?? Get In Touch
          </h3>
          <div className="mt-6">
            <Elements.Button link={"/"}>Get In Touch</Elements.Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
