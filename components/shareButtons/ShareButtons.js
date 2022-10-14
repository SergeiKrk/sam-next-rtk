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

const ShareButtons = ({ urlSeo, titlePage, headImg }) => {
  return (
    <div className={s.shareBlock}>
      <Link
        href={`http://vk.com/share.php?url=https://samogoncalc.ru${urlSeo}&title=${titlePage}&image=https://samogoncalc.ru${headImg}&noparse=true`}
      >
        <a className={s.btnBlock}>
          <FaVk className="text-white" />
        </a>
      </Link>
      <Link href="/">
        <a className={s.btnBlock}>
          <FaTelegramPlane className="text-white" />
        </a>
      </Link>
      <Link href="/">
        <a className={s.btnBlock}>
          <FaWhatsapp className="text-white" />
        </a>
      </Link>
      <Link href="/">
        <a className={s.btnBlock}>
          <FaViber className="text-white" />
        </a>
      </Link>
      <Link href="/">
        <a className={s.btnBlock}>
          <FaFacebookF className="text-white" />
        </a>
      </Link>
      <Link href="/">
        <a className={s.btnBlock}>
          <FaTwitter className="text-white" />
        </a>
      </Link>
    </div>
  );
};

export default ShareButtons;
