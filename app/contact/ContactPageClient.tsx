"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ContactPageClient() {
  // State to track if the component is mounted (for client-side rendering of map)
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12 max-w-5xl mx-auto bg-[#224A3D]">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center space-y-4 text-center mb-10"
      >
        <div className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#F9F4EA]">
            Contactează-ne
          </h1>
          <p className="mx-auto max-w-[700px] text-[#F9F4EA]">
            Suntem bucuroși să răspundem la întrebările tale și să primim
            feedback despre produsele noastre.
          </p>
        </div>
      </motion.div>

      {/* Contact Information Cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
      >
        {/* Address Card */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
          <div className="bg-primary/10 p-3 rounded-full mb-4">
            <MapPin className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-medium text-lg mb-2">Adresă</h3>
          <p className="text-gray-500 dark:text-gray-400">
            Sat Meștera, Comuna Stânceni, Județul Mureș, Nr. 71, Cod Poștal
            457577
          </p>
        </div>

        {/* Phone Card */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
          <div className="bg-primary/10 p-3 rounded-full mb-4">
            <Phone className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-medium text-lg mb-2">Telefon</h3>
          <p className="text-gray-500 dark:text-gray-400">
            <a
              href="tel:0736674292"
              className="hover:text-primary transition-colors"
            >
              0736 674 292
            </a>
          </p>
        </div>

        {/* Email Card */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center sm:col-span-2 lg:col-span-1">
          <div className="bg-primary/10 p-3 rounded-full mb-4">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-medium text-lg mb-2">Email</h3>
          <p className="text-gray-500 dark:text-gray-400">
            <a
              href="mailto:gabrielalexandrutruta@gmail.com"
              className="hover:text-primary transition-colors break-all"
            >
              gabrielalexandrutruta@gmail.com
            </a>
          </p>
        </div>
      </motion.div>

      {/* Social Media Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="mb-12 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
      >
        <h3 className="font-medium text-xl mb-4 text-center">Social Media</h3>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
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
              className="h-5 w-5"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
            <span>Gabriel Alexandru Truta</span>
          </a>
        </div>
      </motion.div>

      {/* Map Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full"
      >
        <h3 className="font-medium text-xl mb-4 text-[#F9F4EA]">
          Locația Noastră
        </h3>
        <div className="h-[400px] rounded-xl overflow-hidden shadow-md bg-gray-100 dark:bg-gray-800">
          {isMounted ? (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21893.013832492875!2d25.1982283!3d46.9783333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474a7a6e6e8f8a8f%3A0x1c3a4b6c5f8d0a0!2zU3TDom5jZW5pLCBNdXJlxZ8gQ291bnR5!5e0!3m2!1sen!2sro!4v1625123456789!5m2!1sen!2sro"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Locația Fermei de Capre Mureș"
              className="w-full h-full"
            ></iframe>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400">
                Se încarcă harta...
              </p>
            </div>
          )}
        </div>
        <p className="text-sm  mt-2 text-center text-[#F9F4EA]">
          Vă așteptăm cu drag la ferma noastră din Sat Meștera, Comuna Stânceni,
          Județul Mureș
        </p>
      </motion.div>
    </div>
  );
}
