
// import { ApolloProvider } from "@apollo/client";
// import { useApollo } from "@/utils/apolloClient";
import './globals.css';

export const metadata = {
  title: 'yuHacks(2023) - Create, connect, code',
  description: 'yuHacks is the premiere hackathon at York University.',
};


export default function RootLayout({ children }: { children: React.ReactNode }) {


  // const client = useApollo();
  return (
    <html lang="en">
      <body className={"bg-[#202020]"}>
        {children}
      </body>
    </html>
  );
}

