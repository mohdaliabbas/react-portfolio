import React from 'react';
import './App.css';
import './body.css';
import logo from './download.png';
import p1 from './percentage-to-sgpa.png';
import p3 from './images.jpg';
import p2 from './1543657-apple.jpg';
import p4 from  './Navigation-with-Sub-Navigation.jpg';
import photo from './WhatsApp Image 2023-08-07 at 19.31.50.jpeg';
import $ from 'jquery';
import  { useEffect } from 'react';



const App = () => {

  useEffect(() => {
    // Add event listener using jQuery when component mounts
    $('#myButton').click(function() {
      var url = 'http://sparkly-gelato-e63722.netlify.app/'; 
      window.open(url, '_blank', 'height=600,width=800'); // Opens the URL in a new window
    });
  }, []); 



    useEffect(() => {
    // Add event listener using jQuery when component mounts
    $('#myButton1').click(function() {
      var url = 'https://fancy-tulumba-977711.netlify.app/'; 
      window.open(url, '_blank', 'height=600,width=800'); // Opens the URL in a new window
    });
  }, []); 

  const handleSelectChange = (event) => {
    const selectedOptionValue = event.target.value;

    if (selectedOptionValue === 'projects') {
      window.location.href = 'https://google.com/';
    }
    
    if (selectedOptionValue === 'Github') {
      window.location.href = 'https://github.com/mohdaliabbas?tab=repositories';
    }
        if (selectedOptionValue === 'contact') {
      window.location.href = 'https://pythondocumentationbyali.blogspot.com/2020/06/contact-no-8299288287-e-mail-id.html';
    }
  };


  return (
    <div className='container' style={{ backgroundColor: '#232f3e' }}>
      <div className='nav'>
        <div className='logo'>
          <a href='/'>
            <img className='image' src={logo} alt='Logo' />
          </a>
        </div>
        <div className="place">
       
            ALI'S PORTFOLIO 
       
        </div>
<div className="hoverdiv">&#x1F49E;</div>
        <div className="profile">
          <img className="photo" src={photo} alt="Profile"  />
          
        </div>
      </div>
      
      <Body handleSelectChange={handleSelectChange} />
    </div>
  );
};

export const Body = ({ handleSelectChange }) => {
  return (
    <div id="a">
   <h1>FIND THE PROJECT</h1>
    <div className="inse">
   
 <span>KING </span><input type="text"  placeholder="Login..sample" />
      
      <select onChange={handleSelectChange}>
        <option value="home">Home</option>
        <option value="Github">Github</option>
        <option value="projects">Projects</option>
        <option value="contact">Contact</option>
      </select>
         
           <div className="pics">
        <div id="myButton"><a>Overview/Description</a></div>

 <div id="myButtonn"><a>Demo/Prototype</a></div>
<a href='https://sparkly-gelato-e63722.netlify.app/' alt="hlo"><img className="p" src={p1} alt="Profile"  /></a>
<div id="myButton1" ><a>Click Here</a></div>
<a href='https://fancy-tulumba-977711.netlify.app/'><img className="p" src={p2} alt="Profile"  /></a>

<div id="mybutton3" ><a href='https://bespoke-mooncake-a199a1.netlify.app/'><img className="p" src={p3} alt="Profile"  /></a></div>
<div id="mybutton4" ><a href='https://jolly-piroshki-ec1996.netlify.app/'><img className="p" src={p4} alt="Profile"  /></a></div>
          
 
 
          </div>  
 

 </div>

    </div>
  );
};

export default App;
