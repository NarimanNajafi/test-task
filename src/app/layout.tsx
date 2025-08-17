import "./globals.scss";
import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";

const vazirmatn = Vazirmatn({
    subsets: ["arabic"],
    weight: ["400", "500", "700"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Auth → Dashboard Demo",
    description: "Next.js + TS + SCSS Modules",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fa" dir="rtl">
        <body className={vazirmatn.className}>{children}</body>
        </html>
    );
}
