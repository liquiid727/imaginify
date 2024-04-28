import Sidebar from '@/components/shared/Sidebar'
import MobileNav from '@/components/shared/MobileNav'

import React, { ReactNode } from 'react'

const Layout = ({children}:{children:ReactNode}) => {
  return (
    <div>
      <main className='root'>
        <Sidebar />
        <MobileNav/>
        <div className='root-container'>
            <div className='wrapper'>
                {children}

            </div>
        </div>
        </main>
    </div>
  )
}

export default Layout
