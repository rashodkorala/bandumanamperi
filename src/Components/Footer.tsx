import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="bg-black dark:text-systemGray text-white py-4">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap-reverse gap-4">
        <div className='flex flex-col md:flex-row md:justify-center md:items-center gap-4'>
          <p className="text-sm">&copy; {new Date().getFullYear()} Bandu Manamperi All rights reserved.</p>
          <p className="text-sm">Built with love by Rashod Korala</p>
        </div>
        
      </div>
    </div>
  </footer>
  )
}

export default Footer