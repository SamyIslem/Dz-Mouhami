import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  fr: {
    translation: {
      welcome: "Bienvenue",
      changeLanguage: "Changer la langue",
      password: "Mot de passe",
      name: "Nom",
      userName: "Nom d'utilisateur",
      home: "Accueil",
      lawyers: "Avocats",
      contact: "Nous contacter",
      logIn: "Connexion",
      signUp: "Inscription",
      register: "Veuillez introduire vos coordonées pour vous connecter",
      forgetPassword: "Mot de passe oublié",
      finaliseLogIn: "Se connecter",
      Google: "S'authentifier avec Google",
      title: "Vous méritez le meilleur avocat",
      mainText:
        "Facilitez la prise de rendez-vous juridiques en un clic avec notre plateforme, offrant l'inscription de multiples avocats pour répondre à vos besoins spécifiques.",
      contactButton: "Contactez nous",
      lawyerButton: "Découvrir nos avocats",
      experience: "Experience",
      experienceText:
        "Explorez notre site pour découvrir des avocats adaptés à tous les budgets, car la justice devrait être accessible à chacun.",
      security: "Sécurité",
      securityText:
        "La sécurité de nos précieux utilisateurs demeure une priorité majeure et constante pour nous",
      justice: "Justice ",
      justiceText:
        "Explorez des avocats de toutes spécialités, répondant à vos besoins spécifiques avec compétence et engagement professionnel.",
      fast: "Rapidité",
      fastText:
        "Trouvez rapidement l'avocat proche de vous, car notre engagement pour votre satisfaction demeure constant et inébranlable.",
      trouver: "Trouvez votre",
      avocat: "Avocat",
      searchLawyer:
        "Découvrez une recherche juridique simplifiée et personnalisée avec notre plateforme, trouvez l'avocat qui correspond à vos besoins spécifiques en quelques clics seulement.",
      searchLawyerkeyWord: "Recherche par mot clé",
      Budget: "Budget",
      Localisation: "Localisation",
      Speciality: "Spécialité",
      Language: "Langue",
      Search: "Rechercher",
      Our: "Nos",
      recommandations: "recommandations",
      footerText:
        "Facilitez la prise de rendez-vous juridiques en un clic avec notre plateforme, offrant l'inscription de multiples avocats pour répondre à vos besoins spécifiques.",
      ourLawyers: "Nos Avocats",
      siteweb:"siteweb",
    },
    dir: "ltr",
  },
  ar: {
    translation: {
      welcome: "أهلا بك",
      changeLanguage: "تغيير اللغة",
      password: "كلمة السر",
      name: "الاسم",
      userName: "إسم المستخدم",
      home: "الرئيسية",
      lawyers: "المحامون",
      contact: "اتصل بنا",
      logIn: "تسجيل الدخول",
      signUp: "التسجيل",
      register: "يرجى إدخال البيانات الخاصة بك",
      forgetPassword: "نسيت كلمة السر",
      finaliseLogIn: "تسجيل الدخول",

      title: "أنت تستحق أفضل محامي",
      mainText:
        "اجعل من السهل حجز المواعيد القانونية بنقرة واحدة من خلال منصتنا، مما يوفر إمكانية تسجيل العديد من المحامين لتلبية احتياجاتك الخاصة.",
      contactButton: "اتصل بنا",
      lawyerButton: "اكتشف محامينا",
      experience: "خبرة",
      experienceText:
        "استكشف موقعنا لاكتشاف المحامين المناسبين لجميع الميزانيات، لأن العدالة يجب أن تكون في متناول الجميع",
      security: "حماية",
      securityText:
        "يظل أمان مستخدمينا الكرام أولوية رئيسية وثابتة بالنسبة لنا",
      justice: "عدالة",
      justiceText:
        "استكشف المحامين من كافة التخصصات، لتلبية احتياجاتك الخاصة بكفاءة والتزام مهني",
      fast: "سرعة",
      fastText:
        "اعثر بسرعة على المحامي القريب منك، لأن التزامنا بإرضائك يظل ثابتًا وثابتًا.",
      trouver: "ابحث عن",
      avocat: "محاميك",
      searchLawyer:
        "اكتشف بحثًا قانونيًا مبسطًا وشخصيًا من خلال منصتنا، واعثر على المحامي الذي يلبي احتياجاتك المحددة ببضع نقرات فقط.",
      searchLawyerkeyWord: "بحث بكلمة مفتاحية",
      Budget: "ميزانية",
      Localisation: "موقع",
      Speciality: "تخصص",
      Language: "لغة",
      Search: "بحث",
      Our: "توصياتنا ",
      recommandations: "لك",
      footerText:
        "اجعل من السهل حجز المواعيد القانونية بنقرة واحدة من خلال منصتنا، مما يوفر إمكانية تسجيل العديد من المحامين لتلبية احتياجاتك الخاصة.",
      Navigation: "شريط التنقل ",
      ourLawyers: "محامينا",
      siteweb:"موقع إلكتروني"
    },
    dir: "rtl",
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "fr",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
