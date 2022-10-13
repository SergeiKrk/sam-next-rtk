import s from "./header.module.scss";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";

const Header = ({ headImg, titlePage, descriptionPage, urlSeo }) => {
  return (
    <div className={s.headerBlock}>
      <div>
        <div className="pt-4 flex justify-center my-12 md:my-24">
          <ExportedImage
            src={headImg}
            alt={titlePage}
            width={240}
            height={240}
          />
        </div>
        <div className="flex justify-center uppercase text-2xl md:text-5xl text-white font-[700]">
          {titlePage}
        </div>
        <div className="pt-8 px-8 flex justify-center text-xl md:text-2xl text-white  font-[300]">
          {descriptionPage}
        </div>
        <div className="p-8 mb-6 mt-16  flex justify-center text-xl md:text-2xl text-white">
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
