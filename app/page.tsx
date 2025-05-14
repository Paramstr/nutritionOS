"use client";

import Link from "next/link"
import { ChevronDown, Send, FolderOpen, Lock, Utensils, CalendarDays, ClipboardList, Star, Building } from "lucide-react"
import Image from "next/image"
import { FeatureCard } from "@/components/feature-card"
import { ProductDetailCard } from "@/components/product-detail-card"
import { FruitButton } from "@/components/FruitButton";
import { ProductFeatureSection } from "@/components/product-feature-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <header className="container mx-auto px-4 py-4 flex items-center justify-between z-50 relative">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="NutritionOS Logo" width={32} height={32} className="mr-2" />
            <div className="font-bold text-xl flex items-center">
              <span className="text-black">Nutrition</span>
              <span className="text-black">OS</span>
            </div>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <div className="relative group">
            <button className="flex items-center text-gray-600 hover:text-gray-900">
              Platform
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
          </div>
          <Link href="/pricing" className="text-gray-600 hover:text-gray-900">
            Pricing
          </Link>
          <Link href="/integrations" className="text-gray-600 hover:text-gray-900">
            Integrations
          </Link>
        </nav>

        <div>
          <Link
            href="/get-started"
            className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-16 pb-24 text-center relative">
        {/* Floating Emojis Background - This div will be moved and repurposed */}
        {/* <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden pointer-events-none">
          <span className="absolute text-7xl -left-10 top-1/2 -translate-y-1/2 transform -rotate-12 opacity-80" role="img" aria-label="Banana">🍌</span>
          <span className="absolute text-8xl left-1/4 top-1/3 -translate-y-1/2 transform rotate-6 opacity-80" role="img" aria-label="Orange">🍊</span>
          <span className="absolute text-9xl right-1/4 top-1/3 -translate-y-1/2 transform -rotate-6 opacity-80" role="img" aria-label="Avocado">🥑</span>
          <span className="absolute text-7xl -right-12 top-1/2 -translate-y-1/2 transform rotate-12 opacity-80" role="img" aria-label="Apple">🍎</span>
        </div> */}

        {/* Hero Content */}
        
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Precision Nutrition Platform
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-10">
            Tailored meal plans, macro tracking, and seamless kitchen management. Achieve your health goals with our intuitive platform.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-7 mb-12">
            <Link
              href="/features"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-full text-sm font-medium text-gray-900 hover:bg-gray-50"
            >
              Explore Meal Plans
            </Link>
            <div className="relative group">
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-full text-sm font-medium  relative z-10 transition-all duration-300 ease-in-out group-hover:scale-105 shadow-xl"
              >
                Get Started
              </Link>
              <div className="absolute inset-x-0 -top-10 h-14 flex justify-between items-end z-0 pointer-events-none -translate-x-3">
                <span className="text-4xl transform -rotate-12 opacity-100 -translate-x-0 translate-y-1 transition-all duration-300 ease-in-out group-hover:scale-125 group-hover:drop-shadow-lg blur-sm group-hover:blur-none" role="img" aria-label="Banana">🍌</span>
                <span className="text-4xl transform rotate-6 opacity-100 translate-y-2 -translate-x-0 transition-all duration-300 ease-in-out group-hover:scale-125 group-hover:drop-shadow-lg blur-sm group-hover:blur-none" role="img" aria-label="Orange">🍊</span>
                <span className="text-4xl transform -rotate-6 opacity-100 translate-y-2 translate-x-0 transition-all duration-300 ease-in-out group-hover:scale-125 group-hover:drop-shadow-lg blur-sm group-hover:blur-none" role="img" aria-label="Avocado">🥑</span>
                <span className="text-4xl transform rotate-12 opacity-100 translate-x-0 translate-y-3 transition-all duration-300 ease-in-out group-hover:scale-125 group-hover:drop-shadow-lg blur-sm group-hover:blur-none" role="img" aria-label="Apple">🍎</span>
              </div>

         
            </div>

          </div>

          <div className="flex justify-center items-center gap-1">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-blue-400 border-2 border-white"></div>
              <div className="w-6 h-6 rounded-full bg-orange-400 border-2 border-white"></div>
              <div className="w-6 h-6 rounded-full bg-red-400 border-2 border-white"></div>
              <div className="w-6 h-6 rounded-full bg-green-400 border-2 border-white"></div>
            </div>
            <span className="text-sm text-gray-600 ml-2">Trusted by over 10,000 health-conscious users</span>
          </div>

          {/* Placeholder for demo/screenshot */}
          <div className="mt-16 rounded-2xl max-w-4xl mx-auto relative z-10 shadow-2xl">
            <Image
              src="/example-hero-dash-phone.svg"
              alt="Placeholder App Screenshot"
              width={2814}
              height={2092}
              objectFit="contain"
              className="rounded-2xl border-4 border-gray-600"
            />
          </div> 
        </div>
      </section>

      {/* Social Validation Section */}
      <section className="container mx-auto px-4 py-16 relative">
        <div className="max-w-2xl mx-auto relative z-10">
          {/* Updated glassy gradient card - Monochromatic with colored logo/stars */}
          <div className=" dark:bg-slate-900/70 backdrop-blur-lg rounded-3xl border border-gray-200/50 dark:border-slate-700/50 p-8 shadow-2xl shadow-slate-500/10 dark:shadow-black/50">
            <div className="flex items-center justify-center mb-6">
              {/* Star Rating - Reverted to Yellow */}
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>

            <p className="text-xl md:text-2xl text-center font-medium text-slate-800 dark:text-slate-200 mb-8 leading-relaxed">
              This platform revolutionized how I approach my diet. Hitting my macros has never been easier!
            </p>
            <div className="flex items-center justify-center">
              <div className="flex items-center">
                <div className="mr-4">
                  <Image
                    src="/omni_logo.webp?height=64&width=64"
                    alt="Alex Fitwell"
                    width={64}
                    height={64}
                    className="rounded-full border-2 border-slate-300 dark:border-slate-600"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Alex Fitwell</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">Omni Bali CEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Section - Using ProductDetailCard component */}
      <section className="container mx-auto px-4 py-28 bg-white relative">
        <div className="max-w-8xl mx-auto relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How restaurants grow using Owner</h2>
          <p className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
            Owner gives you the same tools that major national brands use to drive sales. We learn what works for them, then give it to local restaurant owners.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-stretch">
            <ProductDetailCard
              title="Website and Online Ordering"
              description="designed to increase orders."
              mediaSrc="/details section/pancakes.png"
              mediaType="image"
              mediaAlt="Pancakes"
            />
            <ProductDetailCard
              title="Dynamic Meal Preparation"
              description="Watch how easy it is to create your meals."
              mediaSrc="/details section/making meal.mp4"
              mediaType="video"
              mediaAlt="Meal preparation video"
            />
            <ProductDetailCard
              title="Automated marketing"
              description="proven to drive sales."
              mediaSrc="/details section/pancakes.png"
              mediaType="image"
              mediaAlt="Marketing illustration"
            />
          </div>

          <div>
            <Link
              href="/get-started"
                className="inline-flex items-center justify-center px-12 py-6 bg-black text-white rounded-full text-md font-medium  relative z-10 transition-all duration-300 ease-in-out hover:scale-105 shadow-xl"
            >
              See how it works
            </Link>
          </div>
        </div>
      </section>

      {/* Perry-Style Gamified Feature Section */}
      <ProductFeatureSection
        title="Supercharge Nutrition with AI-enabled Gamified Tasks"
        subtitle="Earn points, track progress, and achieve nutrition goals through our interactive gamification system."
        features={[
          {
            tagName: "POINTS",
            title: "Earn points for healthy choices",
            description: "Incentivize making better nutritional choices, tracking meals consistently, and hitting your macro targets with our points-based reward system.",
            imagePath: "/2 column/example-iphone-1.svg",
            imageAlt: "Perry - Earn points",
            buttonLink: "/points"
          },
          {
            tagName: "REWARDS",
            title: "Reward your progress milestones",
            description: "Celebrate achievements with real rewards. Redeem points at partner stores or unlock premium features as you reach your nutrition goals.",
            imagePath: "/2 column/example-dash-1.svg",
            imageAlt: "Rewards Dashboard",
            imageOnLeft: true,
            buttonLink: "/rewards"
          },
          {
            tagName: "POINTS",
            title: "Earn points for healthy choices",
            description: "Incentivize making better nutritional choices, tracking meals consistently, and hitting your macro targets with our points-based reward system.",
            imagePath: "/2 column/example-dash-2.svg",
            imageAlt: "Perry - Earn points",
            buttonLink: "/points"
          },
        ]}
      />

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-slate-800 py-8 text-center text-gray-600 dark:text-gray-400 text-sm">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} NutriTrack. All rights reserved.</p>
          <p className="mt-2">
            <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
            <span className="mx-2">|</span>
            <Link href="/terms" className="hover:underline">Terms of Service</Link>
          </p>
        </div>
      </footer>
    </div>
  )
}

