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
        <div>
            {links.map((link,idx)=>(
                <a key={link.title} href={link.href}>{link.title}</a>
            ))}
        </div>
    </div>
  )
}

export default navbar