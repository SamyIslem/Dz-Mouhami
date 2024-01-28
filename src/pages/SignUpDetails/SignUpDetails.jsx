import React from "react";
import { useTranslation } from "react-i18next";

const SignUpDetails = () => {
  const { t } = useTranslation();

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const specialty = formData.get("specialty");
    const phone_number = formData.get("phone_number");
    const office_address = formData.get("office_address");
    const website = formData.get("website");
    const linkedin_profile = formData.get("linkedin_profile");
    const password = formData.get("password");
    const cordoneex = formData.get("cordoneex");
    const cordoneey = formData.get("cordoneey");
    const decription = formData.get("decription");

    // conditions of validations

    const lawyer = {
      name,
      email,
      specialty,
      phone_number,
      office_address,
      website,
      linkedin_profile,
      password,
      cordoneex,
      cordoneey,
      decription,
    };

    const response = await fetch(`localhost:8000/lawyer_account/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: lawyer,
      
    });
    console.log(response);
  };

  return (
    <>
      <section>
        <div className="c-container py-16">
          <h1 className="text-3xl font-bold text-white">
            Ajout d'un <span className="text-yellow-400">avocat</span>
          </h1>

          <form className="mt-14" onSubmit={submitHandler}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Nom */}
              <div>
                <label htmlFor="nom" className="text-white">
                  Nom
                </label>

                <input
                  type="text"
                  name="name"
                  id="nom"
                  placeholder="Nom de l'avocat"
                  autoComplete="off"
                  className="w-full h-11 rounded-md bg-[#1B426A] text-white mt-2 border-none outline-none placeholder:text-white placeholder:text-opacity-60 px-4 text-sm focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              {/* email */}
              <div>
                <label htmlFor="email" className="text-white">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email de l'avocat"
                  autoComplete="off"
                  className="w-full h-11 rounded-md bg-[#1B426A] text-white mt-2 border-none outline-none placeholder:text-white placeholder:text-opacity-60 px-4 text-sm focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              {/* Spécialité */}
              <div>
                <label htmlFor="specialty" className="text-white">
                  Spécialité
                </label>

                <input
                  type="text"
                  name="specialty"
                  id="specialty"
                  placeholder="Spécialité"
                  autoComplete="off"
                  className="w-full h-11 rounded-md bg-[#1B426A] text-white mt-2 border-none outline-none placeholder:text-white placeholder:text-opacity-60 px-4 text-sm focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              {/* Téléphone */}
              <div>
                <label htmlFor="phone_number" className="text-white">
                  Téléphone
                </label>

                <input
                  type="text"
                  name="phone_number"
                  id="phone_number"
                  placeholder="Téléphone"
                  autoComplete="off"
                  className="w-full h-11 rounded-md bg-[#1B426A] text-white mt-2 border-none outline-none placeholder:text-white placeholder:text-opacity-60 px-4 text-sm focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              {/* Addresse */}
              <div>
                <label htmlFor="phone_number" className="text-white">
                  Adresse
                </label>

                <input
                  type="text"
                  name="office_address"
                  id="office_address"
                  placeholder="Adresse"
                  autoComplete="off"
                  className="w-full h-11 rounded-md bg-[#1B426A] text-white mt-2 border-none outline-none placeholder:text-white placeholder:text-opacity-60 px-4 text-sm focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              {/* website */}
              <div>
                <label htmlFor="website" className="text-white">
                  Site Web
                </label>

                <input
                  type="text"
                  name="website"
                  id="website"
                  placeholder="Site Web"
                  autoComplete="off"
                  className="w-full h-11 rounded-md bg-[#1B426A] text-white mt-2 border-none outline-none placeholder:text-white placeholder:text-opacity-60 px-4 text-sm focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              {/* linkedin */}
              <div>
                <label htmlFor="linkedin" className="text-white">
                  Site Web
                </label>

                <input
                  type="text"
                  name="linkedin_profile"
                  id="linkedin"
                  placeholder="Site Web"
                  autoComplete="off"
                  className="w-full h-11 rounded-md bg-[#1B426A] text-white mt-2 border-none outline-none placeholder:text-white placeholder:text-opacity-60 px-4 text-sm focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              {/* password */}
              <div>
                <label htmlFor="password" className="text-white">
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  autoComplete="off"
                  className="w-full h-11 rounded-md bg-[#1B426A] text-white mt-2 border-none outline-none placeholder:text-white placeholder:text-opacity-60 px-4 text-sm focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              {/* cordoneex */}
              <div>
                <label htmlFor="cordoneex" className="text-white">
                  Longitude
                </label>

                <input
                  type="text"
                  name="cordoneex"
                  id="cordoneex"
                  placeholder="Longitude "
                  autoComplete="off"
                  className="w-full h-11 rounded-md bg-[#1B426A] text-white mt-2 border-none outline-none placeholder:text-white placeholder:text-opacity-60 px-4 text-sm focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              {/* cordoneey */}
              <div>
                <label htmlFor="cordoneey" className="text-white">
                  Latitude
                </label>

                <input
                  type="text"
                  name="cordoneey"
                  id="cordoneey"
                  placeholder="Latitude "
                  autoComplete="off"
                  className="w-full h-11 rounded-md bg-[#1B426A] text-white mt-2 border-none outline-none placeholder:text-white placeholder:text-opacity-60 px-4 text-sm focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              {/* Description */}
              <div className="col-span-2">
                <label htmlFor="decription" className="text-white">
                  Description
                </label>

                <textarea
                  type="text"
                  name="decription"
                  id="decription"
                  placeholder="Description"
                  autoComplete="off"
                  className="w-full min-h-20 rounded-md bg-[#1B426A] text-white mt-2 border-none outline-none placeholder:text-white placeholder:text-opacity-60 px-4 text-sm focus:ring-2 focus:ring-yellow-400"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button className="bg-yellow-400 text-[#001F3F] rounded-md px-4 py-2.5 font-bold">
                Enregistrer
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default SignUpDetails;
