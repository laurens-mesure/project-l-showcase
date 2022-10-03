import Image from "next/image";

import { ConfidentialReveal } from "../components/ConfidentialReveal";
import { PasteSticker } from "../components/PasteSticker";

export function About() {
  return (
    <section
      className="isolate mx-auto flex min-h-screen w-[90%] max-w-3xl flex-col p-5"
      id="about"
    >
      <div className="relative left-1/2 mb-10 w-min -translate-x-1/2">
        <ConfidentialReveal>
          <h1 className="py-2 font-nycd text-5xl">About_Me</h1>
        </ConfidentialReveal>
      </div>

      <div className="mb-20 flex h-full w-full flex-shrink-0 flex-grow flex-col">
        <div className="relative">
          <div className="relative m-auto mb-5 block h-[90vw] w-full overflow-hidden rounded-2xl border border-neutral-600 md:h-[60vw] lg:max-h-[50vh]">
            <Image
              alt="Laurens Mesure"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              src="/assets/img/laurens-mesure.png"
            />
          </div>
          <div className="absolute top-0 right-0 flex translate-x-1/2 -translate-y-1/2">
            <PasteSticker rotation="25deg">
              <Image
                alt="Japan sticker"
                height={37}
                src="/assets/img/japanese_sticker.png"
                width={60}
                priority
              />
            </PasteSticker>
          </div>
          <div className="absolute left-0 bottom-10 flex -translate-x-1/3">
            <PasteSticker className="relative" rotation="-15deg">
              <Image
                alt="Black belt sticker"
                height={90}
                src="/assets/img/black_belt_sticker.png"
                width={90}
              />
            </PasteSticker>
          </div>
        </div>
        <div className="relative block h-1/2 w-full flex-shrink-0 flex-grow font-raleway">
          <h3 className="mb-4 font-zen text-2xl">Hi, I&apos;m Laurens</h3>

          <p>
            I&apos;m a Belgian developer, currently I am{" "}
            {new Date().getFullYear() - 2000} years old. I created Project L
            because I wanted to have a creative outlet where I can reach more
            people and promote my services. Since I was a little kid I was
            always playing with computers, phones and programming. Through
            playing with programming and creating over the top projects that I
            could never finish, I learned new and unique skills that allowed me
            to create awesome websites.
          </p>
          <div className="ml-auto flex -translate-y-3 flex-row">
            <PasteSticker className="ml-auto" rotation="45deg">
              <Image
                alt="Basketball sticker"
                height={40}
                src="/assets/img/basketball_sticker.png"
                width={40}
              />
            </PasteSticker>
          </div>
          <p>
            I&apos;m always experimenting with the latest and cutting edge
            technologies. This enables me to try out new creative ways to make a
            project stand out. I&apos;m also interested in hardware and
            automation, for example I created an automated environment that
            enables me to grow a bonsai indoors with optimal conditions.
          </p>
          <div className="flex flex-row py-5">
            <PasteSticker rotation="0deg">
              <Image
                alt="Bonsai sticker"
                height={60}
                src="/assets/img/bonsai_sticker.png"
                width={60}
              />
            </PasteSticker>
          </div>
          <p>
            Alternative styles and cultures are very interesting to me. You can
            observe this through my various hobbies and creative design choices.
            For example, I like to listen to various music artists and styles
            like XXXTentacion, ZillaKami, City Morgue, Nirvana, King Von,
            Charlotte de Witte and much more.
          </p>
          <div className="relative flex flex-row justify-between">
            <PasteSticker className="mt-5" rotation="-20deg">
              <Image
                alt="XXXTentacion"
                className="relative right-0 ml-auto"
                height={95}
                objectFit="contain"
                src="/assets/img/xxxtentacion_sticker.png"
                width={60}
              />
            </PasteSticker>
            <PasteSticker className="block" rotation="12deg">
              <Image
                alt="Zillakami"
                height={90}
                objectFit="contain"
                src="/assets/img/zillakami_sticker.png"
                width={80}
              />
            </PasteSticker>
          </div>
          <p>
            In my free time I like to go to the gym or the cinema, but I also
            follow basketball and occasionally Formula 1. Although, I don&apos;t
            have a lot of free time because I like to work a lot. I&apos;m
            currently trying to learn Japanese on my own which is very hard but
            very rewarding. I like to set{" "}
            <span className="italic">unreachable</span> goals for myself so that
            I can challenge myself everyday and strive for my goals.
          </p>
        </div>
      </div>
    </section>
  );
}
