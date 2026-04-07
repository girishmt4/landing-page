import React from "react";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: string) => void;
};

const Classes = ({ setSelectedPage }: Props) => {
  return (
    <section id="classes" className="w-full bg-primary-100 dark:bg-dark-surface py-40">
      <motion.div onViewportEnter={() => setSelectedPage("classes")}>
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="lg:w-3/5">
            <h1 className="sectionHeader">OUR CLASSES</h1>
            <p className="py-5">
              No matter your fitness level or goal, we have a class built for
              you. Our expert-led sessions are designed to challenge, inspire,
              and deliver real results — in a fun, supportive environment you'll
              actually look forward to.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden ">
          <ul className="w-[2800px] whitespace-nowrap">
            <li className="relative mx-5 inline-block h-[380px] w-[450px]">
              <div className="overlayStyle">
                <p className="text-2xl">Weight Training</p>
                <p className="mt-5">
                  Build serious strength with our structured barbell and
                  dumbbell programs. Led by certified strength coaches, these
                  sessions cover compound lifts, progressive overload, and
                  proper form to maximize muscle growth and power.
                </p>
              </div>
              <img alt="" src={image1} />
            </li>

            <li className="relative mx-5 inline-block h-[380px] w-[450px]">
              <div className="overlayStyle">
                <p className="text-2xl">Yoga & Mindfulness</p>
                <p className="mt-5">
                  Restore balance and flexibility with our yoga classes.
                  From beginner flows to advanced vinyasa, each session
                  blends breathwork, movement, and meditation to reduce
                  stress and improve mobility.
                </p>
              </div>
              <img alt="" src={image2} />
            </li>

            <li className="relative mx-5 inline-block h-[380px] w-[450px]">
              <div className="overlayStyle">
                <p className="text-2xl">Core & Abs</p>
                <p className="mt-5">
                  Strengthen your foundation with targeted core training.
                  These high-rep, low-rest sessions focus on the abs,
                  obliques, and lower back — building the stability and
                  power that supports every other lift and movement.
                </p>
              </div>
              <img alt="" src={image3} />
            </li>

            <li className="relative mx-5 inline-block h-[380px] w-[450px]">
              <div className="overlayStyle">
                <p className="text-2xl">Adventure Fitness</p>
                <p className="mt-5">
                  Take your training outdoors with our adventure fitness
                  programs. Combining hiking, obstacle courses, and
                  functional movement, these classes push your limits while
                  making fitness an unforgettable experience.
                </p>
              </div>
              <img alt="" src={image4} />
            </li>

            <li className="relative mx-5 inline-block h-[380px] w-[450px]">
              <div className="overlayStyle">
                <p className="text-2xl">HIIT & Cardio</p>
                <p className="mt-5">
                  Torch calories and boost your endurance with our
                  high-intensity interval training classes. Short bursts
                  of all-out effort followed by active recovery — maximum
                  results in minimum time.
                </p>
              </div>
              <img alt="" src={image5} />
            </li>

            <li className="relative mx-5 inline-block h-[380px] w-[450px]">
              <div className="overlayStyle">
                <p className="text-2xl">Personal Training</p>
                <p className="mt-5">
                  Work one-on-one with a dedicated coach who builds a
                  training plan around your specific goals, schedule, and
                  fitness level. Accelerate your progress with expert
                  accountability and customized programming.
                </p>
              </div>
              <img alt="" src={image6} />
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Classes;
