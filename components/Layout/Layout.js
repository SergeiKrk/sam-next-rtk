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

      {urlSeo === "" ? (
        <div>{children}</div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mx-auto max-w-[1400px] pt-12 text-lg sm:px-6">
          <div className="px-4 mt-6">
            l o r e m i p s u m l o r e ml o r e m i p s u m l o r e ml o r e m
            i p s u m l o r e ml o r e m i p s u m l o r e ml o r e m i p s u m
            l o r e ml o r e m i p s u m l o r e ml o r e m i p s u m l o r e ml
            o r e m i p s u m l o r e ml o r e m i p s u m l o r e m
          </div>
          <div className="px-4 col-span-2">{children}</div>
          <div className="px-4 mt-6">
            <p className="sticky top-16">
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum
            </p>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
