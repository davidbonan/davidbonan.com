import { Footer } from '@/components/Footer'
import { MdxContent } from '@/components/mdx/MdxContent'
import { CaseStudyDetails } from '@/components/work/CaseStudyDetails'
import { CaseStudyGallery } from '@/components/work/CaseStudyGallery'
import { CaseStudyNavigation } from '@/components/work/CaseStudyNavigation'
import { CaseStudyTestimonial } from '@/components/work/CaseStudyTestimonial'
import { allCaseStudies } from 'contentlayer/generated'

export const generateStaticParams = async () =>
  allCaseStudies.map((caseStudy) => ({ slug: caseStudy.slug }))

export async function generateMetadata({ params }) {
  const caseStudy = allCaseStudies.find(
    (caseStudy) => caseStudy.slug === params.slug
  )
  return { title: caseStudy.title, description: caseStudy.description }
}

export default function CaseStudyPage({ params }) {
  const caseStudy = allCaseStudies.find(
    (caseStudy) => caseStudy.slug === params.slug
  )

  return (
    <>
      {/* <CaseStudyHero
        title={caseStudy.title}
        subtitle={caseStudy.subtitle}
        tags={caseStudy.tags}
        coverImage={caseStudy.coverImage}
      /> */}
      <CaseStudyDetails
        client={caseStudy.client}
        description={caseStudy.description}
        projectDuration={caseStudy.projectDuration}
        projectURL={caseStudy.projectURL}
      >
        <MdxContent code={caseStudy.body.code} />
      </CaseStudyDetails>
      {caseStudy.images && caseStudy.images.length > 0 && (
        <CaseStudyGallery images={caseStudy.images} />
      )}
      {caseStudy.testimonial && (
        <CaseStudyTestimonial
          clientName={caseStudy.client.name}
          testimonial={caseStudy.testimonial}
        />
      )}
      <CaseStudyNavigation caseStudySlug={caseStudy.slug} />
      <Footer newsletter={false} />
    </>
  )
}

export const dynamicParams = false
