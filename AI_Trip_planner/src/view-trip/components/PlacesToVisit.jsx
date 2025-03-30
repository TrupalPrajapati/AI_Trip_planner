// import React from "react";
// import PlaceCardItem from "./PlaceCardItem";

// import PlaceCardItem from "./PlaceCardItem";

// const PlacesToVisit = ({ trip }) => {
//   const itinerary = trip.tripData?.itinerary || []; // Ensure it's always an array
//   console.log("trip.tripData:", trip.tripData);
//   console.log("trip.tripData?.itinerary:", trip.tripData?.itinerary);

//   return (
//     <div>
//       <h2 className="font-bold text-lg mt-10">Places to visit</h2>

//       <div>
//         {trip.tripData?.itinerary?.map((item, index) => {
//           return (
//             <div key={index} className="mt-5">
//               <h3 className="font-medium text-lg">Day {item.day}</h3>
//               <ul className="grid md:grid-cols-2 gap-4">
//                 {item.activities?.map((activity, activityIndex) => {
//                   return (
//                     <div className="my-3 ">
//                       <h2 className="font-medium text-sm text-orange-600">
//                         {activity.time}
//                       </h2>
//                       <PlaceCardItem activity={activity} />
//                     </div>
//                   );
//                 })}
//               </ul>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default PlacesToVisit;


import React from "react";
import PlaceCardItem from "./PlaceCardItem";

const PlacesToVisit = ({ trip }) => {
  // Convert itinerary object into an array
  const itinerary = trip.tripData?.itinerary
    ? Object.entries(trip.tripData.itinerary).map(([day, activities]) => ({
        day,
        activities,
      }))
    : [];
  console.log("itinanaries",itinerary);
  

  console.log("trip.tripData:", trip.tripData);
  console.log("trip.tripData?.itinerary:", trip.tripData?.itinerary);

  return (
    <div>
      <h2 className="font-bold text-lg mt-10">Places to visit</h2>

      <div>
        {/* Ensure that itinerary is always an array before calling .map() */}
        {itinerary.map((item, index) => (
          <div key={index} className="mt-5">
            <h3 className="font-medium text-lg">Day {item.day}</h3>
            <ul className="grid md:grid-cols-2 gap-4">
              {/* Ensure item.activities is an array before calling .map() */}
              {Array.isArray(item.activities) &&
                item.activities.map((activity, activityIndex) => (
                  <div key={activityIndex} className="my-3">
                    <h2 className="font-medium text-sm text-orange-600">
                      {activity.time}
                    </h2>
                    <PlaceCardItem activity={activity} />
                  </div>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacesToVisit;
