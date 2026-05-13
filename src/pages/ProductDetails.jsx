import React, { useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Check,
  ChevronLeft,
  ChevronRight,
  Heart,
  Minus,
  Phone,
  Plus,
  Share2,
  ShieldCheck,
  ShoppingCart,
  Star,
  Truck,
} from "lucide-react";

const products = {
  "bio-fertilizers": {
    category: "Bio Fertilizers",
    name: "Waranmayii Bio Growth Booster",
    badge: "In Stock",
    rating: 4.8,
    reviews: 245,
    price: 780,
    oldPrice: 980,
    sku: "WRN-BIO-5486",
    tags: ["Bio Fertilizer", "Soil Health", "Organic Farming"],
    description:
      "A microbial-rich plant nutrition solution made to improve soil activity, root growth, nutrient absorption, and crop resilience for sustainable farms.",
    shortSpecs: ["Microbial nutrition", "Root-zone support", "Eco-friendly input"],
    optionsLabel: "Pack Size",
    options: ["500 ml", "1 L", "5 L", "10 L"],
    images: [
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1000&h=900&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1000&h=900&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=1000&h=900&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=1000&h=900&fit=crop&crop=center",
    ],
    specifications: [
      ["Product Type", "Liquid bio fertilizer"],
      ["Application", "Soil drench / drip / root-zone use"],
      ["Best For", "Vegetables, grains, orchards, and field crops"],
      ["Storage", "Cool, dry place away from sunlight"],
      ["Shelf Life", "As mentioned on product label"],
      ["Usage Advice", "Use as recommended for crop and soil condition"],
    ],
  },
  "oral-care": {
    category: "Oral Care",
    name: "Herbal Fresh Oral Care",
    badge: "In Stock",
    rating: 4.7,
    reviews: 186,
    price: 165,
    oldPrice: 220,
    sku: "WRN-ORL-2084",
    tags: ["Oral Care", "Herbal", "Daily Hygiene"],
    description:
      "Gentle oral hygiene care with a fresh herbal profile, designed for everyday use and confident family routines.",
    shortSpecs: ["Fresh breath", "Gentle care", "Daily routine"],
    optionsLabel: "Variant",
    options: ["100 g", "150 g", "Pack of 2", "Family Pack"],
    images: [
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1000&h=900&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1000&h=900&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?w=1000&h=900&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1000&h=900&fit=crop&crop=center",
    ],
    specifications: [
      ["Product Type", "Daily oral care"],
      ["Use", "Morning and night routine"],
      ["Best For", "Freshness and routine hygiene"],
      ["Storage", "Room temperature"],
      ["Texture", "Smooth paste / product specific"],
      ["Safety", "Follow label directions"],
    ],
  },
  "bio-enzyme-housekeeping": {
    category: "Bio Enzyme Housekeeping",
    name: "Ecozyme Surface Cleaner",
    badge: "In Stock",
    rating: 4.9,
    reviews: 312,
    price: 240,
    oldPrice: 320,
    sku: "WRN-ECO-7312",
    tags: ["Cleaner", "Bio Enzyme", "Home Care"],
    description:
      "A bio-enzyme cleaning solution for fresh, low-residue housekeeping across homes, offices, and utility spaces.",
    shortSpecs: ["Bio-enzyme action", "Fresh finish", "Low chemical feel"],
    optionsLabel: "Volume",
    options: ["500 ml", "1 L", "2 L", "5 L"],
    images: [
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1000&h=900&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=1000&h=900&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=1000&h=900&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=1000&h=900&fit=crop&crop=center",
    ],
    specifications: [
      ["Product Type", "Bio-enzyme cleaner"],
      ["Use", "Floors, surfaces, and utility cleaning"],
      ["Dilution", "As required by cleaning need"],
      ["Best For", "Daily housekeeping"],
      ["Storage", "Away from heat and direct sunlight"],
      ["Surface Advice", "Patch test on delicate finishes"],
    ],
  },
  "wellness-products": {
    category: "Wellness Products",
    name: "Daily Wellness Support",
    badge: "In Stock",
    rating: 4.6,
    reviews: 154,
    price: 520,
    oldPrice: 680,
    sku: "WRN-WEL-8931",
    tags: ["Wellness", "Daily Care", "Natural"],
    description:
      "A wellness-focused product designed to support daily health habits with a clean, nature-led positioning.",
    shortSpecs: ["Daily support", "Lifestyle friendly", "Natural focus"],
    optionsLabel: "Pack",
    options: ["30 days", "60 days", "90 days", "Combo"],
    images: [
      "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=1000&h=900&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1000&h=900&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1000&h=900&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1000&h=900&fit=crop&crop=center",
    ],
    specifications: [
      ["Product Type", "Wellness support"],
      ["Use", "Daily lifestyle routine"],
      ["Best For", "Health-conscious families"],
      ["Storage", "As mentioned on label"],
      ["Routine", "Use consistently as directed"],
      ["Note", "Consult professionals for health concerns"],
    ],
  },
  "animal-feeds": {
    category: "Animal Feeds",
    name: "NutriFarm Animal Feed",
    badge: "In Stock",
    rating: 4.8,
    reviews: 201,
    price: 1120,
    oldPrice: 1350,
    sku: "WRN-FEED-4482",
    tags: ["Animal Feed", "Livestock", "Farm Nutrition"],
    description:
      "Balanced feed support for healthier livestock routines, practical farm nutrition, and consistent daily animal care.",
    shortSpecs: ["Balanced nutrition", "Farm ready", "Daily feeding"],
    optionsLabel: "Bag Size",
    options: ["5 kg", "10 kg", "25 kg", "50 kg"],
    images: [
      "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=1000&h=900&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1000&h=900&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1000&h=900&fit=crop&crop=left",
      "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?w=1000&h=900&fit=crop&crop=center",
    ],
    specifications: [
      ["Product Type", "Animal nutrition feed"],
      ["Use", "Daily feed support"],
      ["Best For", "Livestock and farm animals"],
      ["Storage", "Dry, moisture-free place"],
      ["Water", "Provide clean drinking water"],
      ["Feeding Advice", "Use according to animal age and requirement"],
    ],
  },
  "fmcg-products": {
    category: "FMCG Products",
    name: "Everyday Essential Pack",
    badge: "In Stock",
    rating: 4.5,
    reviews: 132,
    price: 399,
    oldPrice: 520,
    sku: "WRN-FMCG-6620",
    tags: ["FMCG", "Household", "Daily Essentials"],
    description:
      "Reliable everyday consumer essentials created for convenience, repeat use, and trusted household value.",
    shortSpecs: ["Retail ready", "Daily demand", "Household use"],
    optionsLabel: "Combo",
    options: ["Single", "Pack of 2", "Pack of 4", "Family Pack"],
    images: [
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1000&h=900&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1000&h=900&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1601599963565-b7ba29c8e8ff?w=1000&h=900&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1000&h=900&fit=crop&crop=center",
    ],
    specifications: [
      ["Product Type", "Consumer goods"],
      ["Use", "Daily household needs"],
      ["Best For", "Retail and direct customer channels"],
      ["Storage", "As mentioned on individual pack"],
      ["Stock Advice", "Use first-in, first-out rotation"],
      ["Packaging", "Product specific"],
    ],
  },
  "herbal-cosmetics": {
    category: "Herbal Cosmetics",
    name: "Herbal Glow Skin Care",
    badge: "In Stock",
    rating: 4.9,
    reviews: 278,
    price: 349,
    oldPrice: 460,
    sku: "WRN-HERB-9345",
    tags: ["Herbal Cosmetics", "Skin Care", "Natural Beauty"],
    description:
      "A botanical personal care product made for gentle daily grooming, healthy-looking skin, and nature-inspired beauty routines.",
    shortSpecs: ["Botanical care", "Gentle feel", "Daily grooming"],
    optionsLabel: "Size",
    options: ["50 g", "100 g", "150 g", "Combo"],
    images: [
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1000&h=900&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=1000&h=900&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1570194065650-d99fb4d8a609?w=1000&h=900&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1000&h=900&fit=crop&crop=center",
    ],
    specifications: [
      ["Product Type", "Herbal cosmetic"],
      ["Use", "Beauty and personal care"],
      ["Best For", "Skin and grooming routines"],
      ["Storage", "Cool place away from direct sunlight"],
      ["Skin Advice", "Patch test before first use"],
      ["Safety", "Discontinue if irritation occurs"],
    ],
  },
  nutraceuticals: {
    category: "Nutraceuticals",
    name: "NutriActive Wellness Capsules",
    badge: "In Stock",
    rating: 4.7,
    reviews: 221,
    price: 690,
    oldPrice: 850,
    sku: "WRN-NUTRA-1275",
    tags: ["Nutraceutical", "Nutrition", "Wellness"],
    description:
      "Convenient nutritional support for modern wellness routines, designed to complement balanced food, movement, and regular self-care.",
    shortSpecs: ["Nutrition support", "Routine friendly", "Wellness focused"],
    optionsLabel: "Bottle",
    options: ["30 caps", "60 caps", "90 caps", "Combo"],
    images: [
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1000&h=900&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1000&h=900&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=1000&h=900&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1000&h=900&fit=crop&crop=center",
    ],
    specifications: [
      ["Product Type", "Nutritional supplement"],
      ["Use", "Dietary wellness support"],
      ["Best For", "Adults with active wellness routines"],
      ["Storage", "As instructed on packaging"],
      ["Dosage", "Follow product label"],
      ["Note", "Do not replace prescribed medication"],
    ],
  },
};

