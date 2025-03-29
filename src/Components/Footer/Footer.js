import React from 'react';
import styles from './Footer.module.css';
import { ReactComponent as Logo } from "../../Resources/image/logo.svg";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerContent}>
                <Logo className={styles.logo} />
                <h2 className={styles.title}>Game Store</h2>
                <p className={styles.subtitle}>Your Gateway to Infinite Adventures</p>

                <div className={styles.socialLinks}>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={require("../../Resources/image/twitter.png")}
                            alt="Twitter"
                            className={styles.socialIcon}
                        />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={require("../../Resources/image/instagram.png")}
                            alt="Instagram"
                            className={styles.socialIcon}
                        />
                    </a>
                </div>

                <p className={styles.footerText}>
                    Designed and developed with ❤️ by{" "}
                    <a
                        href="https://github.com/minarob23"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.githubLink}
                    >
                        minarob23
                    </a>
                    . All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;