import React from 'react'

const Newsletter = () => {
  return (
    <section className='bg-gray-100 mt-20'>
        <div className='container mx-auto md:px-20 py-16 text-center'>
        <h1 className='font-bold text-3xl'> Subscribe Newsletter</h1>
        <div className='py-4'>
            <input type="text" placeholder="Please enter your email address" className='shadow border rounded w-9/12 px-3 py-3 text-grat-700 focus:outline-none focus:shadow-outline'/>
        </div>
            <button className='bg-orange-400 px-20 py-3 rounded-full text-gray-50 text-xl'>Subscribe</button>
        </div>
        
      
    </section>
  )
}

export default Newsletter
