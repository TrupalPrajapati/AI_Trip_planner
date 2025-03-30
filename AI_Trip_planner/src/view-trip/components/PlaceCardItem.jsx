import { Button } from '@/components/ui/button'
import React from 'react'
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const PlaceCardItem = ({activity}) => {

  console.log("activity",activity);
  
  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query='+activity.placeName}target='blank'>
    <div className='border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer'>
            <img src='/placeholder.jpeg' className='w-[130px] h-[130px] rounded-xl'/>

            <div>
                <h2 className='font-bold text-lg'>{activity.placeName}</h2>
                <p className='text-sm text-gray-500'>{activity.placeDetails}</p>
                <h2 className='mt-2'>🕑{activity.timeSpent}</h2>
            </div>
    </div>
    </Link>
  )
}

export default PlaceCardItem