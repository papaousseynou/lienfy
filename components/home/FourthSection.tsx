import Image from "next/image";

export default function FourthSection() {
  return (
    <div className="bg-fourth-color w-auto h-fourth-height">
      <h2 className="text-center text-5xl font-bold py-6 ">
        Ce que disent nos visiteurs
      </h2>
      <br />
      <br />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 py-12">
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
          <div className="">
            <Image
              width={97}
              height={97}
              alt="Cody Fisher"
              src="/images/cody.png"
              className=""
            />
          </div>
          <h3 className="mt-2 font-bold">Cody Fisher</h3>
          <p className="text-gray-600 text-sm mt-4 text-center gap-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore <br /> <br /> Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo con <br /> <br /> Duis aute irure dolor in reprehenderit
            in voluptate velit esse cillum dolore eu fugiat nulla pariatu <br />
            <br />
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id es
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center transform md:-translate-y-12">
          <div className="">
            <Image
              width={97}
              height={97}
              alt="Kristin Watson"
              src="/images/kristin.png"
              className=""
            />
          </div>
          <h3 className="mt-2 font-bold">Kristin Watson</h3>
          <p className="text-gray-600 text-sm mt-4 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore <br /> <br /> Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo con <br /> <br /> Duis aute irure dolor in reprehenderit
            in voluptate velit esse cillum dolore eu fugiat nulla pariatu <br />
            <br />
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id es
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
          <div className="">
            <Image
              width={97}
              height={97}
              alt="Jerome Bell"
              src="/images/jerome.png"
              className=""
            />
          </div>
          <h3 className="mt-2 font-bold">Jerome Bell</h3>
          <p className="text-gray-600 text-sm mt-4 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore <br /> <br /> Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo con <br /> <br /> Duis aute irure dolor in reprehenderit
            in voluptate velit esse cillum dolore eu fugiat nulla pariatu <br />{" "}
            <br />
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id es
          </p>
        </div>
      </div>
    </div>
  );
}
