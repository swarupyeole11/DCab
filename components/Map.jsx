
import React, { useEffect } from 'react'
import mapboxgl from 'mapbox-gl'

const style =
{
    wrapper : `flex-8 h-full w-full items-center `
}

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

const Map = () => {

  useEffect(()=>{
      const map = new mapboxgl.Map({
      container : 'map',
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [-99.29011, 39.39172],
      zoom: 4,
    })
  },[])

  return (
    <div className={style.wrapper} id='map'>Map</div> 
    // {/* here you have to give the id as map and the same value to cintaner */}
  )
}

export default Map