import { addUser, getUser } from "@/app/_services/userService";
import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";
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
    async jwt({ token, user }) {
      if (user) {
        console.log(user);
        // Create a JWT with the user's information
        token.jwt = jwt.sign(
          { userId: user.userId, email: user.email },
          process.env.JWT_SECRET,
          { expiresIn: "1h" }
        );
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.jwt = token.jwt; // Include the JWT token in the session
      }
      console.log(token);
      return session;
    },

    async signIn(user, account, profile) {
      const doesUserExist = await getUser(user.user.email);

      if (!doesUserExist) {
        const newUser = await addUser({
          name: user.user.name,
          email: user.user.email,
        });

        console.log(newUser);
        console.log(user);
        user.user.userId = newUser.data.id;

        return true;
      }
      console.log(user);

      console.log(doesUserExist);

      const userId = doesUserExist?.data.id;
      //store the userId in session
      user.user.userId = userId;

      return true;
    },
  },
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
