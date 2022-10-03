import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

export function CarouselCard({ children }: Props) {
  return (
    <motion.div className="relative mr-10 flex h-28 w-3/5 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-neutral-800 shadow-2xl lg:h-40 lg:w-2/5 lg:rounded-3xl">
      {children}
    </motion.div>
  );
}
