'use client'

import {
  FacebookIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'next-share'
import Image from 'next/image'
import Link from 'next/link'

const translations = {
  en: {
    previous: 'Previous',
    next: 'Next',
    writtenBy: 'Written by',
    recommendedArticles: 'Recommended Articles',
    copyLink: 'Copy link',
    min: 'min',
  },
  fr: {
    previous: 'Précédent',
    next: 'Suivant',
    writtenBy: 'Écrit par',
    recommendedArticles: 'Articles recommandés',
    copyLink: 'Copier le lien',
    min: 'min',
  },
}

const dateLocales = {
  en: 'en-US',
  fr: 'fr-FR',
}

function SocialIcon({ icon: Icon, ...props }) {
  return (
    <span
      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 duration-200 hover:bg-slate-50"
      {...props}
    >
      <Icon className="h-3.5 w-3.5 fill-slate-500 transition group-hover:fill-slate-600" />
    </span>
  )
}

function PostNavigationCard({ post, direction, locale = 'en' }) {
  if (!post) return null

  const t = translations[locale]
  const dateLocale = dateLocales[locale]

  return (
    <Link
      href={post.url}
      className={`group flex flex-1 flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition duration-200 hover:shadow-md ${
        direction === 'prev' ? 'mr-2' : 'ml-2'
      }`}
    >
      <div className="relative h-36 w-full overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill={true}
          className="w-full bg-slate-100 object-cover transition duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-slate-900/20 to-transparent"></div>
        <div
          className={`absolute ${
            direction === 'prev' ? 'left-4' : 'right-4'
          } top-4 flex items-center gap-1 rounded-sm bg-slate-900/40 px-2 py-1 text-xs font-semibold uppercase tracking-wider text-white/95`}
        >
          {direction === 'prev' ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-3.5 w-3.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
              {t.previous}
            </>
          ) : (
            <>
              {t.next}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-3.5 w-3.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </>
          )}
        </div>
      </div>
      <div className="flex flex-1 flex-col border-t border-slate-100 p-4">
        <div className="mb-2">
          <span className="rounded bg-sky-50 px-2 py-0.5 text-xs font-medium text-sky-600">
            {post.category}
          </span>
        </div>
        <h4 className="line-clamp-2 font-display text-md font-medium text-slate-900 transition duration-200 group-hover:text-sky-800">
          {post.title}
        </h4>
        <p className="mt-2 line-clamp-2 text-sm text-slate-600">
          {post.description}
        </p>
        <div className="mt-3 flex items-center space-x-2 text-xs text-slate-500">
          <span className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-3.5 w-3.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25"
              />
            </svg>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString(dateLocale, {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </time>
          </span>
          <span className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-3.5 w-3.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>
              {post.timeToRead} {t.min}
            </span>
          </span>
        </div>
      </div>
    </Link>
  )
}

export function PostFooter({ post, prevPost, nextPost, locale = 'en' }) {
  const IS_SERVER = typeof window === 'undefined'
  const url = IS_SERVER ? '' : window.location.href
  const t = translations[locale]

  return (
    <footer className="mx-auto max-w-2xl">
      <div className="mt-14 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-700">{t.writtenBy}</p>
          <p className="text-lg font-semibold  text-slate-900">David Bonan</p>
          <p className="text-sm italic text-slate-500">
            Senior developer - Typescript, React, Next.js & Node.js
          </p>
        </div>
      </div>

      {/* Post Navigation */}
      {(prevPost || nextPost) && (
        <>
          <div className="mt-14">
            <h3 className="mb-5 flex items-center text-lg font-medium text-slate-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mr-2 h-5 w-5 text-sky-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                />
              </svg>
              {t.recommendedArticles}
            </h3>
            <div className="flex flex-col gap-4 sm:flex-row">
              <PostNavigationCard
                post={prevPost}
                direction="prev"
                locale={locale}
              />
              <PostNavigationCard
                post={nextPost}
                direction="next"
                locale={locale}
              />
            </div>
          </div>
        </>
      )}

      <hr className="mt-14 h-px w-full pb-2 text-slate-300/75 sm:pb-8" />
      <div className="flex flex-col pb-4 sm:flex-row sm:items-center sm:justify-end sm:pb-10">
        <div className="mt-2.5 flex gap-3 sm:mt-0 sm:gap-4">
          <button className="group flex h-10 items-center justify-center gap-3 rounded-full border border-slate-200 px-6 text-sm font-medium text-slate-600 duration-200 ease-in-out hover:bg-slate-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              className="h-3.5 w-3.5 text-slate-500 transition duration-200 ease-in-out group-hover:text-slate-600"
            >
              <g
                strokeWidth="1.25"
                fill="none"
                stroke="currentCOlor"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2.5" y="3.5" width="10" height="12"></rect>{' '}
                <polyline
                  points="4.5,0.5 15.5,0.5 15.5,13.5 "
                  stroke="currentCOlor"
                ></polyline>{' '}
                <line x1="5.5" y1="6.5" x2="9.5" y2="6.5"></line>{' '}
                <line x1="5.5" y1="9.5" x2="9.5" y2="9.5"></line>{' '}
                <line x1="5.5" y1="12.5" x2="9.5" y2="12.5"></line>
              </g>
            </svg>
            {t.copyLink}
          </button>
          <LinkedinShareButton url={url}>
            <SocialIcon icon={LinkedInIcon} />
          </LinkedinShareButton>
          <FacebookShareButton url={url}>
            <SocialIcon icon={FacebookIcon} />
          </FacebookShareButton>
          <TwitterShareButton url={url}>
            <SocialIcon icon={TwitterIcon} />
          </TwitterShareButton>
        </div>
      </div>
    </footer>
  )
}
