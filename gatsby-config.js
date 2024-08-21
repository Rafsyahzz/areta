module.exports = {
  siteMetadata: {
    title: "Kampus IT dan Bisnis Full Praktek Pengajar Praktisi di Tangerang",
    description:
      "Official website Areta Informatics College dikembakangkan dengan framework GatsbyJS dan CMS Netlify.",
    keywords: "Kampus IT Tangerang, Kuliah IT Tangerang, Kuliah Jurusan Teknik Informatika, Jurusan Teknik Informatika, Areta Informatics College, kampusfullpraktek, AretaInformaticsCollege,bisnis digital, digital marketing, full praktek,Kampus IT Tangerang, Kuliah IT Tangerang, Kuliah Jurusan Teknik Informatika, Jurusan Teknik Informatika, Areta Informatics College, Training Sertifikasi MikroTik, Sertifikasi MTCNA, Pelatihan Jaringan Tangerang, Areta Informatics College, Pelatihan IT 2024", 
    url:"www.aretacollege.com,",

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
