import type { NextPage } from "next";
import Layout from "../components/layout/Layout";
import SmeshSpirtPage from "../components/pages/smeshSpirt/SmeshSpirtPage";

const PoslePervoj: NextPage = () => {
  return (
    <>
      <Layout
        headImg="/img/kalkulyator-smeshivaniya-spirtov.png"
        titlePage="Смешивание спиртов или самогона"
        descriptionPage="Калькулятор смешивания спиртов разной крепости поможет узнать итоговую крепость по точной формуле"
        urlSeo="kalkulyator-smeshivaniya-spirtov/"
        title="Калькулятор смешивания спиртов (самогона / дистиллята) разной крепости"
        description="Онлайн калькулятор смешивания спиртов (самогона) разной крепости поможет узнать итоговую крепость по точной формуле"
      >
        <SmeshSpirtPage />
      </Layout>
    </>
  );
};

export default PoslePervoj;
