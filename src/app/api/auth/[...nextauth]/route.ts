import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';

interface TempUser {
  id: string;
  name: string;
  email: string;
  password: string;
}

const tempUsers: TempUser[] = [
  { id: "demo-user-id-001", name: "Demo User", email: "demo@pizzadash.com", password: "demo123" },
];

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("NextAuth Authorize: Attempting to sign in user:", credentials?.email);

        const user = tempUsers.find(u => u.email === credentials?.email);

        if (user && user.password === credentials?.password) {
          console.log("NextAuth Authorize: User found and authenticated.");
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            image: "/default-avatar.png",
          };
        } else {
          console.log("NextAuth Authorize: Authentication failed for", credentials?.email);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id ?? undefined;
        token.name = user.name ?? undefined;
        token.email = user.email ?? undefined;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = typeof token.id === "string" ? token.id : "";
        session.user.name = typeof token.name === "string" ? token.name : "";
        session.user.email = typeof token.email === "string" ? token.email : "";
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
