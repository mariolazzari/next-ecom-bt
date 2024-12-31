"use server";

import { signInFormSchema, signUpFormSchema } from "../validators";
import { signIn, signOut } from "@/auth";
import { ActionResponse } from "@/types";
import { hash } from "bcrypt-ts-edge";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { prisma } from "@/db/prisma";
import { formatError } from "../utils";

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

export async function signUpUser(_prevState: unknown, formData: FormData) {
  try {
    const user = signUpFormSchema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    });

    const plainPassword = user.password;
    user.password = await hash(plainPassword, 10);

    await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
      },
    });

    await signIn("credentials", {
      email: user.email,
      password: plainPassword,
    });

    return {
      success: true,
      message: "User registered successfully",
    };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    return {
      success: false,
      message: formatError(error),
    };
  }
}
