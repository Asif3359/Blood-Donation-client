import { Inter } from 'next/font/google'
import './globals.css'
import PrimarySearchAppBar from '@/Components/AppBar/AppBar'
import Footer from '@/Components/Footer/Footer'
import AuthProvider from '@/Components/AuthProvider/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <div>
          <AuthProvider>
            <PrimarySearchAppBar></PrimarySearchAppBar>
          </AuthProvider>
        </div>
        <div className=' container mx-auto min-h-screen mt-12'>
          {children}
        </div>
        <section>
          <Footer></Footer>
        </section>
      </body>
    </html>
  )
}
