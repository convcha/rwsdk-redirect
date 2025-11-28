"use server";

export async function testRedirect(_prevState: unknown, _formData: FormData) {
  if (1 === 1) {
    // I thought throwing a 302 Response would redirect the browser to /success,
    // but it just reloads the current page instead.
    throw new Response(null, {
      status: 302,
      headers: {
        Location: "/success",
      },
    });
  }

  return { dummy: true };
}
