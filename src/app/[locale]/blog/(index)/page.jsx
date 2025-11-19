import { BlogGrid } from '@/components/blog/BlogGrid'
import { allPosts } from 'contentlayer/generated'

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fr' }]
}

export default async function BlogPage({ params }) {
  const { locale } = params

  // Filter posts by language
  const postsInLanguage = allPosts.filter((post) => post.language === locale)

  return <BlogGrid posts={postsInLanguage} locale={locale} />
}
