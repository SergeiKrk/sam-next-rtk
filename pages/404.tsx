import type { NextPage } from "next";
import Layout from "../components/layout/Layout";

const Page404: NextPage = () => {
  return (
    <>
      <Layout
        headImg="/img/404.png"
        titlePage="404"
        descriptionPage="Страница не найден"
        urlSeo="404"
        title="404"
        description="Страница не найден"
      ></Layout>
    </>
  );
};

export default Page404;
