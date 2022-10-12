import s from "./header.module.scss";
import ExportedImage from "next-image-export-optimizer";

const Header = () => {
  return (
    <div className={s.headerBlock}>
      <div>
        <div className="py-10">111</div>
        <div className="py-2">02</div>
        <div className="py-2">03</div>
      </div>
    </div>
  );
};

export default Header;
