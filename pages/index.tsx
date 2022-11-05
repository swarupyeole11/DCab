import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from "../components/Navbar"
import Map from "../components/Map"
const style = {
  wrapper: `h-screen w-screen flex felx-col`
}

export default function Home() {
  return (
     <div className={style.wrapper}> 
       <Navbar/>
       <div className={style.main}>
          <Map/>
       </div>

       <div className={style.rideRequestContainer}>
          <div className={style.rideRequest}>
             {/* location selector */}
             {/* confirm ride */}
          </div>
       </div>
     </div>
  )
}
