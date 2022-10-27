import type { NextPage } from "next";
import Layout from "../components/layout/Layout";
import OtborGolovPage from "../components/pages/otborGolov/OtborGolovPage";

const OtborGolov: NextPage = () => {
  return (
    <>
      <Layout
        headImg="/img/kalkulyator-otbor-golov.png"
        titlePage="Расчет отбора голов"
        descriptionPage="Рассчитает объем чистого спирта в полученном дистилляте и объем вредных «голов» в спирте первой перегонки."
        urlSeo="kalkulyator-otbor-golov/"
        title="Калькулятор отбора голов: онлайн расчет сколько отбирать"
        description="Онлайн калькулятор поможет рассчитать объем голов быстро и точно. Для этого нужно ввести следующие значения: Объем спирта-сырца и Крепость перегоняемого самогона."
      >
        <OtborGolovPage />
      </Layout>
    </>
  );
};

export default OtborGolov;
