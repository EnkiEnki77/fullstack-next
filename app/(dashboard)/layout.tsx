import GlassPane from '@/components/GlassPane'
import React from 'react'
import  '@/styles/global.css'

type Props = {children: React.ReactNode}

function DashboardRootLayout({children}: Props) {
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

export default DashboardRootLayout
