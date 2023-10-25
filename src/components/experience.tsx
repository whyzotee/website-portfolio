import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  Button,
  Chip,
  Tabs,
  Tab,
  Tooltip,
} from "@nextui-org/react";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <div className="max-w-7xl w-full py-24">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="flex flex-col gap-12 items-center justify-center"
      >
        <h1 className="text-6xl font-semibold text-white">ประสบการณ์</h1>
        <div className="flex w-full flex-col items-center">
          <Tabs size="lg" aria-label="Options">
            <Tab key="education" title="การศึกษา">
              <br />
              <Accordion
                variant="splitted"
                // defaultExpandedKeys={["1", "2", "3"]}
                defaultExpandedKeys={["3"]}
                className="max-w-7xl w-screen gap-4"
              >
                <AccordionItem
                  key="1"
                  aria-label="secondary education"
                  title="มัธยมศึกษาตอนต้น ณ โรงเรียนโกวิทธำรงเชียงใหม่"
                  subtitle="ปีการศึกษา 2559 - 2562"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-full pr-4 flex flex-col gap-4">
                      <p>
                        &emsp;ผมศึกษาในระดับชั้นมัธยมศึกษาตอนต้นที่
                        โรงเรียนโกวิทธำรงเชียงใหม่
                        โดยเรียนจบที่เกรดเฉลี่ยสะสมทั้งหมด (GPAX) อยู่ที่ 2.32
                        ครับ เป็นช่วงที่ผมไม่ตั้งใจเรียน ทำให้คะแนนออกมาไม่ดี
                        เลยถามกับตัวเองว่าชอบอะไรแน่ๆ
                        หลังจากพี่สาวได้แนะนำสายอาชีพ
                        มีด้านที่เกี่ยวกับคอมพิวเตอร์ด้วยผมจึงลองสมัครไปเรียนต่อที่วิทยาลัยเทคนิคเชียงใหม่
                      </p>
                    </div>
                    <div className="relative h-24 w-24 ">
                      <Image
                        fill
                        src="/kowitt.png"
                        alt="kowitt_logo"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="my-4 flex justify-between">
                    <div className="flex gap-2">
                      <Chip size="md">ม.ต้น</Chip>
                      <Chip size="md">สายสามัญ</Chip>
                      <Chip size="md">GPAX 2.32</Chip>
                    </div>
                    <Tooltip content="คลิกเพื่อแสดงใบปพ.1">
                      <a href="/pdf/SEdu.pdf" target="_blank">
                        <Button className="text-white bg-[#F16322]">
                          ปพ.1
                        </Button>
                      </a>
                    </Tooltip>
                  </div>
                </AccordionItem>
                <AccordionItem
                  key="2"
                  aria-label="high school education"
                  title="ประกาศนียบัตรวิชาชีพ ณ วิทยาลัยเทคนิคเชียงใหม่"
                  subtitle="ปีการศึกษา 2562 - 2565"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-full pr-4 flex flex-col gap-4 ">
                      <p>
                        &emsp;ผมศึกษต่อในระดับชั้นประกาศนียบัตรวิชาชีพที่
                        วิทยาลัยเทคนิคเชียงใหม่ สาขา เทคนิคคอมพิวเตอร์
                        โดยเรียนจบที่เกรดเฉลี่ยสะสมทั้งหมด (GPAX) อยู่ที่ 3.02
                        ครับ
                        ส่วนตัวผมที่ชอบเกี่ยวกับคอมพิวเตอร์อยู่แล้วจึงสามารถเรียนที่นี้ได้อย่างราบรื่น
                        ได้ทำ
                        <a href="#" className="text-red-300">
                          โปรเจคจบคือทำเกมประกอบคอมพิวเตอร์
                        </a>
                        แล้วได้ศึกษาต่อในระดับปวส.ต่อที่นี้
                      </p>
                    </div>
                    <div className="relative h-24 w-24">
                      <Image
                        fill
                        src="/cmtc.png"
                        alt="cmtc_logo"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="my-4 flex justify-between">
                    <div className="flex gap-2">
                      <Chip size="md">ปวช.</Chip>
                      <Chip size="md">สายอาชีพ</Chip>
                      <Chip size="md">GPAX 3.02</Chip>
                      <Chip size="md">อิเล็กทรอนิกส์</Chip>
                      <Chip size="md">เทคนิคคอมพิวเตอร์</Chip>
                    </div>
                    <Tooltip content="คลิกเพื่อแสดงใบรบ.1">
                      <a href="/pdf/VocCert.pdf" target="_blank">
                        <Button className="text-white bg-[#F16322]">
                          รบ.1
                        </Button>
                      </a>
                    </Tooltip>
                  </div>
                </AccordionItem>
                <AccordionItem
                  key="3"
                  aria-label="high school education"
                  title="ประกาศนียบัตรวิชาชีพชั้นสูง ณ วิทยาลัยเทคนิคเชียงใหม่"
                  subtitle="ปีการศึกษา 2566 - 2567 (ยังไม่สำเร็จการศึกษา)"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-full pr-4 flex flex-col gap-4">
                      <p>
                        &emsp;ช่วงศึกษาต่อในสาขาคอมพิวเตอร์ระบบเครือข่าย
                        ระดับชั้น ปวส. เกรดเฉลี่ยสะสมทั้งหมด 4 ภาคเรียน
                        รวมฝึกงาน (GPAX) อยู่ที่ 3.51 ครับ
                        เป็นช่วงนี้ผมได้เรียนในวิชาที่สูงขึ้นจากปวช.
                        แต่ไม่ครบถ้วนเนื่องจากต้องเรียนกับสายม.6
                        ที่ต้องปูพื้นฐานใหม่เลยทำให้อาจารย์ไม่สามารถลงลึกในวิชานั้นๆได้
                      </p>
                    </div>
                    <div className="relative h-24 w-24">
                      <Image
                        fill
                        src="/cmtc.png"
                        alt="cmtc_logo"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="my-4 flex gap-2">
                    <Chip size="md">ปวส.</Chip>
                    <Chip size="md">สายอาชีพ</Chip>
                    <Chip size="md">GPAX 3.51</Chip>
                    <Chip size="md">อิเล็กทรอนิกส์</Chip>
                    <Chip size="md">คอมพิวเตอร์ระบบเครือข่าย</Chip>
                  </div>
                </AccordionItem>
              </Accordion>
            </Tab>
            <Tab key="work" title="การทำงาน">
              <br />
              <Accordion
                variant="splitted"
                defaultExpandedKeys={["3"]}
                className="max-w-7xl w-screen gap-4"
              >
                <AccordionItem
                  key="1"
                  aria-label="intern1"
                  title="Intern @ หจก.หัวกะทิ วิศวกรรม"
                  subtitle="ระยะเวลา ตุลาคม 2021 - กุมภาพันธ์ 2022"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-full pr-4 flex flex-col gap-4">
                      <p>
                        &emsp;ระหว่างที่ผมศึกษาอยู่ชั้นปวช.3
                        และใกล้จะเรียนจบภาคเรียนสุดท้ายคือการฝึกงาน
                        โดยทางอาจารย์ได้แนะนำบริษัทรุ่นพี่ที่จบจากวิทลัย
                        แล้วตั้งบริษัทเกี่ยวกับรับเหมางานวางระบบต่างๆ
                        ผมได้เข้าไปทำโปรเจคให้กับทางบริษัทคือ การสร้างไลน์ Chat
                        Bot เพื่อแก้ไขฐานข้อมูลหรือ Google Sheet
                        โดยพิมพ์คำสั่งผ่านไลน์
                      </p>
                    </div>
                    <div className="relative h-24 w-24">
                      <Image
                        fill
                        src="/hkt.png"
                        alt="hkt_logo"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="my-4 flex gap-2">
                    <Chip size="md">Intern</Chip>
                    <Chip size="md">EV</Chip>
                    <Chip size="md">Electoric</Chip>
                    <Chip size="md">Software Engineer</Chip>
                  </div>
                </AccordionItem>
                <AccordionItem
                  key="2"
                  aria-label="intern2"
                  title="Freelance Front End Website Developer @ Petz World Shop."
                  subtitle="ระยะเวลา ตุลาคม 2022 - ธันวาคม 2022"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-full pr-4 flex flex-col gap-4">
                      <p>
                        &emsp;ระหว่างที่ผมศึกษาอยู่ชั้นปวช.3
                        และกำลังจะขึ้นชั้นปวส.1 หลังจากออกจากงาน Part Time
                        เนื่องจากได้งานที่ร้านขายสัตว์เลี้ยงแห่งนึงชื่อร้าน Petz
                        World ตั้งอยู่ตรงข้ามโรงเรียนวัฒโน
                        ทางผู้จัดการร้านต้องการคนแก้ไขหน้าเว็บไซต์ของทางร้าน
                        ซึ่งทางร้านใช้ WordPress ในการสร้างเว็บ E-Commerce
                        หน้าที่ของผมคือการแก้ไข้ตามงานที่สั่งครับ
                      </p>
                    </div>
                    <div className="relative h-24 w-24">
                      <Image
                        fill
                        src="/petz_world.png"
                        alt="petz_world_logo"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="my-4 flex gap-2">
                    <Chip size="md">WordPress</Chip>
                    <Chip size="md">Freelance</Chip>
                  </div>
                </AccordionItem>
                <AccordionItem
                  key="3"
                  aria-label="intern3"
                  title="Front End Application Developer @ PAPERLESS CO., LTD."
                  subtitle="ระยะเวลา กุมภาพันธ์ 2023 - ปัจจุบัน"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-full pr-4 flex flex-col gap-4">
                      <p>
                        &emsp;ในระดับปวส.1
                        หลังจากจบปีแรกจะมีการฝึกงานภาคฤดูร้อนในช่วงปิดเทอม
                        เป็นระยะเวลา 2 เดือน
                        เพื่อนผมได้แนะนำสถานที่ฝึกงานที่เจอมาจากทาง&ensp;
                        <a
                          href="https://www.facebook.com/Paperlessth"
                          className="text-[#1778F2]"
                          target="_blank"
                        >
                          Facebook
                        </a>
                        &ensp;ผมฝึกงานในตำแหน่ง Front End
                        ทำหน้าตาและฟังก์ชั่นภายในแอปพลิเคชั่นโดยใช้ Flutter
                        ซึ่งเป็น Framework ของทาง Google
                        หลังจากจบฝึกงานทางบริษัทก็จ้างผมทำงานต่อจนถึงปัจจุบัน
                      </p>
                    </div>
                    <div className="relative h-24 w-24">
                      <Image
                        fill
                        src="/ppl.png"
                        alt="ppl_logo"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="my-4 flex gap-2">
                    <Chip size="md">Intern</Chip>
                    <Chip size="md">Freelance</Chip>
                    <Chip size="md">Developer</Chip>
                    <Chip size="md">Application</Chip>
                    <Chip size="md">Flutter</Chip>
                  </div>
                </AccordionItem>
              </Accordion>
            </Tab>
          </Tabs>
        </div>
      </motion.div>
    </div>
  );
}
