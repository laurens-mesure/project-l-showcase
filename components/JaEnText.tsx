import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const JAPANESE =
  "痛み自体は、主な脂肪症のエリートにとって重要です。痛みと痛み時代の痛みは理由によって決して続かない、これらの時代の痛み彼は受け入れられた散文からの不快感を最小限に説明しますか";
const ENGLISH =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolor temporibus consequuntur numquam ratione, dolores tempora harum iste explicabo molestiae ex recusandae soluta enim minima?";

export default function JaEnText() {
  const [isEnglish, setIsEnglish] = useState<boolean>(false);

  const containerVariant = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const variant = {
    hidden: {
      y: "200%",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      y: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
    exit: {
      y: "-200%",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
  };

  return (
    <motion.p
      animate="visible"
      className="relative mb-2"
      onViewportEnter={() => {
        setTimeout(() => {
          setIsEnglish(true);
        }, 500);
      }}
      onViewportLeave={() => {
        setIsEnglish(false);
      }}
      variants={containerVariant}
    >
      {isEnglish ? (
        <span className="absolute top-0 left-0 h-full w-full">
          <AnimatePresence>
            {ENGLISH.split(" ").map((word, index) => (
              <span
                className="inline-block overflow-hidden leading-4"
                // eslint-disable-next-line
                key={word + index}
              >
                <motion.span
                  animate="visible"
                  className="inline-block leading-4"
                  exit="exit"
                  initial="hidden"
                  variants={variant}
                >{`${word}${isEnglish ? "\u00A0" : ""}`}</motion.span>
              </span>
            ))}
          </AnimatePresence>
        </span>
      ) : (
        <span className="absolute top-0 left-0 h-full w-full">
          <AnimatePresence>
            {JAPANESE.split("").map((word, index) => (
              <span
                className="inline-block overflow-hidden leading-4"
                // eslint-disable-next-line
                key={word + index}
              >
                <motion.span
                  animate="visible"
                  className="inline-block leading-4"
                  exit="exit"
                  initial="hidden"
                  variants={variant}
                >{`${word}${isEnglish ? "\u00A0" : ""}`}</motion.span>
              </span>
            ))}
          </AnimatePresence>
        </span>
      )}
    </motion.p>
  );
}
