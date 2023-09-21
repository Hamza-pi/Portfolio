'use client'
import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion'
import Link from "next/link";
const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
      
      
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
            {`Let's make something`} <br />
            amazing together.
          </span>
          <span className="primaryText">
            Start by <a href="mailto:zainkeepscode@gmail.com" className="orange">saying hi</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Information</span>
            <p>145 New York, FL 5467, USA</p>
          </div>
          <ul className={css.menu}>
          <li><Link href="/#experties">Services</Link></li>
          <li><Link href="/#work">Experience</Link></li>
          <li><Link href="#portfolio">Portfolio</Link></li>
          <li><Link href="/#people">Testimonials</Link></li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
