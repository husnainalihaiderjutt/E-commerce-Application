import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum is simply a dummy text of the printing Lorem ipsum is simply a dummy text of the printing Lorem ipsum is simply a dummy text of the printing</p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>Company</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li> 
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>Get in touch</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
              <li>+92-30423-69993</li>
              <li>halihaider511@gmail.com</li>
            </ul>
        </div>
        <div className='col-span-full'>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2026@forever.com - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer