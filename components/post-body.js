import styles from 'styles/post-body.module.css'

export default function PostBody({ children = false }) {
  return (
    <div className={styles.stack}>
      {children}
    </div>
  )
}