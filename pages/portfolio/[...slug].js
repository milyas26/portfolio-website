import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/layout'
import { getPortfolioBySlug } from '../../public/json/data.js'
import styles from './[...slug].module.scss'

const index = () => {
  const router = useRouter()
  const { slug } = router.query
  const portfolio = getPortfolioBySlug(slug)

  return (
    <Layout>
      <div className="image my-4">
        <img
          style={{ width: '100%' }}
          src={portfolio?.thumbnail}
          alt={portfolio?.slug}
        />
      </div>
      <h1 className={styles.portfolio_name}>{portfolio?.name}</h1>
      <div className={styles.desc}>
        <p className={styles.role}>Role : {portfolio?.role}</p>
        <b className={styles.stacks}>Stacks :</b>
        <div className={styles.stacks_wrapper}>
          {portfolio?.stacks.map((stack) => (
            <img src={`/images/stacks/${stack.stack}.png`} key={stack.id} />
          ))}
        </div>
        <div className={styles.description}>
          <p className={styles.label}>Deskripsi Website :</p>
          <p>{portfolio?.description}</p>
        </div>
        <div className={styles.pekerjaan}>
          <p className={styles.label}>Despripsi Pekerjaan :</p>
          <ul>
            {portfolio?.pekerjaan.map((task) => (
              <li key={task.id}>
                <p>{task.text}</p>
              </li>
            ))}
          </ul>
        </div>
        {portfolio?.link && (
          <p className={styles.link}>
            {portfolio?.link.type} :{' '}
            <a href={portfolio?.link.url} target="_blank">
              {portfolio?.link.url}
            </a>
          </p>
        )}
      </div>
    </Layout>
  )
}

export default index
