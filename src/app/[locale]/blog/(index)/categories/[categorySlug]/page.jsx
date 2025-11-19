import { BlogGrid } from '@/components/blog/BlogGrid'
import { allPosts } from 'contentlayer/generated'

import { getAllCategories } from '@/lib/articles'

const parseCategory = (categorySlug) => {
  const category = categorySlug
    .replace(/-/g, ' ')
    .split(' ')
    .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
    .join(' ')
  return category
}

export const generateStaticParams = async () => {
  const params = []
  const locales = ['en', 'fr']

  for (const locale of locales) {
    const categories = await getAllCategories()
    categories.forEach((category) => {
      params.push({
        locale,
        categorySlug: category.replace(/ /g, '-').toLowerCase(),
      })
    })
  }

  return params
}

export async function generateMetadata({ params }) {
  const category = parseCategory(params.categorySlug)
  return { title: category }
}

export default async function BlogCategoryPage({ params }) {
  const { locale, categorySlug } = params
  const posts = allPosts.filter(
    (post) =>
      post.category === parseCategory(categorySlug) &&
      post.language === locale
  )

  return <BlogGrid posts={posts} locale={locale} />
}

export const dynamicParams = false
