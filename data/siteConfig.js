module.exports = {
  siteTitle: 'Code Circuit',
  siteDescription: 'Learn Programming and Web Development',
  authorName: 'Ammaar Aslam',
  twitterUsername: '_maxpou',
  authorAvatar: 'avatar.jpg', // file in content/images
  defaultLang: 'en', // show flag if lang is not default. Leave empty to enable flags in post lists
  authorDescription: `
  Hi👋 I’m Ammaar Aslam. I’m a 16 year-old self taught programmer/web developer from Sri Lanka. 
  Code Circuit is the place where I share my programming journey and help others to code as I learn.
  `,
  siteUrl: 'https://codecircuit.netlify.app/',
  disqusSiteUrl: 'https://www.codecircuit.netlify.app/',
  // Prefixes all links. For cases when deployed to maxpou.fr/gatsby-starter-morning-dew/
  //pathPrefix: '/gatsby-starter-morning-dew', // Note: it must *not* have a trailing slash.
  siteCover: 'cover-baymax.jpeg', // file in content/images
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'standalone',
  icon: 'content/images/CodeCircuitLogoDark.png',
  postsPerPage: 6,
  disqusShortname: 'maxpou',
  headerTitle: 'Code Circuit',
  headerLinksIcon: 'CodeCircuitLogoDark.png', //  (leave empty to disable: '')
  headerLinks: [
    {
      label: 'Blog',
      url: '/',
    },
    {
      label: 'About',
      url: '/about-gatsby-starter-morning-dew',
    },
    {
      label: 'Installation',
      url: '/how-to-install',
    },
  ],
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'GitHub',
    url: 'https://github.com',
  },
  footerLinks: [
    {
      sectionName: 'Explore',
      links: [
        {
          label: 'Blog',
          url: '/',
        },
        {
          label: 'About',
          url: '/about-gatsby-starter-morning-dew',
        },
        {
          label: 'Installation',
          url: '/how-to-install',
        },
      ],
    },
    {
      sectionName: 'Follow the author',
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/maxpou/gatsby-starter-morning-dew',
          rel: 'external',
        },
        {
          label: 'Website',
          url: 'https://www.maxpou.fr',
          rel: 'external',
        },
        {
          label: 'Twitter',
          url: 'https://twitter.com/_maxpou',
          rel: 'external',
        },
      ],
    },
  ],
}
