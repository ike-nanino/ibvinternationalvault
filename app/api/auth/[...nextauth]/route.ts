import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        passkey: { label: "Passkey", type: "text" },
        pin: { label: "PIN", type: "password" },
      },
      async authorize(credentials) {
        const { passkey, pin } = credentials || {};
      
        if (passkey === "Mypasskey" && pin === "1234") {
          return { id: "1", name: "John Doe", email: "johndoe@example.com" }; // User object
        }
      
        // Return null to reject credentials
        throw new Error("Invalid credentials");
      }
      
    }),
  ],
  pages: {
    signIn: "/sign-in", // Custom sign-in page
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Check if this is a sign-out operation
      if (url.includes('signout') || url.includes('sign-out')) {
        return '/';
      }
      // Handle sign-in callback
      if (url.includes('callback')) {
        return baseUrl;
      }
      // For all other cases, maintain existing logic
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
  
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
