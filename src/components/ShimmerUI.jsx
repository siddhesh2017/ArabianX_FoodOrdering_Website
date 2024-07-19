import React from 'react';
import '../components/ShimmerUI.css'

const ShimmerUI = () => {
  return (
    <>
        <div className='shimmer'>
          {
            Array(10).fill("").map((item, index)=>{
              return (
                <div key={index} className='shimmer-cards'>
                </div>
              )
            })
          }
        </div>
    </>
  )
}

export default ShimmerUI