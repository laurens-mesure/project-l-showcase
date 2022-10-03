import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { ConfidentialReveal } from "../components/ConfidentialReveal";
export function Articles() {
  return (
    <section className="mx-auto mb-36 max-w-[1800px] pt-10 ">
      <div className="relative left-[5%] mb-10 w-min px-5">
        <ConfidentialReveal>
          <h1 className="py-2 font-nycd text-5xl">Articles</h1>
        </ConfidentialReveal>
      </div>
      <div className="mx-auto mb-10 w-[90%] auto-rows-fr grid-cols-7 gap-5 px-5 lg:grid lg:min-h-[120vh]">
        <motion.article
          className="relative mx-auto mb-20 flex max-w-xl overflow-hidden rounded-md bg-gray-100 shadow-lg dark:bg-neutral-800 lg:col-start-1 lg:col-end-5 lg:row-start-1 lg:row-end-3 "
          initial={{ opacity: 0, y: 200 }}
          transition={{
            duration: 0.8,
          }}
          viewport={{ once: true }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
        >
          <Link
            href="https://medium.com/@laurens_mesure/how-i-saved-9000-in-hosting-on-aws-how-to-set-up-laravel-on-aws-433a9835a042"
            target="_blank"
          >
            <a className="flex h-full w-full shrink-0 grow-0 flex-col lg:flex-row">
              <div className="relative h-40 w-full flex-shrink-0 flex-grow-0 overflow-hidden lg:h-full lg:w-1/3">
                <Image
                  alt="tokyo"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="45%"
                  src="/assets/img/aws.png"
                  priority
                />
              </div>
              <div className="h-full w-full flex-grow p-5">
                <h2 className="relative mb-3 text-ellipsis font-raleway font-semibold uppercase text-blue-500">
                  How I saved $9000 in hosting on AWS — how to set up Laravel on
                  AWS
                </h2>
                <p className="overflow-hidden text-clip font-normal">
                  This article will tell you how we at Harbours.io managed to
                  save $9000 in monthly costs on Amazon Web Services...
                </p>
              </div>
            </a>
          </Link>
        </motion.article>
        <motion.article
          className="relative mx-auto mb-20 h-full w-full max-w-xl lg:col-start-1 lg:col-end-4 lg:row-start-4 lg:row-end-6 lg:pl-20 lg:pr-10"
          initial={{ opacity: 0, y: 200 }}
          transition={{
            duration: 0.8,
          }}
          viewport={{ once: true }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
        >
          <Link
            href="https://medium.com/@laurens_mesure/should-you-host-next-js-yourself-cb542e406f88"
            target="_blank"
          >
            <a className="flex h-full w-full">
              <div className="shadow-300 pb-200ark:bg-neutral-800 relative flex h-full w-full flex-col overflow-hidden rounded-md bg-gray-100 shadow-lg dark:bg-neutral-800">
                <div className="relative h-40 shrink-0 grow lg:h-1/2">
                  <Image
                    alt="tokyo"
                    layout="fill"
                    objectFit="cover"
                    src="/assets/img/next_js.png"
                    priority
                  />
                </div>
                <div className="overflow-hidden p-5">
                  <h2 className="mb-3 truncate font-raleway font-semibold uppercase text-blue-500">
                    Should you host Next.js yourself?
                  </h2>
                  <p className="h-full overflow-hidden text-clip">
                    Next.js is a wrapper of the React.js library. It enables
                    React-based web applications to be run server-side and
                    generate static websites.
                  </p>
                </div>
              </div>
            </a>
          </Link>
        </motion.article>
        <motion.article
          className="relative mx-auto mb-20 max-w-xl lg:col-start-5 lg:col-end-8 lg:row-start-2 lg:row-end-4 lg:mb-0 lg:max-w-full lg:pl-10"
          initial={{ opacity: 0, y: 200 }}
          transition={{
            duration: 0.8,
          }}
          viewport={{ once: true }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
        >
          <Link
            href="https://medium.com/@laurens_mesure/why-do-most-onboarding-flows-suck-23592d827218"
            target="_blank"
          >
            <a className="flex h-full w-full">
              <div className="flex h-full w-full flex-col rounded-md bg-gray-100 shadow-lg dark:bg-neutral-800">
                <div className="relative h-40 w-full flex-shrink-0 flex-grow-0 overflow-hidden lg:h-1/2">
                  <Image
                    alt="tokyo"
                    layout="fill"
                    objectFit="cover"
                    src="/assets/img/onboarding.png"
                    priority
                  />
                </div>
                <div className="p-5">
                  <h2 className="mb-3 truncate font-raleway font-semibold uppercase text-blue-500">
                    Why do most onboarding flows suck?
                  </h2>
                  <p>
                    An onboarding flow can help a user find their way through
                    your app or web app and guide them through the entire
                    working process...
                  </p>
                </div>
              </div>
            </a>
          </Link>
        </motion.article>
        <motion.article
          className="shadow-300 relative mx-auto mb-20 h-full w-full max-w-xl overflow-hidden rounded-md bg-gray-100 shadow-lg dark:bg-neutral-800 lg:col-start-5 lg:col-end-8 lg:row-start-5 lg:row-end-[8]"
          initial={{ opacity: 0, y: 200 }}
          transition={{
            duration: 0.8,
          }}
          viewport={{ once: true }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
        >
          <Link
            href="https://medium.com/@laurens_mesure/design-by-subtraction-an-adaptation-series-for-the-web-62bdec6043f7"
            target="_blank"
          >
            <a className="relative flex h-full w-full shrink-0 grow">
              <div className="h-full w-full">
                <div className="relative h-40 shrink-0 grow lg:h-1/2">
                  <Image
                    alt="tokyo"
                    layout="fill"
                    objectFit="cover"
                    src="/assets/img/design_by_subtraction.png"
                    priority
                  />
                </div>
                <div className="overflow-hidden p-5">
                  <h2 className="mb-3 truncate font-raleway font-semibold uppercase text-blue-500">
                    Design by subtraction: An adaptation series for the web
                  </h2>
                  <p className="h-full overflow-hidden text-clip">
                    Minimalistic design is the hot new trend right now, and
                    it&apos;s probably here to stay for a while longer...
                  </p>
                </div>
              </div>
            </a>
          </Link>
        </motion.article>
        <motion.article
          className="shadow-300 relative mx-auto flex h-full w-full max-w-xl grow-0 flex-col rounded-md bg-gray-100 shadow-lg dark:bg-neutral-800 lg:col-start-1 lg:col-end-4 lg:row-start-7 lg:row-end-[9] lg:flex-row"
          initial={{ opacity: 0, y: 200 }}
          transition={{
            duration: 0.8,
          }}
          viewport={{ once: true }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
        >
          <Link
            href="https://medium.com/@laurens_mesure/the-power-of-invisible-choices-a-gmtk-adaptation-for-the-web-8dff6acc5b7b"
            target="_blank"
          >
            <a className="flex h-full w-full shrink-0 grow-0 flex-col lg:flex-row">
              <div className="relative h-40 w-full shrink-0 grow lg:h-full lg:w-2/5">
                <Image
                  alt="tokyo"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="50%"
                  src="/assets/img/invisible_choices.png"
                  priority
                />
              </div>
              <div className="overflow-hidden p-5">
                <h2 className="mb-3 truncate font-raleway font-semibold uppercase text-blue-500">
                  The Power of invisible choices: a GMTK adaptation for the web
                </h2>
                <p className="h-full overflow-hidden text-clip">
                  Invisible choices have a lot of impact and can drastically
                  improve the user experience. It&apos;s a powerful tool that
                  can improve the site...
                </p>
              </div>
            </a>
          </Link>
        </motion.article>
      </div>
    </section>
  );
}
