import styles from '../styles/ServiceCard.module.css'

function ServiceCard({ title, description, icon }) {
  return (
    <article className={styles.card}>
      <div className={styles.iconWrapper}>
        <span className={styles.icon}>{icon}</span>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  )
}

export default ServiceCard

