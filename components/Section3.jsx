import React from 'react'
import Fetcher from '../lib/fetcher'
import Spinner from '../components/_child/Spinner'
import Error from '../components/_child/Error'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper'

// Import Swiper styles
import 'swiper/css';
import Author from './_child/Author';
import Link from 'next/link';
import Image from 'next/image';

const Section3 = () => {

    const { data, isLoading, isError } = Fetcher('api/popular')
    
    if( isLoading ) return <Spinner />
    if( isError ) return < Error />
  return (
    <section className='container mx-auto md:px-20 py-16'>
      <h1 className='font-bold text-4xl py-12 text-center'>Most Popular</h1>

      {/* swiper */}
      <Swiper
      breakpoints={{
        640 : {
            slidesPerView: 2,
            spaceBetween: 30
        }
    }}
    //   loop={true}
    //   autoplay={{
    //       delay: 50000
    //   }}
      
      
      >
        {
            data.map((value, index) => (
                <SwiperSlide key={index}><Post data={value}></Post></SwiperSlide>
            ))
        }
      </Swiper>


    </section>
  )
}

export default Section3


function Post ({ data }) {

    const { id, title, subtitle, category, img, published, author, description  } = data;

   
    return (
      <div className="grid">
          <div className="images">
              <Link href={"/"}><a><Image src={img || ""} alt='' width={600} height={400} /></a></Link>
          </div>
          <div className="info flex justify-center flex-col py-4">
              <div className="cat">
                  <Link href={"/"}><a className="text-orange-600 hover:text-orange-800">{category || "No Category"}</a></Link>
                  <Link href={"/"}><a className="text-gray-800 hover:text-gray-600">- {published || ""}</a></Link>
              </div>
              <div className="title">
                  <Link href={"/"}><a className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">{title || "No Title"}</a></Link>
              </div>
              <p className="text-gray-500 py-3">
              {description || "No Description"}
              </p>
              { author ? <Author {...author}/> : <></>}
          </div>
      </div>
  )
}