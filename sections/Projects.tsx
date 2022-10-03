import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import Image from "next/image";

import { debounce } from "../functions/debounce";

const images = [
  "/assets/img/night_in_tokyo.jpg",
  "/assets/img/tokyo.jpg",
  "/assets/img/tokyo-2.jpg",
  "/assets/img/wocsy.png",
  "/assets/img/tokyo-3.jpg",
];

const content = [
  {
    title: "Harbours.io",
    content:
      "Harbours.io is a full SaaS platform specially made for harbours of all sizes. Harbours.io inspects your harbour and creates a full 3D reprisentation on the web. The platform allows harbours to easily manage their memberships, docks, boats, events and much more.",
  },
  {
    title: "Schooldonations",
    content:
      "Schooldonations is a SaaS platform for schools in Europe that allows teachers to ask for funding for projects related to their class through donations.",
  },
  {
    title: "E-commerce",
    content:
      "Tailor made e-commerce sites that match the business' styling and flow. The webshops are scalable and accessable for thousands of users.",
  },
  {
    title: "Wocsy",
    content:
      "Wocsy is a Belgian artist and creates digital art mostly inspired by lobsters. This project required a bold style that represents him as a personallity.",
  },
  {
    title: "Biotechnica",
    content:
      "Biotechnica is a project that I've created to be able to grow bonsai indoors. This system creates the perfect conditions for the tree and automates the whole watering, lighting, temperature and wind process.",
  },
];

export function Projects() {
  const percentage = useMotionValue(100);
  const [isVisible, setVisible] = useState<boolean>(false);
  const [imageIndex, setImageIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const calculatePercentageInView = useCallback(() => {
    if (!imageContainerRef.current) return;

    const fullHeight = window.innerHeight / 2;
    const { top } = imageContainerRef.current.getBoundingClientRect();

    percentage.set(Math.min(Math.abs((top / fullHeight) * 100), 100));
  }, [percentage]);

  const SwitchFrames = useCallback(() => {
    if (!containerRef.current || !imageContainerRef.current) return;
    const windowHeight = window.innerHeight;

    const { height, y } = containerRef.current.getBoundingClientRect();
    const { top } = imageContainerRef.current.getBoundingClientRect();

    if (top === 0) {
      setImageIndex(
        Math.floor(((Math.abs(y) / (height - windowHeight)) * 100) / 20) % 5
      );
    }
  }, []);

  const ScrollPassthrough = useCallback(() => {
    calculatePercentageInView();
    debounce(SwitchFrames(), 300);
  }, [calculatePercentageInView, SwitchFrames]);

  useEffect(() => {
    if (isVisible) {
      window.addEventListener("scroll", ScrollPassthrough);
    } else {
      window.removeEventListener("scroll", ScrollPassthrough);
    }

    return () => window.removeEventListener("scroll", ScrollPassthrough);
  }, [ScrollPassthrough, isVisible]);

  return (
    <div className="h-[500vh]" id="work" ref={containerRef}>
      <motion.div
        className="sticky top-0 flex h-screen w-screen items-center justify-center"
        onViewportEnter={() => setVisible(true)}
        onViewportLeave={() => setVisible(false)}
        ref={imageContainerRef}
        style={{
          padding: percentage,
        }}
      >
        <div className="no-scrollbar relative h-screen w-screen overflow-scroll">
          <AnimatePresence initial={false}>
            <motion.div
              animate={{
                zIndex: "1",
                x: "0%",
              }}
              className="absolute h-full w-full"
              exit={{
                x: "-100%",
              }}
              initial={{
                x: "100%",
              }}
              key={imageIndex}
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
            >
              <Image
                alt="Night in tokyo"
                layout="fill"
                objectFit="cover"
                src={images[imageIndex]}
                priority
              />
              <div className="absolute bottom-0 left-0 w-screen bg-gradient-to-t to-transparent p-5 text-white dark:from-neutral-800">
                <h1 className="mb-5 text-2xl">{content[imageIndex].title}</h1>
                <p>{content[imageIndex].content}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
