import type { NextPage } from "next";
import Layout from "../components/layout/Layout";
import VodkaPage from "../components/pages/vodka/VodkaPage";

const Vodka: NextPage = () => {
  return (
    <>
      <Layout
        headImg="/img/kalkulyator-vodki-iz-spirta.png"
        titlePage="Калькулятор водки из спирта"
        descriptionPage="Поможет подобрать пропорции и разбавить спирт или самогон водой до 40 градусов"
        urlSeo="kalkulyator-vodki-iz-spirta/"
        title="Как разбавить самогон водой до 40 градусов: онлайн калькулятор"
        description="Онлайн калькулятор водки из спирта поможет подобрать пропорции и разбавить спирт или самогон водой до 40 градусов"
      >
        <VodkaPage />
      </Layout>
    </>
  );
};

export default Vodka;
