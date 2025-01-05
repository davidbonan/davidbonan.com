import { Footer } from '@/components/Footer'

export const metadata = {
  description: 'Privacy policy for CESU Planning',
}

export default function HomePage() {
  return (
    <>
      <div>
        <div className="mx-auto mt-10 max-w-4xl rounded-md bg-white p-6 shadow-md">
          <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
            🛡️ Engagement de Confidentialité
          </h1>
          <p className="mb-4 text-lg text-gray-600">
            La confidentialité et la sécurité de vos données sont notre
            priorité. Chez <strong>CESU Planning</strong>, nous nous engageons à
            protéger vos informations personnelles avec transparence et
            responsabilité.
          </p>

          <div className="space-y-6">
            <div>
              <h2 className="mb-2 text-xl font-semibold text-gray-700">
                📊 Collecte Minimale des Données
              </h2>
              <p className="text-gray-600">
                Nous ne recueillons que les informations strictement nécessaires
                pour garantir le bon fonctionnement de l'application et offrir
                une expérience utilisateur optimale.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-semibold text-gray-700">
                🔒 Protection des Données
              </h2>
              <p className="text-gray-600">
                Vos données sont stockées de manière sécurisée, chiffrées et
                protégées contre tout accès non autorisé. Elles ne seront jamais
                partagées avec des tiers sans votre consentement explicite.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-semibold text-gray-700">
                📝 Transparence Totale
              </h2>
              <p className="text-gray-600">
                Vous avez le droit d'accéder, de modifier ou de supprimer vos
                informations personnelles à tout moment par mail à{' '}
                <a href="mailto:contact@davidbonan.com">
                  contact@davidbonan.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-semibold text-gray-700">
                ⚖️ Conformité RGPD
              </h2>
              <p className="text-gray-600">
                Nous respectons les réglementations en vigueur, y compris le{' '}
                <strong>
                  Règlement Général sur la Protection des Données (RGPD)
                </strong>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
