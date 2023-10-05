import Image from 'next/image'

import { Inter } from 'next/font/google'
import Dummy from '../Assets/Images/dummy.jpg'
import Explosive from '../Assets/Images/explosive.jpg'

import SwiperHeader from '@/Component/SwiperHeader'
import SmallIntro from '@/Component/SmallIntro'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div className='min-h-screen max-w-screen   flex flex-col items-center '>
    <div className='containerWrap2 max-h-fit  '>
      <SwiperHeader/>
    </div>

   {/* Small intro */}

    <div className='max-w-screen max-h-fit mt-[60px]'>
     <SmallIntro/>
    </div>
    </div>
  )
}
