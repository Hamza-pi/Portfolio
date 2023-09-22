'use client'
import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant } from "../../utils/motion";
import portfolio from "./portfolio.json"
import Link from "next/link";
const Portfolio = () => {

  const portfolioItems = portfolio.slice(0,2)

  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>


        <motion.div variants={textVariant(.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText orange">My Latest Works</span>
            <p style={{marginTop: "10px"}}>Perfect solution for digital experience</p>
          </div>
        <Link className="secondaryText orange" href="/portfolio">Explore More Works</Link>
        </motion.div>


        <div className={`flexCenter ${css.showCase}`}>
            {
              portfolioItems.map((item,i)=>(
                <a href={item.url} key={i} target="_blank">
                <motion.img key={i} variants={fadeIn("up", "tween", .5, .6)} src={item.img} alt="project" />
                </a>
              ))
            }
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
