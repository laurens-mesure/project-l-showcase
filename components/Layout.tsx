import { Footer } from "./Footer";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <div className="relative flex min-h-screen w-full flex-shrink-0 flex-grow flex-col bg-neutral-100 transition-colors dark:bg-neutral-900 dark:text-white">
      <main className="z-10">{children}</main>
      <Footer />
      <span className="absolute top-0 left-[10%] -z-0 h-full w-px bg-neutral-300 dark:bg-[#2c2c2e] sm:left-[5%]"></span>
      <span className="absolute top-0 left-[90%] -z-0 h-full w-px bg-neutral-300 dark:bg-[#2c2c2e] sm:left-[95%]"></span>
      <span className="absolute top-0 left-1/4 -z-0 hidden h-full w-px bg-neutral-300 dark:bg-[#2c2c2e] md:block"></span>
      <span className="absolute top-0 left-2/4 -z-0 h-full w-px bg-neutral-300 dark:bg-[#2c2c2e]"></span>
      <span className="absolute top-0 left-3/4 -z-0 hidden h-full w-px bg-neutral-300 dark:bg-[#2c2c2e] md:block"></span>
    </div>
  );
};
