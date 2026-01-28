import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from '../styles/Navbar.module.css'

function Navbar() {
  const [open, setOpen] = useState(false)

  const toggleMenu = () => setOpen((prev) => !prev)
  const closeMenu = () => setOpen(false)

  const navLinkClass = ({ isActive }) =>
    isActive ? `${styles.navLink} ${styles.active}` : styles.navLink

  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <Link to="/" className={styles.logo} onClick={closeMenu}>
          <span className={styles.logoAccent}>Tamil</span>MakeOver
        </Link>

        <button
          className={styles.menuToggle}
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={toggleMenu}
        >
          <span className={styles.menuLine} />
          <span className={styles.menuLine} />
          <span className={styles.menuLine} />
        </button>

        <nav className={`${styles.navLinks} ${open ? styles.navLinksOpen : ''}`}>
          <NavLink to="/" className={navLinkClass} onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass} onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/contact" className={navLinkClass} onClick={closeMenu}>
            Contact
          </NavLink>
          <Link
            to="/contact"
            className={`${styles.navLink} ${styles.primaryCta}`}
            onClick={closeMenu}
          >
            Book Appointment
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar

