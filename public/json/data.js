const portfolios = [
  {
    id: 1,
    name: 'Wayshub - Video Sharing App',
    thumbnail: '/images/portfolio/wayshub/wayshub.png',
  },
  {
    id: 2,
    name: 'Waysgallery - Hire Designer',
    thumbnail: '/images/portfolio/waysgallery/waysgallery.png',
  },
  {
    id: 3,
    name: 'Staycation - Booking Hotel',
    thumbnail: '/images/portfolio/staycation/staycation.png',
  },
  {
    id: 4,
    name: 'Dompet Dhuafa - Crowdfunding App',
    thumbnail: '/images/portfolio/dompet-dhuafa/dompet-dhuafa.png',
  },
  {
    id: 5,
    name: 'Halwey - Ecommerce Beauty',
    thumbnail: '/images/portfolio/halwey/halwey.png',
  },
  {
    id: 6,
    name: 'Menarini - Ecommerce Medicine',
    thumbnail: '/images/portfolio/menarini/menarini.png',
  },
  {
    id: 7,
    name: 'Parama Hotel - Company Profile',
    thumbnail: '/images/portfolio/parama/parama.png',
  },
  {
    id: 8,
    name: 'Jakodes - Jaringan Toko & Bumdes',
    thumbnail: '/images/portfolio/jakodes/jakodes.png',
  },
  {
    id: 9,
    name: 'Untung Lagi - Online Shop and Courier',
    thumbnail: '/images/portfolio/untung-lagi/untung-lagi.png',
  },
  // {
  //   id: 10,
  //   name: 'Tweak Indonesia',
  //   thumbnail: '/images/portfolio/wayshub/wayshub.png',
  // },
  {
    id: 11,
    name: 'E-Psikolog - Psychology Test Online',
    thumbnail: '/images/portfolio/e-psikolog/e-psikolog.png',
  },
]

export function getAllPortfolios() {
  return portfolios
}

export function getPortfolioById(id) {
  return portfolios.find((portfolio) => portfolio.id === id)
}
