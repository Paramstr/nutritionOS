import { ProductFeatureCard } from "./product-feature-card"

interface ProductFeatureData {
  tagName: string
  title: string
  description: string
  imagePath: string
  imageAlt: string
  buttonLink: string
  imageOnLeft?: boolean
}

interface ProductFeatureSectionProps {
  title: string
  subtitle?: string
  features: ProductFeatureData[]
}

export function ProductFeatureSection({
  title,
  subtitle,
  features
}: ProductFeatureSectionProps) {
  return (
    <section className="container mx-auto px-4 py-12 bg-white">
      <div className="max-w-4xl mx-auto text-center mb-6">
        <h2 className="text-4xl md:text-5xl">{title}</h2>
        {subtitle && (
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
            {subtitle}
          </p>
        )}
      </div>
      
      <div className="all-product-cards mt-10 max-w-[1100px] mx-auto">
        {features.map((feature, index) => (
          <ProductFeatureCard
            key={index}
            tagName={feature.tagName}
            title={feature.title}
            description={feature.description}
            imagePath={feature.imagePath}
            imageAlt={feature.imageAlt}
            buttonLink={feature.buttonLink}
            imageOnLeft={feature.imageOnLeft}
          />
        ))}
      </div>
    </section>
  )
} 