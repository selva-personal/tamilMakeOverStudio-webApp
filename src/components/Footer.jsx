import styles from '../styles/Footer.module.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.copy}>
          © {currentYear} TamilMakeOver Makeup Studio. All rights reserved.
        </p>
        <div className={styles.socials} aria-label="Social media links">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className={styles.iconButton}
          >
            <span className={styles.iconCircle}>IG</span>
            <span className={styles.label}>Instagram</span>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className={styles.iconButton}
          >
            <span className={styles.iconCircle}>f</span>
            <span className={styles.label}>Facebook</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

