'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { BsBugFill } from "react-icons/bs"
import classNames from 'classnames'

const NavBar = () => {
    const links = [
        {label: 'Dashboard', href:'/'},
        {label: 'Issues', href:'/issues'}
    ]
    const currentPath = usePathname()
  return (
    <nav className='flex space-x-6 items-center border-b p-5'>
        <Link href="/"><BsBugFill /></Link>
        <ul className='flex space-x-6'>
            {links.map(link => 
            <Link key={link.href} 
            className={classNames({
                'text-zinc-900': link.href === currentPath,
                'text-zinc-500': link.href !== currentPath,
                'hover:text-zinc-800 transition-colors': true
            })} 
            href={link.href}>{link.label}</Link>)}
        </ul>
    </nav>
  )
}

export default NavBar