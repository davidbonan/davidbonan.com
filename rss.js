import { Feed } from 'feed'
import fs from 'fs'
import allPosts from './.contentlayer/generated/Post/_index.json' with { type: 'json' }

export default async function generateRssFeed() {
  const site_url = 'https://davidbonan.io'

  // Generate main feed with all articles
  const feedOptions = {
    title: 'David Bonan | Blog',
    description:
      'David Bonan - Senior developer, entrepreneur, and general technology enthusiast',
    id: site_url,
    link: site_url,
    image: `${site_url}/logo.png`,
    favicon: `${site_url}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, David Bonan`,
    generator: 'Feed for developer',
    feedLinks: {
      rss2: `${site_url}/rss.xml`,
      json: `${site_url}/rss.json`,
      atom: `${site_url}/atom.xml`,
    },
  }

  const feed = new Feed(feedOptions)

  allPosts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: `${site_url}/${post.language}/blog/${post.slug}`,
      link: `${site_url}/${post.language}/blog/${post.slug}`,
      description: post.description,
      date: new Date(post.date),
      author: [
        {
          name: 'David Bonan',
          email: 'contact@davidbonan.com',
          link: 'https://davidbonan.io',
        },
      ],
    })
  })

  fs.writeFileSync('./public/rss.xml', feed.rss2())
  fs.writeFileSync('./public/rss.json', feed.json1())
  fs.writeFileSync('./public/atom.xml', feed.atom1())

  // Generate English-only feed
  const feedEnOptions = {
    ...feedOptions,
    title: 'David Bonan | Blog (English)',
    feedLinks: {
      rss2: `${site_url}/rss-en.xml`,
      json: `${site_url}/rss-en.json`,
      atom: `${site_url}/atom-en.xml`,
    },
  }

  const feedEn = new Feed(feedEnOptions)
  const enPosts = allPosts.filter((post) => post.language === 'en')

  enPosts.forEach((post) => {
    feedEn.addItem({
      title: post.title,
      id: `${site_url}/en/blog/${post.slug}`,
      link: `${site_url}/en/blog/${post.slug}`,
      description: post.description,
      date: new Date(post.date),
      author: [
        {
          name: 'David Bonan',
          email: 'contact@davidbonan.com',
          link: 'https://davidbonan.io',
        },
      ],
    })
  })

  fs.writeFileSync('./public/rss-en.xml', feedEn.rss2())
  fs.writeFileSync('./public/rss-en.json', feedEn.json1())
  fs.writeFileSync('./public/atom-en.xml', feedEn.atom1())

  // Generate French-only feed
  const feedFrOptions = {
    ...feedOptions,
    title: 'David Bonan | Blog (Français)',
    description:
      'David Bonan - Développeur senior, entrepreneur, et passionné de technologie',
    feedLinks: {
      rss2: `${site_url}/rss-fr.xml`,
      json: `${site_url}/rss-fr.json`,
      atom: `${site_url}/atom-fr.xml`,
    },
  }

  const feedFr = new Feed(feedFrOptions)
  const frPosts = allPosts.filter((post) => post.language === 'fr')

  frPosts.forEach((post) => {
    feedFr.addItem({
      title: post.title,
      id: `${site_url}/fr/blog/${post.slug}`,
      link: `${site_url}/fr/blog/${post.slug}`,
      description: post.description,
      date: new Date(post.date),
      author: [
        {
          name: 'David Bonan',
          email: 'contact@davidbonan.com',
          link: 'https://davidbonan.io',
        },
      ],
    })
  })

  fs.writeFileSync('./public/rss-fr.xml', feedFr.rss2())
  fs.writeFileSync('./public/rss-fr.json', feedFr.json1())
  fs.writeFileSync('./public/atom-fr.xml', feedFr.atom1())
}

generateRssFeed().then(() => {
  console.log('RSS feeds generated successfully (main + en + fr)')
})
