import { useTranslation } from "react-i18next";
import MainImage from "@/images/mainImage.png";
import Avocat from "@/images/mainAvocat.jpg";
import Button from "@/components/ui/Button/Button";
import { useEffect, useRef, useState } from "react";
import { avocats } from "@/config/avocats.js";
import Check from "@/icons/check.svg?react";
import Justice from "@/icons/justice.svg?react";
import Marker from "@/icons/marker.svg?react";
import MarkerIcon from "@/icons/markerIcon.svg?react";
import { Rating } from "@/components/ui";

import mapboxgl from "mapbox-gl";
import { Link } from "react-router-dom";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_KEY;
const Avocats = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);
  const [marker, setMarker] = useState(null);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });
  }, []);
  useEffect(() => {
    if (map.current) {
      map.current.setCenter({
        lat,
        lng,
      });
      map.current.setZoom(zoom);
    }
  }, [lat, lng, zoom]);

  const [lawyers, setLawyers] = useState([]);

  const getLawyers = async () => {
    try {
      const response = await fetch("/");
      const data = await response.json();
      setLawyers(data);
    } catch (e) {
      console.log(error);
    }
  };

  useEffect(() => {
    // getLawyers();
    setLawyers(avocats);
  }, []);

  const { t } = useTranslation();
  return (
    <>
      <main
        style={{
          background: `url(${Avocat})`,
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
            <Button variant="secondary" to="/contact">
              {" "}
              {t("contactButton")}{" "}
            </Button>
            <Button variant="primary">{t("lawyerButton")}</Button>
          </div>
        </div>
      </main>

      <section id="avocats" className="py-16">
        <div className="c-container grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col gap-2  ">
            <h2 className="text-3xl text-white  font-bold mt-6">
              {t("ourLawyers")}
            </h2>
            {lawyers.map((lawyer, index) => (
              <div className="relative">
                <MarkerIcon
                  className="absolute bottom-3 right-4 md:top-3 md:right-4 fill-[#F5F5F5] hover:fill-secondary  cursor-pointer z-20"
                  onClick={() => (
                    setLng(lawyer.coordinates.lng),
                    setLat(lawyer.coordinates.lat),
                    console.log(lng, lat)
                  )}
                />
                <Link
                  to={`/avocats/${lawyer.id}`}
                  className="flex flex-col md:flex-row md:items-center  gap-4 bg-bgCard p-2 rounded-lg relative cursor-pointer bg-opacity-70 hover:bg-opacity-100 "
                  key={index}
                >
                  <img
                    src={lawyer.image}
                    alt={lawyer.nom}
                    className=" h-[230px] object-cover w-[291px] rounded-lg "
                  />
                  <div className="flex flex-col">
                    <span className="text-white">{lawyer.nom} </span>
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
                </Link>
              </div>
            ))}
          </div>

          <div
            ref={mapContainer}
            id="map"
            className="sticky top-28 w-[100%] h-[650px] overflow-hidden"
          ></div>
        </div>
      </section>
    </>
  );
};

export default Avocats;
