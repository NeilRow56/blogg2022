import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Author from './Author'
import Fetcher from '../../lib/fetcher'
import Spinner from './Spinner'
import Error from './Error'

const Related = () => {
  const { data, isLoading, isError } = Fetcher('api/trending')
    
    if( isLoading ) return <Spinner />
    if( isError ) return < Error />

  return (
    <div>
      <h1 className='font-bold text-3xl py-10 text-center'>Related</h1>
      <div className="flex flex-col gap-10">

      {
                    data.map((value, index) => (
                        <Post key={index} data={value}></Post>
                    ))
                }
             </div>
        
      </div>
    
  )
}

export default Related

function Post ({ data }) {


  const { id, title, category, img, published, author } = data 
    return (
    <div className="flex gap-5">
        <div className="image flex flex-col justify-start">
        <Link href={`/posts/${id}`}><a><Image src={img || ""} alt=''className="rounded" width={300} height={200} /></a></Link>
        </div>
        <div className="info flex justify-center flex-col">
                <div className="cat">
                    <Link href={`/posts/${id}`}><a className="text-orange-600 hover:text-orange-800">{category || "Unknown"}</a></Link>
                    <Link href={`/posts/${id}`}><a className="text-gray-800 hover:text-gray-600">- { published || "Unknown"}</a></Link>
                </div>
                <div className="title">
                    <Link href={`/posts/${id}`}><a className="text-xl font-bold text-gray-800 hover:text-gray-600">{ title || "No Title"}</a></Link>
                </div>
                { author ? <Author {...author}/> : <></>}
            </div>
    </div>
    )
}