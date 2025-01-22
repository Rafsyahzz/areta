module.exports = {
  siteMetadata: {
    title: "Kampus IT full Praktek Tangerang | Kampus Bisnis Digital Full Praktek Tangerang| kampus IT indonesia",
    description: "Kampus IT dan Kampus Bisnis Digital terbaik di Tangerang Indonesia dengan pengajaran full praktek. Menyediakan pelatihan networking, sertifikasi Mikrotik, sertifikasi digital marketing bnsp, sertifikasi digital marketing tangerang, sertifikasi bnsp conten creator, dan sertifikasi BNSP.",  
    author : "eka",
    keywords: [
      "Kampus IT Tangerang",
      "Kampus IT full praktek",
      "Kampus IT indonesia",
      "kampus IT terdekat", 
      "kampus teknik informatika",
      "Kampus Bisnis Digital",
      "Kampus Bisnis Digital tangerang",
      "kampus bisnis digital terdekat", 
      "Kuliah IT Tangerang",
      "kuliah IT terbaik", 
      "kuliah it indonesia",
      "kuliah it full praktek", 
      "kuliah it areta informatics college", 
      "kuliah jurusan teknik informatika",
      "kuliah jurusan networking",
      "kuliah jurusan programing", 
      "kuliah jurusan design", 
      "kuliah jurusan conten creator", 
      "kuliah jurusan bisnis digital", 
      "kursus Jaringan komputer", 
      "kursus jaringan komputer tangerang", 
      "kursus komputer", 
      "kursus komputer tangerang", 
      "Sertifikasi MikroTik", 
      "sertifikasi mikrotik tangerang", 
      "sertifikasi mikrotik indonesia", 
      "Training MTCNA Tangerang", 
      "Jurusan Teknik Informatika", 
      "jurusan teknik informatika tangerang", 
      "Pelatihan jaringan tangerang", 
      "pelatihan jaringan mikrotik:, 
      "belajar jaringan mikrotik", 
      "kursus mikrotik tangerang", 
      "kursus cisco tangerang",
      "Jurusan IT Areta Informatics College",
      "Jurusan IT Areta Informatics College Banten",
      "Jurusan IT Areta Informatics College daerah Kelapa Dua Karawaci",
      "Jurusan IT Areta Informatics College desa Kelapa Dua",
      "Jurusan IT Areta Informatics College di Karawaci",
      "Jurusan IT Areta Informatics College Karawaci",
      "Jurusan IT Areta Informatics College terbaik",
      "Jurusan IT Areta Informatics College terdekat",
      "Jurusan IT Areta Informatics College terdekat di Banten",
      "Jurusan IT Areta Informatics College terdekat di Kota tangerang",
      "Jurusan IT Areta Informatics College terdekat di Tangerang",
      "Jurusan IT daerah jawa barat",
      "Jurusan IT kota tangerang",
      "Jurusan IT kabupaten Tangerang",
      "Jurusan IT terbaik di Banten",
      "Jurusan IT terdekat dan murah",
      "Jurusan Networking Areta Informatics College",
      "Jurusan Networking Areta Informatics College Banten",
      "Jurusan Networking Areta Informatics College terdekat",
      "Jurusan Networking Banten",
      "Jurusan Networking kabupaten Tangerang",
      "Jurusan Networking Karawaci",
      "Jurusan Teknik Informatika",
      "Jurusan Teknik Informatika (Jurusan IT)",
      "Jurusan Teknik Informatika Areta Informatics College",
      "Kampus Full Praktek  Areta Informatics College terbaik",
      "Kampus Full Praktek Areta Informatics College",
      "Kampus Full Praktek Areta Informatics College Banten",
      "Kampus Full Praktek Areta Informatics College Karawaci",
      "Kampus Full Praktek Areta Informatics College terdekat",
      "Kampus Full Praktek Areta Informatics College terdekat Kampus IT terbaik",
      "Kampus Full Praktek indonesia",
      "Kampus Full Praktek terdekat",
      "Kampus Full Praktek terdekat di Banten",
      "Kampus Full Praktek terdekat di desa Kelapa Dua",
      "Kampus Full Praktek terdekat di Karawaci",
      "Kampus IT",
      "Kampus IT Areta Informatics College Banten",
      "Kampus IT Areta Informatics College Karawaci",
      "Kampus IT Areta Informatics College Tangerang",
      "Kampus IT Areta Informatics College terbaik di indonesia",
      "Kampus IT Areta Informatics College terdekat".
      "Kampus IT Areta Informatics College terdekat di Banten",
      "Kampus IT Areta Informatics College terdekat di Karawaci",
      "Kampus IT terdekat",
      "Kampus IT terdekat dan murah",
      "Kampus IT terdekat dari lokasi saya",
      "Kampus IT terdekat di Banten",
      "Kampus IT terdekat di desa Kelapa Dua",
      "Kampus IT terdekat di Karawaci",
      "kegiatan Jurusan Teknik Informatika Areta Informatics College",
      "Kuliah Bisnis Digital daerah Banten",
      "Kuliah Bisnis Digital daerah kabupaten Tangerang",
      "Kuliah Bisnis Digital daerah Tangerang",
      "Kuliah IT Banten",
      "Kuliah IT Jurusan IT",
      "Kuliah IT Tangerang",
      "Kuliah IT terbaik",
      "Kuliah IT terbaik di Banten",
      "Kuliah IT terbaik di indonesia",
      "Kuliah IT terdekat",
      "program Areta Informatics College",
      "visi dan misi Jurusan IT Areta Informatics College",
      "yayasan Areta Informatics College",
    ],
    },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        sassOptions: {
          indentedSyntax: true,
        },
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images",
      },
    },
    `gatsby-plugin-image`,
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
          {
            resolve: 'gatsby-plugin-next-seo',
            options: {
              openGraph: {
                type: 'website',
                locale: 'en_IE',
                url: 'https://aretacollege.netlify.app/',
                site_name: 'AretaCollege',
              },
              twitter: {
                handle: '@aretacollege',
                site: '@aretacollege',
                cardType: 'summary_large_image',
              },
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ['/bulma-style.sass'], // applies purging only on the bulma css file
        printRejected: true,
      },
    }, // must be after other CSS plugins
    "gatsby-plugin-netlify", // make sure to keep it last in the array
    'gatsby-plugin-postcss',
  ],
};
