import Navbar from '@/Component/Navbar';
import '@/styles/globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: "400", // I want this font-weight has 400,500,600,700,800,900
  preload:false
});

export default function App({ Component, pageProps }) {
  return(
    <main className={poppins.className}>
    <Navbar/>
  <Component {...pageProps} />
    </main>
  )
}
