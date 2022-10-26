import type { NextPage } from "next";
import Layout from "../components/layout/Layout";
import DrobnayaPeregonkaPage from "../components/pages/drobnayaPeregonka/DrobnayaPeregonkaPage";

const DrobnayaPeregonka: NextPage = () => {
  return (
    <>
      <Layout
        headImg="/img/kalkulyator-drobnoj-peregonki.png"
        titlePage="Калькулятор дробной перегонки спирта-сырца"
        descriptionPage="Хотите начать дробную перегонку? Я помогу отобрать головы и хвосты!"
        urlSeo="kalkulyator-absolyutnogo-spirta"
        title="Калькулятор дробной (второй) перегонки спирта-сырца: Онлайн расчет"
        description="Онлайн калькулятор быстро и точно рассчитает параметры дробной (второй) перегонки, подскажет как развести самогон (дистиллят) водой. Поможет рассчитать объем хвостов и голов."
      >
        <DrobnayaPeregonkaPage />
      </Layout>
    </>
  );
};

export default DrobnayaPeregonka;
