const portfolios = [
  {
    id: 1,
    name: 'Wayshub',
    thumbnail: '/images/portfolio/wayshub/wayshub.png',
  },
  {
    id: 2,
    name: 'Waysgallery',
    thumbnail: '/images/portfolio/waysgallery/waysgallery.png',
  },
  {
    id: 3,
    name: 'Staycation',
    thumbnail: '/images/portfolio/staycation/staycation.png',
  },
  {
    id: 4,
    name: 'Dompet Dhuafa',
    thumbnail: '/images/portfolio/dompet-dhuafa/dompet-dhuafa.png',
  },
  {
    id: 5,
    name: 'Halwey',
    thumbnail: '/images/portfolio/halwey/halwey.png',
  },
  {
    id: 6,
    name: 'Menarini',
    thumbnail: '/images/portfolio/menarini/menarini.png',
  },
  {
    id: 7,
    name: 'Parama Hotel',
    thumbnail: '/images/portfolio/parama/parama.png',
  },
  {
    id: 8,
    name: 'Jakodes',
    thumbnail: '/images/portfolio/jakodes/jakodes.png',
  },
  {
    id: 9,
    name: 'Untung Lagi',
    thumbnail: '/images/portfolio/untung-lagi/untung-lagi.png',
  },
  // {
  //   id: 10,
  //   name: 'Tweak Indonesia',
  //   thumbnail: '/images/portfolio/wayshub/wayshub.png',
  // },
  {
    id: 11,
    name: 'E-Psikolog',
    thumbnail: '/images/portfolio/e-psikolog/e-psikolog.png',
  },
]

export function getAllPortfolios() {
  return portfolios
}

export function getPortfolioById(id) {
  return portfolios.find((portfolio) => portfolio.id === id)
}
