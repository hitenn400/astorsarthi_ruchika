import React from "react";
import "./Home.css";
import image from "../images/horoscope.png";
import Home_image from "../images/Ruchika_home.jpeg";

export const Home = () => {
  return (
    <>
      <div className="home_container">
        <div className="home_head">
          <h1>Ultimate </h1>
          <h1>Guide</h1>
          <p>To Astrology</p>
        </div>
        <div className="home_main">
          <div className="home_innerDiv1">
            <div className="home_innerDiv11">
              <div>
                <img src={image} className="home_horoscopeImage"></img>
              </div>
              <div className="home_innerDiv111">
                <img src={Home_image}></img>
              </div>
            </div>
          </div>
          <div className="home_innerDiv2">
            <div className="home_innerDiv112">
              <h5>Mrs. Ruchika Motwani Karda</h5>
              <div className="home_line "></div>
              <p>
                Ruchika is a certified astrologer, numerologist, healing and
                signature expert from Indore with several years of experience.
                Her style of reading is honest and compassionate. She won't give
                you false hope, but before declaring defeat, she takes a pause
                and requests God to take over. She believes that no matter what
                the situation is, with faith and patience, one can create a
                wonderful life for themselves. Ruchika has helped many clients
                in India as well as overseas in past few years. She holds
                Masters in Human Resources and has completed her engineering in
                Computer Science. In addition, her areas of specialisation
                include Guiding, Counselling and providing Consultation
                regarding relationships, marriage, education, career and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
