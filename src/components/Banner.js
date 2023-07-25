import React from "react";
// import Image from "../assets/avatar1.png";

import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

import { TypeAnimation } from "react-type-animation";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";
const Banner = () => {

  const style = {
    height: '20vh',
    with: '30vw'

  }

  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col  gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] leading-[0.8] lg:text-[90px] 
              bg-gradient-to-r text-transparent bg-clip-text from-[#42A6E3] to-[#FF56F6] font-bold font-primary hover:from-[#FF56F6] hover:to-[#42A6E3]"
            >
              Jawadi <span>Rami</span>
              
            </motion.h1> <br />
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6  text-[36px] lg:text-[60px] font-secondary
        font-semibold uppercase leading-[1]"
            >
              <span className="text-[30px] leading-[0.8] lg:text-[50px] 
              bg-gradient-to-r text-transparent bg-clip-text from-[#42A6E3] to-[#FF56F6]  font-primary hover:from-[#FF56F6] hover:to-[#42A6E3]"> I am a </span>
              <TypeAnimation
                sequence={[
                  "Developer",
                  2000,
                  "Designer",
                  2000,
                  "content creator",
                  2000,


                ]}

                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 maw-w-lg mx-auto lg:mx-0 font-font-medium text-white text-3xl italic "
            >
              We are here to give you a height quality web site development ,
              You are welcome every body
            </motion.p>

            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 max-auto 
            lg:mx-0
            
            "
            >
              <button className="btn btn-lg"> Contact me</button>
              <a href="#" className="text-gradient btn-link">
                Mt Portfolio
              </a>
            </motion.div>
            {/* socials */}

            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" flex text-[20px] gap-x-6 max-w-max mx-auto
            lg:mx-0
            "
            >
              <a href="https://www.linkedin.com/in/jawadi-rami/">
                <FaLinkedin className="hover:bg-sky-600 rounded-lg" />
              </a>
              <a href="https://github.com/Ramijawadi">
                <FaGithub className="hover:bg-gray-600 rounded-lg" />
              </a>
              <a href="#">
                <FaFacebook className="hover:bg-blue-600 rounded-lg" />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="flex-1 bg-banner bg-contain bg-no-repeat mb-56 h-[540px]
            mix-blend-lighten bg-top"
          >
            {/* image */}
            {/* <img src={Image}   alt="image" /> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
