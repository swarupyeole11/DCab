import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from "../components/Navbar"
import Map from "../components/Map"
import LocationSelector from "../components/LocationSelector"
const style = {
  wrapper: `h-screen w-screen flex felx-col`,
  main : `h-full w-screen flex-1 z-10 `,
  mapContainer : `felx-1 w-full h-full`,
  rideRequestContainer: `h-full w-[400px] ml-[1rem] py-[3rem] absolute top-0 left-0 flex flex-col justify-end z-20`,
  rideRequest: `h-full max-h-[700px] bg-white rounded-lg flex flex-col overflow-scroll`,
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
             <LocationSelector/>
             {/* confirm ride */}
          </div>
       </div>
     </div>
  )
}
