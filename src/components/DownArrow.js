import React from 'react';
import '../styles/down-arrow.scss';
import { scroller } from "react-scroll";

function DownArrow({src, next, stl}) {
  const scrollToSection = () => {
    scroller.scrollTo(`nav-${next + 1}`, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div className='downArrow' onClick={scrollToSection} style={stl}>
        <img src={src} alt='down arrow' />
    </div>
  )
}

export default DownArrow;