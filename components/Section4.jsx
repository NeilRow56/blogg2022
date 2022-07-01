import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Author from './_child/Author'

const Section4 = () => {
  return (
    <section className='container mx-auto md:px-20 py-16'>
        <div className= ' grid grid-cols-2'>
            <div className='item'>
            <h1 className='font-bold text-4xl py-12 text-center'>Business</h1>
            <div className='flex flex-col gap-6'>
                {/* Post */}
                { Post () }
                { Post () }
                { Post () }
                { Post () }
            </div>
            </div>

            <div className='item'>
            <h1 className='font-bold text-4xl py-12 text-center'>Travel</h1>
            <div className='flex flex-col gap-6'>
                {/* Post */}
                { Post () }
                { Post () }
                { Post () }
                { Post () }
            </div>
            </div>

        </div>
      
    </section>
  )
}

export default Section4

function Post () {
    return (
        <div className='flex gap-5'>
            <div className='image fle flex-col justify-start'>
            <Link href={"/"}><a><Image className='' src={"/images/img1.jpg"} alt="" width={300} height={250} /></a></Link>
            </div>
            <div className='info flex justify-center flex-col '>
            <div className="cat">
                    <Link href={"/"}><a className="text-orange-600 hover:text-orange-800">Business, Travel</a></Link>
                    <Link href={"/"}><a className="text-gray-800 hover:text-gray-600">- July 3, 2022</a></Link>
                </div>
                <div className="title">
                    <Link href={"/"}><a className="text-xl   font-bold text-gray-800 hover:text-gray-600">Your most unhappy customers are your greatest source of learning</a></Link>
                </div>
                <p className="text-gray-500 py-3">
                    Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind 
                    text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                </p>
                <Author />
            </div>
        </div>
    )
}