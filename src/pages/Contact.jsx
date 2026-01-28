import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import styles from '../styles/Contact.module.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Contact form submitted:', formData)
  }

  return (
    <div className={styles.page}>
      <Helmet>
        <title>Contact TamilMakeOver | Book Makeup Appointment</title>
        <meta
          name="description"
          content="Contact TamilMakeOver studio to book bridal, party, and professional makeup services in Chennai."
        />
        <meta
          name="keywords"
          content="contact bridal makeup artist Chennai, book wedding makeup services, party makeup expert, Tamil Nadu makeup studio contact"
        />
        <meta property="og:title" content="Contact TamilMakeOver | Book Makeup Appointment" />
        <meta
          property="og:description"
          content="Get in touch with TamilMakeOver to schedule bridal, party, or professional makeup appointments in Chennai."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/favicon.svg" />
      </Helmet>
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h1>Contact Us</h1>
          <p>
            Share your event details and we&apos;ll get back to you with availability and
            curated options.
          </p>
        </div>

        <div className={styles.grid}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.fieldGroup}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91-XXXX-XXXXXX"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Tell us about your event, date and preferred services."
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
          </form>

          <div className={styles.info}>
            <div className={styles.infoBlock}>
              <h2>Studio Information</h2>
              <p>
                <strong>Address:</strong> Chennai, India
              </p>
              <p>
                <strong>Phone:</strong> +91 97898 84043
              </p>
              <p>
                <strong>Email:</strong> info@tamilmakeover.com
              </p>
            </div>

            <div className={styles.infoBlock}>
              <h3>Working Hours</h3>
              <p>Monday – Sunday: 9:00 AM – 8:00 PM</p>
              <p>Early morning bridal appointments available on request.</p>
            </div>

            <div className={styles.infoBlock}>
              <h3>Location Map</h3>
              <div className={styles.mapPlaceholder} aria-label="Google Map placeholder">
                <span>Google Map Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

