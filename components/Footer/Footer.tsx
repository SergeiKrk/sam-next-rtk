// import logoImg from "../../public/img/kalkulyator-samogonshchika.png";
import s from "./footer.module.scss";
import ExportedImage from "next-image-export-optimizer";
import SamogonCalcLogo from "../../public/img/kalkulyator-samogonshchika.png";
import { FaTelegram } from "react-icons/fa";
import Link from "next/link";

type FooterType = {
  Footer: Function;
};

const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.footerBlock}>
        <div className={s.footerBlockContainer}>
          <div className={s.footerCol}>
            <h4 className={s.footerColTitile}>SAMOGONCALC</h4>
            <p>
              Набор быстрых онлайн-калькуляторов для винокуров и самогонщиков
            </p>
          </div>
          <div className={s.footerCol}>
            <ExportedImage
              src={SamogonCalcLogo}
              alt="Калькулятор самогонщика Samogoncalc"
              width={150}
              height={150}
            />
          </div>
          <div className={s.footerCol}>
            <h4 className={s.footerColTitile}>Контакты</h4>
            <p>Подписывайтесь на наш канал </p>
            <p>"Самогон и самогонщики"</p>
            <p className="m-4">
              <Link href="https://telegram.me/samogonco">
                <a>
                  <FaTelegram className={s.footerTelegram} />
                  <span className="text-sky-500"> @samogonco</span>
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className={s.copyright}>SamogonCalc.ru © 2021-2022</div>
    </div>
  );
};

export default Footer;
