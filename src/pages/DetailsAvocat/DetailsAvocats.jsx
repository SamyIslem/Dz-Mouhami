import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { avocats } from "@/config/avocats.js";
import Check from "@/icons/check.svg?react";
import Justice from "@/icons/justice.svg?react";
import Marker from "@/icons/marker.svg?react";
import Favorite from "@/icons/heart.svg?react";
import MarkerIcon from "@/icons/markerIcon.svg?react";
import { Rating } from "@/components/ui";
import Button from "@/components/ui/Button/Button";
import { useTranslation } from "react-i18next";

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
        <div className="c-container flex-col md:flex-row md:gap-2">
          <div className="flex flex-col  md:flex-row md:items-center  gap-8 bg-bgCard p-2 rounded-lg relative cursor-pointer  ">
            {/* <MarkerIcon
              className="absolute top-3 right-4 fill-[#F5F5F5] hover:fill-secondary  cursor-pointer "
              onClick={() => (
                setLng(avocat.coordinates.lng),
                setLat(avocat.coordinates.lat),
                console.log(lng, lat)
              )}
            /> */}
            <div className="flex flex-col md:flex-row gap-4 md-:items-center">
              <img
                src={avocat.image}
                alt={avocat.nom}
                className=" h-[230px] object-cover w-[291px] rounded-lg "
              />
              <div className="flex flex-col">
                <span className="text-white">{avocat.nom} </span>
                <Rating rate={avocat.rate} />
                <div className="flex items-center gap-2">
                  <Marker className="w-4" />

                  <span className="text-white"> {avocat.address} </span>
                </div>
                <div className="flex items-center gap-2">
                  <Justice className="w-4" />
                  <span className="text-white"> {avocat.spécialité} </span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4" />
                  <span className="text-white"> {avocat.experience} </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-between gap-8" >
              <Favorite className="fill-white hover:fill-red-500" />
              <Button variant="primary" className="justify-end">
                {t("siteweb")}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailsAvocats;
