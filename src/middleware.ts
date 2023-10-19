import { withAuth } from "next-auth/middleware";

export default withAuth({
    pages: {
      signIn: "/auth/signin",
      signOut: "/auth/signout",
      verifyRequest: "/auth/verify-request", // (used for check email message)
      newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
    },
  });

// Here we are defining which routes we want protected, these are within the pages folder