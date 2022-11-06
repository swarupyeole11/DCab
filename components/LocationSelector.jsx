import React from 'react'
import{ useState } from 'react'

const style = {
    wrapper: `pt-2`,
    searchHeader: `w-full font-bold text-left flex items-center text-3xl p-4 overflow-hidden`,
    inputBoxes: `flex flex-col mb-4 relative`,
    inputBox: `h-10 mx-4 border-2 bg-[#eeeeee] flex items-center my-1 py-1 px-2`,
    focusedInputBox: `border-black`,
    svgContainer: `mx-1`,
    input: `my-2 rounded-2 p-2 outline-none border-none bg-transparent  h-full w-full`,
    verticalLine: `w-0 h-[2rem] border-black border absolute z-10 left-[2.3rem] top-[2rem]`,
}

const LocationSelector = () => {

  const [inFocus , setinFocus] = useState('from')

  return (
    <div className={style.wrapper}>
        <div className={style.searchHeader}>
            {inFocus === 'from' ? 'where can we pick you up ' : 'Where to ?'}
        </div>
        <div className={style.inputBoxes}>
            <div className={`${style.inputBox} ${inFocus === 'from' && style.focusedInputBox}`}>
              <div className={style.svgContainer}>
              <svg viewBox='0 0 24 24' width='1em' height='1em'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12 14a2 2 0 100-4 2 2 0 000 4zm5-2a5 5 0 11-10 0 5 5 0 0110 0z'
              />
            </svg>
            </div>  
              

            </div>

        </div>
    </div>
  )
}

export default LocationSelector