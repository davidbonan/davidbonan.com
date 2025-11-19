import Link from 'next/link'

export function LanguageSwitcher({ currentLocale, alternates }) {
  // Don't show switcher if no alternates exist
  if (!alternates || Object.keys(alternates).length <= 1) {
    return null
  }

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' },
  ]

  return (
    <div className="inline-flex items-center gap-1 rounded-lg bg-white p-1 shadow-sm ring-1 ring-slate-900/5">
      {languages.map((lang) => {
        const isActive = currentLocale === lang.code
        const alternateSlug = alternates[lang.code]

        // Don't show language if no alternate exists
        if (!alternateSlug) {
          return null
        }

        return (
          <Link
            key={lang.code}
            href={`/${lang.code}/blog/${alternateSlug}`}
            className={`
              rounded-md px-3 py-1.5 text-sm font-medium transition-all
              ${
                isActive
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }
            `}
            aria-label={`Switch to ${lang.label}`}
            aria-current={isActive ? 'true' : undefined}
          >
            {lang.label}
          </Link>
        )
      })}
    </div>
  )
}
