"use client";

import Link from "next/link";

export default function HomePage() {
    return (
        <div className="page">
            <div className="card">
                <h1>به اپلیکیشن ما خوش آمدید!</h1>
                <p>لطفاً برای ادامه وارد شوید.</p>
                <Link href="/auth">ورود</Link>
            </div>
        </div>
    );
}
