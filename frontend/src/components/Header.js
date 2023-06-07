import React,{useState} from 'react'
import {AiOutlineBars,AiFillCloseSquare} from 'react-icons/ai'

const Header = () => {
    const [toggle,setToggle]=useState(false)
  return (
    <div className='bg-[#87CEEB] p-4'>
    <div className='max-w-[1240px] flex justify-between mx-auto py-[10px]'>
    <div className='text-5xl font-bold text-[#8B8000]'>
    Rahul
    </div>
    {
        toggle ?
        <AiFillCloseSquare onClick={()=>setToggle(!toggle)} className='text-3xl text-white md:hidden block'/>
        :
        <AiOutlineBars onClick={()=>setToggle(!toggle)} className='text-3xl text-white md:hidden block'/>
    }
    
    
     <ul className='hidden md:flex text-xl text-white gap-10'>
      <li>Home</li>
      <li>Carrer</li>
      <li>About</li>
      <li>Service</li>
    </ul>
    {/* responsive design */}
   
     <ul className={`duration-300 md:hidden text-white fixed w-full top-[92px]
     ${toggle ? 'left-[0]' : 'left-[-100%]'}  bg-black`}>
      <li className='py-5'>Home</li>
      <li className='py-5'>Carrer</li>
      <li className='py-5'>About</li>
      <li className='py-5'>Service</li>
    </ul>
    </div>
  </div>
  )
}

export default Header