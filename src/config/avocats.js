import Lawyer from "@/images/avocat.png";
import Meet from "@/icons/meet.svg?react";
import HandsShaking from "@/icons/handsShaking.svg?react";
import PhoneConsultation from "@/icons/phoneConsultation.svg?react";
import { useTranslation } from "react-i18next";


export const avocats = [
  {
    id: 1,
    image: Lawyer,
    nom: "Alexandre Lefèvre",
    rate: 4,
    address: "Bejaia, Centre Ville",
    spécialité: "Droit pénal",
    experience: "5 ans D’éxperience",
    coordinates: {
      lat: 33.948145,
      lng: -118.324407,
    },
    workExperience: {
      work: [
        {
          business: "Attorney",
          projects: ["Pivotal Law Group", "2027 - Present"],
        },
        {
          business: "Attorney",
          projects: ["Pivotal Law Group", "2027 - Present"],
        },
      ],
      education: [
        {
          business: "Estin",
          projects: ["Pivotal Law Group", "2027 - Present"],
        },
        {
          business: "Inelec",
          projects: ["Pivotal Law Group", "2027 - Present"],
        },
      ],
    },
    tarification: [
      {
        icon: HandsShaking , // SVG
        title: "Rendez-vous cabinet",
        price: 1999,
        duration: 60, // min
      },
      {
        icon: Meet, // SVG
        title: "Consultation en ligne",
        price: 999,
        duration: 45, // min
      },
      {
        icon: PhoneConsultation , // SVG
        title: "Consultation Teleponique",
        price: 499,
        duration: 10, // min
      },
    ],
    description:
      "Bienvenue au cabinet d'avocats Dupont & Associés, où notre engagement est de fournir des services juridiques de qualité supérieure et de représenter nos clients avec intégrité, compétence et dévouement. Forts de notre expérience et de notre expertise dans divers domaines du droit, nous nous efforçons de résoudre efficacement les problèmes juridiques de nos clients tout en défendant leurs intérêts avec passion.",
    tel: "+213 552 123 456",
  },
  {
    id: 2,
    image: Lawyer,
    nom: "Alexandre Lefèvre",
    rate: 4,
    address: "Bejaia, Centre Ville",
    spécialité: "Droit pénal",
    experience: "5 ans D’éxperience",
    coordinates: {
      lat: 83.948145,
      lng: -18.324407,
    },
    workExperience: {
      work: [
        {
          business: "Attorney",
          projects: ["Pivotal Law Group", "2027 - Present"],
        },
        {
          business: "Attorney",
          projects: ["Pivotal Law Group", "2027 - Present"],
        },
      ],
      education: [
        {
          business: "Estin",
          projects: ["Pivotal Law Group", "2027 - Present"],
        },
        {
          business: "Inelec",
          projects: ["Pivotal Law Group", "2027 - Present"],
        },
      ],
    },
    tarification: [
      {
        icon: HandsShaking , // SVG
        title: "Rendez-vous cabinet",
        price: 1999,
        duration: 60, // min
      },
      {
        icon: Meet, // SVG
        title: "Consultation en ligne",
        price: 999,
        duration: 45, // min
      },
      {
        icon: PhoneConsultation , // SVG
        title: "Consultation Teleponique",
        price: 499,
        duration: 10, // min
      },
    ],
    description:
      "Bienvenue au cabinet d'avocats Dupont & Associés, où notre engagement est de fournir des services juridiques de qualité supérieure et de représenter nos clients avec intégrité, compétence et dévouement. Forts de notre expérience et de notre expertise dans divers domaines du droit, nous nous efforçons de résoudre efficacement les problèmes juridiques de nos clients tout en défendant leurs intérêts avec passion.",
    tel: "+213 552 123 456",
  },
  {
    id: 3,
    image: Lawyer,
    nom: "Alexandre Lefèvre",
    rate: 4,
    address: "Bejaia, Centre Ville",
    spécialité: "Droit pénal",
    experience: "5 ans D’éxperience",
    coordinates: {
      lat: 22.948145,
      lng: -8.324407,
    },
    workExperience: {
      work: [
        {
          business: "Attorney",
          projects: ["Pivotal Law Group", "2027 - Present"],
        },
        {
          business: "Attorney",
          projects: ["Pivotal Law Group", "2027 - Present"],
        },
      ],
      education: [
        {
          business: "Estin",
          projects: ["Pivotal Law Group", "2027 - Present"],
        },
        {
          business: "Inelec",
          projects: ["Pivotal Law Group", "2027 - Present"],
        },
      ],
    },
    tarification: [
      {
        icon: HandsShaking , // SVG
        title: "Rendez-vous cabinet",
        price: 1999,
        duration: 60, // min
      },
      {
        icon: Meet, // SVG
        title: "Consultation en ligne",
        price: 999,
        duration: 45, // min
      },
      {
        icon: PhoneConsultation , // SVG
        title: "Consultation Teleponique",
        price: 499,
        duration: 10, // min
      },
    ],
    description:
      "Bienvenue au cabinet d'avocats Dupont & Associés, où notre engagement est de fournir des services juridiques de qualité supérieure et de représenter nos clients avec intégrité, compétence et dévouement. Forts de notre expérience et de notre expertise dans divers domaines du droit, nous nous efforçons de résoudre efficacement les problèmes juridiques de nos clients tout en défendant leurs intérêts avec passion.",
    tel: "+213 552 123 456",
  },
  {
    id: 4,
    image: Lawyer,
    nom: "Alexandre Lefèvre",
    rate: 4,
    address: "Bejaia, Centre Ville",
    spécialité: "Droit pénal",
    experience: "5 ans D’éxperience",
    coordinates: {
      lat: 33.948145,
      lng: -118.324407,
    },
    workExperience: {
      work: [
        {
          business: "Attorney",
          projects: ["Pivotal Law Group", "2027 - Present"],
        },
        {
          business: "Attorney",
          projects: ["Pivotal Law Group", "2027 - Present"],
        },
      ],
      education: [
        {
          business: "Estin",
          projects: ["Pivotal Law Group", "2027 - Present"],
        },
        {
          business: "Inelec",
          projects: ["Pivotal Law Group", "2027 - Present"],
        },
      ],
    },
    tarification: [
      {
        icon: {HandsShaking }, // SVG
        title: "Rendez-vous cabinet",
        price: 1999,
        duration: 60, // min
      },
      {
        icon: {Meet}, // SVG
        title: "Consultation en ligne",
        price: 999,
        duration: 45, // min
      },
      {
        icon: {PhoneConsultation} , // SVG
        title: "Consultation Teleponique",
        price: 499,
        duration: 10, // min
      },
    ],
    description:
      "Bienvenue au cabinet d'avocats Dupont & Associés, où notre engagement est de fournir des services juridiques de qualité supérieure et de représenter nos clients avec intégrité, compétence et dévouement. Forts de notre expérience et de notre expertise dans divers domaines du droit, nous nous efforçons de résoudre efficacement les problèmes juridiques de nos clients tout en défendant leurs intérêts avec passion.",
    tel: "+213 552 123 456",
  },
  {
    id: 5,
    image: Lawyer,
    nom: "Alexandre Lefèvre",
    rate: 4,
    address: "Bejaia, Centre Ville",
    spécialité: "Droit pénal",
    experience: "5 ans D’éxperience",
    coordinates: {
      lat: 33.948145,
      lng: -118.324407,
    },
    workExperience: {
      work: [
        {
          business: "Attorney",
          projects: ["Pivotal Law Group", "2027 - Present"],
        },
        {
          business: "Attorney",
          projects: ["Pivotal Law Group", "2027 - Present"],
        },
      ],
      education: [
        {
          business: "Estin",
          projects: ["Pivotal Law Group", "2027 - Present"],
        },
        {
          business: "Inelec",
          projects: ["Pivotal Law Group", "2027 - Present"],
        },
      ],
    },
    tarification: [
      {
        icon: HandsShaking , // SVG
        title: "Rendez-vous cabinet",
        price: 1999,
        duration: 60, // min
      },
      {
        icon: Meet, // SVG
        title: "Consultation en ligne",
        price: 999,
        duration: 45, // min
      },
      {
        icon: PhoneConsultation, // SVG
        title: "Consultation Teleponique",
        price: 499,
        duration: 10, // min
      },
    ],
    description:
      "Bienvenue au cabinet d'avocats Dupont & Associés, où notre engagement est de fournir des services juridiques de qualité supérieure et de représenter nos clients avec intégrité, compétence et dévouement. Forts de notre expérience et de notre expertise dans divers domaines du droit, nous nous efforçons de résoudre efficacement les problèmes juridiques de nos clients tout en défendant leurs intérêts avec passion.",
    tel: "+213 552 123 456",
  },
];
