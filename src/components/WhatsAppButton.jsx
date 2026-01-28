import { FaWhatsapp } from 'react-icons/fa'
import styles from '../styles/WhatsAppButton.module.css'

function WhatsAppButton() {
  const whatsappLink = 'https://wa.me/919789884043'

  return (
    <a
      href={whatsappLink}
      className={styles.whatsappButton}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className={styles.icon} />
    </a>
  )
}

export default WhatsAppButton

