// import { allPosts } from 'contentlayer/generated'
import { Feed } from 'feed';
import fs from 'fs';
import allPosts from '../../.contentlayer/generated/Post/_index.json' with { type: 'json' };

export default async function generateRssFeed() {
  const site_url = 'https://davidbonan.io'

  const feedOptions = {
    title: 'David Bonan | Blog',
    description: 'David Bonan - Developer, entrepreneur, and general technology enthusiast',
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
      id: `${site_url}/blog/${post.slug}`,
      link: `${site_url}/blog/${post.slug}`,
      description: post.description,
      date: new Date(post.date),
    })
  })

  fs.writeFileSync('./public/rss.xml', feed.rss2())
  fs.writeFileSync('./public/rss.json', feed.json1());
  fs.writeFileSync('./public/atom.xml', feed.atom1());
}

generateRssFeed().then(() => {
  console.log('RSS feed generated successfully')
})
