import { MetadataRoute } from 'next'
import { blogs } from '../data/blogs'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jerrytiktoktool.com' // Yahan apni asli domain likhein

  // Blog posts ke links generate karein
  const blogUrls = blogs.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
  }))

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    { url: `${baseUrl}/privacy`, lastModified: new Date() },
    { url: `${baseUrl}/terms`, lastModified: new Date() },
    { url: `${baseUrl}/blog`, lastModified: new Date() },
    ...blogUrls,
  ]
}