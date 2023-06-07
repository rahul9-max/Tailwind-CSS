import React from 'react'

const News = () => {
  return (
    <div className='bg-[#87CEEB] p-4'>
    <div className='max-w-[1240px]  md:flex justify-between mx-auto w-full'>
<div className='p-[40px] '>
<h1 className='font-bold text-white text-2xl md:text-4xl'>Want to learn IT skills fast?</h1>
<p className=' text-white pt-2'>sign up to our newsletter and stay updated</p>
</div>
<div className='p-[20px] '>
<input type="text" className='p-2 mr-2 rounded' placeholder='your email' />
<button className='bg-black text-white mt-2 p-2 rounded '>Explore More</button>
<p className="text-white">we care about your privacy</p>
<p className="text-black">privacy policy</p>
</div>
    </div>
    </div>
  )
}

export default News