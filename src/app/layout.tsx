import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";

import { GeistSans } from "geist/font/sans";

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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
