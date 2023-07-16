// ATTENTION
// ============
// DO NOT CHANGE ANYTHING IN THIS FILE, THANK YOU!

import './globals.css'
// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'yuHacks(2023) - Create, connect, code',
  description: 'yuHacks is the premiere hackathon at York University.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-[#202020]`}>
        {/* DO NOT DELETE!!! */}
        { children }
      </body>
    </html>
  )
}
