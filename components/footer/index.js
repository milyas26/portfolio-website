import styles from '../../styles/Home.module.css'

const index = () => {
  const year = new Date().getFullYear()
  return (
    <div>
      <footer className={styles.footer}>
        <p className="mb-0">Copyright {year} | Muhammad Ilyas</p>
      </footer>
    </div>
  )
}

export default index
