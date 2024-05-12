import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware(()=>{
    console.log("middleware running")
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};