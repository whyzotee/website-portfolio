"use client";

import React from "react";
import Image from "next/image";
import Lottie from "lottie-react";
import mouseScrolling from "../assets/animations/mouse_scrolling.json";

import { motion } from "framer-motion";
import { Divider } from "@nextui-org/react";

import AboutMe from "@/components/aboutme";
import Experience from "@/components/experience";
import Performance from "@/components/performance";
import ParticlesEffect from "@/components/particels_effect";

export default function Home() {
  const myRoomImg = "/bg_myroom.png";

  return (
    <main className="flex min-h-screen bg-[#1f1f1f] flex-col items-center justify-between overflow-x-hidden">
      <ParticlesEffect />
      <div className="relative h-screen w-full flex items-center justify-center">
        <Image
          fill
          src={myRoomImg}
          alt="profile"
          className="opacity-50 object-cover"
        />
        <div className="absolute h-full w-full bg-gradient-to-b from-transparent from-0% to-[#1f1f1f] to-100%"></div>
        <div className="flex flex-col text-white items-center justify-center z-20">
          <div className="relative">
            <h1 className="text-3xl lg:text-9xl font-semibold">
              แฟ้มสะสมผลงาน
            </h1>
            <h3 className="absolute -top-4 lg:-top-12 right-0 lg:text-5xl font-semibold">
              ฉัตรนรินทร บุญแสง
            </h3>
          </div>
          <motion.h5
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "anticipate", duration: 1 }}
            className="eng-text text-center lg:text-3xl font-semibold"
          >
            วิศวกรรมคอมพิวเตอร์,&ensp;
            <span className="text-[#F16322]">
              สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
            </span>
          </motion.h5>
        </div>
        {/* <Lottie
          onClick={() => {
            const aboutElement = document.getElementById("about");
            if (aboutElement) {
              aboutElement.scrollIntoView({ behavior: "smooth" });
            }
          }}
          loop={true}
          animationData={mouseScrolling}
          className="hidden absolute lg:flex justify-center items-center cursor-pointer bottom-24"
        /> */}
      </div>
      <AboutMe />
      <Experience />
      <Performance />
      <div className="max-w-7xl w-full py-12 z-20">
        <div className="flex flex-col items-end text-white">
          <h1 className="text-6xl font-semibold">
            ทำไมถึงอยากเข้า<span className="text-[#F16322]">สจล.</span>
          </h1>
          <div className="text-xl self-center mt-24">
            <p>
              &emsp;เหตุผลที่เข้าศึกษาต่อคณะวิศวกรรมคอมพิวเตอร์
              ที่สถาบันเทคโนโลยีพระจอมเกล้าคุณทหารลาดกระบัง
              ด้วยสถาบันนี้มีชื่อเสียงปากต่อปาก
              รุ่นสู่รุ่นว่าเป็นสถาบันที่เก่งด้านวิศวกรรมระดับต้นๆของประเทศ
              ผมนั้นสนใจที่จะศึกษาต่อในระดับปริญญาตรีเลย
              เลือกเรียนต่อสถาบันที่ดีที่สุดนั้นเอง
            </p>
            <br />
            <p>
              &emsp;ด้วยปัจจัยหลายๆด้าน เช่น
              ย้ายมาเรียนที่กรุงเทพนั้นเพื่อจะได้อยู่ใกล้คุณแม่
              ที่ทำงานอยู่ภายในกรุงเทพ, เรียนอย่างต่อเนื่อง
              ในประเทศไทยนั้นน้อยมากที่มหาลัยส่วนใหญ่ภายในประเทศจะไม่มีหลักสูตรสำหรับคนที่จบ
              ปวส. เลยทำให้บางคนต้องเรียนใหม่ 4ปี
              ซึ่งผมรู้สึกเสียดายเวลาที่เสียไป
            </p>
            <br />
            <p>
              &emsp;อีกอย่างที่ทำให้ผมอยากเข้าศึกษาต่อ คือ
              อยากลงแข่งขันในรายการต่างๆต่อ ไม่ว่าจะเป็น งาน Hackathon,
              งานแข่งหุ่นยนต์ และอื่นๆที่เกี่ยวข้องกับการเขียนโค้ด หรือ
              อิเล็กทรอนิกส์ เพราะรู้สึกเหมือนเป็นการพิสูจน์ความรู้
              ตัวเองและสนุกกับการแข่งขัน
            </p>
          </div>
        </div>
        <p className="w-fit bg-white rounded-lg py-2 px-4 m-auto mt-64">
          เย็นนี้กินอะไรดี? , © 2023 All Rights Reserved
        </p>
      </div>
    </main>
  );
}
