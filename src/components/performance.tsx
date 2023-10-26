/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
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
  projectName: string;
  about: string;
  tools: string;
  description: string;
  modalImages: string;
}

function BoxPerformance({
  imageSrc,
  altText,
  title,
  codeLang,
  projectName,
  about,
  tools,
  description,
  modalImages,
}: BoxPerformanceProps) {
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
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              <ModalBody>
                <img
                  src={modalImages}
                  alt={`${projectName}_img`}
                  className="object-contain h-96 w-fit m-auto rounded-xl overflow-clip"
                />
                <span>ชื่อโปรเจค : {projectName}</span>
                <span>เกี่ยวกับ : {about}</span>
                <span>เครื่องมือที่ใช้ : {tools}</span>
                <span>รายละเอียด : {description}</span>
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
      <button onClick={onOpen}>
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
      </button>
    </>
  );
}

export default function Performance() {
  return (
    <>
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
        <div className="grid-cols-3 gap-12 hidden lg:grid my-12">
          <BoxPerformance
            imageSrc="/phone.png"
            altText="udee_logo"
            title="UDee Application"
            codeLang="Flutter / Dart"
            projectName="UDee / UDee Niti"
            about="Coding, Application"
            tools="Flutter Framework ภาษาคอมพิวเตอร์ Dart"
            description="โปรเจคของทางบริษัท เปเปอร์เลส จำกัดที่ทำแอปพลิเคชั่นเกี่ยวกับการจัดการ ของหมู่บบ้านแต่ละหมู่บ้านที่จะมีทั้งลูกบ้านและนิติที่คอยติดต่อกันผ่านแอปพลิเคชั่น มีการแจ้งเตือนลูกบ้านเกี่ยวกับพัสดุ และแจ้งปัญหากับนิติได้"
            modalImages="/performance/udee1.jpg"
          />
          <BoxPerformance
            imageSrc="/performance/sushidrop_logo.png"
            altText="sushidrop_logo"
            title="SushiDrop Delivery Application"
            codeLang="Flutter / Dart"
            projectName="SushiDrop"
            about="Coding, Application"
            tools="Flutter Framework ภาษาคอมพิวเตอร์ Dart"
            description="โปรเจคของทางบริษัท เปเปอร์เลส จำกัดที่ทำแอปพลิเคชั่น ที่ให้ทำในช่วงที่กำลังฝึกงานระดับชั้นปวส.1 ระยะเวลา 2 เดือน เป็นแอปพลิเคชั่นสำหรับสั่งอาหารและตรวจสอบ การเดินทางของ Rider แต่เนื่องจากเวลาที่จำกัดจึงไม่สามารถทำฟังก์ชั่นทั้งหมดให้เสร็จได้"
            modalImages="/performance/sushidrop.png"
          />
          <BoxPerformance
            imageSrc="/performance/linebot.png"
            altText="linebot"
            title="LineBot Stock Check"
            codeLang="Nodejs / JavaScript"
            projectName="LineBot Stock Check"
            about="Coding"
            tools="Nodejs ภาษาคอมพิวเตอร์ JavaScript"
            description="โปรเจคของทางหจก.หัวกะทิ วิศวกรรม ที่ให้ทำในช่วงที่กำลังฝึกงานระดับชั้นปวช.3 ระยะเวลา 4 เดือน เป็นการตรวจสอบ Stock ที่ดึงข้อมูลจาก Google Sheet นำมาเสนอบน แอปพลิเคชั่น Line"
            modalImages="/performance/linebot_modal.png"
          />

          <BoxPerformance
            imageSrc="/performance/robot.png"
            altText="robot"
            title="แข่งขันหุ่นยนต์อัตโนมัติในงานอุตสาหกรรม ระดับชาติ"
            codeLang="Arduino / C++"
            projectName="รายการแข่งขันหุ่นยนต์อัตโนมัติในงานอุตสาหกรรม ณ เซียร์รังสิต"
            about="การแข่งขัน, Coding, Robot, Electronic"
            tools="โปรแกรม Vscode ภาษาคอมพิวเตอร์ C++"
            description="การแข่งขันหุ่นยนต์ ABU อาชีวศึกษา ระดับชาติ รอบคัดเลือก หมวดหมู่ แข่งขันหุ่นยนต์อัตโนมัติในงานอุตสาหกรรมอาชีวศึกษา ประจำปี 2566 จบด้วยการเข้ารอบ 16 ทีมสุดท้ายอันดับที่ 12 (เหรียญเงิน)"
            modalImages="/performance/robot1.jpg"
          />
          <BoxPerformance
            imageSrc="/performance/microbit.jpg"
            altText="microbit"
            title="แข่งทักษะการเขียนโปรแกรมควมคุมอุปกรณ์ ระดับภาค"
            codeLang="Mu / Python"
            projectName="รายการแข่งทักษะการเขียนโปรแกรมควมคุมอุปกรณ์ ณ วิทยาลัยเทคนิคเชียงราย"
            about="การแข่งขัน, Coding, MicroController, Electronic"
            tools="โปรแกรม Mu ภาษาคอมพิวเตอร์ Python"
            description="การแข่งทักษะวิชาชีพระดับภาค ภาคเหนือ ครั้งที่ 32 ณ วิทยาลัยเทคนิคเชียงราย เป็นการแข่งทักษะการเขียนโปรแกรมควมคุมอุปกรณ์ ได้อันดับที่ 1 (เหรียญทอง)"
            modalImages="/performance/microbit1.jpeg"
          />
          <BoxPerformance
            imageSrc="/performance/animation1.jpg"
            altText="animation1"
            title="คลิปโปรโมทแผนกอิเล็กฯ วิทยาลัยเทคนิคเชียงใหม่"
            codeLang="Video Editor"
            projectName="คลิปโปรโมทแผนกอิเล็กฯ วิทยาลัยเทคนิคเชียงใหม่"
            about="การประกวดคลิป, Animation, Drawing"
            tools="Davinci Resolve"
            description="แผนกได้จัดการประกวดคลืปโปรโมทแผนกอิเล็กทรอนิกส์ ณ วิทยาลัยเทคนิคเชียงใหม่ เป็นการประกวดคลิปสั้นไม่เกิน 40-60 วินาที บน Platform TikTok"
            modalImages="/performance/animation1.jpg"
          />
        </div>
      </div>
    </>
  );
}
