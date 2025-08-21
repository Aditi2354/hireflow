export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/dashboard/:path*"],  // any route(s) you want protected
};
