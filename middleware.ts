import { clerkMiddleware,createRouteMatcher } from "@clerk/nextjs/server";
import { authMiddleware } from '@clerk/nextjs'

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

export default authMiddleware({
  publicRoutes: ['/', '/api/webhooks/clerk'],
})

