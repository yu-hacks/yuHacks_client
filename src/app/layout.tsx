// ATTENTION
// ============
// DO NOT CHANGE ANYTHING IN THIS FILE, THANK YOU!
'use client'
import { ApolloProvider } from '@apollo/client'
import './globals.css'
import { client } from '@/utils/apolloClient';
// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'yuHacks(2023) - Create, connect, code',
  description: 'yuHacks is the premiere hackathon at York University.',
}

export function ApolloClientProvider({ children }: { children: React.ReactNode }) {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-[#202020]`}>
        <ApolloClientProvider children={children} />
        {/* DO NOT DELETE!!! */}
        
      </body>
    </html>
  )
}