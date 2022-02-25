module.exports = {
  siteTitle: 'Code Circuit',
  siteDescription: 'Programming and Web Development Tutorials, Tips and Tricks',
  authorName: 'Ammaar Aslam',
  twitterUsername: '_maxpou',
  authorAvatar: 'avatar.jpg', // file in content/images
  defaultLang: 'en', // show flag if lang is not default. Leave empty to enable flags in post lists
  authorDescription: `
  Hi👋, I’m <a href='/ammaar-aslam'>Ammaar Aslam</a>. I’m a passionate, self taught programmer from Sri Lanka. 
  I'm the founder and author of Code Circuit. I built this blog to share my programming journey and help others along the way.
  <br>
  <br>
  You can follow me on <a href='https://twitter.com/itsammaar_7' target="_blank">Twitter</a>, <a href='https://instagram.com/its.ammaar_7' target="_blank">Instagram</a> and <a href='https://github.com/ammaaraslam' target="_blank">Github</a>
  `,
  siteUrl: 'https://codecircuit.netlify.app',
  disqusSiteUrl: 'https://www.codecircuit.netlify.app',
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
