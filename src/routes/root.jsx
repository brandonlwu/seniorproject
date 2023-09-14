import { useState } from 'react';
import { Outlet, Link } from "react-router-dom";


function Main() {
  const [topic, setTopic] = useState('ALL')
  
  function expandStory() {

  }

  return (
    <div className="container">
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
          <button class="dropbtn">हिन्दी</button>
          </div>
        </div> */}
        <div className='topic-container'>
          <hr></hr>
          <button className = {`topic ${topic == 'ALL' ? 'selected': ''}`} onClick={() => setTopic('ALL')}>ALL</button>
          <button className = {`topic ${topic == 'IMMIGRATION' ? 'selected': ''}`} onClick={() => setTopic('IMMIGRATION')}>IMMIGRATION</button>
          <button className = {`topic ${topic == 'LOVE' ? 'selected': ''}`} onClick={() => setTopic('LOVE')}>LOVE&KINDNESS</button>
          <button className = {`topic ${topic == 'FRIEND' ? 'selected': ''}`} onClick={() => setTopic('FRIEND')}>FRIENDSHIP</button>
          <button className = {`topic ${topic == 'FAM' ? 'selected': ''}`} onClick={() => setTopic('FAM')}>FAMILY</button>          
          <button className = {`topic ${topic == 'LOSS' ? 'selected': ''}`} onClick={() => setTopic('LOSS')}>LOSS</button>
          <button className = {`topic ${topic == 'GROW' ? 'selected': ''}`} onClick={() => setTopic('GROW')}>GROWING</button>
          <button className = {`topic ${topic == 'CAREER' ? 'selected': ''}`} onClick={() => setTopic('CAREER')}>CAREERS&PASSIONS</button>
          <button className = {`topic ${topic == 'MORE' ? 'selected': ''}`} onClick={() => setTopic('MORE')}></button>
          <hr></hr>
        </div>
        <div className='photo-board'>
          <div className='col'>
          <div className='col-placard'>
            <Link to={`profile`} className='linkstyle'>
              <img src={require('../assets/pic8.jpg')} className='col-img'/>
            </Link>
            <p className = 'col-text'>“The first time we talked was towards high school graduation. The date was March 29th and he gave me a letter. Letters became very important
            during our courtship because once we graduated from high school, we were in different cities and eventually states. We have a whole trunk of written letters. I think I have written
            around 400. ”</p>
            </div>

            <div className='col-placard'>
              <img src={require('../assets/pic1.png')} className='col-img'/>
              <p className = 'col-text'>“He’s going to be, he is the man who will dance around the living room with 
              her and make silly faces and tell her silly stories and tell her that he loves her all the time and 
              take her on great adventures and read her amazing stories and make cool shit with her and go on 
              long walks with her and put the world right for her. Just the way they look at each other. She 
              can’t see shit. But he sees a lot. It’s different than he looks at me.”</p>
            </div>

            <div className='col-placard'>
              <img src={require('../assets/pic4.png')} className='col-img'/>
            </div>

          </div>
          <div className='col'>
            <div className='col-placard'>
              <img src={require('../assets/pic2.png')} className='col-img'/>
              <p className = 'col-text'>“Whenever she saw me drawing, my mother would tell me to stop. ‘You’ll be 
              nothing but a poor artist,’ she’d say. Her life was very hard. She worked in a sweatshop, so she 
              wanted me to get a ‘real job’ when I grew up. But art was the only thing I was good at. I was failing 
              all my classes. I couldn’t speak English well. But I’d paint these little watercolors, and it was 
              enough to make my teachers say: Wow.’”</p>
            </div>
            <div className='col-placard'>
              <img src={require('../assets/pic5.png')} className='col-img'/>
            </div>
          </div>
          <div className='col'>
            <div className='col-placard'>
              <img src={require('../assets/pic6.png')} className='col-img'/>
              <p className = 'col-text'>“Stanley’s Pharmacy is based on all the stuff I knew I needed to do, but couldn’t. ”</p>
            </div>
            <div className='col-placard'>
              <img src={require('../assets/pic3.png')} className='col-img'/>
              <p className = 'col-text'>“Our community was hit first. Asian restaurants were empty long before other restaurants.”</p>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Main;
