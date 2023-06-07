import React from 'react'
import Typed from 'react-typed'

const Banner = () => {
  return (
    <div className=' bg-[#87CEEB] py-[50px] min-h-[700px]'>
    <div className='max-w-[1240px] py-[100px] mx-auto font-bold text-center '>
        <div className="text-xl md:text-4xl md:py-5">Learn With Us</div>
        <h1 className="text-2xl md:text-[60px] text-white md:py-5">Grow With Us</h1>
        <h2 className="text-xl md:text-4xl text-white md:py-5"> 
        Learn{' '}      
         <Typed  
            strings={['Web development','Python','MERN']}
            typeSpeed={80} loop={true} backSpeed={50}    
        />
        </h2>
        <button className='bg-black text-white p-2 rounded my-6'>Explore More</button>
        </div>
    </div>
  )
}

export default Banner