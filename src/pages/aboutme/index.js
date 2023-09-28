import React from 'react'
import FirojALi from '../../Assets/Images/FirojALi.jpg'
import Burdwan from '../../Assets/Images/Burdwan-University.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope ,faPhone,faGraduationCap,faFileArrowDown} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
export default function index() {
  return (
    <div className='max-w-screen h-screen'>
        <div className='containerWrap1 flex justify-end mt-6 bg-slate-200 p-4'>
         <a href='/Files/CV_Firoj Ali.pdf' download>

        <div className='border-[1px] px-2 text-primary rounded-md border-primary'>
            <span><FontAwesomeIcon icon={faFileArrowDown}/></span>    Download
            </div>
         </a>
        </div>
        <div className='containerWrap1 flex  bg-slate-200 p-4'>
            
         <div className='flex-[30%] flex justify-center'>
           <div className='bg-[#7F00FF] w-[50%] h-[220px]'>
            <Image src={FirojALi} width={200} height={200} className='object-cover translate-y-2 border-[2px] border-[#3d155f] translate-x-4'/>
           </div>
         </div>
         <div className='flex-[70%]'>
             <h1 className='text-primary text-3xl font-bold my-2'>Dr. Firoj Ali</h1>
             <p className='w-[70%] text-lg text-gray-600'>Scientist<br/>
                    Rock Excavation Engineering Research Group,<br/> CSIR-Central institure of Mining and
              Fuel Research, Dhanbad.</p>
                    <p className='my-3'>
                      <span className='text-primary text-2xl font-bold'><FontAwesomeIcon icon={faEnvelope}/> :</span> 
                     <a className='text-secondary ml-2 underline underline-offset-2'
                     href='mailto:firojali@cimfr.nic.in/firojchem86@gmail.com'>firojali@cimfr.nic.in/firojchem86@gmail.com
                     </a>
                     
                     </p>
                     <p>
                        <span className='text-2xl text-primary'>
                            <FontAwesomeIcon icon={faPhone}/> :
                        </span>
                       <span className='ml-2 text-gray-600'>
                        +91-6287871881
                        </span> 
                     </p>

                     
                     <h1 className='text-primary text-xl font-bold'>Educational qualifications:  
                        <span className='text-sm text-gray-600'>
                                  (Graduation and above)
                        </span> 
                    </h1>
                    <div className='flex my-4'>
                        
                        <div className='flex-[70%] ml-6'>
                            <FontAwesomeIcon icon={faGraduationCap} className='text-primary'/>
                            <span className='text-primary font-bold ml-2'>
                                
                                Bachelor of Science (BSc)</span>
                            <p className='text-gray-600 my-2'>University of Burdwan, West bengal </p>
                            <p className='text-gray-600 my-2'>Chemistry (HONS)</p>
                            <p className='text-gray-600 my-2'>2009</p>
                        </div>
                    </div>
                    
                    
                    
                    <div className='flex my-4'>
                        
                        <div className='flex-[70%] ml-6'>
                        <FontAwesomeIcon icon={faGraduationCap} className='text-primary'/>
                            <span className='text-primary font-bold ml-2'>Master of Science (MSc)</span>
                            <p className='text-gray-600 my-2'>Bengal Engineering and Science University,
                                                                Shibpur, Howrah, West Bengal
                            </p>
                            <p className='text-gray-600 my-2'>Applied Chemistry</p>
                            <p className='text-gray-600 my-2'>2012</p>
                        </div>
                    </div>
                    <div className='flex my-4'>
                       
                        <div className='flex-[70%] ml-6'>
                        <FontAwesomeIcon icon={faGraduationCap} className='text-primary'/>
                            <span className='text-primary font-bold ml-2'>Doctor of Philosophy(PhD)</span>
                            <p className='text-gray-600 my-2'>AcSIR, CSIR-National Chemical Laboratory,
                                     Pune</p>
                            <p className='text-gray-600 my-2'>Chemical Science</p>
                            <p className='text-gray-600 my-2'>2017</p>
                        </div>
                    </div>
                    
         </div>
        </div>
    </div>
  )
}
