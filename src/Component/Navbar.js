'use client'
import React from 'react'
import Link from 'next/link';
import CIMFR from '../Assets/Images/CIMFR.png'
import  { useState, useEffect } from "react";
import Image from 'next/image'
export default function Navbar() {
    const [navPosition,setNavPosition] = useState('sticky lg:h-[80px]  text-[#7F00FF] ')

    const listenScrollEvent = () => { 
        
        window.scrollY > 10 ? setNavPosition('sticky lg:h-[70px] bg-[#7F00FF] text-white') : setNavPosition('sticky lg:h-[80px] text-[#7F00FF] ');
        
        
    }

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
          window.removeEventListener("scroll", listenScrollEvent);
        };
      }, []);

  return (
    <nav className={`max-w-screen  overflow-hidden flex z-50 justify-around items-center ${navPosition} top-0 t`} style={{transition: "all 1s"}}>
     <div className='flex items-center'>
        <Image src={CIMFR} height={50} width={50}/>
        <h1 className='mx-4 font-semibold'>The Firoj Ali Group</h1>
     </div>
     <div>
        <ul className='flex '>
           <Link href='/'>
            <li className='mx-3'>Home</li>
           </Link>
             <Link href='/aboutme'>
            <li className='mx-3'>Dr. Firoj Ali</li>
             </Link>
            <li className='mx-3'>Research</li>
            <li className='mx-3'>Members</li>
            <li className='mx-3'>Contact Us</li>
        </ul>
     </div>
    </nav>
  )
}
