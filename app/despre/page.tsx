import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "Despre Noi | Ferma de Capre Mureș",
  description:
    "Află povestea fermei noastre de capre din Mureș, România și cum am ajuns să producem lactate bio de calitate superioară.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#F9F4EA]">
      <AboutPageClient />
    </div>
  );
}
