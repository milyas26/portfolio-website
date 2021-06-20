const portfolios = [
  {
    id: 1,
    name: 'Wayshub',
  },
  {
    id: 2,
    name: 'Waysgallery',
  },
  {
    id: 3,
    name: 'Staycation',
  },
  {
    id: 4,
    name: 'Dompet Dhuafa',
  },
  {
    id: 5,
    name: 'Halwey',
  },
  {
    id: 6,
    name: 'Menarini',
  },
  {
    id: 7,
    name: 'Parama Hotel',
  },
  {
    id: 8,
    name: 'Jakodes',
  },
  {
    id: 9,
    name: 'Untung Lagi',
  },
  {
    id: 10,
    name: 'Tweak Indonesia',
  },
  {
    id: 11,
    name: 'E-Psikolog',
  },
]

export function getAllPortfolios() {
  return portfolios
}

export function getPortfolioById(id) {
  return portfolios.find((portfolio) => portfolio.id === id)
}
