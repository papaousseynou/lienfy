import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
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
        <Link href="/accueil" className="text-orange-400 hover:text-orange-300">
          Accueil
        </Link>
        <Link className="hover:text-gray-300" href="/mes_liens">
          Mes liens
        </Link>
        <Link className="hover:text-gray-300" href="/blog">
          Blog
        </Link>
      </div>
      <div className="flex gap-2 items-center mx-8">
        <Link
          className="border border-orange-400  hover:text-orange-600 text-orange-400 px-4 py-2 rounded transition duration-300"
          href="/deconnexion"
        >
          Se connecter
        </Link>
        <Link
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2  rounded transition duration-300"
          href="/inscription"
        >
          Sinscrire
        </Link>
      </div>
    </nav>
  );
}