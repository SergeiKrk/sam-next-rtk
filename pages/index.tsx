import type { NextPage } from "next";
import Layout from "../components/layout/Layout";
import HomePage from "../components/pages/home/HomePage";

const Home: NextPage = () => {
  return (
    <>
      <Layout
        headImg="/img/kalkulyator-samogonshchika.png"
        titlePage="Калькулятор самогонщика"
        descriptionPage="Калькулятор винокура и самогонщика: онлайн расчет всех важных параметров"
        urlSeo=""
        title="Калькулятор Самогонщика: Онлайн расчет"
        description="Точные алкогольные онлайн калькуляторы помогут самогонщику рассчитать нужные параметры спирта, дистиллята и браги."
      >
        <HomePage />
      </Layout>
    </>
  );
};

export default Home;
