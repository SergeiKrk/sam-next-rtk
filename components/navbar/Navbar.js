import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { FaAirbnb, FaBars, FaTimes } from "react-icons/fa";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import ExportedImage from "next-image-export-optimizer";
import SamogonCalcLogo from "../../public/img/kalkulyator-samogonshchika.png";
import Link from "next/link";
import { FaTelegram } from "react-icons/fa";

const solutions = [
  {
    name: "Разбавление самогона водой",
    description: "Поможет смешать дистиллят с водой в нужных пропорциях",
    href: "#",
    icon: "/img/kalkulyator-razbavleniya-samogona-vodoj.png",
  },
  {
    name: "Отбор голов",
    description: "Рассчитает объем «голов» и чистого спирта в дистилляте",
    href: "#",
    icon: "/img/kalkulyator-otbor-golov.png",
  },
  {
    name: "Дробная перегонка",
    description:
      "Поможет отобрать «голов» и «хвосты» в процессе дробной перегонки",
    href: "#",
    icon: "/img/kalkulyator-drobnoj-peregonki.png",
  },
  {
    name: "Разбавление самогона (после 1-го перегона)",
    description: "Поможет подготовить спирт-сырец к дробной перегонке",
    href: "#",
    icon: "/img/razbavlenie-samogona-vodoj-posle-pervoj-peregonki.png",
  },
  {
    name: "Расчет абсолютного спирта",
    description: "Рассчитает объем абсолютного 100° и 96.6° спирта",
    href: "#",
    icon: "/img/kalkulyator-absolyutnogo-spirta.png",
  },
  {
    name: "Смешивание спиртов",
    description:
      "Поможет узнать, какой градус будет после смешивания двух спиртосодержащих жидкостей",
    href: "#",
    icon: "/img/kalkulyator-smeshivaniya-spirtov.png",
  },
  {
    name: "Себестоимость самогона",
    description:
      "Рассчитает стоимость получившегося дистиллята исходя из затрат на сырье и ингредиенты",
    href: "#",
    icon: "/img/kalkulyator-sebestoimosti-samogona.png",
  },
  {
    name: "Примерная стоимость самогона",
    description:
      "Рассчитает примерную себестоимость и объем самогона даже если вы еще не ставили брагу",
    href: "#",
    icon: "/img/primernaya-stoimost-samogona.png",
  },
  {
    name: "Расчет браги из разного сырья",
    description:
      "Вычислит крепость браги, оптимальные пропорции сырья и воды для затора",
    href: "#",
    icon: "/img/kalkulyator-saharnoj-bragi.png",
  },
  {
    name: "Расчет водки 40° из спирта",
    description:
      "Поможет разбавить спирт или дистиллят до водочной крепости в 40°",
    href: "#",
    icon: "/img/kalkulyator-vodki-iz-spirta.png",
  },
  {
    name: "Коррекция спирта по температуре",
    description:
      "Рассчитает реальную крепость при любой температуре дистиллята",
    href: "#",
    icon: "/img/kalkulyator-spirta-ot-temperatury.png",
  },
  {
    name: "Замена сахара декстрозой",
    description:
      "Рассчитает сколько потребуется декстрозы для аналогичного выхода спирта из браги на сахаре.",
    href: "#",
    icon: "/img/kalkulyator-zameny-sahara-glyukozoj.png",
  },
];
const callsToAction = [
  { name: "Watch Demo", href: "#", icon: FaAirbnb },
  { name: "Contact Sales", href: "#", icon: FaAirbnb },
];

const recentPosts = [
  { id: 1, name: "Boost your conversion rate", href: "#" },
  {
    id: 2,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "#",
  },
  { id: 3, name: "Improve your customer experience", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Popover className="relative bg-slate-800">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex items-center justifNy-between py-2 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">SamogonCalc</span>
              <ExportedImage
                src={SamogonCalcLogo}
                alt="Калькулятор самогонщика Samogoncalc"
                width={40}
                height={40}
              />
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button
              className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-700 
            hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-offset-2"
            >
              <span className="sr-only">Открыть меню</span>
              <FaBars className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-[#1abc9c]" : "text-white",
                      "group inline-flex items-center rounded-lg bg-gray-900 text-base font-medium hover:text-[#1abc9c] hover:ring-2 hover:ring-gray-100 focus:outline-none focus:ring-2 focus:bg-gray-900 focus:ring-offset-2"
                    )}
                  >
                    <span>⭐️ Все калькуляторы</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-[#1abc9c]" : "text-white",
                        "ml-2 h-5 w-5 group-hover:text-[#1abc9c]"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 ml-4 mt-3 w-screen max-w-6xl transform px-2 sm:px-0 lg:left-1/2 lg:ml-60 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid grid-cols-2 gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {solutions.map((item) => (
                            <Link key={item.name} href={item.href}>
                              <a className="-m-3 flex items-start rounded-lg p-2 hover:bg-gray-50">
                                <div className="w-14">
                                  <ExportedImage
                                    src={item.icon}
                                    alt={item.name}
                                    width={45}
                                    height={45}
                                  />
                                </div>
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            </Link>
                          ))}
                        </div>
                        {/* <div className="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                          {callsToAction.map((item) => (
                            <div key={item.name} className="flow-root">
                              <a
                                href={item.href}
                                className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                              >
                                <item.icon
                                  className="h-6 w-6 flex-shrink-0 text-gray-400"
                                  aria-hidden="true"
                                />
                                <span className="ml-3">{item.name}</span>
                              </a>
                            </div>
                          ))}
                        </div> */}
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <a
              href="#"
              className="text-base font-medium text-white hover:text-[#1abc9c]"
            >
              Про самогон
            </a>
            <a
              href="#"
              className="text-base font-medium text-white hover:text-[#1abc9c]"
            >
              Про самогонные аппараты
            </a>
            <a
              href="#"
              className="text-base font-medium text-white hover:text-[#1abc9c]"
            >
              О нас
            </a>
          </Popover.Group>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <Link href="https://telegram.me/samogonco">
              <a>
                <span className="text-white hover:text-[#1abc9c]">
                  Наш канал{" "}
                </span>
                <FaTelegram className="inline text-xl rounded-2xl text-sky-400 animate-ping ml-2" />
                {/* <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-sky-400 opacity-75"></span> */}
              </a>
            </Link>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button
                    className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 
                  hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset visited:text-[#1abc9c]"
                  >
                    <span className="sr-only">Закрыть меню</span>
                    <FaTimes className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-md p-2 hover:bg-gray-50"
                    >
                      <ExportedImage
                        src={item.icon}
                        alt={item.name}
                        className="h-6 w-6 flex-shrink-0 text-[#1abc9c]"
                        width={35}
                        height={35}
                      />
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Pricing
                </a>

                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Docs
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-text-[#1abc9c] px-4 py-2 text-base font-medium text-white shadow-sm hover:text-[#1abc9c]"
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
