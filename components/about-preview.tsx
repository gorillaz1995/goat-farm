"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function AboutPreview() {
  return (
    <section className="container px-4 md:px-6">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#224A3D]">
            Povestea Noastră
          </h2>
          <p className="text-gray-500 dark:text-gray-400 md:text-lg">
            Ferma noastră a început ca un vis și a crescut prin muncă și
            pasiune. Din cele 12 iede inițiale, acum după 3 ani am ajuns la 30
            de capre cu lapte și încă vreo 20 de iede și ieduți.
          </p>
          <p className="text-gray-500 dark:text-gray-400 md:text-lg">
            Mama mea se ocupă momentan de caș și telemea, iar eu de kefir. Le
            mulgem în mare parte împreună, manual, păstrând tradițiile și
            asigurând cea mai bună calitate pentru produsele noastre.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link href="/despre">
              <Button>Află mai multe</Button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src="/apus-capre.jpg"
            alt="Ferma noastră de capre"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
