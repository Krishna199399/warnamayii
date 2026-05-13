
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Bone, ChevronLeft, ChevronRight, Flower, Heart, Leaf, Package, Pill, Smile, Sparkles, Sprout, Truck, Users } from 'lucide-react'
import heroTea from '../assets/hero-tea.jpg'
import heroRice from '../assets/hero-rice.jpg'
import heroTractor from '../assets/hero-tractor.jpg'

const heroSlides = [
  {
    image: heroTea,
    eyebrow: 'Eco-friendly agriculture, wellness, and lifestyle',
    title: 'Green solutions for a healthier tomorrow',
    description: 'Bio-based products for farms, homes, and wellness routines through a clean, practical, and scalable green ecosystem.',
  },
  {
    image: heroRice,
    eyebrow: 'Sustainable crop care for better yields',
    title: 'Nurturing every field with nature-led care',
    description: 'Practical agriculture solutions designed to support soil health, crop productivity, and responsible growth.',
  },
  {
    image: heroTractor,
    eyebrow: 'Partner-ready products for modern farming',
    title: 'Building a stronger green distribution network',
    description: 'A growing portfolio of agriculture, wellness, and daily-use categories made for regional partners and communities.',
  },
]

const productCategories = [
  {
    id: 'bio-fertilizers',
    title: 'Bio Fertilizers',
    buttonClass: 'from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600',
    activeTabClass: 'border-green-500 bg-green-50 text-green-800',
    products: [
      {
        name: 'Bio Growth Booster',
        description: 'Microbial nutrition for stronger roots, better soil activity, and resilient crop growth.',
        image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=500&h=380&fit=crop&crop=center',
      },
      {
        name: 'Organic Soil Conditioner',
        description: 'Nature-led soil support for farms that need healthier texture and nutrient uptake.',
        image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=380&fit=crop&crop=center',
      },
      {
        name: 'Crop Root Activator',
        description: 'Root-zone support made for vegetables, grains, orchards, and field crops.',
        image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=500&h=380&fit=crop&crop=center',
      },
    ],
  },
  {
    id: 'oral-care',
    title: 'Oral Care',
    buttonClass: 'from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600',
    activeTabClass: 'border-blue-500 bg-blue-50 text-blue-800',
    products: [
      {
        name: 'Herbal Fresh Toothpaste',
        description: 'Gentle herbal oral hygiene care for fresh breath and everyday family routines.',
        image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=500&h=380&fit=crop&crop=center',
      },
      {
        name: 'Natural Mouth Freshener',
        description: 'A clean daily freshness product with a nature-inspired profile.',
        image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=380&fit=crop&crop=center',
      },
      {
        name: 'Family Oral Care Pack',
        description: 'Retail-ready oral care essentials for consistent household demand.',
        image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=500&h=380&fit=crop&crop=center',
      },
    ],
  },
  {
    id: 'bio-enzyme-housekeeping',
    title: 'Bio Enzyme Housekeeping',
    buttonClass: 'from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600',
    activeTabClass: 'border-purple-500 bg-purple-50 text-purple-800',
    products: [
      {
        name: 'Ecozyme Surface Cleaner',
        description: 'Bio-enzyme cleaning for fresh, low-residue housekeeping across daily-use spaces.',
        image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&h=380&fit=crop&crop=center',
      },
      {
        name: 'Floor Care Concentrate',
        description: 'A practical cleaner for homes, offices, utility areas, and partner channels.',
        image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=500&h=380&fit=crop&crop=center',
      },
      {
        name: 'Kitchen Hygiene Cleaner',
        description: 'Daily cleaning support with a fresh finish and eco-conscious positioning.',
        image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=500&h=380&fit=crop&crop=center',
      },
    ],
  },
  {
    id: 'wellness-products',
    title: 'Wellness Products',
    buttonClass: 'from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600',
    activeTabClass: 'border-pink-500 bg-pink-50 text-pink-800',
    products: [
      {
        name: 'Daily Wellness Support',
        description: 'Nature-led wellness support designed for everyday health-conscious routines.',
        image: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=500&h=380&fit=crop&crop=center',
      },
      {
        name: 'Active Lifestyle Blend',
        description: 'A clean wellness product made to complement food, movement, and self-care.',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=380&fit=crop&crop=center',
      },
      {
        name: 'Family Health Pack',
        description: 'A dependable wellness range for repeat household use and retail interest.',
        image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=500&h=380&fit=crop&crop=center',
      },
    ],
  },
  {
    id: 'animal-feeds',
    title: 'Animal Feeds',
    buttonClass: 'from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600',
    activeTabClass: 'border-orange-500 bg-orange-50 text-orange-800',
    products: [
      {
        name: 'NutriFarm Animal Feed',
        description: 'Balanced daily feed support for healthier livestock routines and farm nutrition.',
        image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=500&h=380&fit=crop&crop=center',
      },
      {
        name: 'Livestock Nutrition Mix',
        description: 'Farm-ready feed support for practical animal care and consistent daily feeding.',
        image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=500&h=380&fit=crop&crop=center',
      },
      {
        name: 'Dairy Support Feed',
        description: 'Feed support designed for livestock health, value, and field-level practicality.',
        image: 'https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?w=500&h=380&fit=crop&crop=center',
      },
    ],
  },
  {
    id: 'fmcg-products',
    title: 'FMCG Products',
    buttonClass: 'from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600',
    activeTabClass: 'border-teal-500 bg-teal-50 text-teal-800',
    products: [
      {
        name: 'Everyday Essential Pack',
        description: 'Reliable consumer essentials created for convenience, quality, and repeat use.',
        image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&h=380&fit=crop&crop=center',
      },
      {
        name: 'Household Value Combo',
        description: 'Daily-use goods for household routines and distribution-ready retail channels.',
        image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=500&h=380&fit=crop&crop=center',
      },
      {
        name: 'Consumer Care Kit',
        description: 'Practical FMCG products with clean presentation and broad everyday appeal.',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=380&fit=crop&crop=center',
      },
    ],
  },
  {
    id: 'herbal-cosmetics',
    title: 'Herbal Cosmetics',
    buttonClass: 'from-lime-500 to-green-500 hover:from-lime-600 hover:to-green-600',
    activeTabClass: 'border-lime-500 bg-lime-50 text-lime-800',
    products: [
      {
        name: 'Herbal Glow Skin Care',
        description: 'Botanical personal care for daily grooming and healthy-looking skin.',
        image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=380&fit=crop&crop=center',
      },
      {
        name: 'Natural Beauty Cream',
        description: 'Gentle herbal cosmetic care made for a fresh, nature-inspired beauty routine.',
        image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&h=380&fit=crop&crop=center',
      },
      {
        name: 'Botanical Care Combo',
        description: 'Personal care products for grooming, retail shelves, and daily beauty habits.',
        image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&h=380&fit=crop&crop=center',
      },
    ],
  },
  {
    id: 'nutraceuticals',
    title: 'Nutraceuticals',
    buttonClass: 'from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600',
    activeTabClass: 'border-indigo-500 bg-indigo-50 text-indigo-800',
    products: [
      {
        name: 'NutriActive Wellness Capsules',
        description: 'Convenient nutritional support for modern wellness and balanced daily routines.',
        image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=500&h=380&fit=crop&crop=center',
      },
      {
        name: 'Daily Nutrition Support',
        description: 'Science-backed nutrition positioning for adults with active wellness habits.',
        image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=500&h=380&fit=crop&crop=center',
      },
      {
        name: 'Health Supplement Pack',
        description: 'Supplement products created for consistent use and customer confidence.',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&h=380&fit=crop&crop=center',
      },
    ],
  },
]

