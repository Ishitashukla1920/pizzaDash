// src/api/auth/[...next]/route.ts

import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';

// !!! IMPORTANT: This is for DEMO PURPOSES ONLY.
// This tempUsers array MUST be the same instance as the one in src/app/api/register/route.ts
// If you are using a real database, both this file and the /api/register route
// would interact with that shared database, not separate in-memory arrays.
interface TempUser {
    id: string;
    name: string;
    email: string;
    password: string;
}
// Make sure this 'tempUsers' array is the *same* one used by the /api/register endpoint.
// In a proper setup, both these routes would interact with a shared database.
// For this demo, we'll keep it simple by assuming it's the same global array.
// A more robust demo might import `tempUsers` from a shared utility file.
const tempUsers: TempUser[] = [
    { id: "demo-user-id-001", name: "Demo User", email: "demo@pizzadash.com", password: "demo123" },
];
// !!! END TEMP USER STORAGE !!!


const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // This authorize function will be called when signIn('credentials', ...) is used.
        console.log("NextAuth Authorize: Attempting to sign in user:", credentials?.email);

        // Find the user in our temporary store
        const user = tempUsers.find(u => u.email === credentials?.email);

        // Check if user exists and password matches
        if (user && user.password === credentials?.password) { // In real app: await bcrypt.compare(password, user.hashedPassword)
          console.log("NextAuth Authorize: User found and authenticated.");
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            image: "/default-avatar.png", // Or a dynamic image if available
          };
        } else {
          console.log("NextAuth Authorize: Authentication failed for", credentials?.email);
          // Return null if authentication fails
          return null;
          // Or throw new Error("Invalid credentials") for a specific error message
        }
      }
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
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        // Any other properties from the user object that you want in the token
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.name = token.name as string;
        session.user.email = token.email as string;
        // Ensure session.user type includes 'id', 'name', 'email' if you extend it
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
        if (url.startsWith("/")) return `${baseUrl}${url}`;
        else if (new URL(url).origin === baseUrl) return url;
        return baseUrl;
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
  // debug: process.env.NODE_ENV === "development",
});

export { handler as GET, handler as POST };