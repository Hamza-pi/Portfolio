"use client";
import React, { useEffect, useRef, useState } from "react";
import css from "./Header.module.scss";
import { BiPhoneCall, BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import Link from "next/link";
import content from "./header.json";
import { MdOutlineCancel } from "react-icons/md";
const Header = () => {
  const menuRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const [bg, setBg] = useState("transparent");
  const headerShadow = useHeaderShadow();

  //to handle click outside of sidebar on mobile
  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setBg("#182523");
      } else {
        setBg("transparent");
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {
        setBg("transparent");
      });
    };
  }, []);

  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      className={`paddings ${css.wrapper}`}
      viewport={{ once: true, amount: 0.25 }}
      style={{ boxShadow: headerShadow, background: bg }}
    >
      <div className={`innerWidth ${css.container} flexCenter`}>
        <Link href="/#home">
          <img className={css.name} src="./logo.png" alt="Logo Img" />
        </Link>
        <ul
          className={`flexCenter ${css.menu}`}
          ref={menuRef}
          style={getMenuStyles(menuOpened)}
        >
          <li onClick={() => setMenuOpened(false)}>
            <Link href="/#experties">Services</Link>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <Link href="/#work">Experience</Link>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <Link href="#portfolio">Portfolio</Link>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <Link href="/#people">Testimonials</Link>
          </li>
          <li
            onClick={() => setMenuOpened(false)}
            className={`flexCenter ${css.phone}`}
          >
            <p>{content.phone}</p>
            <BiPhoneCall size={"40px"} style={{ color: "#286F6C" }} />
          </li>
        </ul>

        {/* for medium and small screens */}
        <div
          className={css.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          {!menuOpened ? (
            <BiMenuAltRight size={30} />
          ) : (
            <div className={css.closeIcon}>
              <MdOutlineCancel size={30} />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
