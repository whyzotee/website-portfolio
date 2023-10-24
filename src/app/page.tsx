"use client";

import React, { useState } from "react";
import Image from "next/image";
import Lottie from "lottie-react";
import mouseScrolling from "../assets/animations/mouse_scrolling.json";
import ParticlesEffect from "@/components/particels_effect";

import { motion } from "framer-motion";
import { Accordion, AccordionItem, Chip, Tabs, Tab } from "@nextui-org/react";
import Experience from "@/components/experience";

export default function Home() {
  const [stdImg, setStdImg] = useState("/student-removebg.png");
  const isAlternateImage = stdImg !== "/student-removebg.png";
  const [borderSize, setBorderSize] = useState(false);

  const toggleImage = () => {
    setStdImg(isAlternateImage ? "/student-removebg.png" : "/profile.png");
    setBorderSize(!borderSize);
  };

  const myRoomImg = "/bg_myroom.png";

  let divider01 = `border-${borderSize ? 2 : 4}` + " w-full border-[#1f1f1f]";
  let divider02 = `border-${borderSize ? 4 : 2}` + " w-full border-[#1f1f1f]";

  return (
    <main className="flex min-h-screen bg-[#1f1f1f] flex-col items-center justify-between overflow-x-hidden">
      <ParticlesEffect />
      <div className="relative h-screen w-full  flex bg-[#1f1f1f] items-center justify-center">
        <Image
          fill
          src={myRoomImg}
          alt="profile"
          className="opacity-50 object-cover"
        />
        <div className="absolute h-full w-full bg-gradient-to-b from-transparent from-0% to-[#1f1f1f] to-100%"></div>
        <div className="flex flex-col text-white items-center justify-center z-20">
          <div className="relative">
            <h1 className="text-9xl font-semibold">แฟ้มสะสมผลงาน</h1>
            <h3 className="absolute -top-12 right-0 text-5xl font-semibold">
              ฉัตรนรินทร บุญแสง
            </h3>
          </div>
          <motion.h5
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "anticipate", duration: 1 }}
            className="eng-text text-3xl font-semibold"
          >
            วิศวกรรมคอมพิวเตอร์,&ensp;
            <span className="text-[#F16322]">
              สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
            </span>
          </motion.h5>
        </div>
        <Lottie
          onClick={() => {
            const aboutElement = document.getElementById("about");
            if (aboutElement) {
              aboutElement.scrollIntoView({ behavior: "smooth" });
            }
          }}
          loop={true}
          animationData={mouseScrolling}
          className="absolute flex justify-center items-center cursor-pointer bottom-24"
        />
      </div>

      <div
        id="about"
        className="relative h-screen w-full flex flex-col gap-12 items-center justify-center bg-[#1f1f1f] p-12 text-white"
      >
        <h1 className="text-6xl font-semibold z-20">ประวัติส่วนตัว</h1>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex gap-12 text-xl z-20"
        >
          <div className="w-1/2 flex flex-col justify-center items-end">
            <div className="relative h-80 w-[16.5rem] bg-[#ffdab9]">
              <Image fill src={stdImg} alt="profile" className="object-cover" />
            </div>
            <div className="w-[16.5rem] flex bg-white text-[#1f1f1f] ">
              <div className="w-full flex items-center gap-2 p-2 font-semibold">
                <h1>01</h1>
                <hr className={divider01} />
                <hr className={divider02} />
                <h1>11</h1>
              </div>
              <button
                className="flex bg-[#ffdab9] p-2 font-semibold"
                onClick={toggleImage}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
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
        </motion.div>
        <div className="absolute left-36 top-24">
          <div className="relative w-[805px] h-[500px] opacity-60">
            <Image src="/code1.png" alt="code" fill />
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
      >
        <Experience />
      </motion.div>

      <div className="max-w-7xl w-full m-auto flex flex-col gap-12 bg-[#1f1f1f] py-24">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="w-full flex flex-col gap-12 text-white"
          >
            <h1 className="text-6xl font-semibold">ผลงาน</h1>
            <span>
              &emsp;รวบรวมผลงานและโปรเจคต่างๆที่เกี่ยวข้องกับคอมพิวเตอร์ทั้งหมดที่ทำ
              ทั้งการแข่งขัน ทั้งโปรเจค ทั้งฝึกงาน และ ทำงานจริง
            </span>
            <span>
              &emsp;การเขียนโค้ดภาษาหลักที่ใช้คือ HTML, CSS, JavaScript,
              TypeScript, C++, C#, Dart, Python การตัดต่อคลิปวิดีโอ, การวาดภาพ,
              การทำเอนิเมชั่น, และอื่นๆ
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="w-full flex justify-end"
          >
            <div className="relative w-[38rem] h-[38rem] rounded-2xl bg-white overflow-clip mt-24">
              <Image src="/phone.png" alt="iphone_screenshot" fill />
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
