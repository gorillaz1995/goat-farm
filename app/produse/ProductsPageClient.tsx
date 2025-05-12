"use client";

import ProductCard from "@/components/product-card";
import { products } from "@/lib/products";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProductsPageClient() {
  // Animation variants for staggered children animation
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Product images mapping
  const productImages = {
    "Caș Dospit": "/cas-dospit.webp",
    Kefir: "/kefir.webp",
    "Caș Dulce": "/cas-dulce.webp",
    "Lapte de Capră": "/lapte-capra.webp",
    "Lapte Crud": "/lapte-capra.webp",
    Telemea: "/telemea-capra.webp",
  };

  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 bg-[#F9F4EA]">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Produsele Noastre
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Produse bio-lactate de calitate superioară, obținute de la capre
            crescute în munții din Mureș.
          </p>
        </div>
      </div>

      <motion.div
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={{
              ...product,
              image:
                productImages[product.name as keyof typeof productImages] ||
                product.image,
            }}
          />
        ))}
      </motion.div>

      <div className="mt-16 space-y-6">
        <h2 className="text-2xl font-bold">Produse Viitoare</h2>
        <p className="text-gray-500 dark:text-gray-400">
          În viitor, vom extinde gama noastră de produse pentru a include:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-500 dark:text-gray-400">
          <li>Cașcaval</li>
          <li>Unt</li>
          <li>Smântână</li>
          <li>Brânză topită</li>
          <li>Iaurt</li>
          <li>Brânzeturi cu arome</li>
        </ul>
      </div>
    </div>
  );
}
