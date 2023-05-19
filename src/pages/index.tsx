import Image from "next/image";
import Link from "next/link";
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

  function clickFacebook() {
    console.log("Click!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
  }

  return (
    <main className="max-w-[1920px] m-auto overflow-y-hidden">
      <nav className="p-8 ">
        <Link
          href="/chat"
          className="px-4 py-2 rounded-3xl bg-red-300 text-[#505050]"
        >
          Chat
        </Link>
      </nav>
      <div className="section1 w-full p-24 lg:p-30 2xl:p-52 flex flex-col lg:flex-row items-center justify-center lg:gap-10">
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
              <h1 className="font-bold">Sleep</h1>
              <br />
              <h1>yo yo yo yo yo yo yo</h1>
            </div>
          </div>
          <div className="box2 2xl:mt-10">
            <div className="section2-content text-3xl">
              <h1 className="font-bold">Eat</h1>
              <br />
              <h1>yum yum yum yum yum yum</h1>
            </div>
            <div className="section2-content mt-32 text-3xl">
              <h1 className="font-bold">Play</h1>
              <br />
              <h1>let&#180;goooooooooooooo</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="section3 flex flex-wrap gap-20 px-24 2xl:px-48 py-20">
        <div className="first-row flex-[1] w-fit flex flex-col">
          <div className="bg-[#554A40] mx-auto pt-48 p-8 text-8xl">
            <h1>ABOUT</h1>
            <h1>ME</h1>
          </div>
          <div className=" flex-1 mt-12 text-left text-2xl leading-[3rem]">
            <p>
              &emsp;i studying high vocational computer technology at chiang mai
              technical college and i want to learn new things about code.
              Please tell me about code if i didn&#180;t good enough and nice to
              meet you!😄
            </p>
          </div>
        </div>
        <div className="second-row flex-[1]">
          <img src="/aboutme.png" alt="aboutme" />
        </div>
        <div className="third-row flex-[1]">
          <div className="third-row-content1  text-2xl ">
            <p className="font-bold">Personal Information</p>
            <br />
            <p className="leading-[3rem]">
              Name : Chatanrint Boonsaeng
              <br /> NickName : Tee
              <br /> Age : 19
              <br /> From : Chiang Mai, Thailand
              <br /> Hobby : Sleep😴
            </p>
          </div>
          <div className="third-row-content2 mt-48 text-2xl ">
            <p className="font-bold">whyzotee?</p>
            <br />
            <p className="leading-[3rem]">IDK 😆</p>
          </div>
        </div>
      </div>

      <div className="section4 py-20">
        <div className="section4-header text-center">
          <h1 className="text-8xl">MY WORK</h1>
          <h2 className="text-2xl">Project bra bra bra</h2>
        </div>

        <div className="section4-content px-40 py-10">
          <div className="carousel-1 flex flex-wrap gap-10">
            <div className="card-1 flex flex-col flex-[1]">
              <div className="relative h-72 shadow-lg bg-contain bg-center bg-no-repeat bg-white bg-[url(/sushidrop.png)]">
                <p className="absolute w-fit right-0 px-4 py-1 m-4 text-sm rounded-3xl bg-[#151515]">
                  dart
                </p>
              </div>
              <div className="content flex-grow p-10 bg-white text-[#1E1E1E] leading-8">
                <p className="date-time text-[#1E1E1E] opacity-40">
                  26/10/2546
                </p>
                <h1 className="font-bold">SushiDrop</h1>
                <p>
                  Delivery app project from an internship for a long time in 2
                  months.
                </p>
                <p className="mt-4">yyyyyyyyyy</p>
              </div>
            </div>

            <div className="card-2 flex flex-col flex-[1]">
              <div className="relative h-72 shadow-lg bg-[#2d2e30] bg-contain bg-no-repeat bg-center bg-[url(/linebot.png)]">
                <p className="absolute w-fit right-0 px-4 py-1 m-4 text-sm rounded-3xl bg-[#151515]">
                  javascript
                </p>
              </div>
              <div className="content flex-grow p-10 bg-white text-[#1E1E1E] leading-8">
                <p className="date-time text-[#1E1E1E] opacity-40">
                  26/10/2546
                </p>
                <h1 className="font-bold">LineBot by Nodejs</h1>
                <p>
                  The Line Bot connects to google sheet and performs read/write
                  and edit stock via chat room in the Line application.
                </p>

                <p className="mt-4">yyyyyyyyyy</p>
              </div>
            </div>

            <div className="card-3 flex flex-col flex-[1]">
              <div className="relative h-72 shadow-lg bg-left bg-black bg-no-repeat  bg-[url(/websocket.png)]">
                <p className="absolute w-fit right-0 px-4 py-1 m-4 text-sm rounded-3xl bg-[#151515]">
                  javascript
                </p>
              </div>
              <div className="content flex-grow p-10 shadow-lg bg-white text-[#1E1E1E] leading-8">
                <p className="date-time text-[#1E1E1E] opacity-40">
                  26/10/2546
                </p>
                <h1 className="font-bold">Websocket & REST api</h1>
                <p>
                  Backend for train-to-moon project inspiration from website
                  <a
                    className="text-blue-400 hover:text-blue-500"
                    href="https://drinksonme.live"
                  >
                    &nbsp; drinksonme.live
                  </a>
                  .
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
          <div className="section5-conten-image-png flex px-8 py-12 gap-8 overflow-x-scroll">
            <Image
              src="/logo/flutter_logo.png"
              alt="flutter_logo"
              height={150}
              width={150}
            />
            <Image
              src="/logo/svelte_logo.png"
              alt="svelte_logo"
              height={150}
              width={150}
            />
            <Image
              src="/logo/react_logo.png"
              alt="react_logo"
              height={150}
              width={150}
            />
            <Image
              src="/logo/tailwindcss_logo.png"
              alt="tailwindcss_logo"
              height={150}
              width={150}
            />
          </div>
        </div>
        <div className="relative mt-20 border-[6px] rounded-[61px]">
          <p className="absolute -top-6 left-28 px-8 text-2xl bg-[#0D0C0D]">
            Back End
          </p>
          <div className="section5-conten-image-png flex px-8 py-16 gap-8 overflow-x-scroll">
            <Image
              src="/logo/js_logo.png"
              alt="js_logo"
              height={150}
              width={150}
            />
            <Image
              src="/logo/ts_logo.png"
              alt="ts_logo"
              height={150}
              width={150}
            />
            <Image
              src="/logo/nodejs_logo.png"
              alt="nodejs_logo"
              height={150}
              width={150}
            />
            <Image
              src="/logo/py_logo.png"
              alt="py_logo"
              height={150}
              width={150}
            />
          </div>
        </div>
      </div>

      <div className="section5-content  py-20">
        <div className="h-auto w-[80%] m-auto flex justify-center bg-[#d6c9ba]">
          <img src="/myroom.png" alt="myroom" />
        </div>
        <div className="w-[80%] m-auto mt-8  flex justify-between">
          <div>
            <h1 className="text-7xl 2xl:text-8xl">THANK YOU SO</h1>
            <h1 className="text-8xl 2xl:text-9xl">MUSH</h1>
          </div>
          <div className="contact-logo mt-8 2xl:mt-12">
            <div className="flex justify-end gap-8">
              <a
                href="https://github.com/Z0TEExt"
                className="relative bg-no-repeat h-12 w-12 rounded-full"
              >
                <Image src="/logo/gh_logo.png" alt="gh_logo" fill />
              </a>
              <a
                href="#"
                onClick={clickFacebook}
                className="relative bg-no-repeat h-12 w-12 rounded-full "
              >
                <Image src="/logo/fb_logo.png" alt="fb_logo" fill />
              </a>
              <a
                href="#"
                className="relative bg-no-repeat h-12 w-12 rounded-full bg-white"
              >
                <Image src="/logo/mail.png" alt="mail_logo" fill />
              </a>
            </div>
            <div className="mt-8 text-right text-2xl">
              <p>วันนี้กินอะไรดี?</p>
              <p>whyzotee</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
