"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import styles from "./Dashboard.module.scss";

export default function Dashboard() {
    const { user, loading, logout } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.replace("/auth");
        }
    }, [loading, user, router]);

    if (loading) {
        return <div className={styles.loading}>{"در حال بارگذاری..."}</div>;
    }

    if (!user) {
        return null;
    }

    return (
        <div className={styles.dashboard}>
            <div className={styles.card}>
                <h2 className={styles.title}>{"خوش آمدید 👋"}</h2>
                <p className={styles.name}>{user.fullName}</p>

                {user.avatar && (
                    <img
                        className={styles.avatar}
                        src={user.avatar}
                        alt={user.fullName}
                    />
                )}

                <button className={styles.logout} onClick={logout}>
                    {"خروج"}
                </button>
            </div>
        </div>
    );
}
