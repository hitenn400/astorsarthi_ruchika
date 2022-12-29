import React from 'react'
import './Contact.css';
import {HiOutlineMail} from 'react-icons/hi'
import{AiFillInstagram,AiOutlineInstagram,AiOutlineWhatsApp} from 'react-icons/ai'
import { useForm } from "react-hook-form";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
    const btnClick=()=>{
        toast.success('Message sent successfully!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }
    const form = useRef();
    const refdate = useRef();
    const reftime = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_4g4f96f', 'template_gysve7e', form.current, 'YVHi2B-uExiw234JZ')
        .then((result) => {
            console.log(result.text);
            btnClick();
        }, (error) => {
            console.log(error.text);
        })
        e.target.reset();
    };
    const contact_api = [
        {
            icon:<HiOutlineMail></HiOutlineMail>,
            name:'Email',
            desc:'astrosarthiruchika@gmail.com',
            link:"mailto:astrosarthiruchika@gmail.com"
        },
        {
            icon:<AiOutlineInstagram></AiOutlineInstagram>,
            name:'Instagram',
            desc:'@ruchikamotwanikarda',
            link:"https://www.instagram.com/ruchikamotwanikarda/"
        },
        {
            icon:<AiOutlineWhatsApp></AiOutlineWhatsApp>,
            name:'Whatsapp',
            desc:'(+91)947-955-5477',
            link:"https://api.whatsapp.com/send?phone=9479555477"
        }
    ];
  return ( <>
 <section id='contact'>
    <div className='contact_main'>
            <div >
            <h2>Contact Me </h2>
            </div>
        <div className='contact_container'>
            <div className='contact_box'>
                {
                    contact_api.map((ele,ind)=>{
                        return (
                                
                                    <div className='contact_box_inner' key={ind}>
                                        {ele.icon}
                                        <h4>{ele.name}</h4>
                                        <p>{ele.desc}</p>
                                        <a href={ele.link} target="blank">Send a message</a>
                                    </div>
                                
                            )
                    })
                   
                } 
                 
            </div>
           {/* <input type="text" ref={refdate} name="dateOfBirth" placeholder='Date of Birth' onFocus={() => (refdate.current.type = "date")}
                onBlur={() => (refdate.current.type = "text")}  ></input>
                <input type="text" ref={reftime} name="timeOfBirth" placeholder='Time of Birth' onFocus={() => (reftime.current.type = "time")}
                onBlur={() => (reftime.current.type = "time")} ></input> */}
            <form  ref={form} onSubmit={sendEmail}>
                <input type="text" name="name" placeholder='Your Full Name' required></input>
                <input type="email" name="email"  placeholder='Your Email' required></input>
                <input type="text" pattern="[6-9][0-9]{9}"  name="contactNo" placeholder='Your Contact No.' required></input>
                <input type="text" name="profession" placeholder='Your Profession' required></input>
                <input type="text" ref={refdate} name="dateOfBirth" placeholder='Date of Birth' onFocus={() => (refdate.current.type = "date")}
                onBlur={() => (refdate.current.type = "text")}  ></input>
                <input type="text" ref={reftime} name="timeOfBirth" placeholder='Time of Birth' onFocus={() => (reftime.current.type = "time")}
                onBlur={() => (reftime.current.type = "time")} ></input>
                {/* <input type="date" name="dateOfBirth" placeholder='Date of Birth' required></input>
                <input type="time" name="timeOfBirth" placeholder='Time of Birth' required ></input> */}
                <input type="text" name="placeOfBirth"  placeholder='Your Place of Birth' required></input>
                <textarea name="message" rows='7'  placeholder="Your Message"></textarea>
                <button type="submit" className='contact_btn'>Send Message</button>
            </form>
            
        </div>
        </div>
    </section>
            <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />
</>
  )
}

export default Contact;