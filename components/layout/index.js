import React from 'react'
import Header from '../header'
import Footer from '../footer'
import styles from '../../styles/Home.module.css'

const index = (props) => {
  const { children } = props
  return (
    <div className={styles.container}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default index
