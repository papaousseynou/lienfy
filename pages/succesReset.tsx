import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function succesReset() {
  return (
    <div
      className="h-screen w-full flex bg-cover bg-center"
      style={{ backgroundImage: "url('/images/section1.png')" }}
    >
      <div className="w-1/2 h-full"></div>
      <div className="w-1/2 h-full bg-bleu-nav bg-opacity-80 flex justify-center items-center">
        <div className="bg-white w-form-width h-form-height flex flex-col items-center rounded-lg">
          <h2 className="text-3xl my-4 font-semibold">
            Lien<span className="text-orange-400">fy</span>
          </h2>
          <h2 className="text-3xl my-4">Réinitialisation mot de passe</h2>
          <div className="my-12">
            <h3 className="font-bold text-3xl">
              Mot de passe réinitialisé avec succès !
            </h3>
          </div>
          <div className="">
            <Image
              src="/images/valide.png"
              width={128}
              height={128}
              alt="Validé"
            />
          </div>
          <div className="my-28">
            <Button className="w-80 h-10">Se connecter</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
