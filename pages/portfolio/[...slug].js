import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/layout'
import { getPortfolioBySlug } from '../../public/json/data.js'

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
      <h1 className="h3 font-weight-bold text-dark">{portfolio?.name}</h1>
      <div className="desc mb-5">
        <p className="font-weight-bold" style={{ fontSize: 16 }}>
          Role : <span className="badge badge-info">{portfolio?.role}</span>
        </p>
        <b>Stacks :</b>
        <div className="stacks mt-2 mb-4">
          {portfolio?.stacks.map((stack) => (
            <img
              src={`/images/stacks/${stack.stack}.png`}
              style={{ height: 30 }}
              className="mr-3"
              key={stack.id}
            />
          ))}
        </div>
        <p>
          {portfolio?.link.type} :{' '}
          <a href={portfolio?.link.url} target="_blank">
            {portfolio?.link.url}
          </a>
        </p>
      </div>
    </Layout>
  )
}

export default index
