import { motion, useScroll, useSpring } from "framer-motion";
import { useState, useEffect } from "react";

export default function ScrollProgress() {
  const [activeBTN, setActiveBTN] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  useEffect(() => {
    setActiveBTN(scrollYProgress.get() >= 0.02);
    console.log(scrollYProgress.get());
    console.log("test");
  }, [scrollYProgress]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: activeBTN ? 1 : 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "0",
          zIndex: 2,
          cursor: "pointer",
        }}
      >
        <svg
          width="75"
          height="75"
          viewBox="0 0 100 100"
          className="rotate-90 pointer-events-none"
        >
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            stroke="#303030"
            strokeWidth="5%"
            fill="transparent"
            pathLength="1"
            className="indicator"
            style={{ pathLength: scaleX }}
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="4"
          stroke="#303030"
          className="w-6 h-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 pointer-events-none"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
          />
        </svg>
      </motion.div>
    </>
  );
}
