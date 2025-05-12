"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail } from "lucide-react"
import { motion } from "framer-motion"

export default function ContactPreview() {
  return (
    <section className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contactează-ne</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Suntem bucuroși să răspundem la întrebările tale și să primim feedback despre produsele noastre.
          </p>
        </div>
      </div>

      <motion.div
        className="grid gap-8 md:grid-cols-3 mt-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center space-y-2 p-6 border rounded-lg bg-background">
          <MapPin className="h-10 w-10 text-primary" />
          <h3 className="text-xl font-bold">Adresă</h3>
          <p className="text-gray-500 dark:text-gray-400 text-center">
            Sat Meștera, Comuna Stânceni, Județul Mureș, Nr. 71
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2 p-6 border rounded-lg bg-background">
          <Phone className="h-10 w-10 text-primary" />
          <h3 className="text-xl font-bold">Telefon</h3>
          <p className="text-gray-500 dark:text-gray-400 text-center">0736 674 292</p>
        </div>
        <div className="flex flex-col items-center space-y-2 p-6 border rounded-lg bg-background">
          <Mail className="h-10 w-10 text-primary" />
          <h3 className="text-xl font-bold">Email</h3>
          <p className="text-gray-500 dark:text-gray-400 text-center">gabrielalexandrutruta@gmail.com</p>
        </div>
      </motion.div>

      <div className="flex justify-center mt-8">
        <Link href="/contact">
          <Button variant="outline" size="lg">
            Contactează-ne
          </Button>
        </Link>
      </div>
    </section>
  )
}
