//Having a file called layout will wrap all pages in an html file with a default layout for that branch of the app directory.
//If you want routes that have a different layout than other routes create a route group by making a folder with parens around the name, and
//put the layout along with all the routes in there. 
//You need a layout file accessible to all pages
//just like in next 12 folders create a route and should be lowercase.
//in app directory though files dont create a route, only folders and to create a page for that route it needs a file in it called page.

import GlassPane from '@/components/GlassPane'
import React from 'react'
import  '@/styles/global.css'

type Props = {children: React.ReactNode}

function AuthRootLayout({children}: Props) {
  return (
    <html>
      <head/>
      <body className='h-screen w-screen rainbow-mesh p-6'>
        <GlassPane className='w-full h-full flex items-center justify-center'>
          {children}
        </GlassPane>
      </body>
    </html>
  )
}

export default AuthRootLayout
