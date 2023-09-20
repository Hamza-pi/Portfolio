'use client'
import { useEffect, useState } from "react";

export default function useOutsideAlerter({menuRef, setMenuOpened}) {

  let viewport_width;
 if(typeof window){
   viewport_width = window.document.documentElement.clientWidth;
   
 }
 
 useEffect(() => {
  /**
   * Alert if clicked on outside of element
   */

  function handleClickOutside(event) {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      if (viewport_width <= 640) {
          setMenuOpened(false);
      }
    }
  }
  // Bind the event listener
  window.document.addEventListener("mousedown", handleClickOutside);
  return () => {
    // Unbind the event listener on clean up
    window.document.removeEventListener("mousedown", handleClickOutside);
  };
}, [menuRef,setMenuOpened,viewport_width]);



}
