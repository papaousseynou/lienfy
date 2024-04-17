import Image from "next/image";

export default function Footer() {
  return (
    <div>
      <footer className="bg-sky-950 text-white">
        <div className="max-w-screen-xl mx-auto py-10 px-4 sm:px-6 lg:py-16 lg:px-6">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <Image
                src="/images/logo1.png"
                alt="Xarala"
                // className="h-10"
                width={80}
                height={100}
              />
              <p className="text-white text-base">
                Le raccourcisseur d&apos;url panafricain.
              </p>
              <div className="mt-8">
                <p>Sicap Mbao</p>
                <p>Boutique Baye Niass</p>
                <p>Dakar, Senegal</p>
                <p>Phone: +221 77 860 60 64</p>
                <p>Email: xaralatech@gmail.com</p>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 xl:mt-0 xl:col-span-2 ">
              <div className="md:grid md:grid-cols-2 md-gap-8">
                <div>
                  <h4 className="text-sm  text-white font-bold ">Lienfy</h4>
                  <ul className="mt-4 space-y-4">
                    <li>Accueil</li>
                    <li>C&apos;est quoi Lienfy ?</li>
                    <li>Blog</li>
                    <li>Nous contactez</li>
                    <li>Déconnexion</li>
                  </ul>
                </div>
                <div className="">
                  <h4 className="text-sm font-semibold text-gray-400 tracking-wider ">
                    Mes liens
                  </h4>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <p>Nombre de click</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pb-10">
          <p className="text-white mb-5 xl:text-center ">
            © Copyright <b className="text-white font-bold">Lienfy</b>. All
            Rights Reserved. Crée par
            <em className="text-orange-500"> Xarala</em>
          </p>
        </div>
      </footer>
    </div>
  );
}
