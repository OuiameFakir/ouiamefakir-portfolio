import React from 'react'
import { Socials } from '../constants'
import Image from "next/image";


function Navbar() {
  return   <nav className="navbar navbar-light bg-light">
        <div className="container-fluid d-flex justify-content-between align-items-center">
            <a className="navbar-brand" href="#">
                WebDEV
            </a>
            <div  className="d-flex gap-2">
                {Socials.map((social) => (
                    <Image
                    key={social.name}
                    src={social.src}
                    alt={social.name}
                    width={28}
                    height={28}
                    />
                ))}
            </div>
        </div>
    </nav>
 
}

export default Navbar
