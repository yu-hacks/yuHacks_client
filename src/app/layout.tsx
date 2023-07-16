// ATTENTION
// ============
// DO NOT CHANGE ANYTHING IN THIS FILE, THANK YOU!

// Font files can be colocated inside of `app`

const ndot47 = localFont({
  src: '../public/fonts/ndot-47-inspired-by-nothing.ttf',
  display: 'swap',
  variable: '--font-ndot-47',
})

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'yuHacks(2023) - Create, connect, code',
  description: 'yuHacks is the premiere hackathon at York University...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#F6F6F6]`}>
        { children }  // DO NOT DELETE!!!!!!!!!!!!
      </body>
    </html>
  )
}
