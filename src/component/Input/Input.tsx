"use client";
import React, { forwardRef } from "react";
import styles from "./Input.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ label, error, ...props }, ref) => {
    return (
        <div className={styles.wrapper}>
            {label && <label>{label}</label>}
            <input ref={ref} {...props} className={error ? styles.inputError : ""} />
            {error && <p className={styles.error}>{error}</p>}
        </div>
    );
});

Input.displayName = "Input";
export default Input;
