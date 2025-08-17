"use client";
import React, { forwardRef } from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, loading, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={styles.button}
                disabled={loading || props.disabled}
                {...props}
            >
                {loading ? "در حال انجام..." : children}
            </button>
        );
    }
);

Button.displayName = "Button";
export default Button;
