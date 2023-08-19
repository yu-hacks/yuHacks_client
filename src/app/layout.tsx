// import { JetBrains_Mono } from 'next/font/google'

import './globals.css';

export const metadata = {
  title: 'yuHacks(2023) - Create, connect, code',
  description: 'yuHacks is the premiere hackathon at York University.',
};

// const jetbrains_mono = JetBrains_Mono({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-jetbrains-mono'
// })

export default function RootLayout({ children }: { children: React.ReactNode }) {


  // const client = useApollo();
  return (
    <html lang="en">
      <body className={"bg-[#F6F6F6]"}>
        {children}
      </body>
    </html>
  );
}

