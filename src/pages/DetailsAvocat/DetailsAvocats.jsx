import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { avocats } from "@/config/avocats.js";
import Check from "@/icons/check.svg?react";
import Justice from "@/icons/justice.svg?react";
import Marker from "@/icons/marker.svg?react";
import Favorite from "@/icons/heart.svg?react";
import Phone from "@/icons/phone.svg?react";
import MarkerIcon from "@/icons/markerIcon.svg?react";
import { Rating } from "@/components/ui";
import Button from "@/components/ui/Button/Button";
import { useTranslation } from "react-i18next";
import LawyerDetails from "@/components/website/LawyerDetails/LawyerDetails";

const DetailsAvocats = () => {
  const lawyers = avocats;
  const { id } = useParams();
  const [avocat, setAvocat] = useState({});
  const getAvocat = async () => {
    try {
      const response = await fetch(`/${id}`);
      if (response.status === 200) {
        const data = await response.json();
        setAvocat(data);
      }
    } catch (err) {
      throw new Error("An error has occured: " + err.message);
    }
  };

  const [more, setMore] = useState(false);

  useEffect(() => {
    // getAvocat();
    const lawyer = lawyers.find((lawyers) => lawyers.id === Number(id));
    if (lawyer) {
      setAvocat(lawyer);
      console.log(avocat);
    } else {
      console.log("non");
    }
  }, []);
  const { t } = useTranslation();
  return (
    <>
      <section id="avocat" className="mt-36">
        <div className="c-container grid grid-cols-1 md:grid-cols-[1fr_280px] gap-10 ">
          <div className=" flex-col md:flex-row gap-8  ">
            <div className="flex flex-col  md:flex-row  gap-8 bg-bgCard  rounded-lg relative cursor-pointer p-6 ">
              {/* Possible Marker Icon  */}

              <div className="flex flex-col md:flex-row gap-4 md-:items-center">
                <img
                  src={avocat.image}
                  alt={avocat.nom}
                  className="w-full h-56 md:w-56 object-cover rounded-lg "
                />
                <div className="flex flex-col w-full pt-2 ">
                  <span className="text-white text-xl font-bold">
                    {avocat.nom}{" "}
                  </span>

                  <Rating rate={avocat.rate} className="mt-3" />

                  <div className="flex items-center gap-2 mt-6">
                    <Marker className="w-6 h-6" />
                    <span className="text-white"> {avocat.address} </span>
                  </div>

                  <div className="flex items-center gap-2 mt-4">
                    <Justice className="w-6 h-6" />
                    <span className="text-white"> {avocat.spécialité} </span>
                  </div>

                  <div className="flex items-center gap-2 mt-4">
                    <Check className="w-6 h-6" />
                    <span className="text-white"> {avocat.experience} </span>
                  </div>
                </div>
              </div>
              <div className="flex gap-8 md:flex-col md:absolute md:gap-36 items-center justify-between md:top-4 md:right-4 ">
                <Favorite className="fill-white hover:fill-red-500 " />
                <Button variant="primary" className="justify-end font-bold">
                  {t("siteweb")}
                </Button>
              </div>
            </div>

            {/* description  */}

            <div className="flex flex-col gap-5 mt-4">
              <h2 className="text-secondary font-bold"> {t("description")} </h2>
              <p className="text-white">{avocat.description}</p>
            </div>

            <div className="w-full flex items-center text-textCard gap-2 mt-4">
              <span className="block h-[1px] w-1/2 bg-textCard "> </span>
              <p className="cursor-pointer hover:text-secondary transition-all ease-out duration-300 " onClick={()=>setMore(!more)} > { `${more? "Less" : "More"}` }</p>
              <span className="block h-[1px] w-1/2 bg-textCard "></span>
            </div>

            {more && <LawyerDetails lawyer={avocat} /> }
          </div>

          {/* Contacter l'avocat  */}

          <div className="flex flex-col relatvie bg-bgCard rounded-lg gap-2 p-6">
            <Phone className="fill-secondary w-8" />
            <p className="text-white font-bold">
              <span className="text-secondary">{t("ask")} </span>{" "}
              {t("consultation")}{" "}
            </p>
            <Button
              to={`tel:${avocat.tel} `}
              variant="primary"
              className="font-bold"
            >
              {avocat.tel}{" "}
            </Button>
            <div className="text-textCard flex items-center justify-center gap-2 ">
              <span className="block h-[1px] w-16 bg-textCard "> </span>
              <p>ou</p>
              <span className="block h-[1px] w-16 bg-textCard "></span>
            </div>
            <form className="flex flex-col gap-4">
              <div className=" flex flex-col gap-2">
                <label className="text-white " htmlFor="Nom">
                  {t("nomComplet")}:
                </label>
                <input
                  className="text-white rounded-md h-11 px-4 placeholder:text-searchLabel bg-background border-none outline-none focus:ring-2 focus:ring-secondary text-sm  "
                  type="text"
                  placeholder={t("nomComplet")}
                  id="Nom"
                />
              </div>
              <div className=" flex flex-col gap-2">
                <label className="text-white " htmlFor="Language">
                  {t("email")}:
                </label>
                <input
                  className="text-white rounded-md h-11 px-4 placeholder:text-searchLabel bg-background border-none outline-none focus:ring-2 focus:ring-secondary text-sm  "
                  type="text"
                  placeholder={t("email")}
                  id="Language"
                />
              </div>
              <div className=" flex flex-col gap-2">
                <label className="text-white " htmlFor="telephone">
                  {t("telephone")}:
                </label>
                <input
                  className="text-white rounded-md h-11 px-4 placeholder:text-searchLabel bg-background border-none outline-none focus:ring-2 focus:ring-secondary text-sm  "
                  type="text"
                  placeholder={t("telephone")}
                  id="telephone"
                />
              </div>
              <div className=" flex flex-col gap-2">
                <label className="text-white " htmlFor="date">
                  {t("date")}:
                </label>
                <input
                  className="text-white rounded-md h-11 px-4 placeholder:text-searchLabel bg-background border-none outline-none focus:ring-2 focus:ring-secondary text-sm  "
                  type="date"
                  placeholder={t("date")}
                  id="date"
                />
              </div>
              <div className=" flex flex-col gap-2">
                <label className="text-white " htmlFor="problème">
                  {t("problem")}:
                </label>
                <input
                  className="text-white rounded-md h-11 px-4 placeholder:text-searchLabel bg-background border-none outline-none focus:ring-2 focus:ring-secondary text-sm  "
                  type="text"
                  placeholder={t("problem")}
                  id="problème"
                />
              </div>
              <div className=" flex flex-col gap-2">
                <label className="text-white " htmlFor="Description">
                  {t("description")}:
                </label>
                <input
                  className="text-white rounded-md h-32 px-4 placeholder:text-searchLabel bg-background border-none outline-none focus:ring-2 focus:ring-secondary text-sm "
                  type="text"
                  placeholder={t("description")}
                  id="Description"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailsAvocats;
