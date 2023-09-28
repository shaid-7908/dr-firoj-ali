'use client'
import React from 'react'
import Image from 'next/image'
import AboutCimfr from '../Assets/Images/about-cimfr.png'
import { motion } from 'framer-motion'

export default function SmallIntro() {
  return (
    <div className='containerWrap1 p-4 flex '>
        <div className='flex-1 mx-4'>
               <motion.h1 
               initial={{opacity:0,y:40}}
               whileInView={{opacity:1,y:0}}
               transition={{duration:0.5,delay:0.5}}
               className='font-bold text-2xl text-[#7F00FF] my-2'>Welcome to Dr. Firoj Functional Organic Materials Research Group website.</motion.h1>
         
         <motion.div initial={{opacity:0,y:40}}
               whileInView={{opacity:1,y:0}}
               transition={{duration:0.5,delay:0.6}} className='border-b-[3px] my-1 border-[#3d155f] w-[60%]'></motion.div>

         <motion.div initial={{opacity:0,y:40}}
               whileInView={{opacity:1,y:0}}
               transition={{duration:0.5,delay:0.7}} className='border-b-[3px] my-1 border-[#7F00FF] w-[40%]'></motion.div>

         <motion.p 
         initial={{opacity:0,y:40}}
         whileInView={{opacity:1,y:0}}
         transition={{duration:0.5,delay:0.8}}
         className='text-left  my-4 text-[#3d155f]'> We are located at the new building (Lab No. 112) in CSIR-Central Salt and Marine Chemical Research Institute (CSMCRI), India. The research focus in our group is devoted to developing novel functional supramolecular materials. By combining synthesis and physical organic chemistry, we study the self-assembly and self-organization of supramolecular architecture. Our group designs and synthesizes relatively simple organic molecules endowed with suitable functional groups to undergo self-assembly. To achieved the desired materials, we generally used the self-assembly process through non-covalent interaction. These supramolecular materials can exhibit enhanced optical, chiral, or mechanical properties compared to the isolated building blocks. For new supramolecular synthons, we seek to gain control over their structural and functional properties to exploit them for different applications through a better understanding of the formation of these complex hierarchical materials. We invite you to explore the various sections for more information..............</motion.p>

        </div>
        <div className='flex-1  bg-[#7F00FF]'>
           
           <Image src={AboutCimfr} width={400} height={400} className='object-cover translate-y-2 border-[2px] border-[#3d155f] translate-x-4' layout='responsive'/> 

        </div> 
      </div>
  )
}
