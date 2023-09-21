'use client'
import React from "react";
import { motion } from "framer-motion";
import css from "./page.module.scss";
import appCss from "../styles/App.module.scss"
import { fadeIn, staggerChildren, textVariant } from "../../src/utils/motion";
import portfolio from "../../src/utils/portfolio.json"
import Link from "next/link";
import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";

const Portfolio = () => {
  return (
    <div className={`bg-primary ${appCss.container}`}>
    <Header/>
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
            <span className="primaryText orange">My Work</span>
            <p style={{marginTop: "10px",color:"white"}}>Perfect solution for digital experience</p>
          </div>
        </motion.div>


        <div className={`flexCenter ${css.showCase}`}>
            {
              portfolio.map((item,i)=>(
                <a href={item.url} key={i} target="_blank">
                <motion.img key={i} variants={fadeIn("up", "tween", .5, .6)} src={item.img} alt="project" />
                </a>
              ))
            }
        </div>
      </div>
    </motion.section>
    <Footer/>
    </div>
  );
};

export default Portfolio;
