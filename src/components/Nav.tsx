"use client"
import React from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';
const links = [
  {
    name: "home",
    path: '/'
  },
  {
    name: "Services",
    path: '/services'
  },
  {
    name: "resume",
    path: '/resume'
  },
  {
    name: "work",
    path: '/work'
  },
  {
    name: "contact",
    path: '/contact'
  }
]
export const Nav = () => {
  const pathName = usePathname()

  return (
    <nav className='flex gap-8'>{links.map((link, iteam) => {
      return <Link key={iteam} href={link.path} className={`${link.path === pathName && "text-accent border-b-2 border-accent"}
      capitalize font-medium hover:text-accent transition-all`}>{link.name}</Link>
    })}</nav>
  )
}
