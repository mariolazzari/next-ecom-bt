import { Layout } from "@/types";

function AuthLayout({ children }: Layout) {
  return <div className="flex-center min-h-screen w-full">{children}</div>;
}

export default AuthLayout;
