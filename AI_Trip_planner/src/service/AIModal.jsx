import { GoogleGenerativeAI } from "@google/generative-ai";

  
  const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  

    export const chatSession = model.startChat({
      generationConfig,

      history: [
        {
          role: "user",
          parts: [
            {text: "Generate Travel Plan for Location : Las Vegas for 3 Days for Couple with a Cheap budget, Give me a Hotels options list with Hotel Name, Hotel address, Price, hotel image URL, geo coordinates, rating ,descriptions and suggest itinerary with placeName, PlaceDetails , Place Image Url, Geo Coordinates, ticket Pricing, rating Time travel each of the location for 3 days with each day with best time to visit in \"JSON format\"."},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"hotels\": [\n    {\n      \"name\": \"The D Las Vegas\",\n      \"address\": \"301 Fremont Street, Las Vegas, NV 89101\",\n      \"price\": \"Starts from $30/night\",\n      \"imageUrl\": \"https://www.travelandleisure.com/thmb/Nq2_j_83D3tW287Qj8hD5W7e3I=/1500x1000/filters:no_upscale():max_bytes(150000):strip_icc()/the-d-hotel-las-vegas-casino-freemont-street-experience-5a60c6e86462400028b4e4e7.jpg\",\n      \"geoCoordinates\": \"36.1687, -115.1425\",\n      \"rating\": 4,\n      \"description\": \"A retro-themed hotel with a lively casino, affordable rooms, and a central location on Fremont Street.\"\n    },\n    {\n      \"name\": \"Circus Circus Hotel & Casino\",\n      \"address\": \"2880 Las Vegas Blvd S, Las Vegas, NV 89109\",\n      \"price\": \"Starts from $25/night\",\n      \"imageUrl\": \"https://www.circuscircus.com/media/images/hero-images/header-image-circus-circus.jpg\",\n      \"geoCoordinates\": \"36.1237, -115.1712\",\n      \"rating\": 3.5,\n      \"description\": \"A classic Las Vegas hotel with a family-friendly atmosphere, circus acts, and a large casino.\"\n    },\n    {\n      \"name\": \"The Golden Nugget Hotel & Casino\",\n      \"address\": \"129 E Fremont St, Las Vegas, NV 89101\",\n      \"price\": \"Starts from $40/night\",\n      \"imageUrl\": \"https://www.goldennugget.com/las-vegas/media/images/gallery/las-vegas-exterior-pool-view.jpg\",\n      \"geoCoordinates\": \"36.1690, -115.1426\",\n      \"rating\": 4,\n      \"description\": \"A luxurious hotel with a glamorous atmosphere, a renowned aquarium, and a central location on Fremont Street.\"\n    }\n  ],\n  \"itinerary\": [\n    {\n      \"day\": 1,\n      \"activities\": [\n        {\n          \"time\": \"10:00 AM\",\n          \"place\": \"Fremont Street Experience\",\n          \"details\": \"A pedestrian mall with a giant video screen, live music, street performers, and numerous casinos.\",\n          \"imageUrl\": \"https://www.visitlasvegas.com/sites/default/files/styles/image-hero/public/2020-05/Fremont-Street-Experience_0.jpg?itok=5tQpU4wN\",\n          \"geoCoordinates\": \"36.1697, -115.1423\",\n          \"ticketPrice\": \"Free\",\n          \"rating\": 4.5,\n          \"timeSpent\": \"2-3 hours\"\n        },\n        {\n          \"time\": \"1:00 PM\",\n          \"place\": \"The Mob Museum\",\n          \"details\": \"Explore the fascinating history of organized crime in Las Vegas and the United States.\",\n          \"imageUrl\": \"https://www.mobmuseum.org/media/26872/mob-museum-exterior.jpg?anchor=center&mode=crop&width=1200&height=630&rnd=1356345924562\",\n          \"geoCoordinates\": \"36.1692, -115.1458\",\n          \"ticketPrice\": \"$29.95\",\n          \"rating\": 4.5,\n          \"timeSpent\": \"2 hours\"\n        },\n        {\n          \"time\": \"6:00 PM\",\n          \"place\": \"Golden Nugget Casino and Aquarium\",\n          \"details\": \"Enjoy a romantic dinner at the Golden Nugget and explore the unique underwater tunnel aquarium.\",\n          \"imageUrl\": \"https://www.goldennugget.com/las-vegas/media/images/gallery/las-vegas-gold-aquarium.jpg\",\n          \"geoCoordinates\": \"36.1690, -115.1426\",\n          \"ticketPrice\": \"Free for aquarium viewing (dinner prices vary)\",\n          \"rating\": 4,\n          \"timeSpent\": \"2 hours\"\n        }\n      ]\n    },\n    {\n      \"day\": 2,\n      \"activities\": [\n        {\n          \"time\": \"10:00 AM\",\n          \"place\": \"Bellagio Conservatory & Botanical Garden\",\n          \"details\": \"Admire the stunning floral displays and art installations in this beautiful garden.\",\n          \"imageUrl\": \"https://www.bellagio.com/content/dam/bellagio/images/conservatory-and-botanical-garden/conservatory-gallery-images/conservatory-gardens-carousel-mobile-lg.jpg\",\n          \"geoCoordinates\": \"36.1146, -115.1723\",\n          \"ticketPrice\": \"Free\",\n          \"rating\": 4.5,\n          \"timeSpent\": \"1 hour\"\n        },\n        {\n          \"time\": \"11:00 AM\",\n          \"place\": \"The Strip\",\n          \"details\": \"Explore the famous Las Vegas Strip, admire the iconic hotels and casinos, and take a stroll down the bustling sidewalks.\",\n          \"imageUrl\": \"https://www.visitlasvegas.com/sites/default/files/styles/image-hero/public/2016-09/las-vegas-strip-at-night.jpg?itok=8h6N8uY7\",\n          \"geoCoordinates\": \"36.1146, -115.1723\",\n          \"ticketPrice\": \"Free\",\n          \"rating\": 5,\n          \"timeSpent\": \"3-4 hours\"\n        },\n        {\n          \"time\": \"6:00 PM\",\n          \"place\": \"Bellagio Fountains\",\n          \"details\": \"Witness the mesmerizing water and light show synchronized to music.\",\n          \"imageUrl\": \"https://www.bellagio.com/content/dam/bellagio/images/fountains-of-bellagio/fountains-of-bellagio-carousel-mobile-lg.jpg\",\n          \"geoCoordinates\": \"36.1146, -115.1723\",\n          \"ticketPrice\": \"Free\",\n          \"rating\": 5,\n          \"timeSpent\": \"1 hour\"\n        }\n      ]\n    },\n    {\n      \"day\": 3,\n      \"activities\": [\n        {\n          \"time\": \"8:00 AM\",\n          \"place\": \"Red Rock Canyon National Conservation Area\",\n          \"details\": \"Enjoy hiking and scenic drives amidst the vibrant red rock formations.\",\n          \"imageUrl\": \"https://www.nps.gov/redr/learn/nature/images/Red-Rock-Canyon-Geology.jpg\",\n          \"geoCoordinates\": \"36.1374, -115.2239\",\n          \"ticketPrice\": \"Free\",\n          \"rating\": 4.5,\n          \"timeSpent\": \"4-5 hours\"\n        },\n        {\n          \"time\": \"1:00 PM\",\n          \"place\": \"Hoover Dam\",\n          \"details\": \"Take a tour of this iconic engineering marvel and explore the surrounding area.\",\n          \"imageUrl\": \"https://www.nps.gov/hove/learn/historyculture/images/Hoover-Dam.jpg\",\n          \"geoCoordinates\": \"36.0042, -114.7792\",\n          \"ticketPrice\": \"Free\",\n          \"rating\": 4.5,\n          \"timeSpent\": \"3-4 hours\"\n        }\n      ]\n    }\n  ]\n}\n``` \n"},
          ],
        },
      ],
    });
  