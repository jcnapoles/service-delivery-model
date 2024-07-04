import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import Carousel from '@itseasy21/react-elastic-carousel';
import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";



const Works = () => {


  const webDevProjects = projects.filter((project) => project.category === "web_development");

  const breakPoints = [
    { width: 1, itemsToShow: 1, itemsToScroll: 1 },
    { width: 720, itemsToShow: 2, itemsToScroll: 1 },
    { width: 1080, itemsToShow: 3, itemsToScroll: 1 },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const totalItems = projects.length;
    const interval = setInterval(() => {
      if (currentSlide === totalItems - 1) {
        setCurrentSlide(0);
        carouselRef.current.goTo(0);
      } else {
        setCurrentSlide((prevSlide) => prevSlide + 1);
        carouselRef.current.goTo(currentSlide + 1);
      }
    }, 13000); // Adjust the duration between slides as needed (12 seconds in this example)

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide]);
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      <div className='mt-10'>
        <Carousel
          ref={carouselRef}
          isRTL={false}
          pagination={true} // Show dots for paging
          transitionMs={12000} // Animation speed
          easing={"ease"} // transition easing pattern
          tiltEasing={"ease"} // transition easing pattern for the tilt
          enableTilt={false} // The “bump” animation when reaching the last item
          //itemsToShow={3}   // Number of visible items
          //itemsToScroll={1} // Number of items to scroll
          breakPoints={breakPoints} // Collection of objects with a width, itemsToShow and itemsToScroll
          initialActiveIndex={currentSlide} // The initial active index when the component mounts
          showArrows={false} // Show the arrow buttons
          focusOnSelect={true} // Go to item on click
          itemPadding={[0, 1]} // A padding for each element
          enableAutoPlay={true} // Enable or disable auto play
          autoPlaySpeed={currentSlide === webDevProjects.length - 1 ? 3000 : 13000}
        >
          
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
      
        </Carousel> 
      </div>
      
      
    </>
  );
};

export default SectionWrapper(Works, "");
