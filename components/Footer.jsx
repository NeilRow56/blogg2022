import Link from 'next/link'
import React from 'react'
import Newsletter from './_child/Newsletter'
import { ImFacebook, ImTwitter, ImYoutube } from 'react-icons/im'

const Footer = () => {

    const bg = {
        backgroundImage : "url('/images/footer.png')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: "bottom left"
      }   

  return (
    <footer className="bg-gray-50" style={bg}>
        <Newsletter />
        <div className='py-5'>
            <div className='flex gap-6 justify-center'>
            <Link href='/'><a><ImFacebook color="#888888" /></a>
                </Link>
                <Link href='/'><a>< ImTwitter color="#888888"  /></a>
                </Link>
                <Link href='/'><a>< ImYoutube color="#888888" /></a>
                </Link>
            </div>
            <p className="py-5 text-gray-400 text-center">Copyright ©2022 All rights reserved | This template is made with  by Daily Tuition</p>
              <p className="text-gray-400 text-center">Terms & Condition</p>
        </div>
      
    </footer>
  )
}

export default Footer
