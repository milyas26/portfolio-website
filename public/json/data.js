const portfolios = [
  {
    id: 1,
    name: 'Wayshub - Video Sharing App',
    slug: 'wayshub',
    thumbnail: '/images/portfolio/wayshub/wayshub.png',
    link: {
      type: 'Repository',
      url: 'https://github.com/milyas26/DWF19TB3E_Wayshub_Fullstack',
    },
    role: 'Fullstack',
    description:
      'Wayshub merupakan platform untuk berbagi video online seperti youtube, yang kemudian dapat ditonton oleh orang lain. Wayshub ini adalah salah satu project individu yang saya kerjakan ketika mengikuti Bootcamp Dumbways Indonesia.',
    pekerjaan: [
      {
        id: 1,
        text:
          'Mengkonversi design figma yang sebelumnya telah dibuat oleh designer UI/UX menjadi reusable component React Js atomic design yang nantinya dapat digunakan kembali pada komponen lainnya.',
      },
      {
        id: 2,
        text:
          'Membuat Rest API menggunakan Express Js dan berbagai packages atau dependensi pendukung lain untuk membantu pembuatan API seperti Multer untuk middleware upload file gambar dan video, Cloudinary sebagai tempat penyimpanan, Json Web Token (JWT) sebagai metode authentikasi yang digunakan, Validasi backend menggunakan Joi, Cors untuk menghandle blocking saat integrasi di Frontend, dan lain-lain.',
      },
      {
        id: 3,
        text:
          'Mengintegrasikan Rest API yang telah dibuat sebelumnya agar menjadi sebuah aplikasi yang utuh, dengan menggunakan berbagai package atau dependensi frontend seperti Axios untuk fetch API, React Redux untuk state management, React Player sebagai pemutar video, dan lain-lain.',
      },
    ],
    stacks: [
      {
        id: 1,
        stack: 'React-Js',
      },
      {
        id: 2,
        stack: 'Bootstrap',
      },
      {
        id: 3,
        stack: 'Express-Js',
      },
      {
        id: 4,
        stack: 'MySQL',
      },
    ],
  },
  {
    id: 2,
    name: 'Waysgallery - Hire Designer',
    slug: 'waysgallery',
    thumbnail: '/images/portfolio/waysgallery/waysgallery.png',
    link: {
      type: 'Repository',
      url: 'https://github.com/milyas26/DWF19TB3E_waysgallery',
    },
    role: 'Fullstack',
    description:
      'Waysgallery adalah platform dimana para designer dapat memamerkan portfolio mereka, dan kemudian orang lain dapat langsung menghire mereka, mirip seperti dribble versi sederhana. Waysgallery merupakan salah satu project individu yang saya kerjakan selama satu minggu ketika mengikuti Bootcamp Dumbways Indonesia.',
    pekerjaan: [
      {
        id: 1,
        text:
          'Mengkonversi design figma yang sebelumnya telah dibuat oleh designer UI/UX menjadi reusable component React Js atomic design yang nantinya dapat digunakan kembali pada komponen lainnya.',
      },
      {
        id: 2,
        text:
          'Membuat Rest API menggunakan Express Js dan berbagai packages atau dependensi pendukung lain untuk membantu pembuatan API seperti Multer untuk middleware upload file gambar, Cloudinary sebagai tempat penyimpanan, Json Web Token (JWT) sebagai metode authentikasi yang digunakan, Validasi backend menggunakan Joi, Cors untuk menghandle blocking saat integrasi di Frontend, dan lain-lain.',
      },
      {
        id: 3,
        text:
          'Mengintegrasikan Rest API yang telah dibuat sebelumnya agar menjadi sebuah aplikasi yang utuh, dengan menggunakan berbagai package atau dependensi frontend seperti Axios untuk fetch API, React Redux untuk state management, dan lain-lain.',
      },
    ],
    stacks: [
      {
        id: 1,
        stack: 'React-Js',
      },
      {
        id: 2,
        stack: 'Bootstrap',
      },
      {
        id: 3,
        stack: 'Express-Js',
      },
      {
        id: 4,
        stack: 'MySQL',
      },
    ],
  },
  {
    id: 3,
    name: 'Staycation - Booking Hotel',
    slug: 'staycation',
    thumbnail: '/images/portfolio/staycation/staycation.png',
    link: {
      type: 'Website',
      url: 'https://staycation-32fc5.web.app/',
    },
    role: 'Fullstack',
    description:
      'Stacycation merupakan website dimana pengguna dapat melakukan booking penginapan secara online. Website ini saya buat saat mengikuti kursus Fullstack Javascript Developer di Build With Angga.',
    pekerjaan: [
      {
        id: 1,
        text:
          'Membuat user flow, wireframing, moodboard, sampai membuat visual design menggunakan Invision App dan Figma.',
      },
      {
        id: 2,
        text:
          'Slicing design figma yang sebelumnya telah dibuat menjadi reusable component React Js yang nantinya dapat digunakan kembali pada komponen lainnya.',
      },
      {
        id: 3,
        text:
          'Membuat dashboard admin menggunakan template engine ejs, dan membuat API yang nantinya akan diintegrasikan di Frontend.',
      },
      {
        id: 4,
        text:
          'Integrasi API yang telah dibuat sebelumnya menggunakan beberapa package atau dependensi pendukung seperti Axios untuk fetch API, React Redux sebagai state management, dan lain-lain.',
      },
      {
        id: 5,
        text:
          'Mendeploy API yang telah dibuat pada Heroku. dan deploy Frontend menggunakan Firebase.',
      },
    ],
    stacks: [
      {
        id: 1,
        stack: 'React-Js',
      },
      {
        id: 2,
        stack: 'Redux',
      },
      {
        id: 3,
        stack: 'Bootstrap',
      },
      {
        id: 4,
        stack: 'Express-Js',
      },
      {
        id: 5,
        stack: 'MongoDB',
      },
    ],
  },
  {
    id: 4,
    name: 'Dompet Dhuafa - Crowdfunding App',
    slug: 'dompet-dhuafa',
    thumbnail: '/images/portfolio/dompet-dhuafa/dompet-dhuafa.png',
    link: {
      type: 'Website',
      url: 'https://jadibaik.org/',
    },
    role: 'Frontend',
    description:
      'Dompet Dhuafa atau Jadibaik.org merupakan platform crowdfunding atau website perantara untuk melakukan donasi secara online, website ini telah tersedia dalam 2 bahasa yaitu Inggris dan Indonesia.',
    pekerjaan: [
      {
        id: 1,
        text:
          'Mengkonversi design figma yang sebelumnya telah dibuat oleh designer UI/UX menjadi reusable component React Js yang responsive untuk segala jenis device.',
      },
      {
        id: 2,
        text:
          'Membuat templating layout untuk bagian yang memiliki desain yang sama agar konsisten seperti header dan footer, dan menjadikannya sebuah komponen Layout.',
      },
      {
        id: 3,
        text:
          'Melakukan integrasi Rest API yang sebelumnya telah dibuat oleh Backend Developer dan membuat proxy untuk setiap API yang dipanggil dengan menggunakan route api yang telah tersedia pada Next Js, sehingga fetch APi menjadi lebih aman.',
      },
      {
        id: 4,
        text:
          'Membuat component pre rendering sehingga performerce loading halaman menjadi lebih cepat. Server Side Rendering (SSR) membuat proses rendering menjadi lebih cepat, sehingga dapat meningkatkan SEO pada website.',
      },
      {
        id: 5,
        text:
          'Melakukan testing pada website yang telah dibuat untuk memastikan tidak terdapat bug atau error, dan kemudian akan di test lebih lanjut oleh QA.',
      },
    ],
    stacks: [
      {
        id: 1,
        stack: 'Next-Js',
      },
      {
        id: 2,
        stack: 'React-Js',
      },
      {
        id: 3,
        stack: 'Bootstrap',
      },
      {
        id: 4,
        stack: 'Redux',
      },
      {
        id: 5,
        stack: 'SASS',
      },
    ],
  },
  {
    id: 5,
    name: 'Halwey - Ecommerce Beauty',
    slug: 'halwey',
    thumbnail: '/images/portfolio/halwey/halwey.png',
    link: {
      type: 'Website',
      url: 'https://halwey.com/',
    },
    role: 'Frontend',
    description:
      'Halwey merupakan platform e-commerce yang menyediakan berbagai macam produk kecantikan, website ini juga telah tersedia dalam 2 bahasa yaitu Inggris dan Indonesia.',
    pekerjaan: [
      {
        id: 1,
        text:
          'Mengkonversi design figma yang sebelumnya telah dibuat oleh designer UI/UX menjadi reusable component React Js yang responsive untuk segala jenis device.',
      },
      {
        id: 2,
        text:
          'Membuat templating layout untuk bagian yang memiliki desain yang sama agar konsisten seperti header dan footer, dan menjadikannya sebuah komponen Layout.',
      },
      {
        id: 3,
        text:
          'Melakukan integrasi Rest API yang sebelumnya telah dibuat oleh Backend Developer dan membuat proxy untuk setiap API yang dipanggil dengan menggunakan route api yang telah tersedia pada Next Js, sehingga fetch APi menjadi lebih aman.',
      },
      {
        id: 4,
        text:
          'Membuat component pre rendering sehingga performerce loading halaman menjadi lebih cepat. Server Side Rendering (SSR) membuat proses rendering menjadi lebih cepat, sehingga dapat meningkatkan SEO pada website.',
      },
      {
        id: 5,
        text:
          'Melakukan testing pada website yang telah dibuat untuk memastikan tidak terdapat bug atau error, dan kemudian akan di test lebih lanjut oleh QA.',
      },
    ],
    stacks: [
      {
        id: 1,
        stack: 'Next-Js',
      },
      {
        id: 2,
        stack: 'React-Js',
      },
      {
        id: 3,
        stack: 'Bootstrap',
      },
      {
        id: 4,
        stack: 'Redux',
      },
      {
        id: 5,
        stack: 'SASS',
      },
    ],
  },
  {
    id: 6,
    name: 'Menarini - Ecommerce Medicine',
    slug: 'menarini',
    thumbnail: '/images/portfolio/menarini/menarini.png',
    link: {
      type: 'Website',
      url: 'https://menarinistore.id/',
    },
    role: 'Frontend',
    description:
      'Menarini merupakan platform e-commerce yang menyediakan berbagai macam produk obatobatan dari berbagai macam brand, website ini juga telah tersedia dalam 2 bahasa yaitu Inggris dan Indonesia.',
    pekerjaan: [
      {
        id: 1,
        text:
          'Mengkonversi design figma yang sebelumnya telah dibuat oleh designer UI/UX menjadi reusable component React Js yang responsive untuk segala jenis device.',
      },
      {
        id: 2,
        text:
          'Membuat templating layout untuk bagian yang memiliki desain yang sama agar konsisten seperti header dan footer, dan menjadikannya sebuah komponen Layout.',
      },
      {
        id: 3,
        text:
          'Melakukan integrasi Rest API yang sebelumnya telah dibuat oleh Backend Developer dan membuat proxy untuk setiap API yang dipanggil dengan menggunakan route api yang telah tersedia pada Next Js, sehingga fetch APi menjadi lebih aman.',
      },
      {
        id: 4,
        text:
          'Membuat component pre rendering sehingga performerce loading halaman menjadi lebih cepat. Server Side Rendering (SSR) membuat proses rendering menjadi lebih cepat, sehingga dapat meningkatkan SEO pada website.',
      },
      {
        id: 5,
        text:
          'Melakukan testing pada website yang telah dibuat untuk memastikan tidak terdapat bug atau error, dan kemudian akan di test lebih lanjut oleh QA.',
      },
    ],
    stacks: [
      {
        id: 1,
        stack: 'Next-Js',
      },
      {
        id: 2,
        stack: 'React-Js',
      },
      {
        id: 3,
        stack: 'Bootstrap',
      },
      {
        id: 4,
        stack: 'Redux',
      },
      {
        id: 5,
        stack: 'SASS',
      },
    ],
  },
  {
    id: 7,
    name: 'Parama Apartment - Company Profile',
    slug: 'parama-apartment',
    thumbnail: '/images/portfolio/parama/parama.png',
    link: {
      type: 'Repository',
      url: 'https://github.com/milyas26/parama-hotel',
    },
    role: 'Fullstack',
    description:
      'Parama Apartment merupakan website company profile sekaligus web application yang dapat digunakan oleh admin, pekerja, dan penyewa pada apartemen tersebut. penyewa dapat mendaftar melalui admin, dan kemudian dapat melengkapi sendiri data diri melalui dashboard yang mereka miliki. Penyewa dapat melihat informasi tagihan mereka, complain mengenai unit yang mereka tempati, dan lain-lain melalui dashboard mereka. Website Parama Apartment ini merupakan clone dari website official Parama Apartment, dan sekaligus merupakan project pribadi saya saat mempelajari stack Laravel',
    pekerjaan: [
      {
        id: 1,
        text:
          'Mengkonversi design figma menjadi halaman laravel blade interaktif, dengan menggunakan Bootstrap, Javascript DOM, jQuery, dan Ajax.',
      },
      {
        id: 2,
        text:
          'Membuat berbagai fitur yang ada pada dashboard admin dengan berbagai role dengan konsep Model, View, Controller (MVC).',
      },
      {
        id: 3,
        text:
          'Melakukan testing pada website yang telah dibuat untuk memastikan tidak terdapat bug atau error.',
      },
    ],
    stacks: [
      {
        id: 1,
        stack: 'laravel',
      },
      {
        id: 2,
        stack: 'Bootstrap',
      },
      {
        id: 3,
        stack: 'Jquery',
      },
    ],
  },
  {
    id: 8,
    name: 'Jakodes - Jaringan Toko & Bumdes',
    slug: 'jakodes',
    thumbnail: '/images/portfolio/jakodes/jakodes.png',
    role: 'Fullstack',
    description:
      'Jakodes (Jaringan Toko BUMDES) merupakan web aplication untuk para pelaku usaha toko atau mitra yang berada dibawah Jakodes, disini para mitra dapat meminta stock barang pada jaringan atasnya secara langsung, dengan ini sistem pendistribusian barang menjadi lebih efektif',
    pekerjaan: [
      {
        id: 1,
        text:
          'Mengkonversi design figma yang sebelumnya telah dibuat oleh designer UI/UX menjadi halaman laravel blade interaktif, dengan menggunakan Bootstrap, Javascript DOM, jQuery, dan Ajax.',
      },
      {
        id: 2,
        text:
          'Membuat berbagai fitur yang ada pada dashboard admin dengan berbagai role dengan konsep Model, View, Controller (MVC).',
      },
      {
        id: 3,
        text:
          'Berkolaborasi bersama tim backend lain dengan menggunakan Github sebagai Version Control, dan Trello sebagai project management.',
      },
      {
        id: 4,
        text:
          'Melakukan testing pada website yang telah dibuat untuk memastikan tidak terdapat bug atau error, dan kemudian akan di test lebih lanjut oleh QA.',
      },
    ],
    stacks: [
      {
        id: 1,
        stack: 'laravel',
      },
      {
        id: 2,
        stack: 'Bootstrap',
      },
      {
        id: 3,
        stack: 'Jquery',
      },
    ],
  },
  {
    id: 9,
    name: 'Untung Lagi - Online Shop and Courier',
    slug: 'untung-lagi',
    thumbnail: '/images/portfolio/untung-lagi/untung-lagi.png',
    role: 'Fullstack',
    description:
      'Untung Lagi merupakan web aplication penyedia layanan PPOB, pemesanan tiket transportasi, produk dari berbagai merchant, kurir, wisata, penginapan, dan lain-lain yang dapat dipesan melalui aplikasi mobile.',
    pekerjaan: [
      {
        id: 1,
        text:
          'Mengkonversi design figma yang sebelumnya telah dibuat oleh designer UI/UX menjadi halaman laravel blade interaktif, dengan menggunakan Bootstrap, Javascript DOM, jQuery, dan Ajax.',
      },
      {
        id: 2,
        text:
          'Membuat berbagai fitur yang ada pada dashboard admin dengan berbagai role dengankonsep Model, View, Controller (MVC).',
      },
      {
        id: 3,
        text:
          'Membuat API yang nantinya akan digunakan untuk diintegrasikan dengan aplikasi mobile, kolaborasi bersama tim backend lain dengan menggunakan Github sebagai Version Control, dan Trello sebagai project management.',
      },
      {
        id: 4,
        text:
          'Melakukan testing pada website yang telah dibuat untuk memastikan tidak terdapat bug atau error, dan kemudian akan di test lebih lanjut oleh QA.',
      },
    ],
    stacks: [
      {
        id: 1,
        stack: 'laravel',
      },
      {
        id: 2,
        stack: 'Bootstrap',
      },
      {
        id: 3,
        stack: 'Jquery',
      },
    ],
  },
  {
    id: 10,
    name: 'E-Psikolog - Psychology Test Online',
    slug: 'e-psikolog',
    thumbnail: '/images/portfolio/e-psikolog/e-psikolog.png',
    role: 'Fullstack',
    description:
      'E-Psikolog merupakan web application atau platform untuk melakukan psikotest online yang ditujukan pada perusahaan dan sekolah.',
    pekerjaan: [
      {
        id: 1,
        text:
          'Mengkonversi design figma yang sebelumnya telah dibuat oleh designer UI/UX menjadi halaman laravel blade interaktif, dengan menggunakan Bootstrap, Javascript DOM, jQuery, dan Ajax.',
      },
      {
        id: 2,
        text:
          'Membuat berbagai fitur yang ada pada dashboard admin dengan berbagai role dengan konsep Model, View, Controller (MVC).',
      },
      {
        id: 3,
        text:
          'Berkolaborasi bersama tim backend lain dengan menggunakan Github sebagai Version Control, dan Trello sebagai project management.',
      },
      {
        id: 4,
        text:
          'Melakukan testing pada website yang telah dibuat untuk memastikan tidak terdapat bug atau error, dan kemudian akan di test lebih lanjut oleh QA.',
      },
    ],
    stacks: [
      {
        id: 1,
        stack: 'laravel',
      },
      {
        id: 2,
        stack: 'Bootstrap',
      },
      {
        id: 3,
        stack: 'Jquery',
      },
    ],
  },
  {
    id: 11,
    name: 'The Lavande Apartment',
    slug: 'the-lavande-apartment',
    thumbnail: '/images/portfolio/lavande/lavande.png',
    link: {
      type: 'Website',
      url: 'https://apartment-thelavande-residence.id/',
    },
    role: 'Fullstack',
    description:
      'The Lavande Residence merupakan website company profile sekaligus web application yang dapat digunakan oleh admin, pekerja, dan penyewa pada apartemen/residence tersebut. penyewa dapat mendaftar melalui admin, dan kemudian dapat melengkapi sendiri data diri melalui dashboard yang mereka miliki. Penyewa dapat melihat informasi tagihan mereka, complain mengenai unit yang mereka tempati, dan lain-lain melalui dashboard mereka',
    pekerjaan: [
      {
        id: 1,
        text:
          'Mengkonversi design figma yang sebelumnya telah dibuat oleh designer UI/UX menjadi halaman laravel blade interaktif, dengan menggunakan Bootstrap, Javascript DOM, jQuery, dan Ajax.',
      },
      {
        id: 2,
        text:
          'Membuat berbagai fitur yang ada pada dashboard admin dengan berbagai role dengan konsep Model, View, Controller (MVC).',
      },
      {
        id: 3,
        text:
          'Berkolaborasi bersama tim backend lain dengan menggunakan Github sebagai Version Control, dan Trello sebagai project management.',
      },
      {
        id: 4,
        text:
          'Melakukan testing pada website yang telah dibuat untuk memastikan tidak terdapat bug atau error, dan kemudian akan di test lebih lanjut oleh QA.',
      },
    ],
    stacks: [
      {
        id: 1,
        stack: 'laravel',
      },
      {
        id: 2,
        stack: 'Bootstrap',
      },
      {
        id: 3,
        stack: 'Jquery',
      },
    ],
  },
]

export function getAllPortfolios() {
  return portfolios
}

export function getPortfolioBySlug(slug) {
  return portfolios.find((portfolio) => portfolio.slug == slug)
}
