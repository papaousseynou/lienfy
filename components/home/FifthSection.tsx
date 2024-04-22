export default function FifthSection() {
  return (
    <div className="bg-fifth-color h-fifth-height w-auto">
      <br />
      <h1 className="text-center text-4xl font-bold mx-8 font-sans">FAQ</h1>

      <div className=" bg-white flex flex-col shadow-md rounded h-40 mx-16 my-12 justify-center items-center border border-gray-200">
        <p className="text-xl text-center text-orange-500 font-medium">
          1.Q:Pourquoi raccourcir un lien ?
        </p>
        <p className="text-xl text-center font-medium text-gray-400 mt-2">
          <span className="text-orange-500">. R :</span> Les liens raccourcis
          sont plus esthétiques et prennent moins de place. Ils sont <br />{" "}
          souvent utilisés sur les plateformes de médias sociaux où
          l&apos;espace est limité.
        </p>
      </div>
      <div className=" bg-white flex flex-col shadow-md rounded h-40 mx-16 my-12 justify-center items-center border border-gray-200">
        <p className="text-xl text-center text-orange-500 font-medium">
          2. Q : Quels sont les avantages de raccourcir un lien ?
        </p>
        <p className="text-xl text-center font-medium text-gray-400 mt-2">
          <span className="text-orange-500 text-xl">. R :</span> Amélioration de
          l&apos;esthétique des liens
        </p>

        <p className="text-xl text-center font-medium text-gray-400">
          Économie d&apos;espace sur les supports limités en caractères
        </p>

        <p className="text-xl text-center font-medium text-gray-400">
          Suivi des clics pour évaluer la popularité ou l&apos;efficacité du
          lien
        </p>
      </div>
      <div className=" bg-white flex flex-col shadow-md rounded h-40 mx-16 my-12 justify-center items-center border border-gray-200">
        <p className="text-xl text-center text-orange-500 font-medium">
          3. Q : Est-ce sécuritaire d&apos;utiliser des liens raccourcis ?
        </p>
        <p className="text-xl text-center font-medium text-gray-400 mt-2">
          <span className="text-orange-500">. R :</span>En général, oui.
          Cependant, soyez conscient que les liens raccourcis peuvent <br />
          masquer la destination réelle, ce qui pourrait être exploité à des
          fins malveillantes. <br /> Utilisez des services comme lienfy pour
          minimiser les risques.
        </p>
      </div>
    </div>
  );
}
