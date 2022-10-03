import { useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  height?: string;
}

export function ConfidentialReveal({ children, height }: Props) {
  const [finished, setFinished] = useState<boolean>(false);

  function unhideText() {
    const timeout = setTimeout(() => {
      setFinished(true);
    }, 500);

    return () => clearTimeout(timeout);
  }

  return (
    <>
      <motion.span
        className={clsx(
          "absolute left-0 top-0 z-10 bg-neutral-900 dark:bg-neutral-300",
          height ? height : "h-full"
        )}
        initial={{
          width: "0%",
        }}
        onAnimationComplete={() => setFinished(true)}
        onAnimationStart={() => unhideText()}
        transition={{
          duration: 1,
        }}
        viewport={{ once: true }}
        whileInView={{
          width: ["0%", "100%", "0%"],
          left: ["0%", "0%", "100%"],
        }}
      ></motion.span>
      <span className={clsx(finished ? "opacity-100" : "opacity-0")}>
        {children}
      </span>
    </>
  );
}
