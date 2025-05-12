import type { Metadata } from "next";
import ProductsPageClient from "./ProductsPageClient";

export const metadata: Metadata = {
  title: "Produse | Ferma de Capre Mureș",
  description:
    "Descoperă produsele noastre bio-lactate de calitate superioară din Mureș, România.",
};

export default function ProductsPage() {
  return (
    <div className="bg-[#F9F4EA]">
      <ProductsPageClient />
    </div>
  );
}
