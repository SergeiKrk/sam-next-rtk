import type { NextPage } from "next";
import Layout from "../components/layout/Layout";
import SebestoimSamogonaPage from "../components/pages/sebestoimSamogona/SebestoimSamogonaPage";

const PoslePervoj: NextPage = () => {
  return (
    <>
      <Layout
        headImg="/img/kalkulyator-sebestoimosti-samogona.png"
        titlePage="Расчет себестоимости самогона"
        descriptionPage="Поможет оценить стоимость самогона, если Ваш дистиллят уже готов и вы хотите посчитать его себестоимость"
        urlSeo="kalkulyator-sebestoimosti-samogona/"
        title="Калькулятор себестоимости самогона"
        description="Калькулятор поможет рассчитать онлайн себестоимость уже готового дистиллята, исходя из массы, стоимости сырья и объема готового самогона"
      >
        <SebestoimSamogonaPage />
      </Layout>
    </>
  );
};

export default PoslePervoj;
