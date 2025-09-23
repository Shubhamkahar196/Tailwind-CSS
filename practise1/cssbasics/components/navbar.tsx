import React from 'react'

export const navbar = () => {
    const links = [
        {
            title: 'Guide',
            href: '#',
        },
        {
            title: 'Price',
            href: '#',
        },
        {
            title: 'Login',
            href: '#',
        },
        {
            title: 'Founder',
            href: '#',
        },
    ]
  return (
    <div className='navbar-root'>
        <div className='logo'>
            finta
        </div>
        <div className='links'>
            {links.map((link,idx)=>(
                <a key={link.title} className='link-items' href={link.href}>{link.title}</a>
            ))}
            <button className='btn'>
                Start free trial
            </button>
        </div>
    </div>
  )
}

export default navbar