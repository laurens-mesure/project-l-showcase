import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
  rotation: string;
}

export function PasteSticker({ children, className, rotation }: Props) {
  return (
    <motion.span
      className={className}
      initial={{ scale: 1.2 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      viewport={{ once: true }}
      whileInView={{ scale: 1, rotate: rotation }}
    >
      {children}
    </motion.span>
  );
}
