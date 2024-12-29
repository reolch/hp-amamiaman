// src/components/SocialShare/SocialShare.jsx
import React from 'react';
import styles from './SocialShare.module.css';
import { FaInstagram, FaLine } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const SocialShare = () => {
    return (
        <section className={styles['social-share__section']}>
            <div className={styles['social-share__container']}>
                <div className={styles['social-share__buttons']}>
                    <a 
                        href="https://www.instagram.com/amamiaman"
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`${styles['social-share__button']} ${styles['social-share__button--instagram']}`}
                        aria-label="Instagramでフォローする"
                    >
                        <FaInstagram className={styles['social-share__icon']} />
                        Instagram
                    </a>
                    <a 
                        href="https://x.com/share?url=https://www.amamiaman.com/shop&text=店舗案内" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`${styles['social-share__button']} ${styles['social-share__button--x']}`}
                        aria-label="Xでこのページをシェア"
                    >
                        <FaXTwitter className={styles['social-share__icon']} />
                        X
                    </a>
                    <a 
                        href="https://line.me/R/share?url=https://www.amamiaman.com/shop" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`${styles['social-share__button']} ${styles['social-share__button--line']}`}
                        aria-label="LINEでこのページをシェア"
                    >
                        <FaLine className={styles['social-share__icon']} />
                        LINE
                    </a>
                </div>
            </div>
        </section>
    );
};

export default SocialShare;
