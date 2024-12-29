import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";
import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from "@/lib/constants";
import { ThemeProvider } from "next-themes";
import { Layout } from "@/types";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Prostore",
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL),
};

function RootLayout({ children }: Layout) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;
