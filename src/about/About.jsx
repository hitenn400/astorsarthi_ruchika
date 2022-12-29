import "./About.css";
import React from "react";
import about_img from "../images/Ruchika_about.jpeg";
const About = () => {
  return (
    <>
      <section id="about" >
        <div className="about_main">
          <div className="about_innerDiv1">
            <img src={about_img}></img>
          </div>
          <div className="about_innerDiv2">
            <h2>From the Master's desk..</h2>
            <div className="about_line"></div>
            <p>
              I feel that everyone is fighting their toughest battles when they
              seek help from others. Some might stay silent and some just seek
              that help, and the fact is that both of them are the heroes of
              their own life. When you face a problem it is only you who would
              solve them while I am your guide along the way to back you up and
              keep going. You are important and you matter. With years in this
              subject, I think that I have achieved what is said to be an
              experience, but for me, honesty is greater than experience in this
              field as that's what you expect from us, THE TRUE READING...
              <br></br>
              <br></br>
              Earlier I was into a corporate job but all those years there was
              something that was missing and one fine day I was introduced to
              occult sciences. It was 'love at first sight. I am into this field
              from past few years and helping people in their difficult times. I
              provide modern-day simple remedies for situations like Career,
              Love Relationships, Marriage, Money, Business etc to UNLOCK YOUR
              INNER WISDOM AND MANIFEST YOUR FUTURE.
              <br></br>
              <br></br>I make sure that I reach the core of the problem and
              eradicate it from there. All my numerous experiences have been a
              learning experience as well. So when I Help You I have the power
              of all those happy souls that I have helped and the motivation to
              guide you in tackling the hurdles of your life. Let's come
              together and beat the hard levels of the game called life.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
