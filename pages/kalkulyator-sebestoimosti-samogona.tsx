import type { NextPage } from "next";
import Layout from "../components/layout/Layout";
import SebestoimApproxPage from "../components/pages/sebestoimApprox/SebestoimApproxPage";

const SebestoimApprox: NextPage = () => {
  return (
    <>
      <Layout
        headImg="/img/kalkulyator-sebestoimosti-samogona.png"
        titlePage="Расчет стоимости будущего самогона"
        descriptionPage="Калькулятор поможет рассчитать примерную стоимость сахарного и зернового дистиллята, исходя из массы и стоимости сырья"
        urlSeo="kalkulyator-sebestoimosti-samogona/"
        title="Калькулятор стоимости самогона (сахарного и зернового)"
        description="Калькулятор поможет рассчитать онлайн стоимость будущего сахарного и зернового дистиллята (самогона), исходя из массы и стоимости сырья."
      >
        <SebestoimApproxPage />
      </Layout>
    </>
  );
};

export default SebestoimApprox;
