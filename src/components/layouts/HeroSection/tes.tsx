"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./HeroSection.module.css";
import Elements from "@/components/elements";

const JumbotronSection = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    const phrases = ["MacBook", "iMac", "Mac-Mini", "Mac-Pro"];
    let currentPhrasesIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typeSpeed = 150;

    const type = () => {
      const currentText = phrases[currentPhrasesIndex];
      setText(
        isDeleting
          ? currentText.substring(0, currentCharIndex)
          : currentText.substring(0, currentCharIndex + 1)
      );

      if (!isDeleting && currentCharIndex === currentText.length) {
        isDeleting = true;
        typeSpeed = 270;
      } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentPhrasesIndex = (currentPhrasesIndex + 1) % phrases.length;
        typeSpeed = 100;
      }

      currentCharIndex += isDeleting ? -1 : 1;

      setTimeout(type, typeSpeed);
    };

    setTimeout(type, typeSpeed);

    return () => clearTimeout(type as any);
  }, []);
  return (
    <section
      className={`min-h-screen bg-center bg-black ${styles.backgroundImage}`}
    >
      <div className="px-4 mx-auto max-w-screen-xl text-left pt-24 lg:py-56">
        <div className="absolute inset-0 bg-black opacity-50 min-h-screen"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 md:grid-cols-12 mt-12 lg:mt-0 gap-[30px]">
            <div className="md:col-span-7">
              <h3 className="text-white font-medium drop-shadow-2xl lg:text-5xl text-4xl lg:leading-normal leading-normal lg:font-medium mb-7 position-relative">
                Welcome To Macspace.id
                <br />
                <span className="typewrite relative text-type-element">
                  Tempat terbaik untuk perbaikan
                  <br />
                  <b className="underline font-bold decoration-blue-500">
                    {text}
                  </b>
                </span>
                <span
                  className={`opacity-1 ${styles.typeCursorBlink}`}
                  aria-hidden="true"
                >
                  |
                </span>
              </h3>
              <p className="text-white mb-0 max-w-2xl text-lg">
                Apapun permasalahan perangkat apple anda, macspace punya
                solusinya! pengerjaan cepat, analisa tepat & akurat serta harga
                service yang relatif lebih murah.
              </p>
              {/* <div className="relative mt-10">
                <Elements.Button
                  type="button"
                  onClick={() => window.open("https://wa.me/628165454883")}
                >
                  HUBUNGI KAMI
                </Elements.Button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JumbotronSection;
