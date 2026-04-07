import React, { useEffect } from "react";
import { useState } from "react";
import Logo from "@/assets/Logo.png";
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from "@heroicons/react/24/solid";

type Props = {
  isTopOfPage: boolean;
  selectedPage: string;
  setSelectedPage: (value: string) => void;
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage, isDarkMode, setIsDarkMode }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="">
      <div
        className={`${
          isTopOfPage ? "" : "bg-primary-100 dark:bg-dark-surface drop-shadow"
        } fixed top-0 z-30 flex w-full items-center justify-between py-6`}
      >
        <div className="mx-auto flex w-5/6 items-center justify-between">
          <div className="flex w-full items-center justify-between gap-16">
            {/* Left */}
            <img src={Logo} alt="logo" />

            {/* Right */}
            <div className="hidden lg:flex lg:w-full lg:items-center lg:justify-between">
              <ul className="flex items-center justify-between gap-8 text-sm">
                <li>
                  <a
                    href="#home"
                    className={`${
                      selectedPage === "home" ? "text-primary-500" : "dark:text-dark-text"
                    } focus:text-primary-500 active:text-primary-500`}
                    onClick={() => setSelectedPage("home")}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#benefits"
                    className={`${
                      selectedPage === "benefits" ? "text-primary-500" : "dark:text-dark-text"
                    } focus:text-primary-500 active:text-primary-500`}
                    onClick={() => setSelectedPage("benefits")}
                  >
                    Benefits
                  </a>
                </li>
                <li>
                  <a
                    href="#classes"
                    className={`${
                      selectedPage === "classes" ? "text-primary-500" : "dark:text-dark-text"
                    } focus:text-primary-500 active:text-primary-500`}
                    onClick={() => setSelectedPage("classes")}
                  >
                    Classes
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className={`${
                      selectedPage === "contact" ? "text-primary-500" : "dark:text-dark-text"
                    } focus:text-primary-500 active:text-primary-500`}
                    onClick={() => setSelectedPage("contact")}
                  >
                    Contact
                  </a>
                </li>
              </ul>

              <div className="flex items-center justify-between gap-8">
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="rounded-full p-2 transition hover:bg-gray-100 dark:hover:bg-dark-card"
                  aria-label="Toggle dark mode"
                >
                  {isDarkMode ? (
                    <SunIcon className="h-5 w-5 text-secondary-500" />
                  ) : (
                    <MoonIcon className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                <a href="#contact" className="actionButton">
                  <button onClick={() => setSelectedPage("contact")}>
                    Become A Member
                  </button>
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 lg:hidden">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="rounded-full p-2"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <SunIcon className="h-5 w-5 text-secondary-500" />
                ) : (
                  <MoonIcon className="h-5 w-5 text-gray-500" />
                )}
              </button>
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Modal */}
      <div
        className={`rightModal dark:bg-dark-surface transition-all duration-500 ease-in lg:hidden ${
          isMenuOpen ? "right-0" : "right-[-490px]"
        } `}
      >
        <div className="flex justify-end p-12 ">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <XMarkIcon className="h-6 w-6 text-gray-400" />
          </button>
        </div>

        {/* Menu Items */}
        <ul className={`ml-[33%] flex flex-col gap-4 text-2xl`}>
          <li>
            <a
              href="#home"
              className={`${
                selectedPage === "home" ? "text-primary-500" : "dark:text-dark-text"
              } focus:text-primary-500 active:text-primary-500`}
              onClick={() => setSelectedPage("home")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#benefits"
              className={`${
                selectedPage === "benefits" ? "text-primary-500" : "dark:text-dark-text"
              } focus:text-primary-500 active:text-primary-500`}
              onClick={() => setSelectedPage("benefits")}
            >
              Benefits
            </a>
          </li>
          <li>
            <a
              href="#classes"
              className={`${
                selectedPage === "classes" ? "text-primary-500" : "dark:text-dark-text"
              } focus:text-primary-500 active:text-primary-500`}
              onClick={() => setSelectedPage("classes")}
            >
              Classes
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`${
                selectedPage === "contact" ? "text-primary-500" : "dark:text-dark-text"
              } focus:text-primary-500 active:text-primary-500`}
              onClick={() => setSelectedPage("contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
