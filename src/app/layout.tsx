import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";

import { GeistSans } from "geist/font/sans";
import { Navbar } from "@/components/navbar";

export const metadata = {
  title: "ba-vis",
  description: "ba-vis",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-slate-50 dark:bg-slate-950">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="min-h-[calc(100svh-64px)] p-8">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
