import { addUser, getUser } from "../../../../_services/userService";
import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";
import { JWT } from "next-auth/jwt";
import { User } from "@/_types/user";
import { Session } from "next-auth";

const jwt = require("jsonwebtoken");
export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
  ],

  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  callbacks: {
    async jwt({ token, user }: { token: JWT; user: User }) {
      if (user) {
        // Create a JWT with the user's information
        token.jwt = jwt.sign(
          { userId: user.userId, email: user.email },
          process.env.JWT_SECRET,
          { expiresIn: "1h" }
        );
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (token) {
        session.jwt = token.jwt; // Include the JWT token in the session
      }
      return session;
    },

    async signIn(user: any, account: any, profile: any) {
      const doesUserExist = await getUser(user.user.email);

      if (!doesUserExist) {
        const newUser = await addUser({
          name: user.user.name,
          email: user.user.email,
        });

        user.user.userId = newUser.data.id;

        return true;
      }

      const userId = doesUserExist?.data.id;
      //store the userId in session
      user.user.userId = userId;

      return true;
    },
  },
};

export const handler = NextAuth(authOptions as any);

export { handler as GET, handler as POST };
