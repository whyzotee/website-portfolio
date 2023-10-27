import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function AboutMe() {
  const [stdImg, setStdImg] = useState("/student-removebg.png");
  const isAlternateImage = stdImg !== "/student-removebg.png";
  const [borderSize, setBorderSize] = useState(true);

  const toggleImage = () => {
    setStdImg(isAlternateImage ? "/student-removebg.png" : "/profile.png");
    setBorderSize(!borderSize);
  };

  let divider01 = `border-${borderSize ? 2 : 4}` + " w-full border-[#1f1f1f]";
  let divider02 = `border-${borderSize ? 4 : 2}` + " w-full border-[#1f1f1f]";
  return (
    <div
      id="about"
      className="relative h-screen w-full flex flex-col gap-12 items-center justify-center  p-12 text-white "
    >
      <h1 className="text-3xl lg:text-6xl font-semibold z-20">
        ประวัติส่วนตัว
      </h1>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="flex flex-col lg:flex-row items-center gap-12 text-xl z-20"
      >
        <div className="lg:w-1/2 flex flex-col justify-center">
          <div className="relative h-80 w-[16.5rem] m-auto lg:mr-0 bg-[#ffdab9]">
            <Image fill src={stdImg} alt="profile" className="object-cover" />
          </div>
          <div className="w-[16.5rem] flex m-auto lg:mr-0 bg-white text-[#1f1f1f] ">
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
        <div className="lg:w-1/2 flex flex-col gap-2">
          <span>ชื่อ-นามสกุล : ฉัตรนรินทร บุญแสง</span>
          <span>ชื่อเล่น : ตี๋</span>
          <span>วันเกิด-อายุ : 26 ตุลาคม 2546 (19 ปี)</span>
          <span>เพศ : ชาย</span>
          <span>สัญชาติ-เชื้อชาติ : ไทย/จีน</span>
          <span>
            ที่อยู่(ตามทะเบียน) : 342/ช หมู่ 10 ต.เมืองนะ อ.เชียงดาว จ.เชียงใหม่
            50120
          </span>
          <span>
            ที่อยู่(ปัจจุบัน) : หอพักสุขสมใจ 61/6 ถ.เวียงบัว ต.ช้างเผือก อ.เมือง
            จ.เชียงใหม่ 50300
          </span>
          <span>งานอดิเรก : เขียนโค้ด ฟังเพลง เล่นเกม นอน</span>
          <span>ความสามารถพิเศษ : เรียนรู้สิ่งใหม่ๆได้ค่อนข้างไว้ครับ</span>
        </div>
      </motion.div>
      <div className="absolute left-36 top-24">
        <div className="relative w-[805px] h-[500px] opacity-60">
          <Image src="/code1.png" alt="code" fill />
        </div>
      </div>
    </div>
  );
}
