import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bone,
  Flower,
  Heart,
  Package,
  Pill,
  ShoppingBag,
  Smile,
  Sparkles,
  Sprout,
} from "lucide-react";

const categoryData = [
  {
    slug: "bio-fertilizers",
    title: "Bio Fertilizers",
    icon: Sprout,
    iconClass: "from-green-400 to-emerald-500",
    buttonClass: "from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600",
    products: [
      {
        name: "Bio Growth Booster",
        description: "Microbial nutrition for stronger roots, better soil activity, and resilient crop growth.",
        image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=500&h=380&fit=crop&crop=center",
      },
      {
        name: "Organic Soil Conditioner",
        description: "Soil support for healthier texture, improved nutrient uptake, and sustainable farming.",
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=380&fit=crop&crop=center",
      },
      {
        name: "Crop Root Activator",
        description: "Root-zone support made for vegetables, grains, orchards, and field crops.",
        image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=500&h=380&fit=crop&crop=center",
      },
      {
        name: "Farm Nutrient Mix",
        description: "Natural plant nutrient support for consistent crop care and farm productivity.",
        image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=500&h=380&fit=crop&crop=center",
      },
    ],
  },
  {
    slug: "oral-care",
    title: "Oral Care",
    icon: Smile,
    iconClass: "from-blue-400 to-cyan-500",
    buttonClass: "from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600",
    products: [
      {
        name: "Herbal Fresh Toothpaste",
        description: "Gentle herbal oral hygiene care for fresh breath and everyday family routines.",
        image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=500&h=380&fit=crop&crop=center",
      },
      {
        name: "Natural Mouth Freshener",
        description: "A clean daily freshness product with a nature-inspired profile.",
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=380&fit=crop&crop=center",
      },
      {
        name: "Family Oral Care Pack",
        description: "Retail-ready oral care essentials for consistent household demand.",
        image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=500&h=380&fit=crop&crop=center",
      },
      {
        name: "Daily Gum Care",
        description: "Simple oral care support for confident daily hygiene and freshness.",
        image: "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?w=500&h=380&fit=crop&crop=center",
      },
    ],
  },
  {
    slug: "bio-enzyme-housekeeping",
    title: "Bio Enzyme Housekeeping",
    icon: Sparkles,
    iconClass: "from-purple-400 to-indigo-500",
    buttonClass: "from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600",
    products: [
      {
        name: "Ecozyme Surface Cleaner",
        description: "Bio-enzyme cleaning for fresh, low-residue housekeeping across daily-use spaces.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&h=380&fit=crop&crop=center",
      },
      {
        name: "Floor Care Concentrate",
        description: "A practical cleaner for homes, offices, utility areas, and partner channels.",
        image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=500&h=380&fit=crop&crop=center",
      },
      {
        name: "Kitchen Hygiene Cleaner",
        description: "Daily cleaning support with a fresh finish and eco-conscious positioning.",
        image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=500&h=380&fit=crop&crop=center",
      },
      {
        name: "Utility Space Cleaner",
        description: "Reliable bio-enzyme housekeeping for repeated commercial and household use.",
        image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=500&h=380&fit=crop&crop=center",
      },
    ],
  },
  {
    slug: "wellness-products",
    title: "Wellness Products",
    icon: Heart,
    iconClass: "from-pink-400 to-rose-500",
    buttonClass: "from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600",
    products: [
      {
        name: "Daily Wellness Support",
        description: "Nature-led wellness support designed for everyday health-conscious routines.",
        image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=500&h=380&fit=crop&crop=center",
      },
      {
        name: "Active Lifestyle Blend",
        description: "A clean wellness product made to complement food, movement, and self-care.",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=380&fit=crop&crop=center",
      },
      {
        name: "Family Health Pack",
        description: "A dependable wellness range for repeat household use and retail interest.",
        image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=500&h=380&fit=crop&crop=center",
      },
      {
        name: "Herbal Wellness Tonic",
        description: "Daily wellness care with a practical, nature-led presentation.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=380&fit=crop&crop=center",
      },
    ],
  },
  {
    slug: "animal-feeds",
    title: "Animal Feeds",
    icon: Bone,
    iconClass: "from-orange-400 to-yellow-500",
    buttonClass: "from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600",
    products: [
      {
        name: "NutriFarm Animal Feed",
        description: "Balanced daily feed support for healthier livestock routines and farm nutrition.",
        image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=500&h=380&fit=crop&crop=center",
      },
      {
        name: "Livestock Nutrition Mix",
        description: "Farm-ready feed support for practical animal care and consistent daily feeding.",
        image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=500&h=380&fit=crop&crop=center",
      },
      {
        name: "Dairy Support Feed",
        description: "Feed support designed for livestock health, value, and field-level practicality.",
        image: "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?w=500&h=380&fit=crop&crop=center",
      },
      {
        name: "Farm Animal Care Pack",
        description: "Practical animal feed products for everyday farm supply requirements.",
        image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=500&h=380&fit=crop&crop=left",
      },
    ],
  },
  {
    slug: "fmcg-products",
    title: "FMCG Products",
    icon: Package,
    iconClass: "from-teal-400 to-green-500",
    buttonClass: "from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600",
    products: [
      {
        name: "Everyday Essential Pack",
        description: "Reliable consumer essentials created for convenience, quality, and repeat use.",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&h=380&fit=crop&crop=center",
      },
      {
        name: "Household Value Combo",
        description: "Daily-use goods for household routines and distribution-ready retail channels.",
        image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=500&h=380&fit=crop&crop=center",
      },
      {
        name: "Consumer Care Kit",
        description: "Practical FMCG products with clean presentation and broad everyday appeal.",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=380&fit=crop&crop=center",
      },
      {
        name: "Daily Utility Pack",
        description: "Repeat-use essentials designed for trusted household value.",
        image: "https://images.unsplash.com/photo-1601599963565-b7ba29c8e8ff?w=500&h=380&fit=crop&crop=center",
      },
    ],
  },
  {
    slug: "herbal-cosmetics",
    title: "Herbal Cosmetics",
    icon: Flower,
    iconClass: "from-lime-400 to-green-500",
    buttonClass: "from-lime-500 to-green-500 hover:from-lime-600 hover:to-green-600",
    products: [
      {
        name: "Herbal Glow Skin Care",
        description: "Botanical personal care for daily grooming and healthy-looking skin.",
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=380&fit=crop&crop=center",
      },
      {
        name: "Natural Beauty Cream",
        description: "Gentle herbal cosmetic care made for a fresh, nature-inspired beauty routine.",
        image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&h=380&fit=crop&crop=center",
      },
      {
        name: "Botanical Care Combo",
        description: "Personal care products for grooming, retail shelves, and daily beauty habits.",
        image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&h=380&fit=crop&crop=center",
      },
      {
        name: "Herbal Face Care",
        description: "Natural grooming care for fresh-looking skin and everyday use.",
        image: "https://images.unsplash.com/photo-1570194065650-d99fb4d8a609?w=500&h=380&fit=crop&crop=center",
      },
    ],
  },
  {
    slug: "nutraceuticals",
    title: "Nutraceuticals",
    icon: Pill,
    iconClass: "from-indigo-400 to-purple-500",
    buttonClass: "from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600",
    products: [
      {
        name: "NutriActive Wellness Capsules",
        description: "Convenient nutritional support for modern wellness and balanced daily routines.",
        image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=500&h=380&fit=crop&crop=center",
      },
      {
        name: "Daily Nutrition Support",
        description: "Science-backed nutrition positioning for adults with active wellness habits.",
        image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=500&h=380&fit=crop&crop=center",
      },
      {
        name: "Health Supplement Pack",
        description: "Supplement products created for consistent use and customer confidence.",
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&h=380&fit=crop&crop=center",
      },
      {
        name: "Wellness Capsule Combo",
        description: "Routine-friendly nutraceutical support for health-focused customers.",
        image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&h=380&fit=crop&crop=center",
      },
    ],
  },
];

