"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPageClient() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Povestea Noastră
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Cum a început totul și cum am ajuns să creăm o fermă de capre în
            Mureș.
          </p>
        </div>
      </div>

      <div className="grid gap-12 md:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold">Începuturile</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Eram pe la grădiniță când ai mei au avut capre și le-au ținut până
            am ajuns la gimnaziu. Mergeam de multe ori cu ele la pășune cu
            maica-mea sau soră-mea. La început nu îmi plăceau, dar pe parcurs am
            prins drag de ele.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            La un moment dat, ai mei nu mai făceau față cheltuielilor (nu aveau
            câștig după ele, erau doar în familie) și le-au vândut pe toate. A
            fost o perioadă de repaus până am terminat eu liceul și am plecat în
            străinătate (Germania).
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden"
        >
          <Image
            src="/inceputuri-capre.webp"
            alt="Capre la pășune"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-12 space-y-4"
      >
        <h2 className="text-2xl font-bold">Renașterea Fermei</h2>
        <p className="text-gray-500 dark:text-gray-400">
          Între timp am cunoscut-o pe prietena mea (viitoarea soție) cu ajutorul
          căreia, de comun acord, am cumpărat 6 iede. După 2 luni am mai
          cumpărat 6 iede, după care a început distracția. Grajdul alor mei era
          învechit și am construit altul (cheltuială destul de bunișoară).
        </p>
        <p className="text-gray-500 dark:text-gray-400">
          Din cele 12 iede, acum după 3 ani am ajuns la 30 de capre cu lapte și
          încă vreo 20 de iede și ieduți. Mama mea se ocupă momentan de caș și
          telemea, iar eu de kefir. Le mulgem în mare parte împreună, manual.
        </p>
      </motion.div>

      <div className="grid gap-12 md:grid-cols-2 items-center mt-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden md:order-last"
        >
          <Image
            src="/capre-boi.webp"
            alt="Ferma noastră de capre"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="lazy"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold">Prezent și Viitor</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Este destul de greu să creștem o fermă fără niciun sprijin. Momentan
            totul este din muncă proprie. Pe viitor sper să ajungem la niște
            fonduri europene pentru dezvoltare.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Acum e mai complicat cu procesarea pentru că ne chinuim prin casă,
            dar vreau să dezvolt și partea asta de procesare. Mai sunt încă
            multe de făcut ca să fie fermă în adevăratul sens al cuvântului, dar
            sper să reușesc.
          </p>
          <p className="font-medium">- Truță Gabriel Alexandru, Fondator</p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="mt-16 space-y-6"
      >
        <h2 className="text-4xl font-bold pt-10">Îngrijirea Caprelor</h2>
        <p className="text-gray-500 text-xl dark:text-gray-400">
          Caprele noastre sunt crescute în condiții naturale, în munții din
          Mureș. Ele beneficiază de aer curat, pășuni bogate și îngrijire
          atentă.
        </p>
      </motion.div>
    </div>
  );
}
