import Head from "next/head";
import Image from "next/image";
// local imports
import data from "../data/data.json";

type Data = {
  category: string;
  score: number;
  icon: string;
  bgColor: string;
  color: string;
};

export default function Home() {
  data.forEach((item) => {
    console.log(item.category);
    console.log(item.score);
    console.log(item.icon);
    console.log(item.bgColor);
  });

  return (
    <>
      <Head>
        <title>Results Summary Component</title>
        <meta name="description" content="results-summary" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="font-sans flex min-h-screen flex-col items-center justify-center">
        {/* Result + Summary Container */}
        <div className="flex h-[100vh] w-full flex-col md:h-[50vh] md:w-[80vw] md:max-w-[800px] md:flex-row md:rounded-3xl md:shadow-2xl md:shadow-sky-800/25">
          {/* Result Container */}
          <div className="from-light-slate-blue to-light-royal-blue flex w-full flex-col items-center justify-evenly gap-3 rounded-b-3xl bg-gradient-to-b px-16 py-6 md:max-w-[50%] md:rounded-3xl">
            <h4 className="text-xl font-bold tracking-wide text-slate-300">
              Your Result
            </h4>
            {/* Result Circle */}
            <div className="from-violet-blue to-persian-blue my-5 h-auto w-auto items-center justify-center rounded-full bg-gradient-to-b p-10 px-12 text-center">
              <h1 className="text-6xl font-extrabold tracking-wide text-neutral-white">
                76
              </h1>
              <p className="my-1 text-slate-400">of 100</p>
            </div>
            <h3 className="text-3xl font-bold tracking-wide text-neutral-white">
              Great
            </h3>
            <p className="mb-4 text-center tracking-wider text-slate-400">
              You scored higher that 65% of the people who have taken these
              tests.
            </p>
          </div>
          {/* Summary Container */}
          <div className="flex h-full w-full flex-col gap-8 px-8 py-6 md:gap-4">
            <h4 className="text-xl font-bold tracking-wide">Summary</h4>
            <div className="flex h-6 w-full flex-col gap-6 md:gap-3">
              {data.map((item: Data) => (
                <div
                  key={item.category}
                  className="flex min-h-16 w-full flex-row items-center justify-between rounded-xl px-4"
                  style={{ backgroundColor: item.bgColor }}
                >
                  <div className="flex flex-row gap-3">
                    <Image
                      src={item.icon}
                      width={20}
                      height={20}
                      alt={item.category}
                    />
                    <h4 className="font-semibold" style={{ color: item.color }}>
                      {item.category}
                    </h4>
                  </div>
                  <div className="flex flex-row gap-2">
                    <p className="font-semibold">{item.score}</p>
                    <span className="text-slate-400"> / 100</span>
                  </div>
                </div>
              ))}
              <button className="text hover:from-light-slate-blue hover:to-light-royal-blue mt-2 min-h-16 rounded-full bg-slate-800 align-middle text-xl font-bold tracking-wide text-white hover:bg-gradient-to-b md:mt-4">
                Continue
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
