import Navbar from '@/components/common/Navbar.component'
import './globals.css'
import { Inter } from 'next/font/google'
import Button from '@/components/common/Button.component'
import Socials from '@/components/common/Socials.component'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Button />
        <Socials />
        {children}
      </body>
    </html>
  )
}
