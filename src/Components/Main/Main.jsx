import React from 'react'
import './main.css'
// import {IoLocationSharp} from 'react-icons/io';
import { GrLocation } from "react-icons/gr";
import {BsFillClipboardHeartFill} from "react-icons/bs"
import img from '../../Assets/img(1).jpg';

const Data=
[
{
  id:1,
  imgSrc:img,
  destTitle: 'Bora Bora',
  location: 'New Zealand',
  grade: 'CULTURAL RELAX',
  fees: '₹275000',
  description: ' Bora Bora, a tropical paradise in French Polynesia, captivates travelers with its turquoise lagoons, luxurious overwater bungalows, vibrant marine life, and serene island atmosphere. A heavenly escape for ultimate relaxation.' 
},
// {
//   id:2,
//   imgSrc: img2,
//   destTitle: 'Machu Picchu',
//   location: 'Peru',
//   grade: 'CULTURAL RELAX',
//   fees: '₹300000',
//   description: 'Machu Picchu, an awe-inspiring ancient Incan citadel in Peru, lures travelers with its mystical beauty, panoramic vistas, and profound historical significance. A spiritual journey back in time amid breathtaking Andean landscapes.' 
// },
// {
//   id:3,
//   imgSrc: img3,
//   destTitle: 'Great Barrier Reef',
//   location: 'Australia',
//   grade: 'CULTURAL RELAX',
//   fees: '₹350000',
//   description: 'The Great Barrier Reef, a natural wonder in Australia, enthralls travelers with its vibrant marine life, stunning coral formations, and world-class diving and snorkeling experiences. A mesmerizing aquatic paradise to explore.' 
// },
// {
//   id:4,
//   imgSrc: img4,
//   destTitle: 'Cappadocia',
//   location: 'Turkey',
//   grade: 'CULTURAL RELAX',
//   fees: '₹150000',
//   description: 'Cappadocia, a surreal wonderland in Turkey, amazes travelers with its unique rock formations, ancient cave dwellings, hot air balloon rides, and rich cultural heritage. A magical destination for extraordinary adventures..' 
// },
// {
//   id:5,
//   imgSrc: img5,
//   destTitle: 'Guanajuato',
//   location: 'Mexico',
//   grade: 'CULTURAL RELAX',
//   fees: '₹130000',
//   description: 'Guanajuato, a captivating city in Mexico, captivates travelers with its vibrant colonial architecture, colorful streets, rich history, and lively atmosphere. An immersive journey through the heart of Mexican culture and charm.' 
// },
// {
//   id:6,
//   imgSrc: img6,
//   destTitle: 'Cinque Terre',
//   location: 'Italy',
//   grade: 'CULTURAL RELAX',
//   fees: '₹190000',
//   description: 'Cinque Terre, a breathtaking coastal gem in Italy, enchants travelers with its colorful cliffside villages, scenic hiking trails, delectable cuisine, and Mediterranean charm. A coastal haven for wanderers seeking pure enchantment.' 
// },
// {
//   id:7,
//   imgSrc: img7,
//   destTitle: 'Angkor Wat',
//   location: 'Cambodia',
//   grade: 'CULTURAL RELAX',
//   fees: '₹65000',
//   description: 'Angkor Wat, an awe-inspiring archaeological marvel in Cambodia, transports travelers through time with its ancient temples, intricate carvings, and mystical ambiance. A must-visit destination for history enthusiasts and intrepid explorers.' 
// },
// {
//   id:8,
//   imgSrc: img8,
//   destTitle: 'Taj Mahal',
//   location: 'India',
//   grade: 'CULTURAL RELAX',
//   fees: '₹30000',
//   description: 'An immense mausoleum of white marble, built-in Agra by Mughal emperor Shah Jahan in memory of his wife Mumtaz, the monument is breathtakingly beautiful. This place is known for its luxurious stays-and  adventurous activities' 
// },
// {
//   id:9,
//   imgSrc: img9,
//   destTitle: 'Bali Island',
//   location: 'Indonesia',
//   grade: 'CULTURAL RELAX',
//   fees: '₹100000',
//   description: 'Bali, a dreamy travel destination, beckons with its idyllic beaches, lush landscapes, cultural treasures, and vibrant nightlife. An enchanting paradise for wanderers seeking an unforgettable journey of relaxation and exploration.' 
// },

]

const Main = () => {
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">
          Most Visited Destinations
        </h3>
      </div>
      <div className="secContent grid">


        {/*here i use high order array mmethod (map). To do that we shall use a list of object in an array . I am going to create an array named data and from that we shall .map()array to fetch each destinantions at once.*/ }
{
  Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>
  {
    return (
      <div key ={id}className="singleDestination">
        {/* here it will return singlr id from the map array */}

        <div className="imageDiv">
          <img src={imgSrc} alt="{destTitle}" />
        </div>
        <div className="cardInfo">
          <h4 className="destTitle">
            {destTitle}
          </h4>
          <span className="continent flex">
          <GrLocation className="icon"/>
          <span className="name">{location}</span>
          

          </span>
          <div className="fees flex">
            <div className="grade">
              <span>{grade} <small> +1</small></span>
            </div>
            <div className="price">
              <h5>{fees}</h5>
            </div>
          </div>
          <div className="desc">
            <p>{description}</p>
          </div>
          <button className='btn flex'>
          DETAILS <BsFillClipboardHeartFill className='icon'/>

          </button>
        </div>
      </div>
    )
  })
}

      </div>
    </section>
  )
}

export default Main