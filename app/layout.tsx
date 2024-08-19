import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "next-themes";

import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ['400'] });

export const metadata: Metadata = {
    title: "Portfolio",
    description: "My personal portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={roboto.className}>
                <ThemeProvider attribute="class">{children}</ThemeProvider>
            </body>
        </html>
    );
}
