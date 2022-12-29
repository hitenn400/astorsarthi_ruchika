import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import "./Testimonial.css";
const reviews = [
  {
    name: "Sachi",
    review:"You have simply changed my life. I was so stressed and did what not before meeting you to get what I wanted the most in my life. There were so many distractions and was really depressed. I really want to thank my destiny that I met you and followed your 41 days tips and the miracle happened. I got what I have been longing for! You are an angle to me and can't stop admiring your positive vibes.",
  },
  {
      name: "Kaneshk",
      review:"The things she told me to do and perform after in depth evolution, combining astrology and numerology, I followed those things religiously. Now I can literally feel changes in my life as can feel the same old toxic pattern getting vanished and I can see positive things happening in my life. Be it my career and my personal life. I am so thankful and grateful for having her as my mentor that I always wanted.",
  },
  {
      name: "Priya ",
      review: "Thank you so much Healing yantra ke liye. Mujhe bhut aaram mila hai. Mujhe idea nahi tha that planets can help us to recover so much thank you so much my knee is much better now, no pain now. Your remedies did wonders with health in this time.",
  },
  {
      name:"Satyender",
      review:" Name change and number balancing did wonders to me this year. I never new our name spelling name has so much power to rule us personally and professionally. Your timely remedy suggestion and tips has helped me so much grow.",
  },
  {
      name:"Rajat",
      review:"Thankyou for the counselling & Guidance. Your analysis was very precise to the situations I have gone through & The things that are lined up for me.  The remedies suggested by you really worked, I have observed things getting easier, working in my favour & eventually getting the desired results.I appreciate your patience, calmness & confidence while explaining the reasoning behind all the analysis."
  }
  ,{
      name:"S.K. Pathan",
      review:"Please accept my gratitude for all the guidance u gave me. All your remedies are so logical and i could see miraculous changes happening in my life. For few years i was stuck in major financial issues but the small changes you brought in my life helped me to get back on track and by god's grace i am progressing each day. Also one thing i really like about you is ur positive approach n how you help us to change our mindset. Thank you again"
  }

];
const Testimonial = () => {
  
  return (
    <div className="testimonial_main">
      <div className="testimonial_innerDiv1">
        <h2>Testimonials</h2>
        <div className="testimonial_line"></div>
      </div>
      <div className="testimonial_swiper">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper">
        {reviews.map((ind,keyy)=>{
            return (
            
            <SwiperSlide key={keyy}>
                
                <h2>{ind.name}</h2>
            <p>{ind.review}</p>
            </SwiperSlide>
            )
        })}
      </Swiper>
        </div>
    </div>
  );
};

export default Testimonial;
