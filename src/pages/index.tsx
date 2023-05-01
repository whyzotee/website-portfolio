import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const element = document.querySelector(".section5-conten-image-png");

    element!.addEventListener("wheel", (event: any) => {
      event.preventDefault();

      element!.scrollBy({
        left: event.deltaY < 0 ? -30 : 30,
      });
    });
  });

  return (
    <main className="max-w-[1920px] m-auto overflow-y-hidden">
      <div className="section1 w-full p-24 lg:p-30 2xl:p-48 flex flex-col lg:flex-row items-center justify-center lg:gap-10">
        <div className="py-10 lg:py-24 text-4xl lg:text-7xl 2xl:text-8xl text-center lg:text-left">
          {/* <h1>Make A Move,</h1>
          <h1>Make A Difference</h1> */}
          <h1>Yo และนี้คือเสียง</h1>
          <h1>จากเด็กวัด</h1>
          <br />
          <p className="text-lg lg:text-2xl 2xl:text-3xl">
            &#8220;Hello, There. Hello, World.&#8221;
            <br />
            Welcome to my profile and sorry for bad english.
          </p>
        </div>
        <div className="image relative">
          <Image src="/profile.png" alt="profile" height={500} width={500} />
          <div className="absolute w-40 h-32 sm:w-52 sm:h-48 -top-20 lg:-top-36 right-0 sm:right-8 bg-cover bg-[url(https://www.techhub.in.th/wp-content/uploads/2021/05/118283916_b19c5a1f-162b-410b-8169-f58f0d153752.jpg)]"></div>
          <div className="absolute w-32 h-24 sm:w-52 sm:h-40 -bottom-12 lg:-bottom-24 left-0 sm:left-12 bg-cover bg-[url(https://ae01.alicdn.com/kf/HTB1jZ5gX.zrK1RjSspmq6AOdFXau/Meme-Face-Art-Body-Decor.jpg_Q90.jpg_.webp)]"></div>
        </div>
      </div>

      <div className="section2 py-20">
        <div className="w-[80%] m-auto flex justify-center rounded-3xl bg-white">
          <img
            className="section2-banner"
            src="https://user-images.githubusercontent.com/53619535/207896410-fee92aa4-65f2-4b27-91d3-86f8424178d3.gif"
            alt="banner"
          />
        </div>

        <div className="mx-auto p-24 mt-8 flex justify-around">
          <div className="box1">
            <div className="section2-header text-7xl 2xl:text-8xl">
              <h1>WHAT DO I DO</h1>
              <h1>AT MY JOB</h1>
            </div>
            <div className="section2-content mt-20 text-3xl">
              <h1 className="font-bold">PortfolioPortfolio</h1>
              <br />
              <h1>PortfolioPortfoPortfolioPortfoliolio</h1>
            </div>
          </div>
          <div className="box2 2xl:mt-10">
            <div className="section2-content text-3xl">
              <h1 className="font-bold">PortfolioPortfolio</h1>
              <br />
              <h1>PortfolioPortfoPortfolioPortfoliolio</h1>
            </div>
            <div className="section2-content mt-32 text-3xl">
              <h1 className="font-bold">PortfolioPortfolio</h1>
              <br />
              <h1>PortfolioPortfoPortfolioPortfoliolio</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="section3 grid grid-cols-3 gap-20 px-24 2xl:px-60 py-20">
        <div className="first-row w-fit flex flex-col">
          <div className="bg-[#554A40] pt-48 p-8 text-7xl">
            <h1>ABOUT</h1>
            <h1>ME</h1>
          </div>
          <div className="w-40 mt-12 text-center text-2xl leading-[3rem]">
            <p>
              PortfolioPortfolioPortfolio PortfolioPortfolioPortfolio
              PortfolioPortfolioPortfolio
            </p>
          </div>
        </div>
        <div className="second-row">
          <div className="h-full bg-white"></div>
        </div>
        <div className="third-row ">
          <div className="third-row-content1  text-2xl ">
            <p className="font-bold">PortfolioPortfolio</p>
            <br />
            <p className="leading-[3rem]">
              PortfolioPortfolioPortfolioPortfol
              PortfolioPortfolioPortfolioPortfol
              PortfolioPortfolioPortfolioPortfol
              PortfolioPortfolioPortfolioPortfol
            </p>
          </div>
          <div className="third-row-content2 mt-48 text-2xl ">
            <p className="font-bold">PortfolioPortfolio</p>
            <br />
            <p className="leading-[3rem]">
              PortfolioPortfolioPortfolioPortfol
              PortfolioPortfolioPortfolioPortfol
            </p>
          </div>
        </div>
      </div>

      <div className="section4 py-20">
        <div className="section4-header text-center">
          <h1 className="text-8xl">MY WORK</h1>
          <h2 className="text-2xl">
            PortfolioPortfolioPortfolioPortfolioPortfolioPortfolio
          </h2>
        </div>

        <div className="section4-content px-40 py-10">
          <div className="carousel-1 grid grid-cols-3 gap-10">
            <div className="card-1 ">
              <div className="relative h-72 bg-red-300">
                <p className="absolute w-fit right-0 px-4 py-1 m-4 text-sm rounded-3xl bg-[#151515]">
                  titlebrabra
                </p>
              </div>
              <div className="content p-10 bg-white text-[#1E1E1E] leading-8">
                <p className="date-time text-[#1E1E1E] opacity-40">
                  26/10/2546
                </p>
                <h1 className="font-bold">abcdefghijklmnop</h1>
                <p>
                  xxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxx
                  xxxxxxxxxxxxxxxxxxxxxxx.
                </p>
                <p className="mt-4">yyyyyyyyyy</p>
              </div>
            </div>

            <div className="card-2 ">
              <div className="relative h-72 bg-red-300">
                <p className="absolute w-fit right-0 px-4 py-1 m-4 text-sm rounded-3xl bg-[#151515]">
                  titlebrabra
                </p>
              </div>
              <div className="content p-10 bg-white text-[#1E1E1E] leading-8">
                <p className="date-time text-[#1E1E1E] opacity-40">
                  26/10/2546
                </p>
                <h1 className="font-bold">abcdefghijklmnop</h1>
                <p>
                  xxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxx
                  xxxxxxxxxxxxxxxxxxxxxxx.
                </p>
                <p className="mt-4">yyyyyyyyyy</p>
              </div>
            </div>

            <div className="card-3 ">
              <div className="relative h-72 bg-red-300">
                <p className="absolute w-fit right-0 px-4 py-1 m-4 text-sm rounded-3xl bg-[#151515]">
                  titlebrabra
                </p>
              </div>
              <div className="content p-10 bg-white text-[#1E1E1E] leading-8">
                <p className="date-time text-[#1E1E1E] opacity-40">
                  26/10/2546
                </p>
                <h1 className="font-bold">abcdefghijklmnop</h1>
                <p>
                  xxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxx
                  xxxxxxxxxxxxxxxxxxxxxxx.
                </p>
                <p className="mt-4">yyyyyyyyyy</p>
              </div>
            </div>
          </div>

          <div className="carousel-dot flex justify-center gap-6 mt-8">
            <button className="h-4 w-4 rounded-full bg-[#3D3933]"></button>
            <button className="h-4 w-4 rounded-full bg-[#D9D9D9]"></button>
            <button className="h-4 w-4 rounded-full bg-[#D9D9D9]"></button>
          </div>
        </div>
      </div>

      <div className="section5-content px-40 py-10 text-center">
        <h1 className="text-8xl mb-24">TECH I USE</h1>

        <div className="relative border-[6px] rounded-[61px]">
          <p className="absolute -top-6 left-28 px-8 text-2xl bg-[#0D0C0D]">
            Front End
          </p>
          <div className="section5-conten-image-png px-8 py-16 flex gap-16 overflow-x-scroll">
            <Image src="/profile.png" alt="" height={160} width={160} />
            <Image src="/profile.png" alt="" height={160} width={160} />
            <Image src="/profile.png" alt="" height={160} width={160} />
            <Image src="/profile.png" alt="" height={160} width={160} />
            <Image src="/profile.png" alt="" height={160} width={160} />
            <Image src="/profile.png" alt="" height={160} width={160} />
            <Image src="/profile.png" alt="" height={160} width={160} />
            <Image src="/favicon.ico" alt="" height={160} width={160} />
          </div>
        </div>
        <div className="relative mt-20 border-[6px] rounded-[61px]">
          <p className="absolute -top-6 left-28 px-8 text-2xl bg-[#0D0C0D]">
            Back End
          </p>
          <div className="section5-conten-image-png  px-8 py-16 flex gap-16 overflow-x-scroll">
            <Image src="/profile.png" alt="" height={160} width={160} />
            <Image src="/profile.png" alt="" height={160} width={160} />
            <Image src="/profile.png" alt="" height={160} width={160} />
            <Image src="/profile.png" alt="" height={160} width={160} />
            <Image src="/profile.png" alt="" height={160} width={160} />
            <Image src="/profile.png" alt="" height={160} width={160} />
            <Image src="/profile.png" alt="" height={160} width={160} />
            <Image src="/profile.png" alt="" height={160} width={160} />
            <Image src="/profile.png" alt="" height={160} width={160} />
          </div>
        </div>
      </div>

      <div className="section5-content  py-20">
        <div className="h-[500px] w-[80%] m-auto bg-red-300"></div>
        <div className="w-[80%] m-auto mt-8  flex justify-between">
          <div>
            <h1 className="text-7xl 2xl:text-8xl">THANK YOU SO</h1>
            <h1 className="text-8xl 2xl:text-9xl">MUSH</h1>
          </div>
          <div className="contact-logo mt-8 2xl:mt-12">
            <div className="flex justify-end gap-8">
              <div className="h-12 w-12 rounded-full bg-[#D9D9D9]"></div>
              <div className="h-12 w-12 rounded-full bg-[#D9D9D9]"></div>
              <div className="h-12 w-12 rounded-full bg-[#D9D9D9]"></div>
            </div>
            <div className="mt-8 text-right text-2xl">
              <p>PortfolioPortfolioPortfolioPortfolio</p>
              <p>PortfolioPortfolio</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
