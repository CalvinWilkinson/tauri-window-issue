import type { NextRequest } from "next/server";
// import { updateSession } from "@/utils/supabase/middleware";

export async function middleware(request: NextRequest) {
	console.log("MIDDLEWARE HIT");

	return request;
	// return await updateSession(request);
}

export const config = {
	/*
	 * Match all request paths except:
	 * - _next/static (static files)
	 * - _next/image (image optimization files)
	 * - favicon.ico (favicon file)
	 * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
	 * Feel free to modify this pattern to include more paths.
	*/
	matcher: [
		// "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
		"/.*)",
	],
};
