'use client'
import "./globals.scss";

import styles from "@/app/layout.module.scss";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" id={styles.html}>
            <body className={styles.body}>
                <main className={styles.main}>
                    <header>
                      <h1 className={styles.h2}>Tech Assignment with Multi Select</h1>
                    </header>
                    {children}
                </main>
                <footer className={styles.footer}>
                    <p>Made by I Klimova</p>
                </footer>
            </body>
        </html>
    );
}
