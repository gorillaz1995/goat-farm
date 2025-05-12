import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-[#224A3D]">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0 ">
          <p className="text-center text-sm leading-loose text-[#F9F4EA] md:text-left">
            &copy; {new Date().getFullYear()} Capra Monte Farm. Toate drepturile
            rezervate.
          </p>
        </div>
        <div className="flex gap-4 ">
          <Link
            href="/produse"
            className="text-sm font-medium text-[#F9F4EA] transition-colors hover:text-primary"
          >
            Produse
          </Link>
          <Link
            href="/despre"
            className="text-sm font-medium text-[#F9F4EA] transition-colors hover:text-primary"
          >
            Despre Noi
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-[#F9F4EA] transition-colors hover:text-primary"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
