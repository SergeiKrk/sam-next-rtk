import type { NextPage } from "next";
import Layout from "../components/layout/Layout";
import ZamenyGlyukozojPage from "../components/pages/zamenyGlyukozoj/ZamenyGlyukozojPage";

const Vodka: NextPage = () => {
  return (
    <>
      <Layout
        headImg="/img/kalkulyator-zameny-sahara-glyukozoj.png"
        titlePage="Расчет замены сахара декстрозой (глюкозой)"
        descriptionPage="Определяет насколько меньше потребуется глюкозы, чтобы выход спирта из браги был как с 1 кг обычного сахара"
        urlSeo="kalkulyator-zameny-sahara-glyukozoj/"
        title="Калькулятор замены сахара глюкозой"
        description="Онлайн калькулятор рассчитает насколько меньше потребуется глюкозы, чтобы выход спирта из браги был как из сахара"
      >
        <ZamenyGlyukozojPage />
      </Layout>
    </>
  );
};

export default Vodka;
