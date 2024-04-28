import React, { ReactNode } from 'react'

const Layout = ({children}:{children:ReactNode}) => {
  return (
    <div>
      <main className='auth'>{children}</main>
    </div>
  )
}

export default Layout
