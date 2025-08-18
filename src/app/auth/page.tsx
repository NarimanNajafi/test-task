"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Input from "@/component/Input/Input";
import Button from "@/component/Button/Button";
import styles from "./Auth.module.scss";
import { useAuth } from "@/hooks/useAuth";

export default function AuthPage() {
    const { login } = useAuth();
    const router = useRouter();
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const validate = (value: string) => /^09\d{9}$/.test(value);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError("");

        if (!validate(phone)) {
            setError("شماره موبایل معتبر نیست");
            return;
        }

        try {
            setLoading(true);
            const res = await fetch("https://randomuser.me/api/?results=1&nat=us");
            const data = await res.json();
            const u = data.results[0];

            const user = {
                id: u.login.uuid,
                fullName: `${u.name.first} ${u.name.last}`,
                email: u.email,
                avatar: u.picture.thumbnail,
            };

            login(user);
            router.replace("/dashboard");
        } catch {
            setError("خطا در ورود");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className={styles.page}>
            <div className={styles.card}>
                <h2>{"ورود"}</h2>
                <form className={styles.formBlock} onSubmit={handleSubmit}>
                    <Input
                        label="شماره موبایل"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        error={error}
                    />
                    <Button type="submit" loading={loading}>
                        {"ورود"}
                    </Button>
                    <p className={styles.hint}>{"ولیدیشن فقط برای تمرین است."}</p>
                </form>
            </div>
        </div>

    );
}
