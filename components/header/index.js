import Head from 'next/head'
import Link from 'next/link'

const index = () => {
  return (
    <>
      <Head>
        <title>M. Ilyas Personal Web</title>
        <meta
          name="description"
          content="Personal portfolio website Muhammad Ilyas"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />

        <script
          src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
          integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
          crossOrigin="anonymous"
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
          integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
          crossOrigin="anonymous"
        />
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
          integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
          crossOrigin="anonymous"
        />
      </Head>
      <div className="mt-5 pt-4 header-menus" style={{ maxWidth: 1000 }}>
        {/* <ul className="d-flex header-list" style={{ listStyle: 'none' }}>
          <li className="mr-3 btn btn-primary">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="mr-3 btn btn-primary">
            <Link href="/portfolios">
              <a>Portfolio</a>
            </Link>
          </li>
        </ul> */}
      </div>
    </>
  )
}

export default index