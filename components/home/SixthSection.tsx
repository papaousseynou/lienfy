import Image from "next/image";
import { Button } from "../ui/button";

export default function SixthSection() {
  return (
    <div className="flex flex-row justify-around w-auto h-sixth-height ">
      <div className="flex flex-col w-1/2 items-start gap-6 justify-start mx-8 my-10">
        <div className="gap-8">
          <h1 className="font-bold text-3xl ">
            Reduisez la longueur de vos liens <br /> d&apos;un seul clic !
          </h1>
          <p className="text-gray-600">
            Raccourcissez vos url pour une expérience de partage plus fluide et
            plus rapide
          </p>
        </div>
        <div className="pt-12">
          <Button className="py-2 px-4 h-16">Raccourcir votre liens</Button>
        </div>
      </div>
      <div className="mt-8">
        <Image alt="lien" width={300} height={300} src="/images/link.png" />
      </div>
    </div>
  );
}
