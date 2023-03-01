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
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
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
          <div className="md:w-3/5">
            <h1 className="sectionHeader">OUR CLASSES</h1>
            <p className="py-5">
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod elementum arcu neque
              facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
              enim mattis odio in risus nunc.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            <li className="relative mx-5 inline-block h-[380px] w-[450px]">
              <div className="overlayStyle">
                <p className="text-2xl">Weight Training Classes</p>
                <p className="mt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <img alt="" src={image1} />
            </li>

            <li className="relative mx-5 inline-block h-[380px] w-[450px]">
              <div className="overlayStyle">
                <p className="text-2xl">Yoga Classes</p>
                <p className="mt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <img alt="" src={image2} />
            </li>

            <li className="relative mx-5 inline-block h-[380px] w-[450px]">
              <div className="overlayStyle">
                <p className="text-2xl">Ab Core Classes</p>
                <p className="mt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <img alt="" src={image3} />
            </li>

            <li className="relative mx-5 inline-block h-[380px] w-[450px]">
              <div className="overlayStyle">
                <p className="text-2xl">Adventure Classes</p>
                <p className="mt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <img alt="" src={image4} />
            </li>

            <li className="relative mx-5 inline-block h-[380px] w-[450px]">
              <div className="overlayStyle">
                <p className="text-2xl">Fitness Classes</p>
                <p className="mt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <img alt="" src={image5} />
            </li>

            <li className="relative mx-5 inline-block h-[380px] w-[450px]">
              <div className="overlayStyle">
                <p className="text-2xl">Training Classes</p>
                <p className="mt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
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
