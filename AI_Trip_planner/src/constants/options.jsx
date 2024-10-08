export const SelectTravelesList = [
    {
        id:1,
        title: 'Just Me',
        desc:'A sole travels in exploration',
        icon:' ✈︎ ',
        people:'1'
    },
    {
        id:2,
        title: 'A Couple',
        desc:'Two travels in tandem',
        icon:'🥂',
        people:'2 Peoples'
    },
    {
        id:3,
        title: 'Family',
        desc:'A group of fun loving adv',
        icon:'🏘️',
        people:'3 to 5 Peoples'
    },
    {
        id:4,
        title: 'Friends',
        desc:'A bunch of thrill-seekes',
        icon:'⛵',
        people:'5 or more Peoples'
    },
]

export const SelectBudgetOptions=[
    {
        id:1,
        title:'Cheap',
        desc:'Stay conscious of costs',
        icon:'💵',
    },
    {
        id:12,
        title:'Moderate',
        desc:'Keep cost on the average side',
        icon:'💰',
    },
    {
        id:3,
        title:'Luxury',
        desc:'Dont worry about costs',
        icon:'💸',
    }
]


export const AI_PROPMT='Generate Travel Plan for Location : {location},for {totalDays} Days for {traveler} People with a {budget} Budget, give me Hotels options list with HotelName, Hotel address, Price, hotel image Url, Geo Coordinates, ticket Pricing, Time travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format.'