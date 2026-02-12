import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const navbar = () => {
  const links = [
    {
     
      href:"/founders",
      title: " Founders"
   
    },
    {
      href:"/guide",
      title: "Guide"

    },
    {
      href:"/pricing",
      title: "Pricing"

    },
    {
      href:"/Log In",
      title: "Log In"

    },
  ]
  return (
    <div className='flex justify-between items-center px-4 py-4'>
        <Link href="/">
        <Image  draggable={false} loading='lazy' src="/logo.svg" width={100} height={100} alt='logo'/>
        </Link>
        <div className='flex items-center gap-8'>
          {links.map((link,idx)=>(
          <Link href={link.href} key={idx} className='text-black font-medium hover:text-neutral-600 transition-duration-200'>{link.title}</Link>
        ))}
        <button className='bg-blue-500 hover:bg-blue-700 font-medium text-xl text-white rounded-lg py-2 px-4 shadow-lg text-shadow-md tracking-wide'>Get Started </button>
        </div>
    </div>
  )
}

export default navbar