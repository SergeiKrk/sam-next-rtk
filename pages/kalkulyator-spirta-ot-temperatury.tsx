import type { NextPage } from "next";
import Layout from "../components/layout/Layout";
import PoslePervojPage from "../components/pages/poslePervoj/PoslePervojPage";
import SpirtaTemperPage from "../components/pages/spirtaTemper/SpirtaTemperPage";

const PoslePervoj: NextPage = () => {
  return (
    <>
      <Layout
        headImg="/img/kalkulyator-spirta-ot-temperatury.png"
        titlePage="Коррекция крепости спирта по температуре"
        descriptionPage="Рассчитает реальную крепость самогона (дистиллята) при температуре отличной от 20 °C."
        urlSeo="kalkulyator-spirta-ot-temperatury/"
        title="Калькулятор крепости самогона от температуры - коррекция показаний ареометра"
        description="Онлайн калькулятор поможет скорректировать крепость самогона в зависимости от температуры дистиллята"
      >
        <SpirtaTemperPage />
      </Layout>
    </>
  );
};

export default PoslePervoj;
