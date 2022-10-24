import CalcsBlock from "./CalcsBlock";
import StarSeparator from "../../Separators/StarSeparator";
import CalcSeparator from "../../Separators/CalcSeparator";
import { FaBolt, FaRocket } from "react-icons/fa";

const HomePage = () => {
  return (
    <div>
      <div className="my-10 mx-4 2xl:mx-52 2xl:my-24">
        <div className="flex justify-center uppercase text-lg text-center sm:text-4xl text-gray-700 font-[700]">
          ПОЛЕЗНЫЕ КАЛЬКУЛЯТОРЫ ДЛЯ ВИНОКУРОВ И САМОГОНЩИКОВ
        </div>
        <StarSeparator />
        <CalcsBlock />
      </div>
      <div className="bg-[#1abc9c] py-10 px-4 2xl:px-52 2xl:py-24">
        <div className="flex justify-center uppercase text-lg text-center sm:text-4xl text-white font-[700]">
          ОНЛАЙН КАЛЬКУЛЯТОРЫ САМОГОНЩИКА
        </div>
        <CalcSeparator />
        <div className="text-xl text-white max-w-xl mx-auto font-[200]">
          Онлайн калькуляторы самогонщика - набор полезных для винокуров
          (дистилье) инструментов-помощников, которые необходимы для расчета
          всех важных параметров в процессе производства крепких домашних
          напитков.
        </div>
      </div>
      <div className="my-10 mx-4 2xl:mx-52 2xl:my-24">
        <div className="flex justify-center uppercase text-lg text-center sm:text-4xl text-gray-700 font-[700]">
          АЛКОГОЛЬНЫЙ КАЛЬКУЛЯТОР САМОГОНЩИКА: ПРЕИМУЩЕСТВА
        </div>
        <StarSeparator />
        <div className="text-xl text-gray-700 max-w-4xl mx-auto font-[200]">
          Ищите лучший калькулятор самогонщика? Возможно, вы его нашли. Наши
          онлайн калькуляторы:
        </div>
        <div className="grid sm:grid-cols-2 text-xl text-gray-700 max-w-4xl mx-auto font-[200]">
          <div className="m-2 ">
            <div className="my-8 flex justify-center text-4xl">
              <FaRocket className="flex justify-center" />
            </div>
            Загружаются заметно быстрее всех остальных калькуляторов самогона
            конкурентов. Не нужно ждать пока страница откроется, ведь это всех
            раздражает.
          </div>
          <div className="my-2">
            <div className="my-8 flex justify-center text-4xl">
              <FaBolt />
            </div>
            <p>
              Расчет осуществляется сразу после ввода параметров в калькулятор.
              Не нужно совершать лишнего действия и нажимать на кнопку
              "Посчитать".
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
