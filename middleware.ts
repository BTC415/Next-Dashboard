import NextAuth from "next-auth";
import { authConfig } from "./auto.config";

export default NextAuth(authConfig).auth;

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}