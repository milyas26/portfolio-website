import React from 'react'
import Layout from '../../components/layout'
import { getAllPortfolios } from '../../public/json/data.js'

const index = () => {
  const portfolios = getAllPortfolios()
  console.log('PORT', portfolios)
  return (
    <Layout>
      <h2>PORTFOLIOS</h2>
      <div className="portfolios row mt-4">
        {portfolios.map((item) => (
          <div className="col-md-6 mb-4">
            <div class="card">
              <img
                class="card-img-top px-4 pt-4"
                src={item.thumbnail}
                alt="Thumbnail"
              />
              <div class="card-body">
                <h5 class="card-title">{item.name}</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary btn-block">
                  Detail Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default index
