import { MetadataRoute } from 'next'
import path from 'path'

import { getPosts } from '@/lib/posts'

const BASE_URL = `https://trifunovski.me`

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts(path.join(process.cwd(), 'posts'))

  const fixedSitemap: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${BASE_URL}/posts`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ]

  const postsSitemap: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/posts/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  return fixedSitemap.concat(postsSitemap)
}
