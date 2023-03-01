import React from "react";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: string) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  return (
    <section id="home" className="lg: gap-16 bg-gray-20 py-10 pb-0 lg:h-full">
      {/* Image and Main Header */}
      <motion.div
        onViewportEnter={() => setSelectedPage("home")}
        className="mx-auto w-5/6 items-center justify-center lg:flex lg:h-5/6"
      >
        {/* Main Header */}
        <div className="z-10 mt-32 lg:basis-3/5">
          {/* Headings */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.5,
            }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            className="lg:-mt-20"
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] lg:before:content-evolvetext">
                <img src={HomePageText} alt="home-page-text" />
              </div>
            </div>
            <p className="mt-8 text-sm">
              Unrivaled Gym. Unparalleled Trainign Fitness Classes. Studios to
              get the Body Shapes you dream of.. Get your dream body NOW!!!
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            className=" mt-8 flex items-center gap-8"
          >
            <Link to="#contact" className="actionButton">
              <button onClick={() => setSelectedPage("contact")}>
                Join Now
              </button>
            </Link>
            <Link
              to="#contact"
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage("contact")}
            >
              <p>Learn More</p>
            </Link>
          </motion.div>
        </div>

        {/* Image */}
        <div className="flex basis-3/5 justify-center lg:z-10 lg:ml-40 lg:mt-16 lg:justify-end">
          <img src={HomePageGraphic} alt="home-pageGraphic" />
        </div>
      </motion.div>

      {/* Sponsors */}
      <div className="hidden lg:flex lg:h-[150px] lg:w-full lg:bg-primary-100 lg:py-10">
        <div className="mx-auto flex w-5/6 items-center justify-center">
          <div className="flex w-4/5 items-center justify-between ">
            <img src={SponsorRedBull} alt="" />
            <img src={SponsorForbes} alt="" />
            <img src={SponsorFortune} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
