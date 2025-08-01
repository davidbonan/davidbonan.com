import { getAllCategories } from '@/lib/articles'
import { getAllTags } from '@/lib/caseStudies'
import { allCaseStudies, allPosts } from 'contentlayer/generated'

const SITE_URL = 'https://davidbonan.com'

function generateSitemapXml(urls) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`
}

export async function GET() {
  const urls = []

  // Static pages
  const staticPages = [
    { path: '', priority: '1.0', changefreq: 'weekly' },
    { path: '/blog', priority: '0.9', changefreq: 'daily' },
    { path: '/work', priority: '0.9', changefreq: 'weekly' },
  ]

  staticPages.forEach((page) => {
    urls.push({
      loc: `${SITE_URL}${page.path}`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: page.changefreq,
      priority: page.priority,
    })
  })

  // Blog posts
  allPosts.forEach((post) => {
    urls.push({
      loc: `${SITE_URL}/blog/${post.slug}`,
      lastmod: new Date(post.date).toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: '0.7',
    })
  })

  // Case studies
  allCaseStudies.forEach((caseStudy) => {
    urls.push({
      loc: `${SITE_URL}/work/${caseStudy.slug}`,
      lastmod: new Date(caseStudy.date).toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: '0.8',
    })
  })

  // Blog categories
  const categories = await getAllCategories()
  categories.forEach((category) => {
    const categorySlug = category.toLowerCase().replace(/\s+/g, '-')
    urls.push({
      loc: `${SITE_URL}/blog/categories/${categorySlug}`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: '0.6',
    })
  })

  // Work tags
  const tags = getAllTags()
  tags.forEach((tag) => {
    const tagSlug = tag.toLowerCase().replace(/\s+/g, '-')
    urls.push({
      loc: `${SITE_URL}/work/categories/${tagSlug}`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: '0.6',
    })
  })

  const sitemap = generateSitemapXml(urls)

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
