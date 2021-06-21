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
        <meta name="image" content="/images/preview.PNG" key="image" />
        {/* Open Graph */}
        <meta property="og:url" content="milyas.vercel.app" key="ogurl" />
        <meta property="og:image" content="/images/preview.PNG" key="ogimage" />
        <meta
          property="og:site_name"
          content="Portfolio  Website"
          key="ogsitename"
        />
        <meta property="og:title" content="Portfolio" key="ogtitle" />
        <meta
          property="og:description"
          content="Muhammad Ilyas personal portfolio website"
          key="ogdesc"
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
      <div style={{ maxWidth: 1000 }}>
        <nav class="navbar navbar-expand-sm navbar-light bg-light">
          <Link href="/">
            <a class="navbar-brand">M. ILYAS</a>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse align-item-center"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav ml-auto">
              <li class="nav-item mb-0 d-flex align-items-center active">
                <Link href="/">
                  <a class="nav-link">HOME</a>
                </Link>
              </li>
              <li class="nav-item mb-0 d-flex align-items-center active">
                <Link href="/portfolios">
                  <a class="nav-link">PORTFOLIO</a>
                </Link>
              </li>
              {/* <li class="nav-item mb-0 d-flex align-items-center active">
                <Link href="/blog">
                  <a class="nav-link">BLOG</a>
                </Link>
              </li>
              <li class="nav-item mb-0 d-flex align-items-center active">
                <Link href="/contact">
                  <a class="nav-link">CONTACT</a>
                </Link>
              </li> */}
              <li class="nav-item mb-0 d-flex align-items-center active">
                <a
                  href="/cv.pdf"
                  target="_blank"
                  class="nav-link btn btn-info btn-block"
                >
                  DOWNLOAD CV
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  )
}

export default index
