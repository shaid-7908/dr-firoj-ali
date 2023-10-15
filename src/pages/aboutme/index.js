import React from 'react'
import FirojALi from '../../Assets/Images/FirojALi.jpg'
import Burdwan from '../../Assets/Images/Burdwan-University.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope ,faPhone,faGraduationCap,faFileArrowDown,faLinkedin , faBriefcase, faMedal} from '@fortawesome/free-solid-svg-icons'
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
                     href='mailto:firojali@cimfr.nic.in/firojchem86@gmail.com'>firojali@cimfr.nic.in
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

                     
                     <h1 className='text-primary text-xl font-bold'>Professional Experiences 
                        
                    </h1>
                    <div className='flex my-4'>
                       
                       <div className='flex-[70%] ml-6'>
                       <FontAwesomeIcon icon={faBriefcase} className='text-primary'/>
                           <span className='text-primary font-bold ml-2'>Since December 2018:</span>
                           <p className='text-gray-600 my-2 font-semibold'>Scientist</p>
                           <p className='text-gray-600 my-2 font-semibold'>CSIR-Central Institute of Mining and Fuel Research (CSIR-CIMFR)</p>
                           <p className='text-gray-600 my-2'>Barwa Road, Dhanbad, Jharkhand-826001, India</p>
                       </div>
                   </div>
                    <div className='flex my-4'>
                        
                        <div className='flex-[70%] ml-6'>
                            <FontAwesomeIcon icon={faBriefcase} className='text-primary'/>
                            <span className='text-primary font-bold ml-2'>
                                
                            December 2017-2018:</span>
                            <p className='text-gray-600 my-2 font-semibold'>Post-doctoral Research Fellow </p>
                            <p className='text-gray-600 my-2'>School of Chemistry, University of Birmingham,</p>
                            <p className='text-gray-600 my-2'>United Kingdom</p>
                        </div>
                    </div>
                   
                   {/*Education Details */}

                    <h1 className='text-primary text-xl font-bold'>Education 
                        
                    </h1>

                    <div className='flex my-4'>
                    <div className='flex-[70%] ml-6'>
                            <FontAwesomeIcon icon={faGraduationCap} className='text-primary'/>
                            <span className='text-primary font-bold ml-2'>
                                
                            2012-2017:</span>
                            <p className='text-gray-600 my-2 font-semibold'>Ph.D in Chemical Science </p>
                            <p className='text-gray-600 my-2 font-semibold'>CSIR-National Chemical Laboratory (CSIR-NCL).</p>
                            <p className='text-gray-600 my-2'>Pune, India</p>
                            <p className='text-gray-600 my-2 font-semibold'>Supervisor:     Prof. Amitava Das.</p>
                        </div>
                    </div>
                    <div className='flex my-4'>
                    <div className='flex-[70%] ml-6'>
                            <FontAwesomeIcon icon={faGraduationCap} className='text-primary'/>
                            <span className='text-primary font-bold ml-2'>
                                
                            2010-2012</span>
                            <p className='text-gray-600 my-2 font-semibold'>Master of Science (M.Sc) in Applied Chemistry </p>
                            <p className='text-gray-600 my-2 '>Bengal Institute of Science and Technology, Shibpur,</p>
                            <p className='text-gray-600 my-2'>West Bengal, India.</p>
                            
                        </div>
                    </div>
                    {/*Awards */}
                    <h1 className='text-primary text-xl font-bold'>Awards &amp; Fellowship 
                        
                        </h1>
                        <div className='flex my-4'>
                    <div className='flex-[70%] ml-6'>
                            
                            <p className='text-gray-600 my-4 font-semibold w-[60%]'><FontAwesomeIcon icon={faMedal} className='text-primary'/> <span className='ml-2'>Visiting Research Fellowship from UKIERI Project in Prof. Carl
                             Smythe Laboratory of University of Sheffield, United Kingdom.</span> </p>
                             <p className='text-gray-600 my-4 font-semibold w-[60%]'><FontAwesomeIcon icon={faMedal} className='text-primary'/> <span className='ml-2'>Senior Research Fellowship, awarded by the Council of Scientific and
Industrial Research, (CSIR- India), 2014.</span> </p>
<p className='text-gray-600 my-4 font-semibold w-[60%]'><FontAwesomeIcon icon={faMedal} className='text-primary'/> <span className='ml-2'>Junior Research Fellowship awarded by the Council of Scientific and
Industrial Research, (CSIR-India), 2012.</span> </p>
<p className='text-gray-600 my-4 font-semibold w-[60%]'><FontAwesomeIcon icon={faMedal} className='text-primary'/> <span className='ml-2'>Qualified CSIR-UGC/NET (2012) CSIR-JRF. (All India Rank 43).</span> </p>
<p className='text-gray-600 my-4 font-semibold w-[60%]'><FontAwesomeIcon icon={faMedal} className='text-primary'/> <span className='ml-2'>Qualified Graduate Aptitude Test in Engineering GATE – 2012. All
India Rank: 101.</span> </p>
                            
                        </div>
                    </div>
                    
                    
                    
                 
                    
         </div>
        </div>
    </div>
  )
}
