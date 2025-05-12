"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";
import type { Product } from "@/lib/products";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Animation variants for the card
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Animation for the image container
  const imageContainer = {
    rest: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  // Animation for the content
  const contentVariants = {
    rest: { y: 0 },
    hover: { y: -5, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  // Animation for the price tag
  const priceVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: { scale: 1.1, rotate: -3, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      variants={item}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="h-full"
    >
      <Card
        className="overflow-hidden border-2 border-[#224A3D]/80 bg-gradient-to-b from-[#224A3D] to-[#1a3a30] text-[#F9F4EA] shadow-lg transition-all duration-300 hover:shadow-xl relative h-full flex flex-col"
        style={{
          boxShadow: isHovered
            ? "8px 12px 20px rgba(0, 0, 0, 0.3), -4px 0 15px rgba(255, 255, 255, 0.1)"
            : "5px 8px 15px rgba(0, 0, 0, 0.2), -2px 0 10px rgba(255, 255, 255, 0.05)",
        }}
      >
        {/* Decorative goat horn svg in the corner */}
        <svg
          className="absolute top-2 right-2 w-8 h-8 text-[#F9F4EA]/30 z-10"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M20,4C21.1,4 22,4.9 22,6V18C22,19.1 21.1,20 20,20H4C2.9,20 2,19.1 2,18V6C2,4.9 2.9,4 4,4H20M20,18V6H4V18H20Z" />
          <path d="M8,7.5C8,8.33 7.33,9 6.5,9C5.67,9 5,8.33 5,7.5C5,6.67 5.67,6 6.5,6C7.33,6 8,6.67 8,7.5M17.5,6C16.67,6 16,6.67 16,7.5C16,8.33 16.67,9 17.5,9C18.33,9 19,8.33 19,7.5C19,6.67 18.33,6 17.5,6M12,11C9.79,11 8,12.79 8,15C8,16.5 8.8,17.77 10,18.46V19C10,19.55 10.45,20 11,20H13C13.55,20 14,19.55 14,19V18.46C15.2,17.77 16,16.5 16,15C16,12.79 14.21,11 12,11Z" />
        </svg>

        <motion.div
          className="relative h-[220px] overflow-hidden"
          variants={imageContainer}
          initial="rest"
          animate={isHovered ? "hover" : "rest"}
        >
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#224A3D] to-transparent opacity-40" />
          {/* Left side light effect */}
          <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#F9F4EA]/10 to-transparent opacity-70" />
        </motion.div>

        <motion.div
          className="flex-grow flex flex-col"
          variants={contentVariants}
          initial="rest"
          animate={isHovered ? "hover" : "rest"}
        >
          <CardContent className="p-5 flex-grow">
            <h3 className="text-xl font-bold text-[#F9F4EA] mb-2 border-b border-[#F9F4EA]/20 pb-2">
              {product.name}
            </h3>
            <p className="text-[#F9F4EA]/80 mt-2 text-sm md:text-base">
              {product.description}
            </p>
          </CardContent>

          <CardFooter className="flex items-center justify-between p-4 pt-0 mt-auto">
            <motion.div
              className="bg-[#F9F4EA] text-[#224A3D] px-3 py-1 rounded-full font-bold inline-block"
              variants={priceVariants}
              initial="rest"
              animate={isHovered ? "hover" : "rest"}
              style={{
                boxShadow: "2px 3px 5px rgba(0, 0, 0, 0.2)",
              }}
            >
              {product.price} lei{product.unit ? `/${product.unit}` : ""}
            </motion.div>

            {/* Farm-themed icon */}
            <motion.div
              className="text-[#F9F4EA]/70"
              whileHover={{ rotate: 10, scale: 1.1 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </motion.div>
          </CardFooter>
        </motion.div>

        {/* Decorative farm-themed pattern at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#F9F4EA]/20 overflow-hidden">
          <motion.div
            className="h-full w-full bg-[#F9F4EA]/40"
            initial={{ x: "-100%" }}
            animate={isHovered ? { x: "0%" } : { x: "-100%" }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Bottom shadow effect */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      </Card>
    </motion.div>
  );
}
