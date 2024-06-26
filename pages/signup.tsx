import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Signup() {
  return (
    <div
      className="h-screen w-full flex bg-cover bg-center"
      style={{ backgroundImage: "url('/images/section1.png')" }}
    >
      <div className="w-1/2 h-full"></div>
      <div className="w-1/2 h-full bg-bleu-nav bg-opacity-80 flex justify-center items-center">
        <div className="bg-white w-form-width h-form-height flex flex-col items-center rounded-lg">
          <h2 className="text-3xl my-4 font-semibold">
            Lien<b className="text-orange-400">fy</b>
          </h2>
          <h2 className="text-3xl my-4">Inscription</h2>
          <h3 className="text-gray-500 text-xl">
            Inscrivez-vous et commencez à raccourcir vos liens
          </h3>
          <div className="flex items-center my-4 gap-6 bg-white py-2 px-4 rounded-lg border border-gray-300 hover:shadow-md transition duration-300 cursor-pointer">
            <Image
              src="/images/google.png"
              width={36}
              height={36}
              alt="Google"
            />
            <button className="text-xl font-medium">
              S&apos;inscrire avec Google
            </button>
          </div>
          <div className="mt-4">
            <form action="" className="flex flex-col space-y-3">
              <div className="relative">
                <input
                  type="text"
                  className="w-full px-3 py-2 border-b border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-gray-500"
                  placeholder="Nom complet"
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  className="w-full px-3 py-2 border-b border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-gray-500"
                  placeholder="Email"
                />
              </div>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  className="w-full px-3 py-2 border-b border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-gray-500"
                  placeholder="Mot de passe"
                />
              </div>
              <div className="relative">
                <input
                  type="password"
                  name="confirmPassword"
                  className="w-full px-3 py-2 border-b border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-gray-500"
                  placeholder="Confirmer mot de passe"
                />
              </div>
              <Button className="w-96 h-10 bg-orange-500">
                Créer mon compte
              </Button>
            </form>
            <div className="mt-8 text-center">
              <p className="text-gray-500 text-lg">
                Vous avez un compte ?
                <Link
                  href="/login"
                  className="text-orange-500 hover:text-orange-600"
                >
                  Connectez-vous ici
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
