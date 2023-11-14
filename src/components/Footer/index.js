import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
            <ul>
                <li className={styles.footerItem}><a href="/about">About Us</a></li>
                <li className={styles.footerItem}><a href="/contact">Contact</a></li>
                <li className={styles.footerItem}><a href="/terms">Terms of Service</a></li>
            </ul>
            <div className={styles.socialIcons}>
                {/* Örnek olarak basit simgeler ekleyin, gerçek simgeler için uygun paketleri/kütüphaneleri kullanın */}
                <a href="https://facebook.com" className={styles.socialIcon}>Facebook</a>
                <a href="https://twitter.com" className={styles.socialIcon}>Twitter</a>
                <a href="https://instagram.com" className={styles.socialIcon}>Instagram</a>
            </div>
        </footer>
    );
}

export default Footer;
