import Head from "next/head"
import Footer from "../Footer/Footer"
import SamogonCalcLogo from "../../public/img/kalkulyator-samogonshchika.png"

export default function Layout({ title='test title', description='test description', urlSeo='/', Img={SamogonCalcLogo}, children }) {
  return (
    <>
    <Head>
    <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={urlSeo} />
      <meta
        property="og:image"
        content={`https://samogoncalc.ru${Img}`}
      />
      <meta
        property="og:image:secure_url"
        content={`https://samogoncalc.ru${Img}`}
      />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="300" />
      <meta property="og:image:height" content="300" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="SamogonCalc" />
      <meta property="og:locale" content="ru_RU" />
    </Head>
      <div>{children}</div>
      <Footer />
    </>
  )
}