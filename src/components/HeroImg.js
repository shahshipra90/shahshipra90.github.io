import "./HeroImgStyles.css";
import React from 'react';
import img1 from "../assets/img1.jpg"
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img src={img1} alt="Intro" className="into-img"/>
        </div>
        <div className="content">
            <p>Shipra Shah</p>
            <h1>Web Developer</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg
