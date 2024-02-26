import BlogPostCard from './BlogPostCard'
import BlogPostListEmpty from './BlogPostListEmpty'
import { useGlobal } from '@/lib/global'
import throttle from 'lodash.throttle'
import { useCallback, useEffect, useRef, useState } from 'react'
import CONFIG from '../config'
import { siteConfig } from '@/lib/config'

/**
 * Blog list scrolling pagin
 * @param posts 所有文章
 * @param tags 所有标签
 * @returns {JSX.Element}
 * @constructor
 */
const BlogPostListScroll = ({ posts = [], currentSearch, showSummary = siteConfig('NEXT_POST_LIST_SUMMARY', null, CONFIG) }) => {
  const postsPerPage = parseInt(siteConfig('POSTS_PER_PAGE'))
  const [page, updatePage] = useState(1)
  const postsToShow = getPostByPage(page, posts, postsPerPage)

  let hasMore = false
  if (posts) {
    const totalCount = posts.length
    hasMore = page * postsPerPage < totalCount
  }

  const handleGetMore = () => {
    if (!hasMore) return
    updatePage(page + 1)
  }

  // Monitor scrolling and automatic paging loading
  const scrollTrigger = useCallback(throttle(() => {
    const scrollS = window.scrollY + window.outerHeight
    const clientHeight = targetRef ? (targetRef.current ? (targetRef.current.clientHeight) : 0) : 0
    if (scrollS > clientHeight + 100) {
      handleGetMore()
    }
  }, 500))

  // Listen for scrolling
  useEffect(() => {
    window.addEventListener('scroll', scrollTrigger)
    return () => {
      window.removeEventListener('scroll', scrollTrigger)
    }
  }, [])

  const targetRef = useRef(null)
  const { locale } = useGlobal()

  if (!postsToShow || postsToShow.length === 0) {
    return <BlogPostListEmpty currentSearch={currentSearch} />
  } else {
    return <div ref={targetRef}>

      {/* Article List */}
      <div id='posts-wrapper' className='flex flex-wrap space-y-1 lg:space-y-4'>
        {postsToShow.map(post => (
          <BlogPostCard key={post.id} post={post} showSummary={showSummary} />
        ))}
      </div>

      <div>
        <div onClick={() => {
          handleGetMore()
        }}
          className='w-full my-4 py-4 text-center cursor-pointer glassmorphism shadow hover:shadow-xl duration-200 dark:text-gray-200'
        > {hasMore ? locale.COMMON.MORE : `${locale.COMMON.NO_MORE} `} </div>
      </div>
    </div>
  }
}

/**
 * Get articles from page 1 to the specified page number
 * @param page Which page
 * @param totalPosts All Articles
 * @param postsPerPage Number of articles per page
 * @returns {*}
 */
const getPostByPage = function (page, totalPosts, postsPerPage) {
  return totalPosts.slice(
    0,
    postsPerPage * page
  )
}
export default BlogPostListScroll
