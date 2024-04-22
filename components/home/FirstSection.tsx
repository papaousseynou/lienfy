import Image from "next/image";
import { Button } from "../ui/button";

export default function Accueil() {
  return (
    <div className=" mx-auto h-custom-height bg-first-color flex items-center justify-around px-12 ">
      <div className="space-y-6 max-w-lg">
        <div>
          <p className="text-5xl font-bold">
            Simplifier vos liens pour une navigation fluide grace à notre
            raccourcisseur lien<b className="text-5xl text-orange-400">fy</b>
          </p>
          <h1 className="text-xl text-gray-600">
            Lienfy est le raccourcisseur d&apos;url panafricain le plus simple.
            Raccourcissez vos liens et faciliter vos partage url.
          </h1>
        </div>
        <div>
          <Button>Commencez gratuitement</Button>
        </div>
      </div>
      <div>
        <Image
          src="/images/section1.png"
          alt="section 1"
          width={607}
          height={526}
          className="w-full"
        />
      </div>
    </div>
  );
}
