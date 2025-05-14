import Image from "next/image"
import Link from "next/link"

interface InfoCardProps {
  title: string
  description: string
  buttonLink: string
  tagName: string
  imagePath: string
  imageAlt: string
  imageOnLeft?: boolean
}

export function InfoCard({
  title,
  description,
  buttonLink,
  tagName,
  imagePath,
  imageAlt,
  imageOnLeft = false
}: InfoCardProps) {
  const ImageColumn = (
    <>
      <div
        className={`
          border-2 border-gray-300 rounded-xl shadow-lg overflow-hidden
          transition-all duration-300 ease-in-out 
          group-hover:shadow-xl 
          ${imageOnLeft ? 'group-hover:rotate-[1deg]' : 'group-hover:rotate-[-1deg]'}
        `}
      >
        <div className="h-6 bg-gray-200 flex items-center px-3 space-x-1.5">
          <span className="block w-2.5 h-2.5 bg-red-500 rounded-full"></span>
          <span className="block w-2.5 h-2.5 bg-yellow-400 rounded-full"></span>
          <span className="block w-2.5 h-2.5 bg-green-500 rounded-full"></span>
        </div>
        <Image
          src={imagePath}
          alt={imageAlt}
          width={3000}
          height={2000}
          objectFit="contain"
          className="w-full h-auto block rounded-b-xl"
        />
      </div>
    </>
  )

  const TextColumn = (
    <div className="space-y-5">
      <div>
        <span className="bg-gradient-to-r from-green-600 to-green-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider">
          {tagName}
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900">
        {title}
      </h2>
      <p className="text-lg text-gray-600">
        {description}
      </p>
      <div>
        <Link
          href={buttonLink}
          className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 rounded-xl text-base font-medium text-gray-700 hover:bg-gray-50"
        >
          Learn more <span className="ml-2">&rarr;</span>
        </Link>
      </div>
    </div>
  )

  return (
    <section className="container mx-auto px-4 py-10 relative">
      <div className="group max-w-7xl mx-auto relative z-10 border bg-white border-gray-200 rounded-3xl h-[550px] shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row items-start gap-8 bg-white p-12 rounded-3xl overflow-hidden">
          {imageOnLeft ? (
            <>
              <div className="w-full md:w-1/2 md:order-1 md:-translate-x-6 lg:-translate-x-12 xl:-translate-x-16 md:mt-6">{ImageColumn}</div>
              <div className="w-full md:w-1/2 md:order-2">{TextColumn}</div>
            </>
          ) : (
            <>
              <div className="w-full md:w-1/2 md:order-1">{TextColumn}</div>
              <div className="w-full md:w-1/2 md:order-2 md:translate-x-6 lg:translate-x-12 xl:translate-x-16 md:mt-6">{ImageColumn}</div>
            </>
          )}
        </div>
      </div>
    </section>
  )
} 