import React from 'react'
import './Header.css'
import video from '../../assets/video.mp4'
import { FaLocationDot } from "react-icons/fa6";
import { CiFilter } from "react-icons/ci";
function Header() {
  return (
    <section className='home'>
      <div className='overlay'></div>

      <video src={video} muted autoPlay loop type='video/mp4'></video>

      <div className='homecontent container'>
        <div className='textDiv'>
          <span className='smallText'>
            Our Packages
          </span>
          <h1 className='homeTitle'>
            Search your Holiday
          </h1>
        </div>
     
      <div className='cardDiv'>
      <form className='d-flex align-items-center justify-content-center gap-5'>
  <div class="col">
    <label for="exampleInputEmail1" class="form-label">Search your destination:</label>
    <input type="email" class="form-control" placeholder='Enter name here...' id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div class="col">
  <label form='date'>Select your date:</label>
   
    <input type="date" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="col">
  <label for='price'>Max Price:</label>
    
    <input type="range" class="form-control" id="exampleInputPassword1"/>
  </div>
</form>
 </div>
      </div>


    </section>

  )
}

export default Header