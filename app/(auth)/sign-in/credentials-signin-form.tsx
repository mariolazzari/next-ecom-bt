"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signInDafaultValues } from "@/lib/constants";
import { signInWithCredentials } from "@/lib/actions/users";
import { useSearchParams } from "next/navigation";

function CredentialsSignInForm() {
  const [data, action] = useActionState(signInWithCredentials, {
    success: false,
    message: "",
  });
  const { pending } = useFormStatus();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") ?? "/";

  return (
    <form action={action}>
      <input type="hidden" name="callbackUrl" value={callbackUrl} />

      <div className="space-y-6">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            defaultValue={signInDafaultValues.email}
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="password"
            defaultValue={signInDafaultValues.password}
          />
        </div>
        <div>
          <Button className="w-full" disabled={pending}>
            {pending ? "Signing in..." : "Sign In"}
          </Button>
        </div>

        {!data.success && (
          <div className="text-destructive text-center">{data.message}</div>
        )}

        <div className="text-sm text-center text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link href="sign-up" className="link">
            Sign Up
          </Link>
        </div>
      </div>
    </form>
  );
}

export default CredentialsSignInForm;
