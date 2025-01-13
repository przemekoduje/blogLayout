import React from 'react'
import "./onlyCss01.scss"

// Tablica z danymi obrazków
const images = [
    { src: "images/1.jpg", className: "wide" },
    { src: "images/2.jpg", className: "big" },
    { src: "images/3.jpg", className: "tall" },
    { src: "images/4.jpg" },
    { src: "images/5.jpg", className: "tall" },
    { src: "images/6.jpg", className: "tall" },
    { src: "images/7.jpg" },
    { src: "images/8.jpg" },
    { src: "images/9.jpg", className: "big" },
    { src: "images/10.jpg", className: "tall" },
    { src: "images/11.jpg" },
    { src: "images/12.jpg", className: "tall" },
    { src: "images/13.jpg" },
    { src: "images/14.jpg" },
    { src: "images/15.jpg", className: "tall" },
    { src: "images/16.jpg", className: "tall" },
    { src: "images/17.jpg", className: "tall" },
    { src: "images/18.jpg", className: "tall" },
    { src: "images/19.jpg" },
    { src: "images/20.jpg", className: "big" },
  ];

export default function OnlyCss01() {
  return (
    <div className='onlycss01'>
      <div className="grid-wrapper">
        {images.map((image, index) => (
          <div key={index} className={image.className || ''}>
            <img src={image.src} alt={`Portfolio ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
    </div>

    
  )
}
