import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const navbar = () => {
  return (
    <div className='flex justify-betweem items-center px-4 py-4'>
        <Link href="/">
        <Image  draggable={false} loading='lazy' src="/logo.svg" width={100} height={100} alt='logo'/>
        </Link>
    </div>
  )
}

export default navbar