import type { NextPage } from "next";
import Layout from "../components/layout/Layout";
import PoslePervojPage from "../components/pages/poslePervoj/PoslePervojPage";

const PoslePervoj: NextPage = () => {
  return (
    <>
      <Layout
        headImg="/img/razbavlenie-samogona-vodoj-posle-pervoj-peregonki.png"
        titlePage="Расчет разбавления самогона водой (после первого перегона)"
        descriptionPage="Поможет подготовить спирт-сырец к дробной перегонке, рассчитать пропорции и разбавить его до приемлемой крепости для производства качественного дистиллята"
        urlSeo="razbavlenie-samogona-vodoj-posle-pervoj-peregonki/"
        title="Калькулятор самогонщика: разбавление самогона водой после первой перегонки"
        description="Калькулятор подскажет, как разбавить спирт-сырец (первый самогон) водой для второго перегона до нужной крепости"
      >
        <PoslePervojPage />
      </Layout>
    </>
  );
};

export default PoslePervoj;
