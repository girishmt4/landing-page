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
    <section id="benefits" className="w-full bg-gray-20 dark:bg-dark-bg py-20">
      <motion.div onViewportEnter={() => setSelectedPage("benefits")} className="mx-auto w-5/6">
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
            We believe fitness is a lifestyle, not just a workout. At EvoGym,
            we've built a community where every rep, every class, and every
            milestone is celebrated. Whether you're just starting out or pushing
            your peak performance, our world-class environment is designed to
            help you evolve — physically and mentally.
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
            className="mt-5 rounded-md border-2 border-gray-100 dark:border-dark-card dark:bg-dark-surface px-5 py-16 text-center"
          >
            <div className="mb-4 flex justify-center">
              <div className="rounded-full border-2 border-gray-100 dark:border-dark-card bg-primary-100 dark:bg-dark-card p-4">
                <HomeModernIcon className="h-6 w-6 text-gray-500 dark:text-primary-500" />
              </div>
            </div>

            <h4 className="font-bold">State of the Art Facilities</h4>
            <p className="my-3">
              Train in our 20,000 sq ft facility packed with the latest
              equipment — from Olympic lifting platforms and functional rigs to
              cardio zones and recovery lounges.
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
            className="mt-5 rounded-md border-2 border-gray-100 dark:border-dark-card dark:bg-dark-surface px-5 py-16 text-center"
          >
            <div className="mb-4 flex justify-center">
              <div className="rounded-full border-2 border-gray-100 dark:border-dark-card bg-primary-100 dark:bg-dark-card p-4">
                <UserGroupIcon className="h-6 w-6 text-gray-500 dark:text-primary-500" />
              </div>
            </div>

            <h4 className="font-bold">100's of Diverse Classes</h4>
            <p className="my-3">
              From high-intensity HIIT and powerlifting to calming yoga and
              pilates — our schedule offers 200+ weekly classes so there's
              always something that fits your goals and your mood.
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
            className="mt-5 rounded-md border-2 border-gray-100 dark:border-dark-card dark:bg-dark-surface px-5 py-16 text-center"
          >
            <div className="mb-4 flex justify-center">
              <div className="rounded-full border-2 border-gray-100 dark:border-dark-card bg-primary-100 dark:bg-dark-card p-4">
                <AcademicCapIcon className="h-6 w-6 text-gray-500 dark:text-primary-500" />
              </div>
            </div>

            <h4 className="font-bold">Expert and Pro Trainers</h4>
            <p className="my-3">
              Our certified coaches bring decades of real-world experience in
              strength, endurance, and sports nutrition — giving you personalized
              guidance to hit your goals faster and safer.
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
              <p className="my-5">
                Since 2010, over 1.2 million members across 50 locations have
                trusted EvoGym to help them transform their bodies and their
                lives. Our results speak for themselves — 94% of members report
                reaching their first fitness goal within 90 days of joining.
                With flexible membership plans, no long-term contracts, and a
                community that keeps you accountable, there's never been a
                better time to start.
              </p>
              <p className="mb-5">
                Your journey is unique, and we're here every step of the way.
                Start today and discover what you're truly capable of.
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
