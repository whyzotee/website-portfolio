import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("website");

  function getTabButtonClasses(tab: string) {
    const baseClasses =
      "w-full text-xl border-4 border-[#303030] transition-colors";
    const activeClasses = "bg-[#303030] text-white";

    return `${baseClasses} ${activeTab === tab ? activeClasses : ""}`;
  }
  return (
    <>
      <Head>
        <title>whyzotee?</title>
        <meta name="description" content="hello welcome to my profile!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={"overflow-hidden"}>
        <section className="main relative w-full h-auto">
          <Image
            className="top-0 inset-x-0 m-auto bg-blackdot2 pointer-events-none"
            src="/frame2.png"
            alt="frame2"
            width={1920}
            height={1080}
            style={{ height: "auto", maxHeight: "100vh" }}
          />
          <div className="absolute top-1/2 inset-x-0 m-auto max-w-[1920px] h-auto max-h-screen ">
            <div className="absolute flex flex-col p-6 right-[7.5%] -translate-y-1/2 text-[#303030] bg-white border-[#303030] border-[10px]">
              <h1 className="lg:text-5xl xl:text-6xl">
                Make a move,
                <br />
                Make a difference.
              </h1>
              <p className="lg:text-3xl xl:text-4xl text-right mt-4 pr-2">
                whyzotee
              </p>
              <button className="self-end mt-8 mb-4 py-4 px-6 lg:text-xl xl:text-2xl text-white bg-[#303030] rounded-3xl">
                <a href="#">About Me</a>
              </button>
            </div>
          </div>

          <Image
            className="absolute top-0 inset-x-0 m-auto pointer-events-none z-10"
            src="/frame1.png"
            alt="frame1"
            width={1920}
            height={1080}
            style={{ height: "auto", maxHeight: "100vh" }}
          />
          <div className="absolute top-0 inset-x-0 m-auto w-[1920px] h-auto max-h-screen bg-red-300 rotate-[-57deg] text-9xl text-center"></div>
        </section>
        <section className="container lg:w-[80%] mx-auto my-10 text-white">
          <div className="relative mx-12 border-[10px] border-[#303030] bg-white">
            <Image
              className="my-8 m-auto"
              src="/manga_layout.png"
              alt="manga_frame"
              width={1000}
              height={2739}
              style={{ height: "auto", width: "90%" }}
              priority
            />
            <div className="absolute top-0">
              <div className="content01 w-[95%] top-0 inset-x-0 mx-auto my-48 p-10 flex flex-col text-[#303030] bg-white border-[10px] border-[#303030]">
                <h1 className="text-5xl mb-4">About me</h1>
                <p className="ml-24 text-4xl leading-[4.5rem]">
                  I&#180;m Software Development from Chiang Mai, Thailand,
                  studying at Chiang Mai Technical College (CMTC)
                </p>
                <h1 className="text-5xl mt-4 mb-4">Who&#180;s zotee?</h1>
                <p className="ml-24 text-4xl leading-[4rem]">
                  That means &#180;zotee&#180; comes from my nickname, which is
                  Tee. It was a popular nickname among my friends when we were
                  in 11th grade, so I decided to use it as my online name. I
                  didn&#180;t want people to think that &#180;Tee&#180; was too
                  plain, because it&#180;s too short.
                </p>
              </div>

              <div className="content02 w-[95%] top-0 inset-x-0 mx-auto my-48 p-10 flex flex-col text-[#303030] bg-white border-[10px] border-[#303030]">
                <h1 className="text-5xl mb-4">My Work</h1>
                <div className="btn-group w-full h-16 flex text-[#303030]">
                  <button
                    className={getTabButtonClasses("website")}
                    onClick={() => setActiveTab("website")}
                  >
                    Website
                  </button>
                  <button
                    className={getTabButtonClasses("application")}
                    onClick={() => setActiveTab("application")}
                  >
                    Application
                  </button>
                  <button
                    className={getTabButtonClasses("backend")}
                    onClick={() => setActiveTab("backend")}
                  >
                    BackEnd
                  </button>
                  <button
                    className={getTabButtonClasses("project")}
                    onClick={() => setActiveTab("project")}
                  >
                    Project
                  </button>
                </div>
                <div className="mt-4">
                  {activeTab === "website" && (
                    <div className="bg-red-300 p-4 grid grid-cols-3 gap-4">
                      <div className=" bg-yellow-300">1</div>
                      <div className=" bg-green-300">2</div>
                      <div className=" bg-blue-300">3</div>
                      <div className=" bg-green-300">4</div>
                      <div className=" bg-yellow-300">5</div>
                    </div>
                  )}
                  {activeTab === "application" && (
                    <div className="bg-green-300"> 2</div>
                  )}
                  {activeTab === "backend" && (
                    <div className="bg-blue-300"> 3</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
