'use client'
import React from "react";
import { sliderSettings } from "../../utils/data";
import content from "./people.json"
import css from "./People.module.scss";
import Slider from "react-slick";
import {motion} from 'framer-motion'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { footerVariants, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
const People = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    section className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="people"></a>

      <motion.div
      variants={footerVariants}
      className={`yPaddings innerWidth ${css.container}`}>


        <div className={`flexCenter ${css.heading}`}>
          <span className="primaryText orange">{content.heading}</span>
          <p style={{ marginTop: "2rem" }}>
            {content.para1}
          </p>
          <p>{content.para2}</p>
        </div>



        <div className={`yPaddings ${css.comments}`}>
          {/* to use slider , we have to inlcude css in index.html head */}
          <Slider {...sliderSettings} className={css.slider}>
            {content.comments.map((comment, i) => {
              return (
                <div key={i} className={`flexCenter ${css.comment}`}>
                  <img src={comment.img} alt="comment" />
                  <p>{comment.comment}</p>
                  <div className={css.line}></div>
                  <div className={css.bio}>
                    <span>{comment.name}</span>
                    <span>{comment.post}</span>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>


      </motion.div>

    </motion.section>
  );
};

export default People;
