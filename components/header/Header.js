import s from "./header.module.scss";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import ShareButtons from "../shareButtons/ShareButtons";

const Header = ({ headImg, titlePage, descriptionPage, urlSeo }) => {
  return (
    <div className={s.headerBlock}>
      <div>
        <div className={s.imageHeadBlock}>
          <ExportedImage
            src={headImg}
            alt={titlePage}
            width={240}
            height={240}
          />
        </div>
        <div className={s.titleHeadBlock}>{titlePage}</div>
        <div className={s.descriptionPageBlock}>{descriptionPage}</div>
        <div className={s.descriptionPageBlock}>
          <div className={s.lineElement} />
          <ShareButtons
            headImg={headImg}
            urlSeo={urlSeo}
            titlePage={titlePage}
            descriptionPage={descriptionPage}
          />
          <div className={s.lineElement} />
        </div>
        <div className={s.breadCrumbsBlock}>
          {urlSeo === "/" ? (
            ""
          ) : (
            <div className="border-top">
              <Link href={"/"}>
                <a className="text-white">Главная</a>
              </Link>{" "}
              / {titlePage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
