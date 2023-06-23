import React from 'react'
import { Navigation } from './Navigation'

function Layout({children, navigation}) {
  return (
    <>
      <header className='container shadow-lg z-50 top-4 fixed left-1/2 -translate-x-1/2 px-8 py-4 bg-white rounded-md '>
        <Navigation navigation={navigation}/>
      </header>
      <main>
        {children}
      </main>
      <footer>

      </footer>
    </>
  )
}

export default Layout
