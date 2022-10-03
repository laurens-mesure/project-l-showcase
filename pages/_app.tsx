import type { AppProps } from "next/app";
import Head from "next/head";

import { Layout } from "../components/Layout";

import "../styles/tailwind.css";

export const sitename =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://projectl.be";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Project L by Laurens Mesure</title>
        <meta content="English" name="language" />
        <meta content="info@projectl.be" name="reply-to" />
        <meta content="Laurens Mesure" name="author" />
        <meta content="#007AFF" name="msapplication-TileColor" />
        <meta content="#007AFF" name="theme-color" />
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getLogoStructuredData()),
          }}
          type="application/ld+json"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getLocalBusinessStructuredData()),
          }}
          type="application/ld+json"
        ></script>
        <meta content="projectl.be" name="apple-mobile-web-app-title" />
        <meta content="projectl.be" name="application-name" />
        <meta
          content="Project L is a web design company that creates unique experiences. Approaching all projects with wonder and curiosity that is fueled by a limitless passion."
          name="description"
        />
        <meta
          content="Project L, Webdesign, design, programming, design, design philosophy, custom made, tailor made, react, react native, react.js, next.js, tailwind, tailwindcss, css, html, django, laravel, graphql, REST, blog, blogging"
          name="keywords"
        />
        <meta content="en_GB" property="og:locale" />
        <meta
          content="Project L is a web design company that creates unique experiences. Approaching all projects with wonder and curiosity that is fueled by a limitless passion."
          property="og:description"
        />
        <meta content="Project L" property="og:site_name" />
        <meta content="Project L by Laurens Mesure" property="og:title" />
        <meta content="website" property="og:type" />
        <meta content="https://projectl.be" property="og:url" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <link
          href="/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link color="#007aff" href="/safari-pinned-tab.svg" rel="mask-icon" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );

  function getLogoStructuredData() {
    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      logo: `${sitename}/assets/img/logo.svg`,
      url: sitename,
    };
  }

  function getLocalBusinessStructuredData() {
    return {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Project L",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Hulhage 5",
        addressLocality: "Deinze",
        addressRegion: "Oost-Vlaanderen",
        postalCode: "9800",
        addressCountry: "BE",
      },
      email: "mailto:info@projectl.be",
      url: "https://projectl.be",
      telephone: "+32470555505",
      hoursAvailable: [
        {
          "@type": "OpeningHoursSpecification",
          opens: "09:00",
          closes: "12:00",
          dayOfWeek: [
            {
              "@type": "DayOfWeek",
              "@id": "http://schema.org/Monday",
              name: "Monday",
            },
            {
              "@type": "DayOfWeek",
              "@id": "http://schema.org/Tuesday",
              name: "Tuesday",
            },
            {
              "@type": "DayOfWeek",
              "@id": "http://schema.org/Wednesday",
              name: "Wednesday",
            },
            {
              "@type": "DayOfWeek",
              "@id": "http://schema.org/Thursday",
              name: "Thursday",
            },
            {
              "@type": "DayOfWeek",
              "@id": "http://schema.org/Friday",
              name: "Friday",
            },
            {
              "@type": "DayOfWeek",
              "@id": "http://schema.org/Saturday",
              name: "Saturday",
            },
            {
              "@type": "DayOfWeek",
              "@id": "http://schema.org/Sunday",
              name: "Sunday",
            },
          ],
        },
        {
          "@type": "OpeningHoursSpecification",
          opens: "13:00",
          closes: "18:00",
          dayOfWeek: [
            {
              "@type": "DayOfWeek",
              "@id": "http://schema.org/Monday",
              name: "Monday",
            },
            {
              "@type": "DayOfWeek",
              "@id": "http://schema.org/Tuesday",
              name: "Tuesday",
            },
            {
              "@type": "DayOfWeek",
              "@id": "http://schema.org/Wednesday",
              name: "Wednesday",
            },
            {
              "@type": "DayOfWeek",
              "@id": "http://schema.org/Thursday",
              name: "Thursday",
            },
            {
              "@type": "DayOfWeek",
              "@id": "http://schema.org/Friday",
              name: "Friday",
            },
          ],
        },
      ],
      priceRange: "$$$$",
    };
  }
}

export default MyApp;
