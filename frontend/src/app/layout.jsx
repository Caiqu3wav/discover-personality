import { Inter } from 'next/font/google';
import './globals.css';
import { authOptions } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import SessionProvider from './Providers/AuthProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Discovery Personality',
  description: 'Site personalidades mbti teste mbti',
}

export default async function RootLayout({ children }) {
      const session = await getServerSession(authOptions);

  return (
    <SessionProvider session={session}>
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
    </SessionProvider>
  )
}
