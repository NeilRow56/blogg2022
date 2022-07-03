import Image from "next/image"
import Link from "next/link"
import Author from "./_child/Author"
import Fetcher from '../lib/fetcher'
import Spinner from '../components/_child/Spinner'
import Error from '../components/_child/Error'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper'

// Import Swiper styles
import 'swiper/css';

const Section1 = () => {

    const { data, isLoading, isError } = Fetcher('api/trending')
    
    if( isLoading ) return <Spinner />
    if( isError ) return < Error />

    SwiperCore.use([Autoplay])

    const bg = {
        background: "url('/images/banner.png') no-repeat",
        backgroundPosition: "right"
    }
  return (
    <section className="py-16" style={ bg }>
        <div className="container mx-auto md:px-20">
            <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>

            <Swiper
               
                slidesPerView={1}
                // loop={true}
                // autoplay={{
                //     delay: 50000
                // }}
                
                >
                {
                    data.map((value, index) =>(
                        <SwiperSlide key={index}>
                            <Slide data={value}></Slide>
                        </SwiperSlide>
                    ))
                }
                
      ...
            </Swiper>

            


        </div>
    </section>
  )
}

export default Section1

function Slide ({data}) {

    const { id, title, subtitle, description, category, img, published, author } = data;

    return (
        <div className='grid md:grid-cols-2'>
            <div className="image">
                <Link href={"/"}><a><Image src={img || '/'} alt="" width={600} height={600} /></a></Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="cat">
                    <Link href={"/"}><a className="text-orange-600 hover:text-orange-800">{category || "Unknown "}</a></Link>
                    <Link href={"/"}><a className="text-gray-800 hover:text-gray-600">- {published || "Unknown"}</a></Link>
                </div>
                <div className="title">
                    <Link href={"/"}><a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">{title || "Unknown"}</a></Link>
                </div>
                <p className="text-gray-500 py-3">
                    {subtitle || "subtitle"}
                </p>
                <p className="text-gray-500 py-3">
                    {description || "description"}
                </p>
                { author ? <Author /> : <></>}
            </div>
        </div>
    )
}
