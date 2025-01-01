import "@/assets/styles/globals.css";
import Footer from "@/components/footer";
import Header from "@/components/shared/header";
import { Layout } from "@/types";

function RootLayout({ children }: Layout) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-1 wrapper">{children}</main>
      <Footer />
    </div>
  );
}

export default RootLayout;
