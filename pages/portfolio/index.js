import React from 'react'
import Layout from '../../components/layout'
import { getAllPortfolios } from '../../public/json/data.js'
import Link from 'next/link'
import Image from 'next/image'

const index = () => {
  const portfolios = getAllPortfolios()
  return (
    <Layout>
      <h2>PORTFOLIOS</h2>
      <div className="portfolios row mt-4">
        {portfolios.map((item) => (
          <div className="col-md-6 mb-4" key={item.id}>
            <div class="card">
              <img
                class="card-img-top px-4 pt-4"
                src={item.thumbnail}
                alt="Thumbnail"
              />
              <div class="card-body">
                <h5 class="card-title font-weight-bold">{item.name}</h5>
                <b>Stacks :</b>
                <div className="stacks mt-2 mb-4">
                  {item?.stacks.map((stack) => (
                    <img
                      src={`/images/stacks/${stack.stack}.png`}
                      style={{ height: 30 }}
                      className="mr-3"
                    />
                  ))}
                </div>
                <Link href={`/portfolio/${item.slug}`}>
                  <a class="btn btn-primary btn-block">Lihat Detail</a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default index
