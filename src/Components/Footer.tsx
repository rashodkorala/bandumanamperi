import React from 'react'
import Link from 'next/link'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="bg-black dark:text-systemGray text-white py-4">
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center">
        <div className='flex flex-col gap-4'>
          <p className="text-sm">&copy; {new Date().getFullYear()} Bandu Manamperi All rights reserved.</p>
          <p className="text-sm">Built with love by Rashod Korala</p>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
             <Link href="/">
             Home
              </Link>
            </li>
            <li>
              <Link href="/about">
              About
              </Link>
            </li>
            <li>
              <Link href="/contact">
              Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer