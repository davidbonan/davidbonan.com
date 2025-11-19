export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fr' }]
}

export default function LocaleLayout({ children, params }) {
  const { locale } = params

  // Validate locale
  if (!['en', 'fr'].includes(locale)) {
    throw new Error(`Invalid locale: ${locale}`)
  }

  return <>{children}</>
}
