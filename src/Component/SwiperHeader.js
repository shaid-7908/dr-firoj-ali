'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Dummy from '../Assets/Images/dummy.jpg'
import Image from 'next/image';
// import required modules
import { Navigation } from 'swiper/modules';
import { Pagination, Autoplay } from 'swiper/modules';

export default function SwiperHeader() {
  return (
   <>
   <Swiper navigation={true} modules={[Navigation ,Pagination,Autoplay]}  autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} pagination={true} className="mySwiper ">
        <SwiperSlide><div className='flex flex-col lg:flex-row justify-center items-center'>
        <Image src={Dummy} width={500} height={500}  layout="responsive" style={{objectFit: "cover"}}/>
        <div className='ml-4'>
          <h1 className='text-3xl font-semibold my-2 text-[#7F00FF]'>Dummy data</h1>
          <p className='lg:w-[70%] text-base lg:text-xl my-2 text-[#29163b]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cum ullam sed ipsam sunt officiis neque, inventore tempora rerum quo fugiat doloribus nemo consequuntur odio velit nihil repudiandae animi alias?</p>
        <div className='border-[1px] border-[#29163b] p-2 rounded-sm w-[40%] my-4 font-medium text-[#7F00FF] text-xl shadow-lg'>
          Learn more
        </div>
        </div>
      </div></SwiperSlide>
        <SwiperSlide><div className='flex flex-col lg:flex-row justify-center items-center'>
        <Image src={Dummy} width={500} height={500}  layout="responsive" style={{objectFit: "cover"}}/>
        <div className='ml-4'>
          <h1 className='text-3xl font-semibold my-2 text-[#7F00FF]'>Dummy data</h1>
          <p className='w-[50%] text-xl my-2 text-[#29163b]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cum ullam sed ipsam sunt officiis neque, inventore tempora rerum quo fugiat doloribus nemo consequuntur odio velit nihil repudiandae animi alias?</p>
        <div className='border-[1px] border-[#29163b] p-2 rounded-sm w-[40%] my-4 font-medium text-[#7F00FF] text-xl shadow-lg'>
          Learn more
        </div>
        </div>
      </div></SwiperSlide>
        <SwiperSlide><div className='flex flex-col lg:flex-row justify-center items-center'>
        <Image src={Dummy} width={500} height={500}  layout="responsive" style={{objectFit: "cover"}}/>
        <div className='ml-4'>
          <h1 className='text-3xl font-semibold my-2 text-[#7F00FF]'>Dummy data</h1>
          <p className='w-[50%] text-xl my-2 text-[#29163b]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cum ullam sed ipsam sunt officiis neque, inventore tempora rerum quo fugiat doloribus nemo consequuntur odio velit nihil repudiandae animi alias?</p>
        <div className='border-[1px] border-[#29163b] p-2 rounded-sm w-[40%] my-4 font-medium text-[#7F00FF] text-xl shadow-lg'>
          Learn more
        </div>
        </div>
      </div></SwiperSlide>
        <SwiperSlide><div className='flex flex-col lg:flex-row justify-center items-center'>
        <Image src={Dummy} width={500} height={500}  layout="responsive" style={{objectFit: "cover"}}/>
        <div className='ml-4'>
          <h1 className='text-3xl font-semibold my-2 text-[#7F00FF]'>Dummy data</h1>
          <p className='w-[50%] text-xl my-2 text-[#29163b]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cum ullam sed ipsam sunt officiis neque, inventore tempora rerum quo fugiat doloribus nemo consequuntur odio velit nihil repudiandae animi alias?</p>
        <div className='border-[1px] border-[#29163b] p-2 rounded-sm w-[40%] my-4 font-medium text-[#7F00FF] text-xl shadow-lg'>
          Learn more
        </div>
        </div>
      </div></SwiperSlide>
       
      </Swiper>
   </>
  )
}
