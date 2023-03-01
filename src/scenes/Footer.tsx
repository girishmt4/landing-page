import React from "react";
import Logo from "@/assets/Logo.png";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 lg:flex">
        <div className="mt-16 basis-1/2 lg:mt-0">
          <img src={Logo} alt="" />
          <p className="my-5 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            neque facilis voluptas ad, ex, rem quidem ullam sint laborum
            consectetur expedita tempora doloribus assumenda numquam!
          </p>
          <p>© EVOGYM All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 lg:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="mt-5 ">Lorem, ipsum.</p>
          <p className="mt-5 ">Lorem, ipsum dolor.</p>
          <p className="mt-5">Lorem dolor sit .</p>
        </div>
        <div className="mt-16 basis-1/4 lg:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="mt-5 ">123, Fitness Drive, CA</p>
          <p className="mt-5 ">333-556-2345</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
