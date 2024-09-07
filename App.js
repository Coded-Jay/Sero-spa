import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Routes, Route, Link, Router} from 'react-router-dom';
import Dropdown from './Dropsetup';
import './App.css';
import Aplog from './Logo';
import Flyer1 from './Flyer2';
import Service from './Flyer';
import Home from './Home';
import About from './About';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import MultiInputForm from './Form';
import SearchArea from './Search';
import MyCarousel from './Carousel';
import Banner from './Banner';
import Contact from './Contact';
import Rauter from './Router';
import Webvid from './videos';







const Creed=()=>{

 

  const submission=()=>{

    alert("Submitted Successfuly");
  };


  
 
  return(
  
  <Container>
    <header>
   

     
    <div>
      <Aplog/>
    </div> 
    <h1>Sero Soft-Touch Spa</h1>

<div className="nav-contents">
<a href="www.google.com">Home</a>
<a href="#">Services</a>
<a href="#">About Us</a>
<a href="#">Insights</a>
</div>



   </header>

   <banner> 

<Banner />
 
<div className='search'>
<SearchArea />

<br />

<div className='drop'>
   <Dropdown />
   </div>
</div>

</banner> 

<br />


    <p className="para">    
    <h3>Welcome to Sero Spa</h3> 

At Sero Soft-Touch Spa, we bring the luxury of a spa directly to your doorstep within Abuja.<br></br>
 Our mobile spa service is designed to provide you with the ultimate relaxation and rejuvenating experience you deserve, in the comfort and privacy of your own home or hotel. <br></br>
 Whether you're looking for soothing massage, a revitalizing facial, or complete spa day, our experienced therapists are here waiting to cater to your everyday spa need.
    <br></br>
    Book an appointment with us today and start your journey to wellness and serenity!
    <br></br>
    <button className="chill">Book Now</button>

   <br /> <br />


    <marquee className="marq">You can book your massage therapist with just a click! </marquee>
    
    </p>

    
  <p className="para1">
    <h3>OUR SERVICES</h3>

    Indulge in a wide range of personalized treatments that are tailored to relax your body, revitalize your mind, and restore your spirit.<br />
    Explore our collection of images capturing our services ranging from Aromatheraphy, Deep Tissue, Prostate, Hot Stone, Relaxation Massages to Facials, Pedicure and Manicure. <br></br>
    
    <br /> 
     <Webvid />  <Webvid /> <Webvid />

    <div className='myflyer'>
      <Flyer1/>  
      <p className='para!'>Our mobile spa setup includes everything needed  <br /> 
      to create a calming and cozy atmosphere,<br />
      ensuring you feel pampered and relaxed. </p>
      <Dropdown />
    </div>

  <br /> <br />
  
    <button>Contact Therapist</button>
  <br /> <br />

  </p>
  <Webvid />

  <div className='carous'>
  <MyCarousel />
  </div>
    
  <p className="para">
    <h3>GALLERY</h3>
    <h4>Welcome to Our Gallery</h4>
    Explore our collection of images capturing the essence of relaxation, professional care and the peaceful ambiance we bring to you.
    
  <br /> <br />
     Whether it's in the comfort of your home or at your favourite location, we ensure you a rejuvenating experience every time. <br></br>

     <div className='servi'>
      <Service/>
    </div>
 
    <button>Contact Therapist</button>
    <br></br> <br></br>
  </p>
  <div>
  
   
  
  <h3>FILL FORM TO BOOK AN APPOINTMENT</h3>
  </div>
<div className='bot'>


  <MultiInputForm />
  </div>

<br></br>


    <marquee><div className="box">BOOK FOR MASSAGE SERVICES NOW!</div></marquee>
  

<br /> <br />
 
    <p className="para2">
    <h3>BLOG</h3>
    Visit our blog for post and updates on spa industry trends and wellness tips we bring to you on wednesdays and weekends<br></br>
    We are dedicated to meeting and at most times exceeding our customers expectations with special gifts and offers tailored for you.<br></br>
    You can visit our social media pages for more updates and reels on our new offers and improvements.<br></br>
    We can be too small to know you but our services are big to serve you!
    <br /> <br />
    </p>

    <div className='myfly'>
      <flyer/>
    </div> 
 
  

    
 
<p className='bot'><strong>
<marquee className="marq2">Thank you for visiting Sero Soft-Touch Spa. Book a therapist today! </marquee>
Sero Soft-Touch Massage is an exclusive service that you deserve for today! <br /> 
We offer home and apartment services to all our esteemed customers in the beautiful city of Abuja.<br /> 
 We are just a click or a call away. 
<br></br>
Have you called or visited Sero Mobile Spa today? 
<br></br>

Book now on Sero Soft-Touch Spa website to enjoy a seamless online booking experience or you can
also reach us through any of our social media handles to book an appointment,<br /> 
With fast response and flexible payment options, you are certain to enjoy the convenience of booking us online.

<br></br>
<strong>
<br /> <br /> 

Frequently Asked Questions (FAQs)<br /> <br /> 

1. How can i book for Massage Service?<br></br>
You can click on the Book Appointment button to chat instantly with a therapist <br /> 
or fill the booking form on our site to book an appointment anytime.<br></br>
simply reach us or through any of our social media handles.
<br></br><br /> 

2. Can I get home or hotel services from Sero Spa?<br></br>
Yes, you can get our services from the comfort of your home or hotel. <br /> <br /> 

3. What are the payment methods available on Sero Spa?<br></br>
We accept cash and cheques at physical location. You can use your cards (MasterCard, Visa and Verve),<br /> 
bank transfers and USSD incase of online booking and instant payment. 
<br /> <br /> 

4. What Is the Sero Spa Customer Care Line?<br></br>
We have a dedicated team that is always available to make sure your online booking experience on our website effortless.<br /> 
Simply dial/whatsApp +2349033008655/ 08102336596 to reach out to us for complaints and other inquiries. <br /> 
If you would like to Book for an appointment, please call us at 09167886518 or +2348102336596.<br /> 
 Whatever you do, we are always available to help.
 <br /> <br /> 

5. How do Sero Spa confirm my online payment? <br /> 
We confirm your online payment by the proof of payment receipt you will upload before submitting your booking form. <br /> 
You can also call us to confirm your payment.

</strong>
<br /> <br /> 

<button className='box4'>BOOK FOR A SERVICE?</button> <br /> <br />
</strong>

 <br /> <br />
 <div className='mail'>
   <input type="text" placeholder='Email to Subscribe'/>
   
    <button type='submit'>Subscribe</button>

  <h6>You can subscribe to our newsteller for offers and updates on our services. Enter your Emailto subscribe to newsteller.</h6>

</div>  

</p>

<footer>
<br /> 
 
<div> 
     <br></br>
 <div className='mylogo'>

      <Aplog/>

 </div> 
    
    <h1>Sero Soft-Touch Spa</h1>
</div>
 
   
<p className='f1'>

<a><b>SERVICES</b></a><br></br>
<a href="www.serospa.com">Spa</a><br></br>
<a href="#">Massage</a><br></br>
<a href="#">Manicure & Pedicure</a><br></br>

</p>


<p className='f3'>

<a><b>ABOUT US</b></a><br></br>
<a href="#">Contact us</a><br></br>
<a href="#">Customer Care</a><br></br>
<a href="#">Our Services</a><br></br>

</p>



<p className='f4'>

<a><b>TERMS & PRIVACY</b></a><br></br>
<a href="#terms">Terms</a><br></br>
<a href="#">Policy</a><br></br>
<a href="#">Privacyicy</a><br></br>

</p>


<p className='f2'>

<a><b>SOCIAL MEDIA</b></a><br></br>
<a href="#">Facebook</a><br></br>
<a href="#">Instagram</a><br></br>
<a href="#">LinkedIn</a><br></br>
<a href="#">Twitter X</a>

</p>

<p className='copy'>Copyright (C) Sero Soft-Touch Spa<br></br>All Rights Reserved<br></br>2024</p><br></br>

</footer>

</Container>

  );
  ReactDOM.render(<Creed/>, document.getElementById('root'));
};
  export default Creed;
  
