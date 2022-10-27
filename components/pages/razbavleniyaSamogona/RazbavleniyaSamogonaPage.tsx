import Link from "next/link";

const PoslePervojPage = () => {
  return (
    <div>
      <p className="mt-6">
        Нужно разбавить спирт или дистиллят до конкретной крепости? Наш быстрый
        онлайн калькулятор разбавления самогона водой поможет.
      </p>
      <p className="mt-6">
        Онлайн калькулятор разбавления самогона (спирта) водой рассчитает
        пропорции воды и алкоголя, а так же подскажет объем самогона после
        разбавления.
      </p>
      <p className="mt-6">
        Например, есть 6 литров дистиллята крепостью в 90°. Вы хотите развести
        самогон до 45°. Вводим все 3 параметра "Объем разбавляемого самогона",
        "Крепость разбавляемого самогона", "Крепость, которую хотите получить" в
        калькулятор и сразу получаете ответ сколько необходимо долить воды
        (нужно 6.86 л.) и какой общий объем разбавленного самогона (спирта)
        получится (получится 12 л.). Никаких кнопок для расчета нажимать не
        нужно, результат появится автоматически после ввода всех 3-х параметров.
      </p>

      <h2 className="text-4xl mt-6">Правила разбавления самогона</h2>
      <ul className="mt-6 list-disc pl-6">
        <li>
          вливайте самогон в воду, а не воду в самогон, перемешивая жидкость при
          вливании;
        </li>
        <li>
          температура смешиваемых жидкостей должна быть одинаковой, порядка 20°,
          при этой температуре показания спиртометров соответствуют истинному
          содержанию спирта;
        </li>
        <li>
          смешанный напиток можно употреблять после отстаивания и стабилизации в
          течение нескольких часов, а лучше дней.
        </li>
      </ul>
      <h3 className="text-2xl mt-6">Правила подбора воды и тары</h3>
      <ul className="mt-6 list-disc pl-6">
        <li>
          вода из городского водопровода непригодна, даже кипячение не всегда
          делает ее лучше;
        </li>
        <li>
          идеально подходит родниковая, артезианская и бутилированная вода;
        </li>
        <li>
          вполне пригодна вода, пропущенная через бытовой фильтр, при условии
          соблюдения срока его эксплуатации;
        </li>
        <li>все емкости должны быть стеклянными, а не пластиковыми;</li>
        <li>соблюдайте гигиену используемого оборудования и емкостей.</li>
      </ul>
      <h2 className="text-4xl mt-6">Как рассчитать пропорцию самогона</h2>
      <ul className="mt-6 list-disc pl-6">
        <li>С помощью онлайн-калькулятора;</li>
        <li>С помощью формулы;</li>
        <li>С помощью таблицы Фертмана;</li>
        <li>На глазок.</li>
      </ul>
      <h2 className="text-4xl mt-6">
        Сколько нужно воды для разбавления самогона?
      </h2>
      <p className="mt-6">
        На этот вопрос даст ответ нас онлайн калькулятор разбавления алкоголя
        водой. Если по сложившимся обстоятельствам у вас нет доступа к
        компьютеру или телефону, то существует метод «на глазок», с вливанием в
        самогон небольших количеств воды и измерением крепости после каждого
        вливания спиртометром.
      </p>
      <h2 className="text-4xl mt-6">
        Формула разбавления спирта и самогона водой
      </h2>
      <div className="mt-6 flex flex-row">
        <div className="border-2 rounded-lg m-6 basis-1/2 flex justify-center items-center">
          <b>V = AC/B - C</b>
        </div>
        <div className="basis-1/2 ml-4">
          <ul>
            <li>
              <b>V</b> – требуемый объем воды;
            </li>
            <li>
              <b>С</b> – объем самогона;
            </li>
            <li>
              <b>А</b> – крепость самогона;
            </li>
            <li>
              <b>В</b> – желаемая крепость напитка.
            </li>
          </ul>
        </div>
      </div>
      <p className="mt-6">
        Для пояснения пользования формулой приведем пример. Объем самогона С=2,5
        л, крепость самогона А=72°, желаемая крепость В=40°. Рассчитываем
        требуемый объем воды V = 2,5*(72/40-1)=2,0 (л).
      </p>
      <p className="mt-6">
        Вышеприведенная формула существует и в ином виде, пользуйтесь наиболее
        привычной для вас: С*А/В-С = V. Эта формула называется "золотой"
        формулой самогоноварения.
      </p>

      <h2 className="text-4xl mt-6">Таблица разбавления самогона водой</h2>
      <p className="mt-6">
        В таблице Фертмана для разбавления самогона и спирта водой в первом
        столбце - это крепость спиртосодержащей жидкости до разбавления, в
        первой строке - крепость после разбавления, а на пересечении - объем
        воды, который нужно долить.
      </p>
      <table className="border-collapse max-w-xs border text-sm mt-6">
        <thead>
          <tr>
            <td className="p-2 border">было/стало</td>
            <td className="p-2 border">90%</td>
            <td className="p-2 border">85%</td>
            <td className="p-2 border">80%</td>
            <td className="p-2 border">75%</td>
            <td className="p-2 border">70%</td>
            <td className="p-2 border">65%</td>
            <td className="p-2 border">60%</td>
            <td className="p-2 border">55%</td>
            <td className="p-2 border">50%</td>
            <td className="p-2 border">45%</td>
            <td className="p-2 border">40%</td>
            <td className="p-2 border">35%</td>
            <td className="p-2 border">30%</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border">95%</td>
            <td className="p-2 border">64</td>
            <td className="p-2 border">133</td>
            <td className="p-2 border">209</td>
            <td className="p-2 border">295</td>
            <td className="p-2 border">391</td>
            <td className="p-2 border">501</td>
            <td className="p-2 border">629</td>
            <td className="p-2 border">779</td>
            <td className="p-2 border">957</td>
            <td className="p-2 border">1174</td>
            <td className="p-2 border">1443</td>
            <td className="p-2 border">1785</td>
            <td className="p-2 border">2239</td>
          </tr>
          <tr>
            <td className="p-2 border">90%</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">65</td>
            <td className="p-2 border">138</td>
            <td className="p-2 border">218</td>
            <td className="p-2 border">310</td>
            <td className="p-2 border">414</td>
            <td className="p-2 border">535</td>
            <td className="p-2 border">677</td>
            <td className="p-2 border">847</td>
            <td className="p-2 border">1052</td>
            <td className="p-2 border">1306</td>
            <td className="p-2 border">1630</td>
            <td className="p-2 border">2061</td>
          </tr>
          <tr>
            <td className="p-2 border">85%</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">68</td>
            <td className="p-2 border">144</td>
            <td className="p-2 border">231</td>
            <td className="p-2 border">329</td>
            <td className="p-2 border">443</td>
            <td className="p-2 border">578</td>
            <td className="p-2 border">738</td>
            <td className="p-2 border">932</td>
            <td className="p-2 border">1172</td>
            <td className="p-2 border">1478</td>
            <td className="p-2 border">1884</td>
          </tr>
          <tr>
            <td className="p-2 border">80%</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">72</td>
            <td className="p-2 border">153</td>
            <td className="p-2 border">246</td>
            <td className="p-2 border">353</td>
            <td className="p-2 border">480</td>
            <td className="p-2 border">630</td>
            <td className="p-2 border">812</td>
            <td className="p-2 border">1039</td>
            <td className="p-2 border">1327</td>
            <td className="p-2 border">1709</td>
          </tr>
          <tr>
            <td className="p-2 border">75%</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">76</td>
            <td className="p-2 border">163</td>
            <td className="p-2 border">264</td>
            <td className="p-2 border">382</td>
            <td className="p-2 border">523</td>
            <td className="p-2 border">694</td>
            <td className="p-2 border">906</td>
            <td className="p-2 border">1177</td>
            <td className="p-2 border">1535</td>
          </tr>
          <tr>
            <td className="p-2 border">70%</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">81</td>
            <td className="p-2 border">175</td>
            <td className="p-2 border">285</td>
            <td className="p-2 border">417</td>
            <td className="p-2 border">577</td>
            <td className="p-2 border">774</td>
            <td className="p-2 border">1027</td>
            <td className="p-2 border">1360</td>
          </tr>
          <tr>
            <td className="p-2 border">65%</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">88</td>
            <td className="p-2 border">190</td>
            <td className="p-2 border">311</td>
            <td className="p-2 border">460</td>
            <td className="p-2 border">644</td>
            <td className="p-2 border">878</td>
            <td className="p-2 border">1189</td>
          </tr>
          <tr>
            <td className="p-2 border">60%</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">95</td>
            <td className="p-2 border">207</td>
            <td className="p-2 border">344</td>
            <td className="p-2 border">514</td>
            <td className="p-2 border">730</td>
            <td className="p-2 border">1017</td>
          </tr>
          <tr>
            <td className="p-2 border">55%</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">103</td>
            <td className="p-2 border">229</td>
            <td className="p-2 border">384</td>
            <td className="p-2 border">583</td>
            <td className="p-2 border">845</td>
          </tr>
          <tr>
            <td className="p-2 border">50%</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">114</td>
            <td className="p-2 border">255</td>
            <td className="p-2 border">436</td>
            <td className="p-2 border">674</td>
          </tr>
          <tr>
            <td className="p-2 border">45%</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">127</td>
            <td className="p-2 border">290</td>
            <td className="p-2 border">505</td>
          </tr>
          <tr>
            <td className="p-2 border">40%</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">144</td>
            <td className="p-2 border">335</td>
          </tr>
          <tr>
            <td className="p-2 border">35%</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">167</td>
          </tr>
        </tbody>
      </table>
      <h2 className="text-4xl mt-6">
        Как правильно развести самогон до 40 градусов?
      </h2>
      <p className="mt-6">
        В этом вопросе вам пригодится наш онлайн{" "}
        <Link href="/kalkulyator-vodki-iz-spirta">
          <a>калькулятор водки из спирта</a>
        </Link>
        . Он поможет подобрать пропорции и разбавить спирт или самогон водой до
        40 градусов
      </p>
    </div>
  );
};

export default PoslePervojPage;
