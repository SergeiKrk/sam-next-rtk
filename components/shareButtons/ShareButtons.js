import Link from "next/link";
import {
  FaTelegramPlane,
  FaVk,
  FaWhatsapp,
  FaViber,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";
import s from "./shareButtons.module.scss";
import { useState } from "react";

const ShareButtons = ({ urlSeo, titlePage, headImg, descriptionPage }) => {
  const [tooltipStatus, setTooltipStatus] = useState(0);
  return (
    <div
      className="relative"
      onMouseEnter={() => setTooltipStatus(1)}
      onMouseLeave={() => setTooltipStatus(0)}
    >
      <div className={s.shareBlock}>
        <Link
          href={`http://vk.com/share.php?url=https://samogoncalc.ru/${urlSeo}&title=${titlePage}&image=https://samogoncalc.ru${headImg}&noparse=true`}
        >
          <a className={`hover:bg-cyan-800 ${s.btnBlock}`}>
            <FaVk className="text-white" />
          </a>
        </Link>
        <Link
          href={`https://t.me/share/url?url=https://samogoncalc.ru/${urlSeo}&text=${titlePage}`}
        >
          <a className={`hover:bg-cyan-500 ${s.btnBlock}`}>
            <FaTelegramPlane className="text-white" />
          </a>
        </Link>
        <Link
          href={`viber://forward?text=https://samogoncalc.ru/${urlSeo} | ${titlePage}`}
        >
          <a className={` hover:bg-[#25D366] ${s.btnBlock}`}>
            <FaWhatsapp className="text-white" />
          </a>
        </Link>
        <Link
          href={`viber://forward?text=${titlePage} | https://samogoncalc.ru/${urlSeo}`}
        >
          <a className={` hover:bg-purple-800 ${s.btnBlock}`}>
            <FaViber className="text-white" />
          </a>
        </Link>
        <Link
          href={`http://www.fb.com/sharer.php?s=100&p[title]=${titlePage}&p[summary]=${descriptionPage}&p[url]=https://samogoncalc.ru/${urlSeo}&p[images][0]=https://samogoncalc.ru${headImg}`}
        >
          <a className={` hover:bg-indigo-900 ${s.btnBlock}`}>
            <FaFacebookF className="text-white" />
          </a>
        </Link>
        <Link
          href={`https://twitter.com/intent/tweet?original_referer=https://samogoncalc.ru/${urlSeo}&text=${titlePage}&url=https://samogoncalc.ru`}
        >
          <a className={` hover:bg-blue-500 ${s.btnBlock}`}>
            <FaTwitter className="text-white" />
          </a>
        </Link>
      </div>
      {tooltipStatus == 1 && (
        <div
          role="tooltip"
          className="z-20 w-80 absolute transition duration-50 ease-in-out left-0 ml-4 shadow-lg bg-gray-500 p-4 rounded"
        >
          <p className="text-xs font-bold text-white pb-1">
            Обычно, хорошие люди рассказывают обо мне друзьям в соцсетях 👍
          </p>
        </div>
      )}
    </div>
  );
};

export default ShareButtons;
