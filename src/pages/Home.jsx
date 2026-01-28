import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import ServiceCard from '../components/ServiceCard.jsx'
import TestimonialCard from '../components/TestimonialCard.jsx'
import styles from '../styles/Home.module.css'

function Home() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'TamilMakeOver',
    image: '/favicon.svg',
    telephone: '+91 97898 84043',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Chennai',
      addressRegion: 'Tamil Nadu',
      addressCountry: 'IN',
    },
    url: 'https://www.tamilmakeover.com',
    sameAs: [
      'https://instagram.com/tamilmakeover',
      'https://facebook.com/tamilmakeover',
    ],
  }

  return (
    <div className={styles.page}>
      <Helmet>
        <title>TamilMakeOver | Bridal &amp; Professional Makeup Artist in Chennai</title>
        <meta
          name="description"
          content="Book certified makeup artists in Chennai for weddings, parties, and photoshoots. TamilMakeOver offers premium bridal makeup services using top brands."
        />
        <meta
          name="keywords"
          content="bridal makeup artist Chennai, wedding makeup services, party makeup expert, Tamil Nadu makeup studio, makeup artist in Chennai, bridal makeup Chennai, professional makeup services Tamil Nadu, party makeup artist near me"
        />
        <meta property="og:title" content="TamilMakeOver | Bridal &amp; Professional Makeup Artist in Chennai" />
        <meta
          property="og:description"
          content="Premium bridal, party, and photoshoot makeup services in Chennai and Tamil Nadu by certified artists using top international brands."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/favicon.svg" />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.kicker}>TamilMakeOver Makeup Studio · Chennai</p>
          <h1 className={styles.heroTitle}>Enhance Your Natural Beauty</h1>
          <p className={styles.heroSubtitle}>
            Professional makeup for weddings, parties &amp; special events—crafted to match
            your unique features, style and personality.
          </p>
          <div className={styles.heroActions}>
            <Link to="/contact" className={styles.primaryButton}>
              Book Appointment
            </Link>
            <a href="#services" className={styles.secondaryButton}>
              View Services
            </a>
          </div>
          <p className={styles.heroNote}>Limited bridal slots open for this season.</p>
        </div>
        <div className={styles.heroVisual} aria-hidden="true">
          <div className={styles.heroOverlayCard}>
            <span className={styles.heroChip}>Bridal • Party • Photoshoot</span>
            <p className={styles.heroOverlayText}>
              Soft glam, timeless looks and camera-ready perfection for your special day.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Our Signature Makeup Services</h2>
          <p>
            From intimate celebrations to grand weddings, we tailor every look to enhance your
            natural features.
          </p>
        </div>
        <div className={styles.cardGrid}>
          <ServiceCard
            icon="💍"
            title="Bridal Makeup"
            description="Flawless, long-lasting bridal looks that photograph beautifully and stay fresh through every ceremony."
          />
          <ServiceCard
            icon="🎉"
            title="Party Makeup"
            description="Soft glam to full drama—perfect for sangeets, receptions, birthdays and festive celebrations."
          />
          <ServiceCard
            icon="📸"
            title="Photoshoot Makeup"
            description="Camera-ready looks with attention to detail for portfolio, fashion and maternity shoots."
          />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Why Choose TamilMakeOver</h2>
        </div>
        <div className={styles.whyGrid}>
          <div className={styles.whyItem}>
            <h3>Certified Artists</h3>
            <p>
              Professionally trained and certified bridal makeup artist team in Chennai with hands-on
              experience across diverse skin tones and features.
            </p>
          </div>
          <div className={styles.whyItem}>
            <h3>Premium Products</h3>
            <p>
              International, skin-safe brands chosen for longevity, comfort, and HD finish—even
              under studio lighting.
            </p>
          </div>
          <div className={styles.whyItem}>
            <h3>Hygienic Process</h3>
            <p>
              Strict hygiene protocols, sanitized tools and single-use disposables to ensure a
              clean, relaxing experience.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>What Our Clients Say</h2>
        </div>
        <div className={styles.testimonialGrid}>
          <TestimonialCard
            name="Priya Sharma"
            occasion="Bridal Makeup"
            text="Ananya understood exactly what I wanted—soft, elegant bridal glam. My makeup stayed perfect all day and looked stunning in every photo."
          />
          <TestimonialCard
            name="Neha Patel"
            occasion="Engagement Party"
            text="The team at TamilMakeOver made me feel so confident and beautiful. The look was glamorous yet natural, just the way I like it."
          />
        </div>
      </section>
    </div>
  )
}

export default Home

