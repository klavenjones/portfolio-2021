import React from 'react'
import Navigation from './navigation'

export default function Layout({ children }) {
  return (
    <div id='root' className='border border-white'>
      <Navigation />
      {children}
    </div>
  )
}
