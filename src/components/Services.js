import React from "react";
//icons
import { BsArrowUpRight } from "react-icons/bs";

//motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../variants";

// services data

const services = [
  {
    name: "UI/UX Designer",
    des: "Design a digital interface and ensure that it is sufficiently readable, clear, easy to use...",
    link: "Learn more",
  },
  {
    name: "Web Development",
    des: "Develop web interfaces adapted to the needs of its client. These may be intranet sites, websites, web applications or online tools.",
    link: "Learn more",
  },
  {
    name: "Mobile Development",
    des: "Design and implement user interface components for JavaScript-based web and mobile applications using React ecosystem",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row ">
          {/* text & image */}
          <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten
          mb-12 lg:mb-0"
          >
            <h2 className='h2 text-accent mb-6'>What I Do.</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              i'am a Freelancer Front-end Developer with 2 years experiences
            </h3>
            <button className=" btn btn-sm">see my works</button>
          </motion.div>
          {/* services  */}
        
            <motion.div
                variants={fadeIn("left", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
            className="flex-1">
              {/* services list */}

              <div>
                {services.map((service, index) => {
                  // destructure service
                  const { name, des, link } = service;
                  return (
                    <div className='border-b border-white/20 h-[166px] mb-[36px] flex ' key={index}>
                      <div className='max-w-[476px]'>
                        <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>
                          {name}</h4>
                        <p className='font-secondary leading-tight mb-6'>{des}</p>
                      </div>
                      <div className="flex flex-col flex-1 items-end">

                        <a href="#" className="btn w-9 h-9 mb-[42px] flex justify-center items-center">
                          <BsArrowUpRight />
                        </a>
                        <a href="#" className="text-gradient text-sm">
                          {link}
                        </a>

                      </div>
                    </div>
                  );
                })}
              </div>
         
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Services;
