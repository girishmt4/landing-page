import React from "react";
import Logo from "@/assets/Logo.png";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-100 dark:bg-dark-surface py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 lg:flex">
        <div className="mt-16 basis-1/2 lg:mt-0">
          <img src={Logo} alt="" />
          <p className="my-5">
            EvoGym is more than a gym — it's a movement. We're committed to
            helping every member reach their peak, with world-class facilities,
            inspiring coaches, and a community that lifts each other up. Come
            evolve with us.
          </p>
          <p>© EvoGym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 lg:mt-0">
          <h4 className="font-bold">Quick Links</h4>
          <p className="mt-5"><a href="#home" className="hover:text-primary-500">Home</a></p>
          <p className="mt-5"><a href="#benefits" className="hover:text-primary-500">Benefits</a></p>
          <p className="mt-5"><a href="#classes" className="hover:text-primary-500">Our Classes</a></p>
          <p className="mt-5"><a href="#contact" className="hover:text-primary-500">Join Now</a></p>
        </div>
        <div className="mt-16 basis-1/4 lg:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="mt-5">123 Fitness Drive, Los Angeles, CA 90001</p>
          <p className="mt-5">(333) 556-2345</p>
          <p className="mt-5">info@evogym.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
