import styles from '../styles/TestimonialCard.module.css'

function TestimonialCard({ name, text, occasion }) {
  return (
    <article className={styles.card}>
      <p className={styles.quote}>&ldquo;{text}&rdquo;</p>
      <div className={styles.meta}>
        <span className={styles.name}>{name}</span>
        {occasion && <span className={styles.occasion}>{occasion}</span>}
      </div>
    </article>
  )
}

export default TestimonialCard

