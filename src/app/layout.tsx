import Navbar from '@/components/common/Navbar.component'
import HackerCard from '@/components/common/UserBadge.component'
import Button from '@/components/common/Button.component'
import Socials from '@/components/common/Socials.component'
import { Inter } from 'next/font/google'
import './globals.css'

import localFont from 'next/font/local'
// import YorkUHacksWatermark from '@/components/common/YorkUHacksWatermark.component'
import ChallengeCard from '@/components/common/ChallengeCard.component'
import LoginRegistration from '@/components/common/LoginRegistration.component'
import UserBadge from '@/components/common/UserBadge.component'
import ComingSoonPage from '@/pages/ComingSoonPage'
// Font files can be colocated inside of `app`
const ndot47 = localFont({
  src: '../public/fonts/ndot-47-inspired-by-nothing.ttf',
  display: 'swap',
  variable: '--font-ndot-47',
})

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
      <body className={`${inter.className}`}>
        {/* <Navbar/> */}
        <ComingSoonPage />
        </body>
    </html>
  )
}
