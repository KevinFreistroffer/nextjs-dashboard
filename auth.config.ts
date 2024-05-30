import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      console.log('authorized', auth?.user, nextUrl.pathname);
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      const isOnAdminDashboard =
        nextUrl.pathname.startsWith('/admin-dashboard');

      // if (isOnDashboard) {
      //   return isLoggedIn;
      // } else if (isOnAdminDashboard) {
      //   return isLoggedIn && auth?.user.auth_level === 0;
      // }
      // // else if (isLoggedIn) {
      // //   return Response.redirect(new URL('/dashboard', nextUrl));
      // // }

      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
