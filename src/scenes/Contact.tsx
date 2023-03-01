import { motion } from "framer-motion";
import React from "react";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";

type Props = {
  setSelectedPage: (value: string) => void;
};
const Contact = ({ setSelectedPage }: Props) => {
  const {
    register,
    trigger,
    formState: { errors },
    reset,
  } = useForm();

  const submitHandler = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    } else {
      reset();
    }
  };

  return (
    <section className="mx-auto w-5/6 pt-24 pb-32" id="contact">
      <motion.div onViewportEnter={() => setSelectedPage("contact")}>
        <motion.div
          className="lg:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className="sectionHeader">
            <span className="text-primary-500">JOIN NOW</span> to Get In Shape
          </h1>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quod
            sequi dicta velit repellat impedit rerum veritatis, tenetur
            similique quam. Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Officiis, sed.
          </p>
        </motion.div>

        {/* Form and Image */}
        <div className="mt-10 justify-between gap-8 lg:flex">
          <motion.div
            className="mt-10 basis-3/5 lg:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={submitHandler}
              method="POST"
              action="https://formsubmit.co/fbb3c62b88aa9240635bc0246b3575b0"
            >
              {/* Name Input */}
              <input
                className="formInput"
                placeholder="Name"
                type="text"
                id=""
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This Field is required"}
                  {errors.name.type === "maxLength" &&
                    "Max is length is 100 characters"}
                </p>
              )}

              {/* Email Input */}
              <input
                className="formInput"
                placeholder="Email"
                type="email"
                id=""
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" && "This Field is required"}
                  {errors.email.type === "pattern" && "Invalid Email Address"}
                </p>
              )}

              {/* Name Input */}
              <textarea
                className="formInput"
                placeholder="Message"
                rows={4}
                cols={50}
                id=""
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "This Field is required"}
                  {errors.message.type === "maxLength" &&
                    "Max is length is 2000 characters"}
                </p>
              )}

              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>

          <motion.div
            className="relative mt-16 basis-2/5 lg:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] lg:before:content-evolvetext">
              <img className="w-full" src={ContactUsPageGraphic} alt="" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
