import NextAuth from "next-auth"
import DiscordProvider from "next-auth/providers/discord"

const handler = NextAuth({
  providers: [
    DiscordProvider({
      clientId: process.env.1405318215948832858,
      clientSecret: process.env.I5ftA6Su8DU5iM60YSoHl-RYbMc-mCRd,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      return session
    },
    async jwt({ token, account, profile }) {
      return token
    },
  },
  pages: {
    signIn: "/",
  },
})

export { handler as GET, handler as POST }
