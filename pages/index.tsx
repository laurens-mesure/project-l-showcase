import type { NextPage } from "next";

import { ConfidentialReveal } from "../components/ConfidentialReveal";
import Nav from "../components/Nav/Nav";
import { RgbArrow } from "../components/RgbArrow";
import { SlidingContainer } from "../components/SlidingCarousel/SlidingContainer";
import { About } from "../sections/About";
import { Articles } from "../sections/Articles";
import { Projects } from "../sections/Projects";

const Home: NextPage = () => {
  return (
    <>
      <section className="relative flex h-screen flex-col pb-20">
        <Nav />
        <div className="absolute left-1/2 mt-80 flex min-h-screen w-2/3 -translate-x-1/2 transform flex-col pb-20 md:mt-64 md:w-1/2 lg:mt-80 lg:w-auto">
          <h1 className="relative text-center font-nycd text-6xl lg:text-8xl xl:text-9xl">
            <ConfidentialReveal>
              <strong className="text-primary">Project</strong> L
            </ConfidentialReveal>
          </h1>
          <h2 className="relative ml-auto font-cormorant italic md:text-2xl">
            <ConfidentialReveal>
              By <strong className="font-normal">Laurens Mesure</strong>
            </ConfidentialReveal>
          </h2>
        </div>
        <div className="relative right-[5%] ml-auto mt-auto w-2/3 text-right md:w-1/2 lg:mt-80 lg:w-1/3 2xl:w-1/4">
          <p className="mb-5">
            Creative web developer intrigued by alternative styles and cultures.
            I create unique experiences with the latest technologies and design
            methods. From web applications to full scale online platforms as
            SaaS products.
          </p>
          <span className="ml-auto mb-3 block h-0.5 w-1/4 bg-primary"></span>
          <span className="ml-auto mr-10 block h-0.5 w-1/3 bg-primary"></span>
        </div>
      </section>

      <About />

      <section className="mb-10">
        <div className="relative right-[5%] ml-auto mb-10 w-min px-5">
          <ConfidentialReveal>
            <h1 className="py-2 font-nycd text-5xl">Events</h1>
          </ConfidentialReveal>
        </div>
        <SlidingContainer />
      </section>

      <Articles />

      <div className="relative h-20 translate-y-10 rounded-br-[40px] rounded-bl-[40px] bg-gradient-to-t from-white via-white to-transparent dark:from-neutral-900 dark:via-neutral-900"></div>
      <section className="bg-neutral-300 pt-10 dark:bg-neutral-800">
        <div className="relative mb-5 flex flex-row justify-center">
          <div className="h-20 w-20 shrink-0 grow-0 bg-white dark:bg-neutral-900">
            <div className="h-full w-full rounded-tr-[40px] bg-neutral-300 dark:bg-neutral-800"></div>
          </div>
          <div className="flex h-20 w-28 shrink-0 grow-0 -translate-y-2 items-center justify-center rounded-br-[40px] rounded-bl-[40px] bg-white dark:bg-neutral-900">
            <RgbArrow />
          </div>
          <div className="h-20 w-20 shrink-0 grow-0 bg-white dark:bg-neutral-900">
            <div className="h-full w-full rounded-tl-[40px] bg-neutral-300 dark:bg-neutral-800"></div>
          </div>
        </div>

        <Projects />
      </section>
    </>
  );
};

export default Home;
