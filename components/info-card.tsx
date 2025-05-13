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
          border-2 border-gray-300 rounded-lg shadow-xl overflow-hidden
          transition-all duration-300 ease-in-out 
          group-hover:shadow-2xl 
          ${imageOnLeft ? 'group-hover:rotate-[1deg]' : 'group-hover:rotate-[-1deg]'}
        `}
      >
        <div className="h-8 bg-gray-200 flex items-center px-3 space-x-1.5">
          <span className="block w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="block w-3 h-3 bg-yellow-400 rounded-full"></span>
          <span className="block w-3 h-3 bg-green-500 rounded-full"></span>
        </div>
        <Image
          src={imagePath}
          alt={imageAlt}
          width={3000}
          height={2000}
          objectFit="contain"
          className="w-full h-auto block rounded-b-lg"
        />
      </div>
    </>
  )

  const TextColumn = (
    <div className="space-y-8">
      <div>
        <span className=" bg-gradient-to-r from-green-600 to-green-500 text-white px-4 py-2 rounded-full text-base font-semibold uppercase tracking-wider">
          {tagName}
        </span>
      </div>
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium text-gray-900">
        {title}
      </h2>
      <p className="text-xl text-gray-600">
        {description}
      </p>
      <div>
        <Link
          href={buttonLink}
          className="inline-flex items-center justify-center px-6 py-4 border border-gray-300 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-50"
        >
          Learn more <span className="ml-2">&rarr;</span>
        </Link>
      </div>
    </div>
  )

  return (
    <section className="container mx-auto px-4 py-16 relative">
      <div className="group max-w-7xl mx-auto relative z-10 border bg-white border-gray-200 rounded-2xl h-[650px] shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row items-start gap-16 bg-white p-20 rounded-2xl overflow-hidden">
          {imageOnLeft ? (
            <>
              <div className="w-full md:w-1/2 md:order-1 md:-translate-x-8 lg:-translate-x-16 xl:-translate-x-24 md:mt-8">{ImageColumn}</div>
              <div className="w-full md:w-1/2 md:order-2">{TextColumn}</div>
            </>
          ) : (
            <>
              <div className="w-full md:w-1/2 md:order-1">{TextColumn}</div>
              <div className="w-full md:w-1/2 md:order-2 md:translate-x-8 lg:translate-x-16 xl:translate-x-24 md:mt-8">{ImageColumn}</div>
            </>
          )}
        </div>
      </div>
    </section>
  )
} 