"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/products";
import ProductCard from "@/components/product-card";
import { motion } from "framer-motion";

export default function ProductsPreview() {
  // Get the first 3 products for the preview section
  const featuredProducts = products.slice(0, 3).map((product) => {
    // Replace placeholder images with actual product images
    let image = product.image;
    if (product.name.includes("Caș Dulce")) {
      image = "/cas-dulce.webp";
    } else if (product.name.includes("Lapte Crud")) {
      image = "/lapte-capra.webp";
    } else if (product.name.includes("Caș Dospit")) {
      image = "/cas-dospit.webp";
    }

    return { ...product, image };
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#224A3D]">
            Produsele Noastre
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Descoperă gama noastră de produse bio-lactate, obținute prin metode
            tradiționale.
          </p>
        </div>
      </div>

      <motion.div
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </motion.div>

      <div className="flex justify-center mt-8">
        <Link href="/produse">
          <Button variant="outline" size="lg">
            Vezi toate produsele
          </Button>
        </Link>
      </div>
    </section>
  );
}