function Products() {
  const [activeCategorySlug, setActiveCategorySlug] = useState("all-products");
  const activeCategory = categoryData.find((category) => category.slug === activeCategorySlug);
  const isAllProducts = activeCategorySlug === "all-products";
  const visibleProducts = isAllProducts
    ? categoryData.flatMap((category) =>
        category.products.map((product) => ({
          ...product,
          categoryTitle: category.title,
          categorySlug: category.slug,
          buttonClass: category.buttonClass,
        }))
      )
    : activeCategory.products.map((product) => ({
        ...product,
        categoryTitle: activeCategory.title,
        categorySlug: activeCategory.slug,
        buttonClass: activeCategory.buttonClass,
      }));

  return (
    <>
      <section className="relative overflow-hidden bg-linear-to-br from-slate-950 via-emerald-950 to-green-900 text-white">
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent" />
        <div className="pointer-events-none absolute -left-20 top-16 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-lime-400/15 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:72px_72px]" />

        <div className="relative mx-auto flex min-h-[26rem] max-w-7xl items-center justify-center px-6 py-20 text-center sm:px-10 lg:px-16">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-emerald-200 shadow-[0_0_0_10px_rgba(16,185,129,0.08)]">
              <ShoppingBag size={16} />
              Our Products
            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              Our Products
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-200 sm:text-xl lg:text-2xl">
              Discover sustainable, nature-driven products crafted for agriculture,
              wellness, and everyday living.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-linear-to-br from-gray-50 to-green-50 py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-[18rem_1fr]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-emerald-100 bg-white p-4 shadow-lg shadow-emerald-100/50">
              <h2 className="px-2 text-lg font-black text-slate-900">Categories</h2>
              <div className="mt-4 space-y-2">
                <button
                  type="button"
                  onClick={() => setActiveCategorySlug("all-products")}
                  className={`flex w-full items-center gap-3 rounded-xl border px-3 py-3 text-left transition ${
                    isAllProducts
                      ? "border-emerald-200 bg-emerald-50 text-emerald-900 shadow-sm"
                      : "border-transparent text-slate-600 hover:border-emerald-100 hover:bg-emerald-50/70 hover:text-emerald-800"
                  }`}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-emerald-500 to-teal-500 text-white">
                    <ShoppingBag size={20} />
                  </span>
                  <span className="text-sm font-bold leading-5">All Products</span>
                </button>
                {categoryData.map((category) => {
                  const Icon = category.icon;
                  const isActive = activeCategorySlug === category.slug;

                  return (
                    <button
                      key={category.slug}
                      type="button"
                      onClick={() => setActiveCategorySlug(category.slug)}
                      className={`flex w-full items-center gap-3 rounded-xl border px-3 py-3 text-left transition ${
                        isActive
                          ? "border-emerald-200 bg-emerald-50 text-emerald-900 shadow-sm"
                          : "border-transparent text-slate-600 hover:border-emerald-100 hover:bg-emerald-50/70 hover:text-emerald-800"
                      }`}
                    >
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-br text-white ${category.iconClass}`}
                      >
                        <Icon size={20} />
                      </span>
                      <span className="text-sm font-bold leading-5">{category.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          <div>
            <div className="rounded-2xl border border-emerald-100 bg-white/85 p-5 shadow-lg shadow-emerald-100/50">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
                    Selected Category
                  </p>
                  <h2 className="mt-1 text-3xl font-black text-slate-950">
                    {isAllProducts ? "All Products" : activeCategory.title}
                  </h2>
                </div>
                {!isAllProducts && (
                  <Link
                    to={`/products/${activeCategory.slug}`}
                    className={`inline-flex items-center justify-center rounded-full bg-linear-to-r px-6 py-3 text-sm font-bold text-white transition ${activeCategory.buttonClass}`}
                  >
                    Category Details
                    <ArrowRight size={17} className="ml-2" />
                  </Link>
                )}
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {visibleProducts.map((product) => (
                <div
                  key={`${product.categorySlug}-${product.name}`}
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
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-emerald-700">
                      {product.categoryTitle}
                    </p>
                    <h3 className="mt-2 min-h-[3rem] text-base font-bold leading-6 text-gray-900">
                      {product.name}
                    </h3>
                    <p className="mt-1 min-h-[4rem] text-xs leading-5 text-gray-600">
                      {product.description}
                    </p>
                    <Link
                      to={`/products/${product.categorySlug}`}
                      className={`mt-4 inline-flex w-full items-center justify-center rounded-lg bg-linear-to-r py-2 text-xs font-semibold text-white transition ${product.buttonClass}`}
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
