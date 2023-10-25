"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const NavbarClass = "text-sm font-semibold leading-6";

export default function NavbarWithCTAButton() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const router = useRouter(); // Use useRouter from next/navigation
  const sectionRefs = {
    home: useRef<HTMLAnchorElement | null>(null),
    layanan: useRef<HTMLAnchorElement | null>(null),
    homeService: useRef<HTMLAnchorElement | null>(null),
    contact: useRef<HTMLAnchorElement | null>(null),
  };

  const mobileMenu = () => {
    setTimeout(() => {
      setMobileMenuOpen(false);
    }, 1000);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      handleScroll();
    };

    window.addEventListener("scroll", handleScroll);

    // Hapus langganan perubahan rute saat komponen dibongkar
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  return (
    <header
      className={`bg-white fixed w-full transition duration-500 z-20 ${
        scroll ? "bg-opacity-100 border-b-2 border-gray-200" : "bg-opacity-0"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center lg:justify-center justify-end p-6 lg:px-8"
        aria-label="Global"
      >
        <div className={`flex lg:hidden`}>
          <button
            type="button"
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${
              scroll ? "text-black" : "text-white"
            }`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link
            href={"#home"}
            className={`NavbarClass ${scroll ? "text-black" : "text-white"}`}
            ref={sectionRefs.home}
          >
            Home
          </Link>
          <Link
            href={"#about"}
            className={`NavbarClass ${scroll ? "text-black" : "text-white"}`}
            ref={sectionRefs.layanan}
          >
            About Me
          </Link>
          <Link
            href={"#portfolio"}
            className={`NavbarClass ${scroll ? "text-black" : "text-white"}`}
            ref={sectionRefs.contact}
          >
            Portfolio
          </Link>
          <Link
            href={"#contact"}
            className={`NavbarClass ${scroll ? "text-black" : "text-white"}`}
            ref={sectionRefs.homeService}
          >
            Contact Me
          </Link>
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-20" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-20 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root overflow-y-auto">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="#home"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50`}
                  onClick={mobileMenu}
                  ref={sectionRefs.home}
                >
                  Home
                </Link>
                <Link
                  href={"/layanan"}
                  target={"_blank"}
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover.bg-gray-50`}
                  ref={sectionRefs.layanan}
                >
                  Layanan
                </Link>
                <Link
                  href={"/home-service"}
                  target={"_blank"}
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover.bg-gray-50`}
                  onClick={mobileMenu}
                  ref={sectionRefs.homeService}
                >
                  Home Visit
                </Link>
                <Link
                  href="/contact"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover.bg-gray-50`}
                  ref={sectionRefs.contact}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
