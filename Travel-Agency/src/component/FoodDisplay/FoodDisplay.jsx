import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import { SlLocationPin } from "react-icons/sl";

import { FaClipboardCheck } from "react-icons/fa6";



const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext)
  return (
    <div className='travel-list container grid gap-5'>
      {
        food_list.map(({ id, image, name, icon, grade, price, description }) => {
          return (
            <div key={id} className='destination'>
              <div class="card">
                <img src={image} className="imageDiv" alt="..." />
                <div class="card-body">
                <span className='content d-flex gap-1'>
            <SlLocationPin className='icon mt-1'/>
              <span className='name'>{name}</span>
            </span>
                  <span className='content'>
                    <span className='name'>{icon}</span>
                  </span>
                  <div className='fees d-flex justify-content-between p-3 mt-2'>
                    <div className='grade'>
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className='price'>
                      <h5>{price}</h5>
                    </div>
                  </div>
                  <p class="card-text">{description}</p>
                  <a href="#" class="btn btn-primary">
                    DETAILS<FaClipboardCheck className='icon' />

                  </a>
                </div>
              </div>


            </div>
          )
        })
      }
    </div>
  )
}

export default FoodDisplay