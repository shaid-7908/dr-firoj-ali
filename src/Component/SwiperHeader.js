'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import picture1 from '../Assets/Images/For web page-1.jpg'
import picture2 from '../Assets/Images/For web page-2.jpg'
import picture3 from '../Assets/Images/For web page-3.jpg'
import picture4 from '../Assets/Images/For web page-4.jpg'
import picture5 from '../Assets/Images/For web page-5.jpg'
import picture6 from '../Assets/Images/For web page-6.jpg'
import picture7 from '../Assets/Images/For web page-7.jpg'
import picture8 from '../Assets/Images/For web page-8.jpg'
import picture9 from '../Assets/Images/For web page-9.jpg'
import Image from 'next/image';
// import required modules
import { Navigation } from 'swiper/modules';
import { Pagination, Autoplay } from 'swiper/modules';

const Images =[
  {img:picture1},
  {img:picture2},
  {img:picture3},
  {img:picture4},
  {img:picture5},
  {img:picture6},
  {img:picture7},
  {img:picture8},
  {img:picture9}
]

export default function SwiperHeader() {
  return (
   <>
   <Swiper  modules={[Navigation ,Pagination,Autoplay]}  autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }} pagination={true} className="mySwiper ">
         {Images.map((e,index)=>(
            <SwiperSlide key={index}><div className=''>
            <Image src={e.img} width={500} height={500} layout='responsive' style={{objectFit: "cover"}}/>
           
          </div></SwiperSlide>
         ))}

        
       
        
        
       
      </Swiper>
   </>
  )
}
