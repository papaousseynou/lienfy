import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function liens() {
  const [showShareOptions, setShowShareOptions] = useState(false);

  const toggleShareOptions = () => {
    setShowShareOptions(!showShareOptions);
  };
  return (
    <div
      className="h-screen w-full flex bg-no-repeat bg-cover bg-center bg-opacity-65 bg-bleu-nav"
      style={{
        backgroundImage: "url('/images/section1.png')",
        backgroundColor: "",
      }}
    >
      <div className="bg-white my-24 w-full h-lien-height mt-52">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-3xl my-4 font-semibold">
            Lien<span className="text-orange-400">fy</span>
          </h2>
          <h2 className="mb-6 text-md" style={{ color: "#6D6D6D" }}>
            Lienfy est le raccourcisseur d&apos;url panafricain le plus simple.
          </h2>
        </div>
        <div className="mx-8">
          <h3 className="text-xl mx-4">Entrer le lien à raccourcir</h3>
          <div
            className="bg-white shadow-md rounded-lg border border-gray-200 flex flex-row justify-between space-y-6"
            style={{
              width: "Fixed (1,237px)",
              height: "92px",
            }}
          >
            <input
              type="text"
              placeholder="https : // aefrduje458gfghgjGJKfvv7azeegbk;ckbldjdtkgllgl"
              className="mt-6 text-xl justify-center border-none"
              style={{
                width: "472px",
                height: "40px",
                marginLeft: "16px",
                marginRight: "16px",
              }}
            />
            <Button
              style={{
                width: "132px",
                height: "47px",
                marginLeft: "16px",
                marginRight: "16px",
                justifyContent: "center",
              }}
            >
              Raccourcir
            </Button>
          </div>
        </div>

        <div className="mx-8 my-20">
          <h3 className="text-xl font-medium mx-4">Liens raccourcis</h3>
          <div
            className="bg-white shadow-md rounded-lg border border-gray-200"
            style={{ width: "Fixed (1,237px)", height: "136px" }}
          >
            <div className="flex flex-row mt-2 justify-between mx-4">
              <div className="">
                <h1 className="text-gray-500 text-lg">
                  Lienfy est le raccourcisseur d&apos;url panafricain le plus
                  simple.
                </h1>
              </div>
              <div className="flex flex-row gap-2 mt-1">
                <span
                  className="border border-gray-500 rounded-lg text-center m-auto"
                  style={{
                    width: "132px",
                    height: "22px",
                    borderColor: "#6D6D6D",
                    color: "#6D6D6D",
                  }}
                >
                  07/02/2024
                </span>
                <span
                  className="border rounded-lg text-center m-auto"
                  style={{
                    width: "85px",
                    height: "22px",
                    borderColor: "#6D6D6D",
                    color: "#6D6D6D",
                  }}
                >
                  13H : 00
                </span>
              </div>
            </div>
            <div
              className="divide-y-5 border border-1 mt-2 mx-4"
              style={{ borderColor: "#C7C7C7" }}
            ></div>
            <div className="flex flex-row mt-2 mx-4 justify-between">
              <div className="flex flex-row gap-3">
                <h2 className="text-xl font-medium">
                  https : // aefrduje458gfghgjGJKfvv7azeegbk;ckbldjdtkgllgl:
                </h2>
                <h2 className="text-2xl  text-orange-600">
                  (https : // lienfy.com/jofbd1/)
                </h2>
              </div>
              <div className="flex flex-row">
                <h2 className="text-gray-500 text-lg">Nombre de click :</h2>
                <h2 className="text-orange-500 text-lg">1</h2>
              </div>
            </div>
            <div className="flex flex-row justify-end gap-3 mx-4">
              {/* icon copy */}
              <button onClick={() => {}}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-7 h-7 text-orange-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375ZM6 12a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V12Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM6 15a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V15Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM6 18a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V18Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {/* icon partage  */}

              <button onClick={toggleShareOptions}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-7 h-7 text-orange-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {showShareOptions && (
                <div className="flex gap-3">
                  <button onClick={() => {}}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-7 h-7"
                    >
                      <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                    </svg>
                  </button>
                  <button onClick={() => {}}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="w-7 h-7"
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </button>
                  <button onClick={() => {}}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-7 h-7"
                    >
                      <path
                        fill="#74C0FC"
                        d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
