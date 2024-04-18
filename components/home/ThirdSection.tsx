import Image from "next/image";

export default function ThirdSection() {
  return (
    <div className="mx-auto h-third-section-height bg-white w-auto">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-center mt-6">
          C&apos;est quoi lienfy ?
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 mb-15 mt-6 ">
        <div className="md:w-1/2 md:pr-10">
          <h2 className="text-2xl text-gray-600 text-center md:text-left mb-6 ml-12">
            Lienfy simplifie le partage d&apos;URL en fournissant une solution
            de raccourcissement de liens rapide, sécurisée et conviviale.
            Explorez nos fonctionnalités pour comprendre comment Lienfy peut
            rendre votre expérience de partage en ligne plus efficace.
          </h2>
        </div>
        <div className="md:w-1/3 flex justify-center md:justify-center mx-14 ml-8">
          <Image
            alt="section 3"
            src="/images/lienfy2.png"
            width={352}
            height={265}
          />
        </div>
      </div>

      <div className="flex flex-wrap-reverse justify-center gap-6">
        <div className="bg-card-color p-6 rounded-lg w-card-width h-60">
          <h2 className="text-xl text-center text-orange-500 font-semibold mb-4">
            Optimisation
          </h2>
          <div className="flex justify-center">
            <Image
              alt="optimisation"
              src="/images/optimisation.png"
              width={48}
              height={48}
            />
          </div>
          <p className="text-md text-gray-500 mt-2 text-center">
            Une solution pour optimiser l&apos;information face aux limites de
            caractères posées par certains canaux de communication. Notre
            plateforme vous aide à élargir l&apos;étendu de votre message et
            captiver votre cible par des liens simples et attractifs
          </p>
        </div>
        <div className="bg-card-color p-6 rounded-lg w-card-width h-60">
          <h2 className="text-xl text-center text-orange-500 font-semibold mb-4">
            Fiabilité
          </h2>
          <div className="flex justify-center">
            <Image
              alt="fiabilite"
              src="/images/fiabilite.png"
              width={48}
              height={48}
              className=""
            />
          </div>
          <p className="text-md text-gray-500 mt-2 text-center">
            Instaurez et Augmentez la fiabilité de vos liens lorsque ceux-ci
            sont longs et/ou incluent une série de variables ambigu. Lienfy est
            conçue pour vous aider à renforcer la sécurité de vos privilèges en
            générant des liens permanents depuis une source fiable.
          </p>
        </div>

        <div className="bg-card-color p-6 rounded-lg w-card-width h-60">
          <h2 className="text-xl text-center text-orange-500 font-semibold mb-4">
            Facilité
          </h2>
          <div className="flex justify-center">
            <Image
              alt="facilite"
              src="/images/facilite.png"
              width={48}
              height={48}
              className=""
            />
          </div>
          <p className="text-md text-gray-500 mt-2 text-center">
            Utilisez notre raccourcisseur d&apos;URL pour rendre vos liens plus
            faciles à partager. Rassemblez gratuitement des statistiques et des
            informations sur le trafic généré par vos liens et impressionnez vos
            cibles avec des liens mémorables et faciles à retenir.
          </p>
        </div>
      </div>
    </div>
  );
}
