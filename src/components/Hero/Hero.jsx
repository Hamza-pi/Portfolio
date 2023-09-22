'use client';
import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import content from "./hero.json"
const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span className="primaryText" variants={fadeIn("right", "tween", 0.2, 1)}>
            {content.greeting}
            <br />
           {content.intro}
          </motion.span>
          <motion.span className="secondaryText"variants={fadeIn("left", "tween", 0.4, 1)}>
            {content.choice}
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img variants={slideIn("up", "tween", 0.5, 1.3)} src="./person2.png" alt="" />
        </motion.div>

       <a  className={css.email} href={`mailto:${content.email1}`}>
          {content.email1}
        </a> 
        <a  className={css.email2} href={`mailto:${content.email2}`}>
          {content.email2}
        </a>

        <div className={css.lowerElements}>
          <motion.div variants={fadeIn("right", "tween", 0.3, 1)} className={css.experience}>
            <div className="primaryText">{content.followers}</div>
            <div className="secondaryText">
              <div>More than</div>
              <div>DISCORD MEMBERS</div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("left", "tween", 0.5, 1)} className={css.certificate}>
            <img src="./logo.png" alt="Logo" />
            <span>{content.designation} <b>of</b></span>
            <span><b>{content.community}</b></span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
