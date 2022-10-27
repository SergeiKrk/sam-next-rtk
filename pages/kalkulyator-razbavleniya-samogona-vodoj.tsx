import type { NextPage } from "next";
import Layout from "../components/layout/Layout";
import RazbavleniyaSamogonaPage from "../components/pages/razbavleniyaSamogona/RazbavleniyaSamogonaPage";

const RazbavleniyaSamogona: NextPage = () => {
  return (
    <>
      <Layout
        headImg="/img/kalkulyator-razbavleniya-samogona-vodoj.png"
        titlePage="Расчет разбавления самогона водой"
        descriptionPage="Необходимо смешать дистиллят или спирт с водой? Я помогу смешать в нужных пропорциях"
        urlSeo="kalkulyator-razbavleniya-samogona-vodoj/"
        title="Калькулятор разбавления самогона (спирта) водой: Онлайн расчет"
        description="Онлайн калькулятор по точной формуле рассчитает сколько требуется налить воды для получения спирта (самогона) требуемой крепости"
      >
        <RazbavleniyaSamogonaPage />
      </Layout>
    </>
  );
};

export default RazbavleniyaSamogona;
