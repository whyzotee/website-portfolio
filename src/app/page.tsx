"use client";

import React, { useCallback } from "react";
import Image from "next/image";
import anime from "animejs";
import Lottie from "lottie-react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";

import mouseScrolling from "../assets/animations/mouse_scrolling.json";
import stdImg from "../../public/student-removebg.png";

export default function Home() {
  // React.useEffect(() => {
  //   anime({
  //     targets: ".test",
  //     translateX: 250,
  //   });
  // }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  const myRoomImg = "/bg_myroom.png";
  const cartoonImg = "/profile.png";

  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden">
      <div className="relative h-screen w-screen flex bg-[#1f1f1f] items-center justify-center z-20">
        <Image
          fill
          src={myRoomImg}
          alt="profile"
          objectFit="cover"
          className="opacity-50"
        />
        <div className="absolute h-full w-full bg-gradient-to-b from-transparent from-0% to-[#1f1f1f] to-100%"></div>
        <div className="flex flex-col z-20 text-white text-center">
          {/* <h1 className="test text-9xl font-semibold">PORTFOLIO</h1>
          <h3 className="text-5xl font-semibold">Chatnarint Boonsaeng</h3>
          <h5 className="text-3xl font-semibold">
            Computer Engineering, <span className="text-[#F16322]">KMITL</span>
          </h5> */}

          <div className="relative">
            <h1 className="text-9xl font-semibold">แฟ้มสะสมผลงาน</h1>
            <h3 className="absolute -top-12 right-0 text-5xl font-semibold">
              ฉัตรนรินทร บุญแสง
            </h3>
          </div>
          <h5 className="text-3xl font-semibold">
            วิศวกรรมคอมพิวเตอร์,&ensp;
            <span className="text-[#F16322]">
              สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
            </span>
          </h5>
        </div>
        <div className="absolute items-center bottom-24">
          <Lottie
            onClick={() => console.log("ok")}
            animationData={mouseScrolling}
            className="flex justify-center items-center cursor-pointer"
            loop={true}
          />
        </div>
        <Particles
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fpsLimit: 144,

            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.1,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 30,
              },
              opacity: {
                value: 0.1,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>

      <div className="relative h-screen w-full flex flex-col gap-12 items-center justify-center bg-[#1f1f1f] p-12 text-white">
        <h1 className="text-6xl font-semibold z-20">ประวัติส่วนตัว</h1>
        <div className="flex gap-12 text-xl z-20">
          <div className="w-1/2 flex flex-col justify-center items-end">
            <div className="relative h-80 w-[16.5rem] bg-[#ffdab9]">
              <Image fill src={stdImg} alt="profile" objectFit="cover" />
            </div>
            <div className="w-[16.5rem] flex bg-white text-[#1f1f1f] ">
              <div className="w-full flex items-center gap-2 p-2 font-semibold">
                <h1>01</h1>
                <hr className="border-4 w-full border-[#1f1f1f] " />
                <hr className="border-2 w-full  border-[#1f1f1f]" />
                <h1>02</h1>
              </div>
              <div className="flex bg-[#ffdab9] p-2 font-semibold">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex flex-col gap-2">
            <span>ชื่อ-นามสกุล : ฉัตรนรินทร บุญแสง</span>
            <span>ชื่อเล่น : ตี๋</span>
            <span>วันเกิด-อายุ : 26 ตุลาคม 2546 (19 ปี)</span>
            <span>เพศ : ชาย</span>
            <span>สัญชาติ-เชื้อชาติ : ไทย/จีน</span>
            <span>
              ที่อยู่(ตามทะเบียน) : 342/ช หมู่ 10 ต.เมืองนะ อ.เชียงดาว
              จ.เชียงใหม่ 50120
            </span>
            <span>
              ที่อยู่(ปัจจุบัน) : หอพักสุขสมใจ 61/6 ถ.เวียงบัว ต.ช้างเผือก
              อ.เมือง จ.เชียงใหม่ 50300
            </span>
            <span>งานอดิเรก : เขียนโค้ด ฟังเพลง เล่นเกม นอน</span>
            <span>ความสามารถพิเศษ : พูดให้คนงงได้ครับ</span>
          </div>
        </div>
        <div className="absolute left-36 top-[40%]">
          <div className="relative w-[805px] h-[500px] opacity-60">
            <Image src="/code1.png" alt="code" fill />
          </div>
        </div>
      </div>
      <div className="relative w-full flex flex-col gap-12 items-center justify-center bg-[#1f1f1f] p-24">
        <h1 className="text-6xl font-semibold text-white">ความถนัด</h1>
        <div className="flex">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </main>
  );
}
