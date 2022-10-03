import { ConfidentialReveal } from "./ConfidentialReveal";

export function Footer() {
  return (
    <footer
      className="relative z-10 flex min-h-screen w-full flex-col bg-neutral-300 p-5 px-5 pt-20 dark:bg-neutral-800"
      id="contact"
    >
      <div className="relative mb-24 w-min px-5">
        <ConfidentialReveal>
          <h1 className="py-2 font-nycd text-5xl">Get in touch</h1>
        </ConfidentialReveal>
      </div>

      <div className="ml-auto flex w-full flex-col-reverse justify-between border-t border-white py-5 font-cormorant sm:w-11/12 sm:flex-row lg:text-xl">
        <div className="mb-10">
          <p className="text-xl lg:text-2xl">Socials</p>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/laurens.mesure"
                rel="noreferrer"
                target="_blank"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/LaurensMesure"
                rel="noreferrer"
                target="_blank"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://medium.com/@laurens_mesure"
                rel="noreferrer"
                target="_blank"
              >
                Medium
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/laurensmesure/"
                rel="noreferrer"
                target="_blank"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://github.com/laurens-mesure"
                rel="noreferrer"
                target="_blank"
              >
                Github
              </a>
            </li>
          </ul>
        </div>

        <div className="mb-10">
          <p className="text-xl lg:text-2xl">Business Info</p>
          <p className="mb-2 sm:text-sm md:text-base lg:text-xl">
            Hulhage 5,
            <br />
            9800 Deinze
          </p>
          <p className="text-sm md:text-base lg:text-xl">BE 0735.672.645</p>
        </div>

        <div className="mb-10">
          <p className="text-xl lg:text-2xl">Say Hi!</p>
          <p className="sm:text-sm md:text-base lg:text-xl">
            <a href="mailto:info@projectl.be">info@projectl.be</a>
          </p>
        </div>
      </div>

      <div className="ml-auto mt-auto w-full border-t border-white pt-5 font-cormorant sm:w-4/5">
        <p>Project L by Laurens Mesure</p>
      </div>
    </footer>
  );
}
