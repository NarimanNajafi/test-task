"use client";

import Link from "next/link";
import styles from "./page.module.scss";

export default function HomePage() {
    return (
        <div className={styles.page}>
            <div className={styles.card}>
                <h1>{"به اپلیکیشن ما خوش آمدید!"}</h1>
                <p>{"لطفاً برای ادامه وارد شوید."}</p>
                <Link href="/auth">{"ورود"}</Link>
            </div>
        </div>
    );
}
