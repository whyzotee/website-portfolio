import Image from "next/image";
import PerformanceData from "@/app/performace.json";
import { motion } from "framer-motion";
import {
  Button,
  ModalFooter,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Tab,
  Tabs,
  useDisclosure,
} from "@nextui-org/react";
import React, { useState } from "react";

interface BoxPerformanceProps {
  imageSrc: string;
  altText: string;
  title: string;
  codeLang: string;
}

function BoxPerformance({
  imageSrc,
  altText,
  title,
  codeLang,
}: BoxPerformanceProps) {
  return (
    <div className="relative bg-white rounded-xl overflow-clip hover:scale-105">
      <div className="absolute h-80 w-full bg-gradient-to-b from-transparent from-90% to-[#1f1f1f] to-100% opacity-10 z-10"></div>

      <div className="absolute top-0 right-0 z-20 bg-[#1f1f1f] text-white px-4 py-2 m-4 rounded-xl">
        <p>{codeLang}</p>
      </div>

      <div className="relative h-80 w-full">
        <Image
          src={imageSrc}
          alt={altText}
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="p-4 text-center">{title}</div>
    </div>
  );
}

export default function Performance() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="blur"
        size="5xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                UDee เรื่องบ้าน เรื่องงาย
              </ModalHeader>
              <ModalBody>
                <div className="relative h-96 w-full">
                  <Image
                    src="/performance/udee1.jpg"
                    alt="udee1"
                    fill
                    className="object-cover object-center rounded-xl overflow-clip"
                  />
                </div>
                {/* <span>ชื่อโปรเจค : {modalData.project_name}</span> */}
                <span>เกี่ยวกับ : Coding, Application</span>
                <span>
                  เครื่องมือที่ใช้ : Flutter Framework ภาษาคอมพิวเตอร์ Dart
                </span>
                <span>
                  รายละเอียด : โปรเจคของทางบริษัท เปเปอร์เลสจำกัด
                  ที่ทำแอปพลิเคชั่นเกี่ยวกับจากจัดการ ของหมู่บบ้านแต่ละหมู่บ้าน
                  ที่จะมีทั้งลูกบ้านและนิติที่คอยติดต่อกัน
                </span>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" onPress={onClose}>
                  ปิดหน้าต่าง
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <div className="max-w-7xl w-full py-24 z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between pb-36">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="w-full flex flex-col gap-12 text-white"
          >
            <h1 className="text-6xl font-semibold">ผลงาน / ชิ้นงาน</h1>
            <span>
              &emsp;รวบรวมผลงานและชิ้นงานของโปรเจคต่างๆที่เกี่ยวข้องกับคอมพิวเตอร์ทั้งหมดที่ทำ
              ทั้งการแข่งขัน โปรเจคของวิทยาลัย โปรเจคฝึกงาน และทำงานจริง
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
            transition={{ delay: 0.75 }}
            className="w-full flex justify-center lg:justify-end"
          >
            <div className="relative h-72 w-72 sm:h-96 sm:w-96 lg:w-[38rem] lg:h-[38rem] rounded-2xl bg-white overflow-clip mt-24">
              <Image src="/phone.png" alt="iphone_screenshot" fill />
            </div>
          </motion.div>
        </div>
        <Tabs
          size="lg"
          aria-label="Options"
          className="my-12 hidden lg:block w-fit"
        >
          <Tab key="all" title="ทั้งหมด">
            <div className="grid-cols-3 gap-12 hidden lg:grid">
              <button onClick={onOpen}>
                <BoxPerformance
                  imageSrc="/phone.png"
                  altText="udee_logo"
                  title="UDee Application"
                  codeLang="Flutter / Dart"
                />
              </button>
              <BoxPerformance
                imageSrc="/performance/sushidrop_logo.png"
                altText="sushidrop_logo"
                title="SushiDrop Delivery Application"
                codeLang="Flutter / Dart"
              />
              <BoxPerformance
                imageSrc="/performance/linebot.png"
                altText="linebot"
                title="LineBot Stock Check"
                codeLang="Nodejs / JavaScript"
              />
              <BoxPerformance
                imageSrc="/performance/robot.png"
                altText="robot"
                // แข่งขันหุ่นยนต์อัตโนมัติในงานอุตสาหกรรมอาชีวศึกษา ระดับชาติ 2566 อันดับที่ 12 เหรียญเงิน
                title="แข่งขันหุ่นยนต์อัตโนมัติในงานอุตสาหกรรม ระดับชาติ"
                codeLang="Arduino / C++"
              />
              <BoxPerformance
                imageSrc="/performance/microbit.jpg"
                altText="microbit"
                // แข่งทักษะการเขียนโปรแกรมควมคุมอุปกรณ์ ระดับภาคเหนือ อันดับที่ 1 เหรียญทอง
                title="แข่งทักษะการเขียนโปรแกรมควมคุมอุปกรณ์ ระดับภาค"
                codeLang="Mu / Python"
              />
              <BoxPerformance
                imageSrc="/bg_myroom.png"
                altText="myRoom"
                title="Empty Room"
                codeLang="Blender"
              />
              <a
                href="https://www.tiktok.com/@whyzotee/video/7173315105780780289"
                target="_blank"
              >
                <BoxPerformance
                  imageSrc="/performance/animation1.jpg"
                  altText="animation1"
                  title="คลิปโปรโมทแผนกอิเล็กฯ วิทยาลัยเทคนิคเชียงใหม่"
                  codeLang="Video Editor"
                />
              </a>
            </div>
          </Tab>
          <Tab key="work" title="การทำงาน">
            <div className="grid grid-cols-3 gap-12">
              <button onClick={onOpen}>
                <BoxPerformance
                  imageSrc="/phone.png"
                  altText="udee_logo"
                  title="UDee Application"
                  codeLang="Flutter / Dart"
                />
              </button>
            </div>
          </Tab>
          <Tab key="race" title="การแข่งขัน">
            <div className="grid grid-cols-3 gap-12">
              <BoxPerformance
                imageSrc="/performance/robot.png"
                altText="robot"
                // แข่งขันหุ่นยนต์อัตโนมัติในงานอุตสาหกรรมอาชีวศึกษา ระดับชาติ 2566 อันดับที่ 12 เหรียญเงิน
                title="แข่งขันหุ่นยนต์อัตโนมัติในงานอุตสาหกรรม ระดับชาติ"
                codeLang="Arduino / C++"
              />
              <BoxPerformance
                imageSrc="/performance/microbit.jpg"
                altText="microbit"
                // แข่งทักษะการเขียนโปรแกรมควมคุมอุปกรณ์ ระดับภาคเหนือ อันดับที่ 1 เหรียญทอง
                title="แข่งทักษะการเขียนโปรแกรมควมคุมอุปกรณ์ ระดับภาค"
                codeLang="Mu / Python"
              />
            </div>
          </Tab>
          <Tab key="project" title="โปรเจค">
            <div className="grid grid-cols-3 gap-12">
              <BoxPerformance
                imageSrc="/performance/sushidrop_logo.png"
                altText="sushidrop_logo"
                title="SushiDrop Delivery Application"
                codeLang="Flutter / Dart"
              />
              <BoxPerformance
                imageSrc="/performance/linebot.png"
                altText="linebot"
                title="LineBot Stock Check"
                codeLang="Nodejs / JavaScript"
              />
            </div>
          </Tab>

          <Tab key="more" title="อื่นๆ">
            <div className="grid grid-cols-3 gap-12">
              <BoxPerformance
                imageSrc="/bg_myroom.png"
                altText="myRoom"
                title="Empty Room"
                codeLang="Blender"
              />
              <a
                href="https://www.tiktok.com/@whyzotee/video/7173315105780780289"
                target="_blank"
              >
                <BoxPerformance
                  imageSrc="/performance/animation1.jpg"
                  altText="animation1"
                  title="คลิปโปรโมทแผนกอิเล็กฯ วิทยาลัยเทคนิคเชียงใหม่"
                  codeLang="Video Editor"
                />
              </a>
            </div>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}
