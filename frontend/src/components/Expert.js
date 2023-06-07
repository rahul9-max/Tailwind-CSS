import React from 'react'
import raw from '../assets/raw.webp'

const Expert = () => {
  return (
    <div className='max-w-[1240px]  md:grid grid-cols-2 py-[20px] mx-auto '>
        <div className='col-span-1 md:w-[80%] text-center'>
            <img src={raw} className='inline'/>
        </div>
        <div className='col-span-1 p-[40px] md:flex flex-col justify-center'>
        <h3 className='font-bold text-green-500 text-2xl  mx-auto  my-4'>Expert in Computers</h3>
        <p className='my-4 text-justify'>The space is not appearing after "Learn" in the code because the Typed component from the react-typed library is rendering its contents dynamically
         and appending them directly to the DOM without preserving the space.
To resolve this issue, you can add a space character after the "Learn" text within the Typed component's strings array. Here's an updated version of your code:</p>
        
<button className='bg-black text-white p-2 rounded mx-auto my-2 md:w-[20%]'>Explore..</button></div>
    </div>
  )
}

export default Expert