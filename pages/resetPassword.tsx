import { Button } from "@/components/ui/button";

export default function resetPassword() {
  return (
    <div
      className="min-h-screen height-signup flex items-center justify-between bg-cover bg-center p-4"
      style={{ backgroundImage: "url('/images/section1.png')" }}
    >
      <div></div>
      <div className="flex-1 flex justify-end mr-8">
        <div className="bg-white w-form-width h-form-height flex flex-col items-center rounded-lg">
          <h2 className="text-3xl my-4 font-semibold">
            Lien<b className="text-orange-400">fy</b>
          </h2>
          <h2 className="text-3xl my-4">Réinitialisation mot de passe</h2>
          <h3 className="text-gray-500 text-xl">
            Entrez votre email et réinitialisez votre mot de passes
          </h3>

          <div className="mt-12">
            <form action="" className="flex flex-col space-y-3 gap-12">
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  className="w-full px-3 py-2 border-b border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-gray-500"
                  placeholder="Email"
                />
              </div>

              <div className="">
                <Button className="w-96 h-10 bg-orange-500">
                  Réinitialiser mot de passe
                </Button>
              </div>
            </form>
            <div className="mt-12 text-center">
              <p className="text-gray-500 text-lg">
                Vous n&apos;avez pas de compte ?
                <a
                  href="/signup"
                  className="text-orange-500 hover:text-orange-600"
                >
                  Créez-le ici
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
