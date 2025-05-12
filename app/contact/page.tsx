import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact | Ferma de Capre Mureș",
  description:
    "Contactează-ne pentru a afla mai multe despre produsele noastre bio-lactate din Mureș, România.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#224A3D]">
      <ContactPageClient />
    </div>
  );
}
