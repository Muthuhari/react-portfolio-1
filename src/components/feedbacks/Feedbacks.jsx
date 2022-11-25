import React from 'react'
import './feedbacks.css'
import AVTR1 from '../../assests/avatar1.jpg'
import AVTR2 from '../../assests/avatar2.jpg'
import AVTR3 from '../../assests/avatar3.jpg'
import AVTR4 from '../../assests/avatar4.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';



const data =[
  {
     avatar: AVTR1,
     name: 'nishan rathnayake',
     review: 'wow that,s good'
    },
    {
      avatar: AVTR2,
      name: 'ridma rathnayake',
      review: 'wow that,s good'
    },
    {
      avatar: AVTR3,
      name: 'sadun perera',
      review: 'wow that,s good'
    },
    {
      avatar: AVTR4,
      name: 'sadun perera',
      review: 'wow that,s good'
    },
  ]
    





const Feedbacks = () => {
  return (
    <section id='feedbacks'>
      <h5> Review from clients</h5>
      <h2>Feedbacks</h2>

      <Swiper className="container feedbacks__container"
           // install Swiper modules
           modules={[Pagination]}
           spaceBetween={40}
           slidesPerView={1}
           pagination={{ clickable: true }}>
    
        {
          data.map(({avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="feedbacks">
              <div className="client__avatar">
                <img src={avatar}/>
                </div>
               
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          }
          )
        }
 
      </Swiper>
    </section>
  )
}

export default Feedbacks