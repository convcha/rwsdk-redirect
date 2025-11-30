"use server";

import { redirect } from "@/app/redirect";

export async function testRedirect(_prevState: unknown, _formData: FormData) {
  return redirect("/success", {
    flashMessage: "Redirected successfully!",
  });
}
