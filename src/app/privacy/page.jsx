import { Footer } from '@/components/Footer'

export const metadata = {
  description: 'Privacy policy for Doby - Home Staff Planner',
}

export default function HomePage() {
  return (
    <>
      <div>
        <div className="mx-auto mt-10 max-w-4xl rounded-md bg-white p-6 shadow-md">
          <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
            🛡️ Privacy Commitment
          </h1>
          <p className="mb-4 text-lg text-gray-600">
            Your privacy and data security are our priority. At{' '}
            <strong>Doby - Home Staff Planner</strong>, we are committed to
            protecting your personal information with transparency and
            responsibility.
          </p>

          <div className="space-y-6">
            <div>
              <h2 className="mb-2 text-xl font-semibold text-gray-700">
                📊 Minimal Data Collection
              </h2>
              <p className="text-gray-600">
                We only collect information that is strictly necessary to ensure
                the proper functioning of the application and provide an optimal
                user experience.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-semibold text-gray-700">
                🔒 Data Protection
              </h2>
              <p className="text-gray-600">
                Your data is stored securely, encrypted, and protected against
                unauthorized access. It will never be shared with third parties
                without your explicit consent.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-semibold text-gray-700">
                📝 Complete Transparency
              </h2>
              <p className="text-gray-600">
                You have the right to access, modify, or delete your personal
                information at any time by email at{' '}
                <a href="mailto:contact@davidbonan.com">
                  contact@davidbonan.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-semibold text-gray-700">
                ⚖️ GDPR Compliance
              </h2>
              <p className="text-gray-600">
                We comply with applicable regulations, including the{' '}
                <strong>General Data Protection Regulation (GDPR)</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
