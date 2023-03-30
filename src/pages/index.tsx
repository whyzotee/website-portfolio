import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>whyzotee?</title>
        <meta name="description" content="hello welcome to my profile!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="main relative w-full h-auto">
          <Image
            className="  top-0 inset-x-0 m-auto bg-blackdot1 pointer-events-none"
            src="/frame2.png"
            alt="frame2"
            width={1920}
            height={1080}
            style={{ height: "auto", maxHeight: "100vh" }}
          />
          <div className="absolute flex flex-col top-1/2 -translate-y-1/2 right-[7.5%]  p-8 text-[#303030] bg-white border-[#303030] border-[10px]">
            <h1 className="lg:text-5xl xl:text-7xl">
              Make a move,
              <br />
              Make a difference.
            </h1>
            <p className="lg:text-3xl xl:text-5xl text-right mt-4 pr-2">
              whyzotee
            </p>
            <button className="self-end mt-12 mb-4 py-4 px-6 lg:text-xl xl:text-3xl text-white bg-[#303030] rounded-3xl">
              <a href="#">About me</a>
            </button>
          </div>

          <Image
            className="absolute top-0 inset-x-0 m-auto  pointer-events-none z-10"
            src="/frame1.png"
            alt="frame1"
            width={1920}
            height={1080}
            style={{ height: "auto", maxHeight: "100vh" }}
          />
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
            />
            <div className="content01 absolute w-[95%] my-48 inset-x-0 mx-auto top-0 p-10 text-[#303030] bg-white border-[10px] border-[#303030]">
              <h1 className="text-6xl mb-4">who&#180;s zotee?</h1>
              <p className="ml-24 text-4xl leading-[5rem]">
                ...เออคำว่า โซตี๋ มาจากชื่อเล่นของผมที่ชื่อตี๋ครับ
                ที่เป็นฉายาสมัยตอนที่เพื่อนๆล้อกันตอนปวช.1
                เลยนำมาเป็นชื่อในโลกออนไลน์โดยที่ผมไม่อยากให้เรียนว่าตี๋เฉยๆเพราะมันสั้นเกินไปยังไงล่ะ
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="text-white text-center py-2 bg-[#303030]">
        <h1>&copy; 2077 whyzotee.dev</h1>
      </footer>
    </>
  );
}
