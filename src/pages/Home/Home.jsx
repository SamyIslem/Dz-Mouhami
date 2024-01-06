import React from "react";
import { useTranslation } from "react-i18next";

import MainImage from "@/images/mainImage.png";
import Button from "../../components/ui/Button/Button";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <main
        style={{
          background: `url(${MainImage})`,
          backgroundRepeat: "no-repeat",
        }}
        className="bg-no-repeat py-60 relative before:content-[''] before:bg-black before:opacity-50 before:absolute before:h-full before:w-full before:top-0 before:right-0 before:left-0 "
      >
        <div className="flex flex-col items-center justify-center gap-3 ">
          <h1 className="font-bold relative text-white text-3xl z-10  balance-25 w-1/2 after:content-[''] after:bg-secondary after:h-1 after:w-12 after:absolute after:top-[38px] after:-left-[80px] before:content-[''] before:bg-secondary before:h-1 before:w-12 before:absolute before:top-[38px] before:right-[50px] ">
            {" "}
            {t("title")}{" "}
          </h1>

          <p className="text-white z-10  xs:leading-[10px]  w-3/4 text-wrap balance-30 ">
            {" "}
            {t("mainText")}{" "}
          </p>

          <div className="flex items-center justify-center z-10 font-semibold gap-5 mt-5 " >
            <Button variant="secondary" > {t("contactButton")} </Button>
            <Button variant="primary" >{t("lawyerButton")}</Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
