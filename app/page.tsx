import HeroSection from "@/components/hero-section";
import ProductsPreview from "@/components/products-preview";
import AboutPreview from "@/components/about-preview";
import ContactPreview from "@/components/contact-preview";

export default function Home() {
  return (
    <div className="flex flex-col gap-16  bg-[#F9F4EA]">
      <HeroSection />

      <section className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#224A3D]">
              Produse Bio-Lactate de Calitate Superioară
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Produsele noastre sunt obținute de la capre crescute în munții din
              Mureș, cu aer curat și hrană naturală.
            </p>
          </div>
        </div>
      </section>

      <ProductsPreview />

      <AboutPreview />

      <section className="bg-[#224A3D] py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#F9F4EA]">
                De ce să alegeți produsele noastre?
              </h2>
              <p className="mx-auto max-w-[700px] text-[#F9F4EA] md:text-xl dark:text-gray-400">
                Calitate superioară la prețuri competitive, direct de la fermă
                la dumneavoastră.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mt-8">
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-[#F9F4EA]">
                <div className="p-2 bg-primary/10 rounded-full">
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
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#224A3D]">
                  Calitate Superioară
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Produse naturale, fără aditivi sau conservanți, obținute prin
                  metode tradiționale.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-[#F9F4EA]">
                <div className="p-2 bg-primary/10 rounded-full">
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
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#224A3D]">
                  Mediu Natural
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Caprele noastre sunt crescute în munții din Mureș, cu aer
                  curat și hrană naturală.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-[#F9F4EA]">
                <div className="p-2 bg-primary/10 rounded-full">
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
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M3 6h18" />
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#224A3D]">
                  Preț Competitiv
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Prețuri accesibile pentru produse de calitate superioară,
                  direct de la producător.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
