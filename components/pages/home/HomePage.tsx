import CalcsBlock from "./CalcsBlock";
import StarSeparator from "../../starSeparator/StarSeparator";

const HomePage = () => {
  return (
    <div className="m-6 my-12 sm:mx-52 sm:my-24">
      <div className="flex justify-center uppercase text-lg text-center sm:text-4xl text-gray-700 font-[700]">
        ПОЛЕЗНЫЕ КАЛЬКУЛЯТОРЫ ДЛЯ ВИНОКУРОВ И САМОГОНЩИКОВ
      </div>
      <StarSeparator />
      <CalcsBlock />
    </div>
  );
};

export default HomePage;
