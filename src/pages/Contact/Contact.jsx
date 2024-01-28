import React from "react";
import { useTranslation } from "react-i18next";

import ContactImage from "@/images/contactImage.jpg";
import Button from "@/components/ui/Button/Button";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <>
      <main
        style={{
          background: `url(${ContactImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        before
        className="py-40 lg:py-60 relative bg-center before:content-[''] before:bg-black before:opacity-50 before:absolute before:h-full before:w-full before:top-0 before:right-0 before:left-0 "
      >
        <div className="c-container flex flex-col items-center justify-center gap-3 ">
          <h1 className="font-bold relative text-white text-3xl z-10 w-fit max-w-[20ch] text-center  after:content-['']  after:block after:bg-secondary after:h-1 after:w-12  after:absolute after:top-1/2 after:-translate-1/2 after:right-full after:mr-5   before:content-['']  before:block before:bg-secondary before:h-1 before:w-12  before:absolute before:top-1/2 before:-translate-1/2 before:left-full before:ml-5">
            {" "}
            {t("contactTitle")}{" "}
          </h1>

          <p className="text-white z-10  xs:leading-[10px]  w-3/4 text-wrap balance-30 text-center ">
            {" "}
            {t("contactText")}{" "}
          </p>

          <div className="flex items-center justify-center z-10 font-semibold gap-5 mt-5 ">
            <Button variant="secondary"> {t("contactButton")} </Button>
            <Button variant="primary">{t("lawyerButton")}</Button>
          </div>
        </div>
      </main>

      <section>
        <div className="c-container py-16">
          <h1 className="text-3xl font-bold text-white">
            {t("remplir")} <span className="text-yellow-400"> {t("form")} </span>
          </h1>

          <form className="mt-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* motif */}
                <div>
                <label htmlFor="objet" className="text-white">
                  {t("Motif")}
                </label>

                <input
                  type="text"
                  name="motif"
                  id="motif"
                  placeholder="motif"
                  autoComplete="off"
                  className="w-full h-11 rounded-md bg-[#1B426A] text-white mt-2 border-none outline-none placeholder:text-white placeholder:text-opacity-60 px-4 text-sm focus:ring-2 focus:ring-yellow-400"
                />
              </div>


              {/* objet */}
              <div>
                <label htmlFor="objet" className="text-white">
                  {t("Objet")}
                </label>

                <input
                  type="text"
                  name="objet"
                  id="objet"
                  placeholder="Objet"
                  autoComplete="off"
                  className="w-full h-11 rounded-md bg-[#1B426A] text-white mt-2 border-none outline-none placeholder:text-white placeholder:text-opacity-60 px-4 text-sm focus:ring-2 focus:ring-yellow-400"
                />
              </div>


              {/* Description */}
              <div className="col-span-2">
                <label htmlFor="phone" className="text-white">
                  {t("Description")}
                </label>

                <textarea
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Description"
                  autoComplete="off"
                  className="w-full min-h-20 rounded-md bg-[#1B426A] text-white mt-2 border-none outline-none placeholder:text-white placeholder:text-opacity-60 px-4 text-sm focus:ring-2 focus:ring-yellow-400"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button className="bg-yellow-400 text-[#001F3F] rounded-md px-4 py-2.5 font-bold">
                {t("contact")}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
