import {React, useState} from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { FaAngleDown, FaAngleUp, FaFileAlt, FaDownload } from 'react-icons/fa';

const ExperienceCard = ({ experience }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[90%] h-[90%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
      
      <div className='mt-5 ml-5 space-y-2 '>
        {experience.items?.map((item, index) => (
          <div key={`experience-point-${index}`} className='border-2 rounded-md'>
            <button
              className='flex justify-between items-center w-full text-left text-white-100 text-[14px] p-3 tracking-wider'
              onClick={() => toggleItem(index)}
            >
              <div className='flex justify-between'>
                {openIndex === index ? <FaAngleUp className='mr-2'/> : <FaAngleDown className='mr-2'/>}
                {item.title}                
              </div>
            </button>
            {openIndex === index && (
              <div className='text-white-100 text-[14px] p-3 tracking-wider'>
              <ul>
                {item.files.map((file, fileIndex) => (
                  <li key={`file-li-${fileIndex}`} className='mb-2 ml-10'> 
                    <a
                      href={`/documents/${file}`}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center text-blue-400 underline'
                    >
                      <FaDownload className='mr-2' />
                      {file}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            )}
          </div>
        ))}
    </div>
      
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
        For each stage of the Delivery Model you will find a set of template
            files to execute that stage, along with the instructions to fill in the
            document(s). 
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
          Service Delivery Model
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "start");
