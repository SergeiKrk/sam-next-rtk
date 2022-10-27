import type { NextPage } from "next";
import Layout from "../components/layout/Layout";
import SaharBragaPage from "../components/pages/saharBraga/SaharBragaPage";

const SaharBraga: NextPage = () => {
  return (
    <>
      <Layout
        headImg="/img/kalkulyator-saharnoj-bragi.png"
        titlePage="Калькулятор браги"
        descriptionPage="Вычисляет крепость сахарной или зерновой браги, потенциальный выход спирта сырца, а также необходимое количество воды для затора, исходя из количества сырья (сахара, зерна, муки или крупы)."
        urlSeo="kalkulyator-saharnoj-bragi/"
        title="Калькулятор выхода спирта сырца (самогона) из браги"
        description="Онлайн калькулятор точно рассчитает крепость зерновой или сахарной браги исходя из заданного количества сырья и объема браги"
      >
        <SaharBragaPage />
      </Layout>
    </>
  );
};

export default SaharBraga;
