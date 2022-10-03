import { useEffect, useRef } from "react";
import Image from "next/image";

import { CarouselCard } from "./CarouselCard";

export function SlidingContainer() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", scrollCarousel);

    return () => window.removeEventListener("scroll", scrollCarousel);
  }, []);

  function scrollCarousel() {
    if (!container.current || !window) return;
    const scrollbyAmount =
      container.current.scrollWidth *
      (container.current?.getBoundingClientRect().top / window.innerHeight);

    container.current.scrollLeft = scrollbyAmount;
  }

  return (
    <div
      className="no-scrollbar flex flex-row justify-between overflow-scroll p-10"
      ref={container}
    >
      <CarouselCard>
        <Image
          alt="Nederland"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          src="/assets/img/nederland.webp"
        />
      </CarouselCard>
      <CarouselCard>
        <Image
          alt="The Vibe"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          src="/assets/img/the_vibe.png"
        />
      </CarouselCard>

      <CarouselCard>
        <div className="h-full w-full bg-[#6e57ff]">
          <div className="relative mx-auto h-full w-[90%]">
            <Image
              alt="The Harbour"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
              src="/assets/img/the_harbour_logo.svg"
            />
          </div>
        </div>
      </CarouselCard>
      <CarouselCard>
        <Image
          alt="Hack the future"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          src="/assets/img/hack_the_future.jpg"
        />
      </CarouselCard>
      <CarouselCard>
        <div className="flex h-full w-full items-center justify-center bg-[#0f212f]">
          <Image
            alt="Nederland"
            height={100}
            src="/assets/img/harbours-logo.png"
            width={100}
          />
        </div>
      </CarouselCard>
    </div>
  );
}
