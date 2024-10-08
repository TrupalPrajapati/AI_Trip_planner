import React from 'react'
import PlaceCardItem from './PlaceCardItem'

const PlacesToVisit = ({trip}) => {
  return (
    <div>
        <h2 className='font-bold text-lg mt-10'>Places to visit</h2>
   
       
        <div>
            {trip.tripData?.itinerary?.map((item,index)=>{
                return (
                    <div key={index} className='mt-5'>
                        <h3 className='font-medium text-lg'>Day {item.day}</h3>
                        <ul className='grid md:grid-cols-2 gap-4'>                            
                            {item.activities?.map((activity,activityIndex)=>{
                                return (
                                  <div className='my-3 '>
                                    <h2 className='font-medium text-sm text-orange-600'>{activity.time}</h2>
                                    <PlaceCardItem activity={activity}/>
                                  </div>
                                )
                            })}
                        </ul>

                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default PlacesToVisit