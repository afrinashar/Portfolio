import React from 'react'
import './Footer.css'
import video from '../../img/footer.mp4';

import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/leets.png';
import geeks from '../../img/geeks.png';
import Wave from '../../img/wave.png'

const Footer = () => {
  return (
    <div className="Footer">
   <video autoPlay loop muted width="100%">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <img fill="white"  src={Wave} alt=""  style={{width: '100%' , color:"white", opacity:"25"}}/>
      <div className="f-content">
        <span>afrinashar1@gmail.com</span>
        <div className="f-icons">
        <div className="i-icons">
                    <img src={Github} alt="" />
                    <a  src="https://www.linkedin.com/in/afrin-ashar/"><img src={LinkedIn} alt=""  width={100}/> </a>  
                  <a  src="https://www.linkedin.com/in/afrin-ashar/">   <img src={Instagram} alt="" width={100}/></a> 
                   <a  src="https://www.geeksforgeeks.org/user/afrina5rxx/"> <img src={geeks} alt="geek for Geeks" width={100} /></a>
                </div>
        </div>
      </div> */}
    </div>
  )
}

export default Footer