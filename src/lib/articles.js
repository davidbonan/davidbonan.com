import { allPosts } from 'contentlayer/generated'

/**
 * Get all categories from all posts (across all languages)
 */
export async function getAllCategories() {
  let repeatingCategories = allPosts.map((post) => post.category)

  const categoryCount = new Map()

  repeatingCategories.forEach((category) => {
    if (categoryCount.has(category)) {
      categoryCount.set(category, categoryCount.get(category) + 1)
    } else {
      categoryCount.set(category, 1) // Map to capture Count of elements
    }
  })

  const uniqueCategories = [...new Set(repeatingCategories)]

  const categories = uniqueCategories.sort((category1, category2) => {
    let freq1 = categoryCount.get(category1)
    let freq2 = categoryCount.get(category2)

    return freq2 - freq1
  })

  return categories
}

/**
 * Get categories filtered by language
 */
export async function getCategoriesByLanguage(locale = 'en') {
  const postsInLanguage = allPosts.filter((post) => post.language === locale)
  let repeatingCategories = postsInLanguage.map((post) => post.category)

  const categoryCount = new Map()

  repeatingCategories.forEach((category) => {
    if (categoryCount.has(category)) {
      categoryCount.set(category, categoryCount.get(category) + 1)
    } else {
      categoryCount.set(category, 1)
    }
  })

  const uniqueCategories = [...new Set(repeatingCategories)]

  const categories = uniqueCategories.sort((category1, category2) => {
    let freq1 = categoryCount.get(category1)
    let freq2 = categoryCount.get(category2)

    return freq2 - freq1
  })

  return categories
}

/**
 * Get all posts filtered by language
 */
export function getPostsByLanguage(locale = 'en') {
  return allPosts.filter((post) => post.language === locale)
}

/**
 * Get a single post by slug and language
 */
export function getPostBySlug(slug, locale = 'en') {
  return allPosts.find((post) => post.slug === slug && post.language === locale)
}