const tabs = ["Description", "Specification", "Reviews"];

function ProductDetails() {
  const { slug } = useParams();
  const product = products[slug];
  const [activeImage, setActiveImage] = useState(0);
  const [selectedOption, setSelectedOption] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("Description");

  const discount = useMemo(() => {
    if (!product) return 0;
    return Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
  }, [product]);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const nextImage = () =>
    setActiveImage((current) => (current + 1) % product.images.length);
  const previousImage = () =>
    setActiveImage((current) =>
      current === 0 ? product.images.length - 1 : current - 1
    );

  return (
    <main className="bg-[#fbfcf7]">
      <section className="border-b border-emerald-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-6 sm:px-10 lg:px-16">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-emerald-700"
          >
            <ArrowLeft size={17} />
            Back to products
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-10 sm:px-10 lg:grid-cols-[1fr_0.95fr] lg:px-16 lg:py-14">
        <div>
          <div className="relative overflow-hidden rounded-[1.75rem] border border-emerald-100 bg-emerald-50 shadow-xl shadow-emerald-950/8">
            <img
              src={product.images[activeImage]}
              alt={product.name}
              className="aspect-square w-full object-cover"
            />
            <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-emerald-800 shadow-sm backdrop-blur">
              {discount}% Off
            </span>
            <button
              onClick={previousImage}
              className="absolute left-5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-emerald-900 shadow-lg transition hover:bg-emerald-700 hover:text-white"
              aria-label="Previous product image"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-emerald-800 text-white shadow-lg transition hover:bg-emerald-950"
              aria-label="Next product image"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          <div className="mt-5 grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <button
                key={image}
                onClick={() => setActiveImage(index)}
                className={`overflow-hidden rounded-2xl border-2 bg-white transition ${
                  activeImage === index
                    ? "border-emerald-700 shadow-lg shadow-emerald-900/12"
                    : "border-transparent hover:border-emerald-200"
                }`}
                aria-label={`Show image ${index + 1}`}
              >
                <img
                  src={image}
                  alt={`${product.name} view ${index + 1}`}
                  className="aspect-square w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-bold text-slate-500">{product.category}</span>
            <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
              <Check size={14} />
              {product.badge}
            </span>
          </div>

          <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl">
            {product.name}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <div className="flex text-amber-400">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={19} fill="currentColor" />
              ))}
            </div>
            <span className="text-sm font-semibold text-slate-700">
              {product.rating} ({product.reviews} Reviews)
            </span>
          </div>

          <div className="mt-6 flex items-end gap-3">
            <span className="text-4xl font-black text-emerald-800">
              Rs. {product.price.toLocaleString("en-IN")}
            </span>
            <span className="pb-1 text-xl font-bold text-slate-400 line-through">
              Rs. {product.oldPrice.toLocaleString("en-IN")}
            </span>
          </div>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
            {product.description}
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {product.shortSpecs.map((spec) => (
              <div
                key={spec}
                className="rounded-2xl border border-emerald-100 bg-white p-4 text-sm font-bold text-slate-700 shadow-sm"
              >
                <ShieldCheck className="mb-2 text-emerald-700" size={20} />
                {spec}
              </div>
            ))}
          </div>

          <div className="mt-7">
            <p className="text-sm font-bold text-slate-900">{product.optionsLabel}</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {product.options.map((option, index) => (
                <button
                  key={option}
                  onClick={() => setSelectedOption(index)}
                  className={`rounded-full border px-5 py-2 text-sm font-bold transition ${
                    selectedOption === index
                      ? "border-emerald-800 bg-emerald-800 text-white shadow-lg shadow-emerald-900/15"
                      : "border-slate-200 bg-white text-slate-700 hover:border-emerald-300"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <div className="flex h-12 items-center overflow-hidden rounded-full border border-slate-200 bg-white">
              <button
                onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                className="flex h-full w-12 items-center justify-center text-slate-700 transition hover:bg-slate-50"
                aria-label="Decrease quantity"
              >
                <Minus size={17} />
              </button>
              <span className="min-w-12 text-center text-sm font-black text-slate-900">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((value) => value + 1)}
                className="flex h-full w-12 items-center justify-center text-slate-700 transition hover:bg-slate-50"
                aria-label="Increase quantity"
              >
                <Plus size={17} />
              </button>
            </div>

            <Link
              to="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-emerald-800 px-7 text-sm font-black text-white shadow-lg shadow-emerald-900/20 transition hover:bg-emerald-950"
            >
              <ShoppingCart size={18} />
              Add to Cart
            </Link>
            <Link
              to="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-amber-500 px-7 text-sm font-black text-white shadow-lg shadow-amber-900/15 transition hover:bg-amber-600"
            >
              <Phone size={18} />
              Buy Now
            </Link>
            <button
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-rose-200 hover:text-rose-500"
              aria-label="Save product"
            >
              <Heart size={20} />
            </button>
          </div>

          <div className="mt-7 border-t border-slate-200 pt-5 text-sm text-slate-600">
            <p>
              <span className="font-black text-slate-900">SKU:</span> {product.sku}
            </p>
            <p className="mt-2">
              <span className="font-black text-slate-900">Tags:</span>{" "}
              {product.tags.join(", ")}
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <span className="font-black text-slate-900">Share:</span>
              {["f", "x", "in"].map((item) => (
                <button
                  key={item}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-800 text-xs font-black text-white transition hover:bg-emerald-950"
                >
                  {item}
                </button>
              ))}
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white transition hover:bg-slate-700">
                <Share2 size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-10 lg:px-16">
        <div className="border-b border-slate-200">
          <div className="flex flex-wrap justify-center gap-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`border-b-4 px-2 pb-4 text-lg font-black transition ${
                  activeTab === tab
                    ? "border-emerald-800 text-emerald-900"
                    : "border-transparent text-slate-400 hover:text-slate-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5 sm:p-8">
          {activeTab === "Description" && (
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <h2 className="text-3xl font-black text-slate-950">
                  Product Description
                </h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  {product.description} This product is positioned for reliable
                  day-to-day use, clean presentation, and strong customer confidence
                  across Waranmayii's agriculture, wellness, and household portfolio.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {product.shortSpecs.map((item) => (
                  <div key={item} className="rounded-2xl bg-emerald-50 p-5">
                    <Check className="text-emerald-800" size={22} />
                    <p className="mt-3 font-bold text-slate-800">{item}</p>
                  </div>
                ))}
                <div className="rounded-2xl bg-amber-50 p-5">
                  <Truck className="text-amber-700" size={22} />
                  <p className="mt-3 font-bold text-slate-800">
                    Distribution-ready packaging and support
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "Specification" && (
            <div>
              <h2 className="text-3xl font-black text-slate-950">
                Additional Information
              </h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {product.specifications.map(([label, value]) => (
                  <div
                    key={label}
                    className="grid grid-cols-[0.8fr_1.2fr] gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4"
                  >
                    <span className="text-sm font-black text-slate-500">{label}</span>
                    <span className="text-sm font-bold text-slate-900">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "Reviews" && (
            <div className="grid gap-8 lg:grid-cols-[0.45fr_1fr]">
              <div className="rounded-3xl bg-emerald-950 p-7 text-white">
                <p className="text-6xl font-black">{product.rating}</p>
                <p className="mt-2 text-sm font-semibold text-emerald-100">
                  out of 5 based on {product.reviews} reviews
                </p>
                <div className="mt-5 flex text-amber-300">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={20} fill="currentColor" />
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                {[92, 68, 34, 18, 8].map((width, index) => (
                  <div key={width} className="grid grid-cols-[4rem_1fr_3rem] items-center gap-4">
                    <span className="text-sm font-bold text-slate-700">{5 - index} Star</span>
                    <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full bg-amber-400"
                        style={{ width: `${width}%` }}
                      />
                    </div>
                    <span className="text-right text-sm font-bold text-slate-500">
                      {width}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default ProductDetails;
