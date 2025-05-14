import Image from "next/image"
import Link from "next/link"

interface ProductFeatureCardProps {
  tagName: string
  title: string
  description: string
  imagePath: string
  imageAlt: string
  buttonLink: string
  imageOnLeft?: boolean
}

export function ProductFeatureCard({
  tagName,
  title,
  description,
  imagePath,
  imageAlt,
  buttonLink,
  imageOnLeft = false
}: ProductFeatureCardProps) {
  const ImageColumn = (
    <div className={`w-full md:w-1/2 flex items-center justify-center h-full p-0 ${imageOnLeft ? 'md:pr-0' : 'md:pl-0'}`}>
      <div className={`product-card-thumb w-full h-full transition-all duration-300 ease-in-out ${imageOnLeft ? 'group-hover:rotate-[1deg]' : 'group-hover:rotate-[-1deg]'}`}>
        <Image
          src={imagePath}
          alt={imageAlt}
          width={550}
          height={440}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )

  const TextColumn = (
    <div className="product-card-texts w-full md:w-1/2 p-10">
      <div className="inline-block rounded-full px-3 py-1 text-sm uppercase tracking-wider bg-[#f1e5f9] text-[#7a22a3]">
        {tagName}
      </div>
      <h3 className="product-card-title text-[32px] leading-tight text-black mt-6 font-sans">
        {title}
      </h3>
      <p className="card-para text-lg text-[#565656] my-5 font-['Inter',sans-serif] leading-relaxed">
        {description}
      </p>
      <div className="mt-6">
        <Link
          href={buttonLink}
          className="group btn-secondary inline-flex items-center text-sm font-medium text-gray-700 border border-gray-300 rounded-xl px-5 py-3 hover:bg-gray-50 transition-all duration-200"
        >
          <span className="mr-2">Learn more</span>
          <span className="transform transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </div>
  )

  return (
    <div className="product-card my-6 max-w-7xl mx-auto">
      <div className="group flex flex-col-reverse md:flex-row items-center bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
        {imageOnLeft ? (
          <>
            {ImageColumn}
            {TextColumn}
          </>
        ) : (
          <>
            {TextColumn}
            {ImageColumn}
          </>
        )}
      </div>
    </div>
  )
} 