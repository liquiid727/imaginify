import { clerkMiddleware,createRouteMatcher } from "@clerk/nextjs/server";

// 中间件还需要改动
const isProtectedRoute = createRouteMatcher([
  '/', '/api/webhooks/clerk', '/api/webhooks/stripe'
]);

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};


export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});