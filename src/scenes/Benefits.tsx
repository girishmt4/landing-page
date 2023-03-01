import React from "react";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import BenefitPageGraphic from "../assets/BenefitsPageGraphic.png";

type Props = {
  setSelectedPage: (value: string) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div onViewportEnter={() => setSelectedPage("benefits")}>
        {/* Header */}
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
          className="lg:my-5 lg:w-3/5"
        >
          <h1 className="sectionHeader">MORE THAN JUST A GYM.</h1>
          <p className="my-5 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            deleniti impedit omnis rerum atque tempora, repudiandae officiis
            adipisci architecto soluta corporis, nam distinctio, ut magnam
            porro? Aliquid, eos debitis dicta ipsam autem labore distinctio
            quasi praesentium, facere qui itaque beatae corporis nesciunt velit
            tempore culpa! Iste .
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.5,
          }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="mt-5 items-center justify-between gap-8 lg:flex"
        >
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                scale: 0.9,
              },
              visible: {
                opacity: 1,
                scale: 1,
              },
            }}
            className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
          >
            <div className="mb-4 flex justify-center">
              <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
                <HomeModernIcon className="h-6 w-6" />
              </div>
            </div>

            <h4 className="font-bold">State of the Art Facilities</h4>
            <p className="my-3">
              Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a
              in lectus pellentesque. Ullamcorper et.
            </p>
            <a
              href="#contact"
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage("contact")}
            >
              <p>Learn More</p>
            </a>
          </motion.div>

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                scale: 0.9,
              },
              visible: {
                opacity: 1,
                scale: 1,
              },
            }}
            className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
          >
            <div className="mb-4 flex justify-center">
              <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
                <UserGroupIcon className="h-6 w-6" />
              </div>
            </div>

            <h4 className="font-bold">100's of Diverse Classes</h4>
            <p className="my-3">
              Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a
              in lectus pellentesque. Ullamcorper et.
            </p>
            <a
              href="#contact"
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage("contact")}
            >
              <p>Learn More</p>
            </a>
          </motion.div>

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                scale: 0.9,
              },
              visible: {
                opacity: 1,
                scale: 1,
              },
            }}
            className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
          >
            <div className="mb-4 flex justify-center">
              <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
                <AcademicCapIcon className="h-6 w-6" />
              </div>
            </div>

            <h4 className="font-bold">Expert and Pro Trainers</h4>
            <p className="my-3">
              Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a
              in lectus pellentesque. Ullamcorper et.
            </p>
            <a
              href="#contact"
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage("contact")}
            >
              <p>Learn More</p>
            </a>
          </motion.div>
        </motion.div>

        {/* GRAPHICS AND DESC */}
        <div className="mt-16 items-center justify-between gap-20 lg:mt-28 lg:flex">
          {/* Image */}
          <img className="mx-auto" src={BenefitPageGraphic} alt="" />

          {/* Content */}
          <div>
            {/* Title */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    duration: 0.5,
                  }}
                  variants={{
                    hidden: { opacity: 0, x: 100 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <h1 className="sectionHeader">
                    Millions of Happy Members Getting{" "}
                    <span className="text-primary-500">FIT</span>
                  </h1>
                </motion.div>
              </div>
            </div>

            {/* Desc */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                delay: 0.2,
                duration: 0.5,
              }}
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5 ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Cupiditate, excepturi sequi nulla commodi delectus quas ducimus,
                rem optio libero inventore adipisci itaque rerum repellat
                aperiam impedit dolorum magni a, similique soluta totam
                provident ratione eaque! Sequi deserunt perferendis quibusdam
                placeat odit nemo quasi ipsum ea, aspernatur delectus alias
                labore. Repudiandae?
              </p>
              <p className="mb-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
                laudantium sequi fugit tempora eaque, id minima ut illum
                repellat iste?
              </p>
            </motion.div>

            {/* Button */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <a href="#contact" className="actionButton">
                  <button onClick={() => setSelectedPage("contact")}>
                    Join Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
