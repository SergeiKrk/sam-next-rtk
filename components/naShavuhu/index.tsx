import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import Shavuha from "../../public/img/shavuha.png";

const NaShavuhu = () => {
  return (
    <>
      <div className="drop-shadow-2xl relative mt-12">
        <Link href="https://yoomoney.ru/to/410011056701951">
          <a className="text-center">
            <div className="animate-bounce hover:animate-spin">
              <ExportedImage
                src={Shavuha}
                alt="Калькулятор самогонщика Samogoncalc"
                width={190}
              />
            </div>

            <div className="font-bold pb-1">
              <p className="-mt-6 text-md">☝️ Тут такое дело...</p>
              <p className="text-xs">на шаурму для разработчика</p>
              <p className="text-xs">samogoncalc.ru собираем</p>
            </div>
          </a>
        </Link>
      </div>
    </>
  );
};

export default NaShavuhu;
