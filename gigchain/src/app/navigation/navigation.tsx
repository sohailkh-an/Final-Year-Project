import React from 'react';
import styles from './navigation.module.css';
import Link from 'next/link';

export default function Navigation() {
    return (
        <React.Fragment>
            <div className={styles.navbar}>
                <div className={styles.navbar_container}>
                    <div className={styles.navbar_left}>
                        <h1 className={styles.h1}>GigChain</h1>
                    </div>
                    <div className={styles.navbar_right}>
                        <Link href="/register" className={styles.navbar_link}>
                            Register
                        </Link>
                        <Link href="/signIn" className={styles.navbar_link}>
                            Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}