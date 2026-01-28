import { Helmet } from 'react-helmet-async'
import styles from '../styles/About.module.css'

function About() {
  return (
    <div className={styles.page}>
      <Helmet>
        <title>About TamilMakeOver Studio | Expert Makeup Artists</title>
        <meta
          name="description"
          content="TamilMakeOver studio has 8+ years of experience providing bridal and event makeup services across Chennai and Tamil Nadu."
        />
        <meta
          name="keywords"
          content="bridal makeup artist Chennai, wedding makeup services, Tamil Nadu makeup studio, professional makeup artists, event makeup Chennai"
        />
        <meta property="og:title" content="About TamilMakeOver Studio | Expert Makeup Artists" />
        <meta
          property="og:description"
          content="Learn more about TamilMakeOver Studio, a leading bridal and event makeup studio in Chennai with over 8 years of experience."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/favicon.svg" />
      </Helmet>
      <section className={styles.introSection}>
        <div className={styles.introContent}>
          <h1>About TamilMakeOver Studio</h1>
          <p>
            TamilMakeOver Makeup Studio is a boutique makeup destination in Chennai, dedicated to
            enhancing your natural beauty with soft, timeless and camera-ready looks. We
            specialize in bridal, party and photoshoot makeup, offering personalized
            consultations so every look feels authentically you.
          </p>
          <p>
            From subtle day-time elegance to full evening glam, our focus is on skin-like
            finishes, seamless blending and details that look as beautiful in person as they do
            in photographs.
          </p>
        </div>
      </section>

      <section className={styles.founderSection}>
        <div className={styles.founderImage} aria-hidden="true">
          <div className={styles.imagePlaceholder}>
            <span className={styles.initials}>AR</span>
          </div>
        </div>
        <div className={styles.founderContent}>
          <h2>Ananya Rao – Lead Makeup Artist</h2>
          <p className={styles.experience}>8+ years of professional experience</p>
          <p>
            Ananya is a certified makeup artist known for her soft glam aesthetic and
            attention to detail. She has worked with brides, influencers and professionals
            across India, curating looks that enhance, never mask, their natural features.
          </p>
          <p>
            Her approach is collaborative and calming—perfect for wedding mornings, early
            call-times and emotionally charged events. Every session is designed to be a
            luxurious, stress-free experience.
          </p>
        </div>
      </section>

      <section className={styles.highlightsSection}>
        <h2 className={styles.highlightsTitle}>Studio Highlights</h2>
        <div className={styles.highlightsGrid}>
          <div className={styles.highlightCard}>
            <span className={styles.highlightNumber}>1000+</span>
            <span className={styles.highlightLabel}>Happy Clients</span>
          </div>
          <div className={styles.highlightCard}>
            <span className={styles.highlightNumber}>200+</span>
            <span className={styles.highlightLabel}>Weddings Glammed</span>
          </div>
          <div className={styles.highlightCard}>
            <span className={styles.highlightNumber}>Top Rated</span>
            <span className={styles.highlightLabel}>Studio in Chennai</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

