import Head from "next/head";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Header from "../header/Header";

export default function Layout({
  title,
  description,
  urlSeo,
  headImg,
  titlePage,
  descriptionPage,
  children,
}) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={urlSeo} />
        <meta
          property="og:image"
          content={`https://samogoncalc.ru${headImg}`}
        />
        <meta
          property="og:image:secure_url"
          content={`https://samogoncalc.ru${headImg}`}
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="og:image:alt" content={title} />
        <meta property="og:site_name" content="SamogonCalc" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="SamogonCalc" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Head>
      <Navbar />
      <Header
        headImg={headImg}
        titlePage={titlePage}
        descriptionPage={descriptionPage}
        urlSeo={urlSeo}
      />
      <div className="mx-auto flex flex-row max-w-6xl pt-12 text-lg sm:px-6">
        <div>
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum{" "}
        </div>
        <div>{children}</div>
        <div>
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum{" "}
        </div>
      </div>
      <Footer />
    </>
  );
}
