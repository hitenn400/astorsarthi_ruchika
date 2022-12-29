import './Footer.css'
import React from 'react'
import{BsTwitter,BsFacebook} from 'react-icons/bs'
import{AiOutlineInstagram,AiFillYoutube} from 'react-icons/ai'


const Footer = () => {
  return (
    <footer>
    <div className='footer_main'>
        
        <div className='footer_innerDiv2'>
        <a href="https://twitter.com/ruchika_k26?lang=en" target="blank"><BsTwitter></BsTwitter></a>
        <a href="https://www.facebook.com/ruchika.motwani.7" target="blank"><BsFacebook></BsFacebook></a>
        <a href="https://www.instagram.com/ruchikamotwanikarda/" target="blank"><AiOutlineInstagram></AiOutlineInstagram></a>
        <a href="https://www.youtube.com/@astrosarthiruchika" target="blank"><AiFillYoutube></AiFillYoutube></a>
        </div>
        <div className="footer_line "></div>
        <div className='footer_innerDiv1'>
        <h5>© Copyright 2023 All Rights Reserved</h5>
        </div>
    </div>
    </footer>
  )
}

export default Footer