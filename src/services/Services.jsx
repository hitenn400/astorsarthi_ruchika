import React from "react";
import "./Services.css";
const service = [
  {
  name:"Astrology",
  message:"Astrology is the mathematics of your life, derived from the calculations of your planetary positions to predict what the future holds for you. Planets have huge effects in a person’s life. Know how is your birth chart affected from the current planetary transit happening in cosmic word."
  },
  {
    name:"Healing",
    message:" Address the various layers of your body in totality. Know more about seven chakra’s, nadi and kundali energy to bring changes in various organs. Heal yourself physically and mentally through this beautiful ancient science of colour, sound and balancing energies."
  },
  {
    name:"Signature",
    message:"What does your signature say about you? Achieve your dreams and goals with the correct strokes, the design and pattern reveals your identity, traits, nature and a lot more. Correct signatures help in boosting the energies of planets which helps you in achieving your goals much faster."
  },{
    name:"Numerology",
    message:"Unfold the divine relationship between a number and one or more coinciding events. Find correlation between Numbers and events that occur in our lives. Boost your personal and professional life with name energies and all number combinations with respect to your birth number."

  }
]
const Services = () => {
  return (
    <>
      <section id="services">
        <div className="services_main">
          <h2>Services</h2>
          <div className="services_line"></div>
          <div className="services_innerDiv1">
            <p>
              Decoding the planetary position is the science of reading planets
              & how to change their negative effects. <br></br>We help you to
              read the same in your birth chart & re-write the effects of
              planets the way you want.
            </p>
          </div>
          <div className="innerDiv2">
            {
              service.map((ind,index)=>{
                return(
                
                    <div className="innerDiv21" key={index}>
              <div className="innerDiv211">
                <h2>{ind.name}</h2>
              </div>
              <div className="innerDiv212">
                <p>
                  {ind.message}
                </p>
              </div>
            </div>
            
              )
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
