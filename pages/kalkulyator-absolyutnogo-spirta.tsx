import type { NextPage } from "next";
import Layout from "../components/layout/Layout";
import AbsolyutnijSpirtPage from "../components/pages/absolyutnijSpirt/AbsolyutnijSpirtPage";

const AbsolyutnijSpirt: NextPage = () => {
  return (
    <>
      <Layout
        headImg="/img/kalkulyator-absolyutnogo-spirta.png"
        titlePage="Расчет абсолютного и чистого спирта"
        descriptionPage="Необходимо узнать, сколько абсолютного спирта в спирте сырце или в браге? Я помогу сделать расчет"
        urlSeo="kalkulyator-absolyutnogo-spirta"
        title="Калькулятор абсолютного и чистого спирта"
        description="Онлайн калькулятор точно рассчитает объем абсолютного и чистого спирта в браге или спирте сырце"
      >
        <AbsolyutnijSpirtPage />
      </Layout>
    </>
  );
};

export default AbsolyutnijSpirt;
