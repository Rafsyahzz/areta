module.exports = {
  siteMetadata: {
    title: "Kampus IT dan Bisnis Full Praktek Pengajar Praktisi di Tangerang",
    description:
      "Official website Areta Informatics College dikembakangkan dengan framework GatsbyJS dan CMS Netlify.",
    author : "eka",
    keywords: "Kampus IT Tangerang, MTCNA, training mtcna, training mtcna associate, training mtcna bandung, training mtcna exam, training mtcna jakarta, Training Sertifikasi MTCNA, training sertifikasi mtcna mikrotik, training sertifikasi mtcna associate, training sertifikasi mtcna bandung, training sertifikasi mtcna bekasi,training sertifikasi MTCNA 2024, training sertifikasi MTCNA di indonesia, training sertifikasi MTCNA sertifikat, training sertifikasi MTCNA certificate, training sertifikasi MTCNA surabaya, training sertifikasi MTCNA mtcre, training sertifikasi mikrotik mtcna, training sertifikasi mikrotik 2024, training sertifikasi mikrotik associate, training sertifikasi mikrotik, training sertifikasi mikrotik, training sertifikasi mikrotik di makasar, training sertifikasi mikrotik di tangerang, training sertifikasi mikrotik di indonesia, training sertifikasi mikrotik di bekasi, training sertifikasik mikrotik exam, basic basic mikrotik training, training mikrotik jakarta, mtcna sertifikat, training sertifikasi mikrotik, training sertifikasi mikrotik, training sertifikasi mikrotik tangerang, training sertifikasi mikrotik bandung, training sertifikasi mikrotik surabaya, training sertifikasi mtcna, training sertifikasi mtcna mikrotik, Kuliah IT Tangerang, Kuliah Jurusan Teknik Informatika, Jurusan Teknik Informatika, Areta Informatics College, kampusfullpraktek, AretaInformaticsCollege,bisnis digital, digital marketing, full praktek,Kampus IT Tangerang, Kuliah IT Tangerang, Kuliah Jurusan Teknik Informatika, Jurusan Teknik Informatika, Areta Informatics College, Training Sertifikasi MikroTik, Sertifikasi MTCNA, Pelatihan Jaringan Tangerang, Areta Informatics College, Pelatihan IT 2024, Sertifikasi MikroTik,sertifikasi mikrotik mtcna, sertifikasi mikrotik indonesia, sertifikasi mikrotik mtcna,sertifikasi mikrotik, sertifikasi mikrotik certificate, sertifikasi mikrotik certified, sertifikasi mikrotik certification, Training MTCNA, Ahli Jaringan, MikroTik Tangerang, Pelatihan IT, Sertifikasi Mikrotik 2024, Areta Informatics College, Pelatihan Jaringan Komputer,Mikrotik Full Praktek, Sertifikasi IT, training mikrotik, sertifikasi MTCNA, sertifikasi jaringan, Training Mikrotik MTCNA + Exam, MTCNA, Mikrotik Training Seminar, Basic Mikrotik Training, MikroTik Certified Network Associate, MTCRE MTCWE MTCTE, sertifikasi MTCNA", 
   
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
