import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from 'src/components/Navbar'
import Footer from 'src/components/Footer'
import { StoreInitializer } from 'src/stores/initializer'
import ToastProvider from '@/utils/toast.provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The Address of Easy Shopping',
  description: 'The Address of Easy Shopping',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreInitializer>
          <ToastProvider>
            <div className="flex flex-col min-h-screen bg-black">
              <Navbar />
              <div className="flex-1 flex flex-col">
                {children}
              </div>
              <Footer />
            </div>
          </ToastProvider>
        </StoreInitializer>
      </body>
    </html>
  )
}

