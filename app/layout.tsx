import type { Metadata } from "next";
import { Poppins, Prosto_One, Roboto, Space_Grotesk, Syne_Mono } from "next/font/google";
import "./globals.css";

const inter = Poppins({
    variable: "--font-inter",
    weight: ["600"],
    subsets: ["latin"],
});

const geistMono = Syne_Mono({
    variable: "--font-geist-mono",
    weight: ["400"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Otherr",
    description: "made by high-haseeb",
};

export default function RootLayout({
    children,
}: Readonly<{
        children: React.ReactNode;
    }>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${inter.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
