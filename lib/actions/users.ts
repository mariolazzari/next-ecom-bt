"use server";

import { signInFormSchema } from "../validators";
import { signIn, signOut } from "@/auth";
import { ActionResponse } from "@/types";
import { isRedirectError } from "next/dist/client/components/redirect-error";

export async function signInWithCredentials(
  _prevState: unknown,
  formData: FormData
): ActionResponse {
  try {
    const user = signInFormSchema.parse({
      // ...Object.keys(formData)
      email: formData.get("email"),
      password: formData.get("password"),
    });
    await signIn("credentials", user);

    return {
      success: true,
      message: "Signed is succesfully",
    };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }

    return {
      success: false,
      message: "Invalid email or password",
    };
  }
}

export async function signOutUser() {
  return await signOut();
}
