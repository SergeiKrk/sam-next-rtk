import type { NextPage } from "next";
import Layout from "../components/layout/Layout";

const About: NextPage = () => {
  return (
    <div>
      <Layout
        headImg="/img/samogoncalc-bender.png"
        titlePage="О проекте"
        descriptionPage="SamogonCalc - Набор быстрых онлайн-калькуляторов для винокуров и самогонщиков"
        urlSeo="about"
        title="О проекте - SamogonCalc"
        description="SamogonCalc - набор быстрых онлайн-калькуляторов для винокуров и самогонщиков"
        pageCheck="true"
      >
        <div>
          <p>
            SamogonCalc помог Вам? Помогите и Вы нашему проекту. Вы можете
            поспособствовать его развитию довольно простыми действиями:
          </p>
          <p className="mt-4 p-4 border">
            <ul className="list-disc ml-8">
              <li>Сообщите о ошибке, если вдруг найдете.</li>
              <li>
                Оставить ссылку на SamogonCalc.ru в соц.сетях, в комментариях
                YouTube роликов по теме или в своем блоге.
              </li>
              <li>
                Расскажите о нас друзьям и знакомым на крупных тематических
                площадках.
              </li>
            </ul>
          </p>
          <h2 className="mt-4 text-3xl">
            Хотите заказать разработку быстрого сайта?
          </h2>
          <p className="mt-4">
            Если понравилось быстродействие интерфейса SamogonCalc.ru и для Вас
            нужно разработать:
            <ul className="list-disc mt-4 ml-8">
              <li>Cайт с калькуляторами любой сложности,</li>
              <li>Cайт компании,</li>
              <li>Информационный сайт,</li>
              <li>Сайт-визитка</li>
            </ul>
          </p>
          <p className="mt-4">
            Пишите в Telegram{" "}
            <a href="https://telegram.me/sergeikrk">@sergeikrk</a>
          </p>
        </div>
      </Layout>
    </div>
  );
};

export default About;
