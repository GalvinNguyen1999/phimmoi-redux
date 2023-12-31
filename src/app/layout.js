import Header from '@/layout/Header/Header'
import './globals.css'
import Trending from '@/modules/Home/Trending'
import { Providers } from '@/redux/provider'

export const metadata = {
  title: 'Movie',
  description: 'Nguyen Dinh Cuong'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='h-screen bg-gradient-to-r from-gray-600 to-gray-900'>
        <Providers>
          <Header />
          <div className='flex flex-wrap lg:flex-nowrap lg:gap-4 w-full h-full p-4 lg:max-w-[1280px] lg:mx-auto lg:mt-24 mt-11 md:mt-16'>
            <div className='w-full lg:w-9/12 relative'>{children}</div>
            <div className='lg:block lg:w-3/12'>
              <Trending />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
