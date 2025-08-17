"use client";
import { useState, useEffect, useCallback } from "react";
import type { AppUser } from "@/types/user";

const LS_KEY = "app_user";

export function useAuth() {
    const [user, setUser] = useState<AppUser | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const raw = localStorage.getItem(LS_KEY);
        if (raw) setUser(JSON.parse(raw));
        setLoading(false);
    }, []);

    const login = useCallback((u: AppUser) => {
        localStorage.setItem(LS_KEY, JSON.stringify(u));
        setUser(u);
    }, []);

    const logout = useCallback(() => {
        localStorage.removeItem(LS_KEY);
        setUser(null);
    }, []);

    return { user, loading, login, logout };
}