function Home() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [activeProductCategory, setActiveProductCategory] = useState(productCategories[0].id)
  const selectedProductCategory = productCategories.find((category) => category.id === activeProductCategory) ?? productCategories[0]
  const productNameSuffixes = ['', '', '', ' Plus', ' Pro', ' Combo', ' Retail Pack', ' Value Pack']
  const selectedProducts = Array.from({ length: 8 }, (_, index) => {
    const product = selectedProductCategory.products[index % selectedProductCategory.products.length]
    const suffix = productNameSuffixes[index] ?? ` ${index + 1}`

    return {
      ...product,
      name: `${product.name}${suffix}`,
    }
  })

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [])

  const showPreviousSlide = () => {
    setActiveSlide((current) => (current === 0 ? heroSlides.length - 1 : current - 1))
  }

  const showNextSlide = () => {
    setActiveSlide((current) => (current + 1) % heroSlides.length)
  }

  return (
    <div>
      <section className='relative h-[820px] overflow-hidden bg-emerald-950 lg:h-[calc(100vh-77px)] lg:min-h-[760px]'>
        <div className='absolute inset-0'>
          {heroSlides.map((slide, index) => (
            <img
              key={slide.title}
              src={slide.image}
              alt=''
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1800ms] ease-in-out ${activeSlide === index ? 'hero-slide-image opacity-100' : 'opacity-0'}`}
            />
          ))}
          <div className='absolute inset-0 bg-linear-to-r from-slate-950/78 via-emerald-950/52 to-emerald-900/20' />
          <div className='absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-slate-950/20' />
        </div>

        <div className='relative z-10 mx-auto flex h-full max-w-6xl items-center justify-center px-6 py-16 text-center sm:px-10 lg:px-8'>
          <div key={activeSlide} className='hero-slide-content mx-auto max-w-4xl text-white'>
            <span className='inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/12 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-50 shadow-[0_0_0_8px_rgba(255,255,255,0.04)] backdrop-blur-md'>
              <Leaf size={16} />
              {heroSlides[activeSlide].eyebrow}
            </span>

            <h1 className='mx-auto mt-7 flex min-h-[8.5rem] max-w-4xl items-center justify-center text-4xl font-black leading-tight text-white sm:min-h-[7.5rem] sm:text-5xl lg:min-h-[10.5rem] lg:text-7xl'>
              {heroSlides[activeSlide].title}
            </h1>

            <p className='mx-auto mt-6 min-h-[4.5rem] max-w-2xl text-base leading-8 text-emerald-50/90 sm:text-xl'>
              {heroSlides[activeSlide].description}
            </p>

            <div className='mt-9 flex flex-col justify-center gap-3 sm:flex-row'>
              <Link
                to='/products'
                className='inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-lime-300 via-green-400 to-emerald-500 px-7 py-3 text-base font-bold text-emerald-950 shadow-xl shadow-lime-500/20 ring-1 ring-white/20 transition hover:shadow-2xl hover:shadow-lime-400/25'
              >
                Explore Products
                <ArrowRight size={19} />
              </Link>
              <Link
                to='/register'
                className='inline-flex items-center justify-center gap-2 rounded-full border border-teal-200/30 bg-linear-to-r from-emerald-500/22 to-teal-400/18 px-7 py-3 text-base font-bold text-white shadow-xl shadow-emerald-950/15 backdrop-blur-md transition hover:border-lime-200/45 hover:from-emerald-400/28 hover:to-teal-300/24'
              >
                Join Our Network
                <Users size={19} />
              </Link>
            </div>

            <div className='mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-3'>
              <div className='rounded-2xl border border-lime-200/20 bg-linear-to-br from-lime-300/16 to-emerald-500/10 p-5 shadow-xl shadow-emerald-950/10 backdrop-blur-md'>
                <p className='text-3xl font-black text-lime-100'>8+</p>
                <p className='mt-2 text-sm font-medium text-emerald-50/90'>Product categories</p>
              </div>
              <div className='rounded-2xl border border-emerald-200/20 bg-linear-to-br from-emerald-400/18 to-green-800/18 p-5 shadow-xl shadow-emerald-950/10 backdrop-blur-md'>
                <p className='text-3xl font-black text-lime-100'>Eco</p>
                <p className='mt-2 text-sm font-medium text-emerald-50/90'>Green-first approach</p>
              </div>
              <div className='rounded-2xl border border-teal-200/20 bg-linear-to-br from-teal-300/16 to-emerald-700/16 p-5 shadow-xl shadow-emerald-950/10 backdrop-blur-md'>
                <p className='text-3xl font-black text-lime-100'>B2B</p>
                <p className='mt-2 text-sm font-medium text-emerald-50/90'>Partner network</p>
              </div>
            </div>
          </div>
        </div>

        <div className='absolute bottom-0 left-0 right-0 z-20'>
          <div key={activeSlide} className='hero-slider-progress h-1 bg-linear-to-r from-lime-300 via-emerald-300 to-teal-300' />
        </div>

        <div className='absolute right-6 top-24 z-20 hidden rounded-full border border-white/18 bg-white/10 px-4 py-2 text-sm font-bold text-white shadow-xl shadow-black/10 backdrop-blur-md md:block'>
          <span className='text-lime-200'>{String(activeSlide + 1).padStart(2, '0')}</span>
          <span className='mx-2 text-white/40'>/</span>
          <span className='text-white/70'>{String(heroSlides.length).padStart(2, '0')}</span>
        </div>

        <button
          type='button'
          onClick={showPreviousSlide}
          className='absolute left-5 top-1/2 z-20 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-xl shadow-black/10 backdrop-blur-md transition hover:border-lime-200/40 hover:bg-white/20 hover:text-lime-100 md:inline-flex'
          aria-label='Previous hero slide'
        >
          <ChevronLeft size={24} />
        </button>
        <button
          type='button'
          onClick={showNextSlide}
          className='absolute right-5 top-1/2 z-20 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-xl shadow-black/10 backdrop-blur-md transition hover:border-lime-200/40 hover:bg-white/20 hover:text-lime-100 md:inline-flex'
          aria-label='Next hero slide'
        >
          <ChevronRight size={24} />
        </button>

        <div className='absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3'>
          {heroSlides.map((slide, index) => (
            <button
              key={slide.title}
              type='button'
              onClick={() => setActiveSlide(index)}
              className={`h-2.5 rounded-full transition-all ${activeSlide === index ? 'w-10 bg-lime-300' : 'w-2.5 bg-white/60 hover:bg-white'}`}
              aria-label={`Show slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section id="about" className="py-16 bg-linear-to-br from-gray-50 to-green-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800">
                <Package size={16} />
                About Waranamayii
              </div>
              <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
                Empowering Sustainable <br /> Living Through Nature
              </h2>
              <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                Waranamayii is committed to delivering high-quality bio-based and natural products that support a healthier lifestyle and sustainable environment.
              </p>
              <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                From agriculture to personal care, our solutions are designed to create long-term value for people and the planet.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="/about" className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-lime-500 to-green-500 px-8 py-3 text-base font-semibold text-white transition hover:from-lime-600 hover:to-green-600 hover:shadow-lg hover:shadow-lime-500/40">
                  Learn More
                  <Truck size={18} className="ml-2" />
                </a>
                <button className="inline-flex items-center justify-center rounded-full border border-green-300 bg-white px-8 py-3 text-base font-semibold text-green-700 transition hover:bg-green-50 hover:border-green-400">
                  Our Mission
                </button>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-linear-to-br from-green-100 via-emerald-50 to-lime-100 rounded-3xl shadow-2xl flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <Package size={120} className="text-green-600 drop-shadow-lg" />
                </div>
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-linear-to-br from-lime-400 to-green-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <Truck size={36} className="text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-emerald-200 rounded-full flex items-center justify-center shadow-md">
                  <Users size={24} className="text-emerald-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Our Product Categories
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of eco-friendly and innovative products across multiple categories.
            </p>
          </div>
          <div className="mt-8 flex justify-center gap-2 overflow-x-auto rounded-xl border border-emerald-100 bg-white/80 p-2 shadow-lg shadow-emerald-100/40 backdrop-blur-sm">
            {productCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveProductCategory(category.id)}
                className={`shrink-0 rounded-lg border px-3 py-2 text-xs font-bold transition sm:text-sm ${
                  activeProductCategory === category.id
                    ? category.activeTabClass
                    : 'border-transparent bg-white text-gray-600 hover:border-emerald-100 hover:bg-emerald-50 hover:text-emerald-800'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3 rounded-xl border border-white/80 bg-white/70 p-4 shadow-lg shadow-emerald-100/50 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">Category</p>
              <h3 className="mt-1 text-xl font-black text-gray-900">{selectedProductCategory.title}</h3>
            </div>
            <Link
              to={`/products/${selectedProductCategory.id}`}
              className={`inline-flex items-center justify-center rounded-full bg-linear-to-r px-5 py-2.5 text-sm font-bold text-white transition ${selectedProductCategory.buttonClass}`}
            >
              Explore Category
              <ArrowRight size={17} className="ml-2" />
            </Link>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {selectedProducts.map((product, index) => (
              <div
                key={`${product.name}-${index}`}
                className="group overflow-hidden rounded-xl border border-emerald-100 bg-white shadow-md shadow-emerald-100/60 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="aspect-[5/3] overflow-hidden bg-emerald-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-emerald-700">{selectedProductCategory.title}</p>
                  <h3 className="mt-2 min-h-[3rem] text-base font-bold leading-6 text-gray-900">{product.name}</h3>
                  <p className="mt-1 min-h-[4rem] text-xs leading-5 text-gray-600">{product.description}</p>
                  <Link
                    to={`/products/${selectedProductCategory.id}`}
                    className={`mt-4 inline-flex w-full items-center justify-center rounded-lg bg-linear-to-r py-2 text-xs font-semibold text-white transition ${selectedProductCategory.buttonClass}`}
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden">
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="group rounded-2xl border border-gray-200 bg-linear-to-br from-green-50 to-emerald-50 p-6 text-center transition hover:border-green-300 hover:shadow-lg hover:shadow-green-100/50">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-green-400 to-emerald-500 text-white shadow-lg group-hover:scale-110 transition-transform">
                <Sprout size={32} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Bio Fertilizers</h3>
            </div>
            <div className="group rounded-2xl border border-gray-200 bg-linear-to-br from-blue-50 to-cyan-50 p-6 text-center transition hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100/50">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-blue-400 to-cyan-500 text-white shadow-lg group-hover:scale-110 transition-transform">
                <Smile size={32} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Oral Care</h3>
            </div>
            <div className="group rounded-2xl border border-gray-200 bg-linear-to-br from-purple-50 to-indigo-50 p-6 text-center transition hover:border-purple-300 hover:shadow-lg hover:shadow-purple-100/50">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-purple-400 to-indigo-500 text-white shadow-lg group-hover:scale-110 transition-transform">
                <Sparkles size={32} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Bio Enzyme Housekeeping</h3>
            </div>
            <div className="group rounded-2xl border border-gray-200 bg-linear-to-br from-pink-50 to-rose-50 p-6 text-center transition hover:border-pink-300 hover:shadow-lg hover:shadow-pink-100/50">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-pink-400 to-rose-500 text-white shadow-lg group-hover:scale-110 transition-transform">
                <Heart size={32} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Wellness Products</h3>
            </div>
            <div className="group rounded-2xl border border-gray-200 bg-linear-to-br from-orange-50 to-yellow-50 p-6 text-center transition hover:border-orange-300 hover:shadow-lg hover:shadow-orange-100/50">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-orange-400 to-yellow-500 text-white shadow-lg group-hover:scale-110 transition-transform">
                <Bone size={32} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Animal Feeds</h3>
            </div>
            <div className="group rounded-2xl border border-gray-200 bg-linear-to-br from-teal-50 to-green-50 p-6 text-center transition hover:border-teal-300 hover:shadow-lg hover:shadow-teal-100/50">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-teal-400 to-green-500 text-white shadow-lg group-hover:scale-110 transition-transform">
                <Package size={32} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">FMCG Products</h3>
            </div>
            <div className="group rounded-2xl border border-gray-200 bg-linear-to-br from-lime-50 to-green-50 p-6 text-center transition hover:border-lime-300 hover:shadow-lg hover:shadow-lime-100/50">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-lime-400 to-green-500 text-white shadow-lg group-hover:scale-110 transition-transform">
                <Flower size={32} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Herbal Cosmetics</h3>
            </div>
            <div className="group rounded-2xl border border-gray-200 bg-linear-to-br from-indigo-50 to-purple-50 p-6 text-center transition hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-100/50">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-indigo-400 to-purple-500 text-white shadow-lg group-hover:scale-110 transition-transform">
                <Pill size={32} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Nutraceuticals</h3>
            </div>
          </div>
        </div>
      </section> */}

      <section className="featured-products-bg relative overflow-hidden py-16">
        <div className="absolute -left-24 top-14 h-80 w-80 rounded-full bg-emerald-200/45 blur-3xl" />
        <div className="absolute -right-24 bottom-12 h-96 w-96 rounded-full bg-lime-200/45 blur-3xl" />
        <div className="absolute left-[8%] top-24 rotate-[-14deg] rounded-3xl border border-emerald-200/70 bg-white/45 p-5 text-emerald-500/70 shadow-lg shadow-emerald-100/50 backdrop-blur-sm">
          <Sprout size={42} />
        </div>
        <div className="absolute right-[10%] top-28 rotate-[12deg] rounded-full border border-lime-200/80 bg-white/50 p-5 text-lime-500/70 shadow-lg shadow-lime-100/60 backdrop-blur-sm">
          <Sparkles size={38} />
        </div>
        <div className="absolute bottom-24 left-[18%] rotate-[10deg] rounded-3xl border border-teal-200/70 bg-white/45 p-4 text-teal-500/65 shadow-lg shadow-teal-100/50 backdrop-blur-sm">
          <Leaf size={34} />
        </div>
        <div className="absolute bottom-28 right-[22%] rotate-[-10deg] rounded-3xl border border-emerald-200/70 bg-white/45 p-4 text-emerald-500/65 shadow-lg shadow-emerald-100/50 backdrop-blur-sm">
          <Package size={34} />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Featured Products
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our premium bio-based products designed for sustainable living and exceptional quality.
            </p>
          </div>
          <div className="mt-8 flex gap-2 overflow-x-auto rounded-xl border border-emerald-100 bg-white/80 p-2 shadow-lg shadow-emerald-100/40 backdrop-blur-sm">
            {productCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveProductCategory(category.id)}
                className={`shrink-0 rounded-lg border px-3 py-2 text-xs font-bold transition sm:text-sm ${
                  activeProductCategory === category.id
                    ? category.activeTabClass
                    : 'border-transparent bg-white text-gray-600 hover:border-emerald-100 hover:bg-emerald-50 hover:text-emerald-800'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3 rounded-xl border border-white/80 bg-white/70 p-4 shadow-lg shadow-emerald-100/50 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">Category</p>
              <h3 className="mt-1 text-xl font-black text-gray-900">{selectedProductCategory.title}</h3>
            </div>
            <Link
              to={`/products/${selectedProductCategory.id}`}
              className={`inline-flex items-center justify-center rounded-full bg-linear-to-r px-5 py-2.5 text-sm font-bold text-white transition ${selectedProductCategory.buttonClass}`}
            >
              Explore Category
              <ArrowRight size={17} className="ml-2" />
            </Link>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {selectedProducts.map((product, index) => (
              <div
                key={`${product.name}-${index}`}
                className="group overflow-hidden rounded-xl border border-emerald-100 bg-white shadow-md shadow-emerald-100/60 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="aspect-[5/3] overflow-hidden bg-emerald-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-emerald-700">{selectedProductCategory.title}</p>
                  <h3 className="mt-2 min-h-[3rem] text-base font-bold leading-6 text-gray-900">{product.name}</h3>
                  <p className="mt-1 min-h-[4rem] text-xs leading-5 text-gray-600">{product.description}</p>
                  <Link
                    to={`/products/${selectedProductCategory.id}`}
                    className={`mt-4 inline-flex w-full items-center justify-center rounded-lg bg-linear-to-r py-2 text-xs font-semibold text-white transition ${selectedProductCategory.buttonClass}`}
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden">
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="group overflow-hidden rounded-2xl bg-linear-to-br from-green-50 to-emerald-50 border border-green-100 shadow-lg transition hover:shadow-xl hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden bg-linear-to-br from-green-100 to-green-200">
                <img
                  src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&crop=center"
                  alt="Bio Fertilizers"
                  className="h-full w-full object-cover transition group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Bio Fertilizers</h3>
                <p className="mt-2 text-sm text-gray-600">Natural plant nutrients for sustainable agriculture and enhanced crop yield.</p>
                <button className="mt-4 w-full rounded-lg bg-linear-to-r from-green-500 to-emerald-500 py-2 text-sm font-medium text-white transition hover:from-green-600 hover:to-emerald-600">
                  Explore Category
                </button>
              </div>
            </div>
            <div className="group overflow-hidden rounded-2xl bg-linear-to-br from-blue-50 to-cyan-50 border border-blue-100 shadow-lg transition hover:shadow-xl hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden bg-linear-to-br from-blue-100 to-blue-200">
                <img
                  src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop&crop=center"
                  alt="Oral Care"
                  className="h-full w-full object-cover transition group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Oral Care</h3>
                <p className="mt-2 text-sm text-gray-600">Natural oral hygiene products for healthy smiles and fresh breath.</p>
                <button className="mt-4 w-full rounded-lg bg-linear-to-r from-blue-500 to-cyan-500 py-2 text-sm font-medium text-white transition hover:from-blue-600 hover:to-cyan-600">
                  Explore Category
                </button>
              </div>
            </div>
            <div className="group overflow-hidden rounded-2xl bg-linear-to-br from-purple-50 to-indigo-50 border border-purple-100 shadow-lg transition hover:shadow-xl hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden bg-linear-to-br from-purple-100 to-purple-200">
                <img
                  src="https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop&crop=center"
                  alt="Bio Enzyme Housekeeping"
                  className="h-full w-full object-cover transition group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Bio Enzyme Housekeeping</h3>
                <p className="mt-2 text-sm text-gray-600">Eco-friendly cleaning solutions for a spotless and healthy home.</p>
                <button className="mt-4 w-full rounded-lg bg-linear-to-r from-purple-500 to-indigo-500 py-2 text-sm font-medium text-white transition hover:from-purple-600 hover:to-indigo-600">
                  Explore Category
                </button>
              </div>
            </div>
            <div className="group overflow-hidden rounded-2xl bg-linear-to-br from-pink-50 to-rose-50 border border-pink-100 shadow-lg transition hover:shadow-xl hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden bg-linear-to-br from-pink-100 to-pink-200">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center"
                  alt="Wellness Products"
                  className="h-full w-full object-cover transition group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Wellness Products</h3>
                <p className="mt-2 text-sm text-gray-600">Holistic health solutions for body, mind, and overall well-being.</p>
                <button className="mt-4 w-full rounded-lg bg-linear-to-r from-pink-500 to-rose-500 py-2 text-sm font-medium text-white transition hover:from-pink-600 hover:to-rose-600">
                  Explore Category
                </button>
              </div>
            </div>
            <div className="group overflow-hidden rounded-2xl bg-linear-to-br from-orange-50 to-yellow-50 border border-orange-100 shadow-lg transition hover:shadow-xl hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden bg-linear-to-br from-orange-100 to-orange-200">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center"
                  alt="Animal Feeds"
                  className="h-full w-full object-cover transition group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Animal Feeds</h3>
                <p className="mt-2 text-sm text-gray-600">Nutritious feed for healthy livestock and companion animals.</p>
                <button className="mt-4 w-full rounded-lg bg-linear-to-r from-orange-500 to-yellow-500 py-2 text-sm font-medium text-white transition hover:from-orange-600 hover:to-yellow-600">
                  Explore Category
                </button>
              </div>
            </div>
            <div className="group overflow-hidden rounded-2xl bg-linear-to-br from-teal-50 to-green-50 border border-teal-100 shadow-lg transition hover:shadow-xl hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden bg-linear-to-br from-teal-100 to-teal-200">
                <img
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&crop=center"
                  alt="FMCG Products"
                  className="h-full w-full object-cover transition group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">FMCG Products</h3>
                <p className="mt-2 text-sm text-gray-600">Essential consumer goods for everyday convenience and quality.</p>
                <button className="mt-4 w-full rounded-lg bg-linear-to-r from-teal-500 to-green-500 py-2 text-sm font-medium text-white transition hover:from-teal-600 hover:to-green-600">
                  Explore Category
                </button>
              </div>
            </div>
            <div className="group overflow-hidden rounded-2xl bg-linear-to-br from-lime-50 to-green-50 border border-lime-100 shadow-lg transition hover:shadow-xl hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden bg-linear-to-br from-lime-100 to-lime-200">
                <img
                  src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop&crop=center"
                  alt="Herbal Cosmetics"
                  className="h-full w-full object-cover transition group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Herbal Cosmetics</h3>
                <p className="mt-2 text-sm text-gray-600">Natural beauty products for radiant and healthy skin care.</p>
                <button className="mt-4 w-full rounded-lg bg-linear-to-r from-lime-500 to-green-500 py-2 text-sm font-medium text-white transition hover:from-lime-600 hover:to-green-600">
                  Explore Category
                </button>
              </div>
            </div>
            <div className="group overflow-hidden rounded-2xl bg-linear-to-br from-indigo-50 to-purple-50 border border-indigo-100 shadow-lg transition hover:shadow-xl hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden bg-linear-to-br from-indigo-100 to-indigo-200">
                <img
                  src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=300&fit=crop&crop=center"
                  alt="Nutraceuticals"
                  className="h-full w-full object-cover transition group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Nutraceuticals</h3>
                <p className="mt-2 text-sm text-gray-600">Science-backed nutritional supplements for optimal health.</p>
                <button className="mt-4 w-full rounded-lg bg-linear-to-r from-indigo-500 to-purple-500 py-2 text-sm font-medium text-white transition hover:from-indigo-600 hover:to-purple-600">
                  Explore Category
                </button>
              </div>
            </div>
          </div>
          </div>
          <div className="mt-12 text-center">
            <Link to="/products" className="inline-flex rounded-full bg-linear-to-r from-lime-500 to-green-500 px-8 py-3 text-base font-semibold text-white transition hover:from-lime-600 hover:to-green-600 hover:shadow-lg hover:shadow-lime-500/40">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      <section id='Whychooseus' className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-emerald-50 via-green-50 to-teal-50"></div>
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-gray-900 sm:text-5xl lg:text-6xl tracking-tight leading-tight">
              Why <span className="bg-linear-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent">Choose Us</span>
            </h2>
            <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed font-light">
              Discover the unparalleled advantages that set Waranamayii apart in the bio-based solutions industry.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="group p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-linear-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🌿</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">100% Eco-Friendly</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Every solution crafted with zero environmental compromise, ensuring sustainable impact for generations to come.
              </p>
            </div>

            <div className="group p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🧪</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Scientifically Proven</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Cutting-edge research and rigorous testing guarantee superior performance and unmatched reliability.
              </p>
            </div>

            <div className="group p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-linear-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🌐</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Global Network</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Extensive distribution infrastructure ensuring seamless access to our innovations worldwide.
              </p>
            </div>

            <div className="group p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-linear-to-br from-orange-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Sustainable Growth</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Long-term strategies driving meaningful progress for businesses and communities alike.
              </p>
            </div>

            <div className="group p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-linear-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">💚</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Community Trusted</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Building lasting relationships through proven reliability and genuine community partnerships.
              </p>
            </div>

            <div className="group p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50 md:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-linear-to-br from-teal-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Innovation First</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Pioneering bio-based solutions that redefine industry standards and create new possibilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-linear-to-br from-slate-100 via-emerald-100 to-teal-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-[2rem] border border-emerald-200/70 bg-white shadow-[0_45px_120px_-60px_rgba(16,185,129,0.45)]">
            <div className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full bg-emerald-300/40 blur-3xl"></div>
            <div className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-cyan-300/40 blur-3xl"></div>
            <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] items-center px-8 py-14 lg:px-16">
              <div>
                <span className="inline-flex rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-emerald-700">
                  Join the Movement
                </span>
                <h2 className="mt-6 text-4xl font-black text-slate-900 sm:text-5xl lg:text-6xl tracking-tight">
                  Become a Part of Our Growing Network
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                  Join Waranamayii and be a part of a mission that promotes sustainability and better living.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <button className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-emerald-600 to-teal-600 px-8 py-3 text-base font-semibold text-white shadow-xl shadow-emerald-500/25 transition hover:from-emerald-700 hover:to-teal-700">
                    Register Now
                  </button>
                  <button className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-3 text-base font-semibold text-slate-900 transition hover:bg-slate-50">
                    Contact Us
                  </button>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[1.75rem] bg-linear-to-br from-emerald-900 via-teal-900 to-slate-950 px-6 py-8 shadow-2xl shadow-emerald-900/20 ring-1 ring-white/10">
                <div className="absolute -top-8 right-6 h-24 w-24 rounded-full bg-emerald-500/20 blur-3xl"></div>
                <div className="absolute -bottom-8 left-6 h-24 w-24 rounded-full bg-cyan-400/15 blur-3xl"></div>
                <div className="relative space-y-6 text-white">
                  <div className="flex items-center gap-4 rounded-3xl bg-white/10 p-5">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-linear-to-br from-lime-400 to-emerald-500 text-xl">🌱</div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-emerald-200">Why Join</p>
                      <h3 className="mt-2 text-2xl font-semibold">Grow with purpose</h3>
                    </div>
                  </div>
                  <ul className="space-y-4 text-sm leading-6 text-slate-200">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-300">✓</span>
                      Sustainable distribution designed for partners.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-300">✓</span>
                      Reliable onboarding and partner support.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-300">✓</span>
                      Products built for sustainable living.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home;
