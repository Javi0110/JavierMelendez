import type { NextSeoProps } from "next-seo";

const BASE_URL = "https://javiermelendez.dev";
const DEFAULT_TITLE = `Javier J. Melendez De Miranda 🧑🏻‍💻 | Software Engineer`;
const DEFAULT_DESCRIPTION =
    "I'm a Software Engineer with 3 years of experience specialized in full-stack software development that drive real value by harnessing a diverse set of technologies and skills. I'm a strong communicator in both English and Spanish and I always try to cultivate a strong work culture that translates into exceptional products and a thriving work environment. Javascript/Typescript, React, Next.js, SQL/No-SQL, Python, Pyside6, Automation Test, and more.";

/**
 * Default SEO settings. These are the fallbacks if a `NextSeo` component is not
 * found on the page. For all options, @see https://github.com/garmeeh/next-seo
 */
export const DEFAULT_SEO: NextSeoProps = {
  titleTemplate: DEFAULT_TITLE,
  defaultTitle: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  openGraph: {
    url: BASE_URL,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    locale: "en-US",
    images: [
      {
        // OG image paths must include the host in the URL
        url: `${BASE_URL}/images/default-share_.jpeg`,
        width: 1200,
        height: 640,
        alt: "Javier J. Melendez De Miranda",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    handle: "@zimoo354",
    site: "@zimoo354",
    cardType: "summary_large_image",
  },
};
