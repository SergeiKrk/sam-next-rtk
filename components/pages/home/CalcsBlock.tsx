import React from "react";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import PropTypes from "prop-types";

function CalcsBlock() {
  const calcsData = [
    {
      href: "kalkulyator-razbavleniya-samogona-vodoj/",
      img: "/img/kalkulyator-razbavleniya-samogona-vodoj.png",
      title: "Калькулятор разбавления самогона водой",
      description:
        "Поможет рассчитать и смешать дистиллят с водой в нужных пропорциях",
    },
    {
      href: "kalkulyator-otbor-golov/",
      img: "/img/kalkulyator-otbor-golov.png",
      title: "Калькулятор отбор голов",
      description:
        "Рассчитает объем вредных «голов» и объем чистого спирта в полученном дистилляте",
    },
    {
      href: "kalkulyator-drobnoj-peregonki/",
      img: "/img/kalkulyator-drobnoj-peregonki.png",
      title: "Калькулятор дробной перегонки спирта-сырца",
      description:
        "Поможет отобрать «голов» и «хвосты» в процессе дробной перегонки",
    },
    {
      href: "razbavlenie-samogona-vodoj-posle-pervoj-peregonki/",
      img: "/img/razbavlenie-samogona-vodoj-posle-pervoj-peregonki.png",
      title: "Калькулятор разбавления спирта-сырца (после первого перегона)",
      description:
        "Поможет подготовить спирт-сырец к дробной перегонке, рассчитать пропорции и разбавить его до приемлемой крепости",
    },
    {
      href: "kalkulyator-smeshivaniya-spirtov/",
      img: "/img/kalkulyator-smeshivaniya-spirtov.png",
      title: "Калькулятор смешивания спиртов",
      description:
        "Поможет узнать прямо сейчас какой градус будет после смешивания двух спиртосодержащих жидкостей",
    },
    {
      href: "kalkulyator-absolyutnogo-spirta/",
      img: "/img/kalkulyator-absolyutnogo-spirta.png",
      title: "Калькулятор абсолютного спирта",
      description:
        "Рассчитает объем абсолютного (100°) спирта в полученном дистилляте или ректификате",
    },
    {
      href: "kalkulyator-sebestoimosti-samogona/",
      img: "/img/kalkulyator-sebestoimosti-samogona.png",
      title: "Калькулятор себестоимости самогона",
      description:
        "Поможет рассчитать стоимость получившегося дистиллята исходя из затрат на сырье и ингредиенты",
    },
    {
      href: "primernaya-stoimost-samogona/",
      img: "/img/primernaya-stoimost-samogona.png",
      title: "Калькулятор примерной стоимости самогона",
      description:
        "Рассчитает примерную себестоимость и объем самогона даже если вы еще не ставили брагу и не перегоняли дистиллят.",
    },
    {
      href: "kalkulyator-saharnoj-bragi/",
      img: "/img/kalkulyator-saharnoj-bragi.png",
      title: "Калькулятор браги",
      description:
        "Поможет вычислить крепость браги и оптимальные пропорции сырья и воды для затора",
    },
    {
      href: "kalkulyator-vodki-iz-spirta/",
      img: "/img/kalkulyator-vodki-iz-spirta.png",
      title: "Калькулятор водки из спирта",
      description:
        "Поможет разбавить спирт или дистиллят до водочной крепости в 40°",
    },
    {
      href: "kalkulyator-spirta-ot-temperatury/",
      img: "/img/kalkulyator-spirta-ot-temperatury.png",
      title: "Калькулятор спирта от температуры",
      description:
        "Рассчитает реальную крепость дистиллята при любой температуре",
    },
    {
      href: "kalkulyator-zameny-sahara-glyukozoj/",
      img: "/img/kalkulyator-zameny-sahara-glyukozoj.png",
      title: "Калькулятор замены сахара декстрозой",
      description:
        "Поможет определить сколько потребуется декстрозы для аналогичного выхода спирта из браги на сахаре.",
    },
  ];
  return (
    <div>
      <div className="grid 2xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 hover:drop-shadow-md">
        {calcsData.map((calc) => (
          <div
            className="m-4 p-2 border-spacing-1 hover:shadow-2xl rounded-xl"
            key={calc.href}
          >
            <Link href={calc.href}>
              <a>
                <div className="text-center hover:bg-[#1abc9c] hover:rounded-lg">
                  <ExportedImage
                    src={calc.img}
                    alt="Калькулятор самогонщика Samogoncalc"
                    width={200}
                    height={200}
                  />
                </div>
                <div className="mb-3 text-center leading-[1.2rem] font-[700] text-gray-700">
                  {calc.title}
                </div>
                <div className="text-center leading-[1.2rem] font-[400] text-sm text-gray-800">
                  {calc.description}
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

CalcsBlock.propTypes = {};

export default CalcsBlock;
