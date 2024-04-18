import { Button } from "../ui/button";

export default function SecondSection() {
  return (
    <div className="flex flex-col justify-center items-center p-8 bg-second-color h-96">
      <h1 className="text-2xl font-bold text-center mb-5">
        Créez un compte et commencez à raccourcir vos liens
      </h1>
      <div className="bg-white p-7 rounded-md shadow-lg w-box-input-width border border-zinc-400 h-64">
        <div className="flex flex-col space-y-4">
          <label
            htmlFor="link-input"
            className="text-md font-medium text-gray-800 self-start mt-6"
          >
            Entrer le lien à raccourcir
          </label>
          <input
            type="text"
            placeholder="https : // aefrduje458gfghgjGJKfvv7azeegbk;ckbldjdtkgllgl"
            className="w-full px-4 py-2 h-14 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-700"
          />
          <div className="mt-10">
            <Button className="w-3/5 justify-start text-xl ">
              Inscrivez-vous gratuitement et commencez à raccourcir vos liens !
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
