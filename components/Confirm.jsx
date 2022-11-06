

import RideSelector from './RideSelector'
import { useContext } from 'react'
// import { UberContext } from '../context/uberContext'
// import { ethers } from 'ethers'

const style = {
  wrapper: `flex-1 h-full flex flex-col justify-between`,
  rideSelectorContainer: `h-full flex flex-col overflow-scroll`,
  confirmButtonContainer: ` border-t-2 cursor-pointer z-10`,
  confirmButton: `bg-black text-white m-4 py-4 text-center text-xl`,
}


const Confirm = () => {

   const storeTripDetails = async () => {

   } 
  return (
    <div className={style.wrapper}>
          <div className={style.rideSelectorContainer}>
              <RideSelector/>
          </div>
          <div className={style.confirmButtonContainer}>
               <div className={style.confirmButtonContainer}
                     onClick ={()=> storeTripDetails()}
                 >
                     Confirm Dcab
                </div>
          </div>
    </div>
  )
}

export default Confirm