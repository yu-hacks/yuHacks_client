
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
    
      <div className={`bg-[#202020]`}>
        {children}
      </div>
    
  );
}
