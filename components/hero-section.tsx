"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  // Handle parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  return (
    <section className="relative w-full min-h-[80vh] flex items-center overflow-hidden">
      {/* Background with parallax effect */}
      <div
        className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 to-black/30"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      >
        <Image
          src="/capra.webp"
          alt="Ferma de capre în munții din Mureș"
          fill
          className="object-cover object-center brightness-[0.85] blur-[2px] transition-all duration-700"
          priority
          quality={90}
        />
        {/* Adding an additional overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/40 to-transparent z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      <div className="container relative z-20 px-4 md:px-6 py-16 md:py-24 lg:py-32">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          {/* Left content */}
          <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-col space-y-6 text-white"
          >
            <motion.div
              className="inline-block bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-lg mb-2 w-fit"
              variants={fadeInUp}
              custom={0}
            >
              <span className="font-medium">Tradiție și Calitate</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight"
              variants={fadeInUp}
              custom={1}
            >
              <span className="text-primary">Bio-Lactate</span> din <br />
              Munții Mureșului
            </motion.h1>

            <motion.p
              className="max-w-[600px] text-lg md:text-xl text-gray-100 leading-relaxed"
              variants={fadeInUp}
              custom={2}
            >
              Produse naturale de calitate superioară, obținute de la capre
              crescute în libertate, cu aer curat și hrană naturală, folosind
              metode tradiționale transmise din generație în generație.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              variants={fadeInUp}
              custom={3}
            >
              <Link href="/produse">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-6 rounded-full shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30"
                >
                  Descoperă Produsele
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-md text-white border-white/30 hover:bg-white/20 px-8 py-6 rounded-full transition-all"
                >
                  Contactează-ne
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right content - Product showcase */}
          <motion.div
            className="hidden lg:flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/20 w-full max-w-md">
              <div className="absolute -top-6 -right-6 bg-primary text-white text-sm font-bold px-4 py-2 rounded-full">
                Produse Premium
              </div>
              <h3 className="text-white text-2xl font-bold mb-4">
                Produsele Noastre
              </h3>
              <ul className="space-y-3 text-white">
                {[
                  "Brânză de capră",
                  "Iaurt natural",
                  "Cașcaval",
                  "Telemea",
                ].map((product, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                  >
                    <div className="bg-primary/20 p-1 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    {product}
                  </motion.li>
                ))}
              </ul>
              <motion.div
                className="mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <Link href="/produse">
                  <Button className="w-full bg-white text-primary hover:bg-gray-100">
                    Vezi toate produsele
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden md:flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <span className="text-white text-sm mb-2">Scroll pentru mai multe</span>
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
          <motion.div
            className="w-1.5 h-1.5 bg-white rounded-full"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
