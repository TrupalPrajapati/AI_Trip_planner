import axios from "axios"

const BASE_URL="https://places.googleapis.com/v1/places:searchText"

const config={
    headers:{
        'Content-type':'application/json',
        'X-Goog-Api-Key': 'VITE_GOOGLE_PLACE_API_KEY',
        'X-Goog-FieldMask': [
            'places.photos',
            'places.displayName',
            'places.id'
        ]
    }
}

export const GetPlaceDeatails=(data)=>axios.post(BASE_URL,data,config)