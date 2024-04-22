"use client";
import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  return (
    <nav className="bg-bleu-nav p-4 text-white flex justify-between items-center">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/images/logo1.png"
            alt="Lienfy Logo"
            width={90}
            height={20}
          />
        </Link>
      </div>
      <div className="flex gap-4 items-center">
        <Link
          href="/"
          className={`${
            isActive("/") ? "text-orange-400" : "hover:text-gray-300"
          }`}
        >
          Accueil
        </Link>
        <Link
          href="/liens"
          className={`${
            isActive("/liens") ? "text-orange-400" : "hover:text-gray-300"
          }`}
        >
          Mes liens
        </Link>
        <Link
          className={`${
            isActive("/blog") ? "text-orange-400" : "hover:text-gray-300"
          }`}
          href="/blog"
        >
          Blog
        </Link>
      </div>
      <div className="flex gap-2 items-center mx-8">
        <Link
          className="border border-orange-400  hover:text-orange-600 text-orange-400 px-4 py-2 rounded transition duration-300"
          href="/login"
        >
          Se connecter
        </Link>
        <Link
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2  rounded transition duration-300"
          href="/signup"
        >
          S&apos;inscrire
        </Link>
      </div>
    </nav>
  );
}
