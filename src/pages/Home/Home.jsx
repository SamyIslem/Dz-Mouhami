import React from "react";
import { useTranslation } from "react-i18next";

import MainImage from "@/images/mainImage.png";
import SearchLawyer from "@/images/searchLawyer.png";
import Lawyer from "@/images/avocat.png";
import Avocat from "@/images/ricardo.png";
import Button from "@/components/ui/Button/Button";
import Coins from "@/icons/coins.svg?react";
import Check from "@/icons/check.svg?react";
import Justice from "@/icons/justice.svg?react";
import Marker from "@/icons/marker.svg?react";
import { Rating } from "@/components/ui";

const Home = () => {
  const { t } = useTranslation();

  const mainArguments = [
    {
      icon: <Coins />,
      title: t("experience"),
      text: t("experienceText"),
    },
    {
      icon: <Check />,
      title: t("security"),
      text: t("securityText"),
    },
    {
      icon: <Justice />,
      title: t("justice"),
      text: t("justiceText"),
    },
    {
      icon: <Marker />,
      title: t("fast"),
      text: t("fastText"),
    },
  ];

  const lawyers = [
    {
      image: Lawyer,
      nom: "Alexandre Lefèvre",
      rate: 4,
      address: "Bejaia, Centre Ville",
      spécialité: "Droit pénal",
      experience: "5 ans D’éxperience",
    },
    {
      image: Lawyer,
      nom: "Alexandre Lefèvre",
      rate: 3,
      address: "Bejaia, Centre Ville",
      spécialité: "Droit pénal",
      experience: "5 ans D’éxperience",
    },
    {
      image: Avocat,
      nom: "Alexandre Lefèvre",
      rate: 3,
      address: "Bejaia, Centre Ville",
      spécialité: "Droit pénal",
      experience: "5 ans D’éxperience",
    },
    {
      image: Lawyer,
      nom: "Alexandre Lefèvre",
      rate: 5,
      address: "Bejaia, Centre Ville",
      spécialité: "Droit pénal",
      experience: "5 ans D’éxperience",
    },
  ];

  return (
    <>
      <main
        style={{
          background: `url(${MainImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        before
        className="py-40 lg:py-60 relative bg-center before:content-[''] before:bg-black before:opacity-50 before:absolute before:h-full before:w-full before:top-0 before:right-0 before:left-0 "
      >
        <div className="c-container flex flex-col items-center justify-center gap-3 ">
          <h1 className="font-bold relative text-white text-3xl z-10 w-fit max-w-[20ch] text-center  after:content-['']  after:block after:bg-secondary after:h-1 after:w-12  after:absolute after:top-1/2 after:-translate-1/2 after:right-full after:mr-5   before:content-['']  before:block before:bg-secondary before:h-1 before:w-12  before:absolute before:top-1/2 before:-translate-1/2 before:left-full before:ml-5">
            {" "}
            {t("title")}{" "}
          </h1>

          <p className="text-white z-10  xs:leading-[10px]  w-3/4 text-wrap balance-30 text-center ">
            {" "}
            {t("mainText")}{" "}
          </p>

          <div className="flex items-center justify-center z-10 font-semibold gap-5 mt-5 ">
            <Button variant="secondary" to="/contact"  > {t("contactButton")} </Button>
            <Button variant="primary" to="/avocats" >{t("lawyerButton")}</Button>
          </div>
        </div>
      </main>

      <section className="-translate-y-[120px] ">
        <div className="c-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 ">
          {mainArguments.map((argument, index) => (
            <div
              key={index}
              className="bg-bgCard opacity-80 rounded-lg p-7 hover:opacity-100 cursor-pointer"
            >
              {argument.icon}
              <h2 className="mt-4 text-secondary font-bold text-xl">
                {argument.title}{" "}
              </h2>
              <p className="mt-3 text-white text-sm font-normal ">
                {" "}
                {argument.text}{" "}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="search">
        <div className="c-container ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8  ">
            <div>
              <h2 className="text-3xl text-white  font-bold">
                {t("trouver")}{" "}
                <span className="text-secondary"> {t("avocat")} </span>
              </h2>
              <p className="text-white mt-4 "> {t("searchLawyer")} </p>

              <div className="flex flex-col gap-8 mt-8 ">
                <form
                  action=""
                  className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-4 "
                >
                  <div className="grid col-span-2 gap-2">
                    <label
                      className="text-white "
                      htmlFor="searchLawyerkeyWord"
                    >
                      {t("searchLawyerkeyWord")}
                    </label>

                    <input
                      className="text-white rounded-md h-11 px-4 placeholder:text-searchLabel bg-[#1B426A] border-none outline-none focus:ring-2 focus:ring-secondary text-sm  "
                      type="text"
                      placeholder={t("searchLawyerkeyWord")}
                      id="searchLawyerkeyWord"
                    />
                  </div>
                  <div className="grid col-span-2 lg:col-span-1 gap-2">
                    <label className="text-white " htmlFor="Budget">
                      {t("Budget")}
                    </label>
                    <input
                      className="text-white rounded-md h-11 px-4 placeholder:text-searchLabel bg-[#1B426A] border-none outline-none focus:ring-2 focus:ring-secondary text-sm  "
                      type="text"
                      placeholder={t("Budget")}
                      id="Budget"
                    />
                  </div>
                  <div className=" grid col-span-2 lg:col-span-1 gap-2">
                    <label className="text-white " htmlFor="Localisation">
                      {t("Localisation")}
                    </label>
                    <input
                      className="text-white rounded-md h-11 px-4 placeholder:text-searchLabel bg-[#1B426A] border-none outline-none focus:ring-2 focus:ring-secondary text-sm  "
                      type="text"
                      placeholder={t("Localisation")}
                      id="Localisation"
                    />
                  </div>
                  <div className="grid col-span-2 lg:col-span-1 gap-2">
                    <label className="text-white " htmlFor="Speciality">
                      {t("Speciality")}
                    </label>
                    <input
                      className="text-white rounded-md h-11 px-4 placeholder:text-searchLabel bg-[#1B426A] border-none outline-none focus:ring-2 focus:ring-secondary text-sm  "
                      type="text"
                      placeholder={t("Speciality")}
                      id="Speciality"
                    />
                  </div>
                  <div className="grid col-span-2 lg:col-span-1 gap-2">
                    <label className="text-white " htmlFor="Language">
                      {t("Language")}
                    </label>
                    <input
                      className="text-white rounded-md h-11 px-4 placeholder:text-searchLabel bg-[#1B426A] border-none outline-none focus:ring-2 focus:ring-secondary text-sm  "
                      type="text"
                      placeholder={t("Language")}
                      id="Language"
                    />
                  </div>
                </form>
                <div className="flex justify-end">
                  <Button variant="primary" className="font-bold">
                    {t("Search")}
                  </Button>{" "}
                </div>
              </div>
            </div>

            <div className="row-start-1 md:row-start-auto">
              <img src={SearchLawyer} alt="Votre Avocat" />
            </div>
          </div>
        </div>
      </section>

      <section id="recommandations" className="mt-16 pb-16  bg-primary">
        <div className="c-container flex flex-col gap-8">
          <h2 className="text-3xl text-white  font-bold mt-16">
            
            <span className="text-secondary"> {t("Our")} </span>
            {t("recommandations")}{" "}
          </h2>
          <div className=" grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8 ">
            {lawyers.map((lawyer, index) => (
              <div className=" flex flex-col gap-1 bg-bgCard p-2 rounded-lg  " key={index}>
                <img
                  src={lawyer.image}
                  alt={lawyer.nom}
                  className=" h-[230px] object-cover w-[291px] rounded-lg "
                />
                <Rating rate={lawyer.rate} />
                <div className="flex items-center gap-2">
                  <Marker className="w-4" />
                  <span className="text-white"> {lawyer.address} </span>
                </div>
                <div className="flex items-center gap-2">
                  <Justice className="w-4" />
                  <span className="text-white"> {lawyer.spécialité} </span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4" />
                  <span className="text-white"> {lawyer.experience} </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
