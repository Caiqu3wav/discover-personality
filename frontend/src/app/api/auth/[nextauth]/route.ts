import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '../../../../../.env') });
import axios from 'axios'

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "email", placeholder: "email@example.com" },
                password: { label: "Password", type: "password", placeholder: "password" }
            },
             authorize: async (credentials) => {
                if (!credentials) {
                    return null;
                }
                
                const { email, password } = credentials;

                try {
                    const res = await axios.post('http://localhost:8080/api/auth/signin', {
                         email, password
                    });

                    if (!res.data.user) {
                        throw new Error('Authentication failed');
                    }

                    const user = await res.data.user;

                    if (user) {
                        return user;
                    } else {
                        return null;
                    }
                } catch (error) {
                    console.error('Error during authenticator:', error);
                    return null;
             }
                }
        })
    ],
    pages: {
        signIn: "/auth/signin",
        signOut: "/auth/signout",
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.username = token.username as string;
        session.user.email = token.email as string;
        session.user.mbti_type = token.mbti_type as string;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.nome = user.username;
        token.email = user.email;
        token.mbti_type = user.mbti_type;
      }
      return token;
    }
    }
}

 const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };