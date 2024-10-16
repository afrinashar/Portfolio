import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
             <Toggle/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType: 'none'}}>
                    <Link spy={true} to='Contact' smooth={true} activeClass='activeClass'>
                     </Link>
                    <Link spy={true} to='Services' smooth={true}>
                        <li>Services</li>
                    </Link>
                    <Link spy={true} to='Experience' smooth={true}>
                        <li>Experience</li>
                    </Link>
                    <Link spy={true} to='Portfolio' smooth={true}>
                        <li>Projects</li>
                    </Link>
                    <Link spy={true} to='Testimonials' smooth={true}>
                        <li>Certificates</li>
                    </Link>

                </ul>
            </div>
            <Link spy={true} to='Contact' smooth={true}className="n-button button" activeClass='activeClass'>
                        Contact   
                    </Link>  
        </div>
    </div>
  )
}

export default Navbar