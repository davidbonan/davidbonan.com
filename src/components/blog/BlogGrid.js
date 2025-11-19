import { compareDesc } from 'date-fns'
import { Post } from './Post'

const translations = {
  en: {
    readLatest: 'Read the latest',
  },
  fr: {
    readLatest: 'Lire les derniers',
  },
}

export async function BlogGrid({ posts, featured = false, locale = 'en' }) {
  const t = translations[locale]

  return (
    <div className="relative mx-auto mt-14 grid max-w-lg gap-8 sm:mt-16 md:mx-0 md:max-w-none md:grid-cols-2 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-6 xl:gap-x-6 xl:gap-y-8">
      {featured && (
        <div className="absolute -top-20 hidden gap-6 lg:-left-4 xl:flex 2xl:-left-24">
          <span className="inline-block -rotate-12 transform font-writing text-2xl tracking-wide text-slate-600">
            {t.readLatest}
          </span>

          <svg
            viewBox="0 0 85 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative -left-1 top-2 h-auto w-16 rotate-45 -scale-100 transform text-slate-600"
          >
            <path
              d="M84.1428 1.12604C68.4579 15.0432 48.2728 24.8484 26.7076 22.7737C20.393 22.1662 13.251 19.5041 7.51 16.6647C6.29685 16.0646 5.19832 15.2656 4.08583 14.4969C3.06981 13.7949 4.95423 22.296 5.12047 23.2959C6.89794 33.9863 5.2443 22.4385 4.04146 18.4653C3.10796 15.3818 1.13626 12.2911 0.701068 9.07517C0.350636 6.4856 5.49948 7.02736 7.26614 6.8582C9.08258 6.68426 20.8214 3.77937 19.2507 7.81152C16.4328 15.0458 10.9147 19.889 6.01223 25.5572"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            ></path>
          </svg>
        </div>
      )}
      {posts
        .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
        .map((post) => (
          <Post key={post.slug} post={post} locale={locale} />
        ))}
    </div>
  )
}
