import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Author from './_child/Author'
import Fetcher from '../lib/fetcher'
import Spinner from '../components/_child/Spinner'
import Error from '../components/_child/Error'

const Section4 = () => {

    const { data, isLoading, isError } = Fetcher('api/popular')
    
    if( isLoading ) return <Spinner />
    if( isError ) return < Error />

  return (
    <section className='container mx-auto md:px-20 py-16'>
        <div className= ' grid grid-cols-2'>
            <div className='item'>
            <h1 className='font-bold text-4xl py-12 text-center'>Business</h1>
            <div className='flex flex-col gap-6'>
                {/* Post */}
                { data[1] ? <Post data ={data[1]} ></Post> : <></>}
                { data[2] ? <Post data ={data[2]} ></Post> : <></>}
                { data[3] ? <Post data ={data[3]} ></Post> : <></>}
            </div>
            </div>

            <div className='item'>
            <h1 className='font-bold text-4xl py-12 text-center'>Travel</h1>
            <div className='flex flex-col gap-6'>
                {/* Post */}
                { data[4] ? <Post data ={data[4]} ></Post> : <></>}
                { data[5] ? <Post data ={data[5]} ></Post> : <></>}
                { data[2] ? <Post data ={data[2]} ></Post> : <></>}
            </div>
            </div>

        </div>
      
    </section>
  )
}

export default Section4

function Post ({ data }) {

    const { id, title, subtitle, category, img, published, author, description } = data;

    return (
        <div className='flex gap-5'>
            <div className='image fle flex-col justify-start'>
            <Link href={"/"}><a><Image className='' src={img || "" }  alt="" width={300} height={250} /></a></Link>
            </div>
            <div className='info flex justify-center flex-col '>
            <div className="cat">
                    <Link href={"/"}><a className="text-orange-600 hover:text-orange-800">{category || "Unknown"}</a></Link>
                    <Link href={"/"}><a className="text-gray-800 hover:text-gray-600">- {published || "Unknown"}</a></Link>
                </div>
                <div className="title">
                    <Link href={"/"}><a className="text-xl   font-bold text-gray-800 hover:text-gray-600">{title || "No Title"}</a></Link>
                </div>
                <p className="text-gray-500 py-3">
                    { description || "No description"}
                </p>
                { author ? <Author></Author> : <></>}
            </div>
        </div>
    )
}