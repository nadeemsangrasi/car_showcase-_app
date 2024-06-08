import NextAuth from 'next-auth'
import GithubProvider from "next-auth/providers/github"

let handler = NextAuth({
    providers: [
        // OAuth authentication providers...
        GithubProvider({
            clientId: "Ov23ctyuSaUdQXcoe6sx",
            clientSecret: "97a68316e0702d3e45bd7fec7785eeb2bdb177eb"
        }),

    ],
    debug: true,
})

export { handler as GET, handler as POST }