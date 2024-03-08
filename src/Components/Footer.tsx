import exp from 'constants'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="bg-black dark:text-systemGray py-4">
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm">&copy; {new Date().getFullYear()}Bandu Manamperi All rights reserved.</p>
          <p className="text-sm">Built with love by Rashod Korala</p>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-sm hover:text-gray-300">Home</a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-gray-300">About</a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-gray-300">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer