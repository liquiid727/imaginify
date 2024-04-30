import { clerkMiddleware,createRouteMatcher } from "@clerk/nextjs/server";
export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};


export default clerkMiddleware()

