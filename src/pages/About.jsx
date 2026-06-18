import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLeteerBox from '../components/NewsLeteerBox'

const About = () => {
  return (
    <div>
       <div className='text-2xl text-center pt-8 border-t'>
            <Title text1={"About"} text2={"Us"}></Title>
       </div>
       <div className='my-10 flex flex-col md:flex-row gap-16'>
            <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
            <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                <p>Welcome to our store, your one-stop destination for quality products at competitive prices. We are committed to providing a seamless shopping experience with a wide range of products, secure payments, and reliable delivery. Customer satisfaction is at the heart of everything we do.</p>
                <p>We bring together quality, affordability, and convenience to make online shopping simple and enjoyable. Explore our carefully selected products, enjoy secure transactions, and shop with confidence knowing that your satisfaction is our top priority.</p>
                <b className='text-gray-800'>Our Mission</b>
                <p>Our mission is to make online shopping accessible, convenient, and trustworthy for everyone. We strive to provide high-quality products, exceptional customer service, and a seamless shopping experience that exceeds customer expectations. Through innovation and reliability, we aim to build lasting relationships with our customers and become their preferred shopping destination.</p>
            </div>
       </div>

       <div className='text-xl py-4 '>
            <Title text1={"Why"} text2={"Choose US"}></Title>
       </div>
       <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
             <b>Quality Assurance:</b>
             <p  className='text-gray-600'>Quality is our top priority. Every product is carefully selected and reviewed to ensure it meets our standards of excellence, reliability, and value. We are committed to delivering products that our customers can trust, providing a shopping experience built on quality, consistency, and satisfaction.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
             <b>Convenience:</b>
             <p  className='text-gray-600'>We believe shopping should be simple, fast, and hassle-free. Our platform is designed to help you easily discover products, enjoy secure checkout, and receive your orders with reliable delivery. From browsing to purchase, we focus on providing a smooth and convenient shopping experience for every customer.</p>
          </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
             <b>Exceptional Customer Service:</b>
             <p className='text-gray-600'>Our customers are at the heart of everything we do. We are dedicated to providing friendly, responsive, and reliable support to ensure a positive shopping experience. Whether you have a question, need assistance, or require post-purchase support, our team is always ready to help.</p>
          </div>
       </div>
       <NewsLeteerBox/>
    </div>
  )
}

export default About