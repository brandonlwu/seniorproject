import { useState } from 'react';
import { Outlet, Link } from "react-router-dom";

function Profile() {
  const [topic, setTopic] = useState('ALL')
  

  return (
    <div className="profile-container">
      <div className='header'>
        <Link to={'/'} className='linkstyle'>
        <p className='headline'>Asian American Digital Archive</p>
        </Link>
        <button className='button1 storybutton'>BROWSE THE ARCHIVE</button>
        <button className='button1 storybutton'>SHARE A STORY</button>
        {/* <div class="dropdown">
          <button class="dropbtn">ENGLISH</button>
          <div class="dropdown-content">
          <button class="dropbtn">中文</button>
          <button class="dropbtn">한국어</button>
          </div>
        </div> */}
        <hr></hr>
      </div>
      <div className='story-container'>
        <img src={require('../assets/header1.jpg')} className='headerimg'/>
        <p className = 'col-text'>
            The first time we talked was towards high school graduation. The date was March 29th and he gave me a letter. Letters became very important
            during our courtship because once we graduated from high school, we were in different cities and eventually states. We have a whole trunk of written letters. I think I have written
            around 400. 
        </p>
      </div>
    </div>
  );
}

export default Profile;
