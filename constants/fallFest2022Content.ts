import { DescriptionCard } from "~/types/uiComponents";

const header = {
  titleLine1: "Qiskit Fall Fest 2022",
  description:
    "The Qiskit Fall Fest is a collection of quantum computing events on college campuses around the world. Every Fall Fest event is organized and run by the students on each campus, with support from the entire IBM Quantum team. Student leaders work alongside IBM throughout the month of September to design and plan their event, which are then run in October. The events vary from technical hackathons to beginner-friendly challenges, all with the goal of helping to grow the local community’s skill set.",
  cta: {
    label: "Read the blog",
    url: "https://medium.com/qiskit/introducing-the-qiskit-fall-fest-feb8456b557",
    segment: {
      cta: "learn",
      location: "header",
    },
  },
  cardSectionHeading: "About the event:",
  card: {
    image: "/images/events/fall-fest/fall-fest-logo-2022.png",
    title: "Qiskit Fall Fest 2022",
    description:
      "The Qiskit Fall Fest is a collection of quantum computing events each held by a university!",
    location: "",
    time: "",
    to: "https://medium.com/qiskit/introducing-the-qiskit-fall-fest-feb8456b557",
    ctaLabel: "Learn about the Fall Fest",
    segment: {
      cta: "qiskit-fall-fest-blog",
      location: "header",
    },
  },
};

interface eventSchedule {
  startDate: string;
  endDate: string;
  university: string;
  detail: string;
  type: string;
  url: string;
}

// TODO: replace URL placeholder w/ event links
const wave1Schedule: eventSchedule[] = [
  {
    university: "Yale University",
    startDate: "October 3, 2022",
    endDate: "October 15, 2022",
    detail: "In Person",
    type: "Challenge, Workshop Series",
    url: "https://yaleqc.com/categories/events/",
  },
  {
    university: "Purdue University",
    startDate: "October 3, 2022",
    endDate: "October 31, 2022",
    detail: "In Person",
    type: "Hackathon, Workshop Series",
    url: "https://github.com/purduequaic/qiskit-fall-fest-22",
  },
  {
    university: "QickStart : A Qiskit Powered Intro to Quantum Computing",
    startDate: "October 3, 2022",
    endDate: "October 13, 2022",
    detail: "In Person",
    type: "Challenge, Workshop Series",
    url: "https://github.com/TheGupta2012/NSUT-Qiskit-Fall-Fest",
  },
  {
    university: "Coimbatore Institute of Technology, India",
    startDate: "October 6, 2022",
    endDate: "October 20, 2022",
    detail: "Online",
    type: "Hackathon, Workshop Series",
    url: "https://github.com/CIT-QUANTUM-HACKATHON/CIT-QUANTUM-HACKATHON-2022",
  },
  {
    university: "Case Western Reserve University",
    startDate: "October 10, 2022",
    endDate: "October 21, 2022",
    detail: "In Person",
    type: "Hackathon, Workshop Series",
    url: "https://github.com/Case-Quantum-Computing-Club/CQC-qiskit-fall-fest-22",
  },
  {
    university: "University of Texas at Austin",
    startDate: "October 10, 2022",
    endDate: "October 17, 2022",
    detail: "In Person",
    type: "Hackathon, Workshop Series",
    url: "https://github.com/UT-Austin-Quantum-Collective/Qiskit-Fall-Fest-2022/blob/main/README.md",
  },
  {
    university: "Quantum Fall Fest QColombia",
    startDate: "October 10, 2022",
    endDate: "October 18, 2022",
    detail: "Online",
    type: "Hackathon, Workshop Series",
    url: "https://github.com/QColombia/Quantum-Fall-Fest-2022",
  },
  {
    university: "Start Innovation hub",
    startDate: "October 15, 2022",
    endDate: "October 16, 2022",
    detail: "In Person",
    type: "Hackathon, Workshop Series",
    url: "https://twitter.com/Q_affinity",
  },
];

const wave2Schedule: eventSchedule[] = [
  {
    university: "Fundamentals of Quantum Computing (Thapar University)",
    startDate: "October 15, 2022",
    endDate: "October 22, 2022",
    detail: "Hybrid",
    type: "Challenge",
    url: "https://github.com/developer-student-club-thapar/Qiskit-Fall-Fest-2022",
  },
  {
    university: "Qiskit Fall Fest Mexico-IPN",
    startDate: "October 17, 2022",
    endDate: "October 27, 2022",
    detail: "Online",
    type: "Challenge, Hackathon, Workshop Series",
    url: "https://proyectosrym.cic.ipn.mx/qcoloquio/",
  },
  {
    university: "Qiskit Fall Fest Kolkata Chapter",
    startDate: "October 17, 2022",
    endDate: "November 1, 2022",
    detail: "Online",
    type: "Hackathon, Workshop Series",
    url: "https://ritajitmajumdar.github.io/",
  },
  {
    university: "Escuela de Computación Cuántica",
    startDate: "October 17, 2022",
    endDate: "October 24, 2022",
    detail: "Online",
    type: "Challenge, Hackathon, Workshop Series",
    url: "https://pythonclubforphysicists.notion.site/pythonclubforphysicists/Primera-Escuela-de-Computaci-n-Cu-ntica-af219f239f90418b900cba004e27c789",
  },
  {
    university: "Qiskit Fall Fest Algiers",
    startDate: "October 21, 2022",
    endDate: "October 23, 2022",
    detail: "In Person",
    type: "Challenge, Hackathon, Workshop Series",
    url: "https://qiskit-fall-fest-algiers.wtmalgiers.org/",
  },
  {
    university: "University of Santiago de Compostela, Spain",
    startDate: "October 21, 2022",
    endDate: "October 22, 2022",
    detail: "In Person",
    type: "Challenge, Workshop Series",
    url: "https://github.com/wyqian1027/Qiskit-Fall-Fest-USC-2022",
  },
  {
    university: "Universidad Simón Bolívar",
    startDate: "October 21, 2022",
    endDate: "October 30, 2022",
    detail: "Online",
    type: "Challenge, Hackathon",
    url: "https://www.cofalumniusb.org/qiskit-fall",
  },
];

const wave3Schedule: eventSchedule[] = [
  {
    university: "University of Chicago",
    startDate: "October 22, 2022",
    endDate: "October 24, 2022",
    detail: "In Person",
    type: "Workshop Series",
    url: "https://www.facebook.com/groups/ucquantum",
  },
  {
    university: "The University of Hong Kong",
    startDate: "October 25, 2022",
    endDate: "October 26, 2022",
    detail: "In Person",
    type: "Challenge, Workshop Series",
    url: "",
  },
  {
    university: "Princeton Univeristy",
    startDate: "October 28, 2022",
    endDate: "October 31, 2022",
    detail: "In Person",
    type: "Challenge",
    url: "",
  },
  {
    university: "Izmir Institute of Technology",
    startDate: "October 28, 2022",
    endDate: "October 31, 2022",
    detail: "In Person",
    type: "Hackathon",
    url: "https://qisk.it/fallfesthype",
  },
  {
    university: "AUC (American University in Cairo)",
    startDate: "October 28, 2022",
    endDate: "October 31, 2022",
    detail: "In Person",
    type: "Challenge, Hackathon, Workshop Series",
    url: "https://github.com/hamzakamel1/Qiskit-FallFest-AUC-Egypt-2022",
  },
  {
    university: "Qiskit Fall Fest Morocco",
    startDate: "October 27, 2022",
    endDate: "October 30, 2022",
    detail: "In Person",
    type: "Challenge, Workshop Series",
    url: "https://sites.google.com/view/qiskit-fall-fest-morocco/home",
  },
  {
    university: "University of Maryland",
    startDate: "October 28, 2022",
    endDate: "October 30, 2022",
    detail: "In Person",
    type: "Workshop Series",
    url: "https://umduqa.github.io/FallFest.html",
  },
  {
    university: "University of Victoria",
    startDate: "November 26, 2022",
    endDate: "November 27, 2022",
    detail: "Hybrid",
    type: "Workshop Series",
    url: "",
  },
];

const wave4Schedule: eventSchedule[] = [
  {
    university: "RV PU College",
    startDate: "November 6, 2022",
    endDate: "November 7, 2022",
    detail: "In Person",
    type: "Challenge, Workshop Series",
    url: "https://github.com/Bellstate05/QiskitFallFest_RVPU",
  },
  {
    university: "UCLA",
    startDate: "October 31, 2022",
    endDate: "November 10, 2022",
    detail: "Online",
    type: "Hackathon",
    url: "https://github.com/amandajyounes/UCLA_fallfest_2022",
  },
  {
    university: "Quantum Fall Fest TU Wien",
    startDate: "November 19, 2022",
    endDate: "November 20, 2022",
    detail: "In Person",
    type: "Workshop Series",
    url: "",
  },
  {
    university: "Indian Institute of Technology Roorkee",
    startDate: "November 4, 2022",
    endDate: "November 6, 2022",
    detail: "In Person",
    type: "Challenge, Hackathon",
    url: "https://github.com/qcgiitr/iitr-fall-fest-22",
  },
  {
    university: "Penn State",
    startDate: "November 5, 2022",
    endDate: "November 6, 2022",
    detail: "In Person",
    type: "Challenge, Hackathon, Workshop Series",
    url: "",
  },
  {
    university: "Quest - Qiskit Fall Fest, BITS Goa Chapter",
    startDate: "November 25, 2022",
    endDate: "November 28, 2022",
    detail: "In Person",
    type: "Challenge, Hackathon, Workshop Series",
    url: "https://github.com/qBITS-github/Quest-Qiskit-Fall-Fest",
  },
];

const scheduleToTableData = (slot: eventSchedule) => [
  {
    styles:
      "min-width: 10rem; display: inline-block; padding-top: 8px; padding-bottom: 8px; font-weight: bold",
    data: slot.university,
  },
  {
    styles: "min-width: 9rem; display: inline-block;",
    data: slot.startDate,
  },
  {
    styles: "min-width: 9rem; display: inline-block;",
    data: slot.endDate,
  },
  {
    styles:
      "min-width: 8rem; display: inline-block; padding-top: 8px; padding-bottom: 8px",
    data: slot.detail,
  },
  {
    styles:
      "min-width: 10rem; display: inline-block; padding-top: 8px; padding-bottom: 8px",
    data: slot.type,
  },
  {
    styles:
      "min-width: 10rem; display: inline-block; padding-top: 8px; padding-bottom: 8px",
    link: slot.url,
  },
];

const agenda = {
  title: "Schedule of Events",
  subtitle: "*Schedule subject to change",
  weeks: [
    {
      tabName: "Wave 1",
      tableData: wave1Schedule.map(scheduleToTableData),
    },
    {
      tabName: "Wave 2",
      tableData: wave2Schedule.map(scheduleToTableData),
    },
    {
      tabName: "Wave 3",
      tableData: wave3Schedule.map(scheduleToTableData),
    },
    {
      tabName: "Wave 4",
      tableData: wave4Schedule.map(scheduleToTableData),
    },
  ],
};

interface HelpfulResourcesSection {
  title: string;
  resources: DescriptionCard[];
}

const helpfulResources: HelpfulResourcesSection = {
  title: "Resources",
  resources: [
    {
      title: "Let us know if you have any questions!",
      description:
        "If your questions aren't answered by the FAQ above or our blog post, please use this form to submit your enquiries direct to the team.",
      cta: {
        url: "mailto:qiskit.events@us.ibm.com",
        label: "Enquire now",
        segment: {
          cta: "qiskt-fall-fest-email",
          location: "helpful-resources",
        },
      },
    },
    {
      title: "Learn about and install Qiskit",
      description:
        "Prepare for the Fall Fest by reviewing the documentation and installing Qiskit.",
      cta: {
        url: "https://qiskit.org/documentation/getting_started.html#installation",
        label: "Install here",
        segment: {
          cta: "qiskit-install",
          location: "helpful-resources",
        },
      },
    },
    {
      title: "Qiskit Medium",
      description:
        "This blog provides a nice overview of Qiskit and its direction as we explore what applications can be done on today's quantum devices.",
      cta: {
        url: "https://medium.com/@qiskit",
        label: "Read the blog",
        segment: {
          cta: "qiskit-medium",
          location: "helpful-resources",
        },
      },
    },
    {
      title: "Code of conduct",
      description:
        "Qiskit is dedicated to providing an enjoyable and safe experience for all participants. We have a code of conduct that all events adhere to.",
      cta: {
        url: "https://github.com/Qiskit/qiskit/blob/master/CODE_OF_CONDUCT.md",
        label: "See code of conduct",
        segment: {
          cta: "code-of-conduct",
          location: "helpful-resources",
        },
      },
    },
  ],
};

const fallFest2022UniversityDirectory = [
  {
    title: "Qiskit Fall Fest Algiers",
    image: "/images/events/fall-fest/algiers.png",
    startDate: "October 21, 2022",
    detail: "In Person",
    cta: {
      label: "Learn more here",
      url: "https://qiskit-fall-fest-algiers.wtmalgiers.org/",
      segment: {
        cta: "the-higher-national-school-of-computer-science",
        location: "fall-fest-page",
      },
    },
  },
  {
    title: "RV PU College",
    image: "/images/events/fall-fest/bengalaru.png",
    startDate: "November 6, 2022",
    detail: "In Person",
    cta: {
      label: "Learn more here",
      url: "https://github.com/Bellstate05/QiskitFallFest_RVPU",
      segment: { cta: "rv-pu-college", location: "fall-fest-page" },
    },
  },
  {
    title: "University of Victoria",
    image: "/images/events/fall-fest/british_columbia.png",
    startDate: "November 26, 2022",
    detail: "Hybrid",
    cta: {
      label: "Learn more here",
      url: "",
      segment: { cta: "university-of-victoria", location: "fall-fest-page" },
    },
  },
  {
    title: "AUC (American University in Cairo)",
    image: "/images/events/fall-fest/cairo.png",
    startDate: "October 28, 2022",
    detail: "In Person",
    cta: {
      label: "Learn more here",
      url: "https://github.com/hamzakamel1/Qiskit-FallFest-AUC-Egypt-2022",
      segment: {
        cta: "american-university-in-cairo",
        location: "fall-fest-page",
      },
    },
  },
  {
    title: "UCLA",
    image: "/images/events/fall-fest/california.png",
    startDate: "October 31, 2022",
    detail: "Online",
    cta: {
      label: "Learn more here",
      url: "https://github.com/amandajyounes/UCLA_fallfest_2022",
      segment: {
        cta: "university-california-los-angeles",
        location: "fall-fest-page",
      },
    },
  },
  {
    title: "Universidad Simón Bolívar",
    image: "/images/events/fall-fest/caracas.png",
    startDate: "October 21, 2022",
    detail: "Online",
    cta: {
      label: "Learn more here",
      url: "https://www.cofalumniusb.org/qiskit-fall",
      segment: { cta: "universidad-simón-bolívar", location: "fall-fest-page" },
    },
  },
  {
    title: "Coimbatore Institute of Technology, India",
    image: "/images/events/fall-fest/coimbatore.png",
    startDate: "October 6, 2022",
    detail: "Online",
    cta: {
      label: "Learn more here",
      url: "https://github.com/CIT-QUANTUM-HACKATHON/CIT-QUANTUM-HACKATHON-2022",
      segment: {
        cta: "coimbatore-institute-of-Technology-india",
        location: "fall-fest-page",
      },
    },
  },
  {
    title: "Quantum Fall Fest QColombia",
    image: "/images/events/fall-fest/colombia.png",
    startDate: "October 10, 2022",
    detail: "Online",
    cta: {
      label: "Learn more here",
      url: "https://github.com/QColombia/Quantum-Fall-Fest-2022",
      segment: {
        cta: "quantum-fall-fest-qcolombia",
        location: "fall-fest-page",
      },
    },
  },
  {
    title: "Yale University",
    image: "/images/events/fall-fest/connecticut.png",
    startDate: "October 3, 2022",
    detail: "In Person",
    cta: {
      label: "Learn more here",
      url: "https://yaleqc.com/categories/events/",
      segment: { cta: "yale-university", location: "fall-fest-page" },
    },
  },
  {
    title: "QickStart : A Qiskit Powered Intro to Quantum Computing",
    image: "/images/events/fall-fest/delhi.png",
    startDate: "October 3, 2022",
    detail: "In Person",
    cta: {
      label: "Learn more here",
      url: "https://github.com/TheGupta2012/NSUT-Qiskit-Fall-Fest",
      segment: {
        cta: "qickstart-a-qiskit-powered-intro-to-quantum-computing",
        location: "fall-fest-page",
      },
    },
  },
  {
    title: "The University of Hong Kong",
    image: "/images/events/fall-fest/hong_kong.png",
    startDate: "October 25, 2022",
    detail: "In Person",
    cta: {
      label: "Learn more here",
      url: "",
      segment: {
        cta: "the-university-of-hong-kong",
        location: "fall-fest-page",
      },
    },
  },
  {
    title: "Purdue University",
    image: "/images/events/fall-fest/indiana.png",
    startDate: "October 3, 2022",
    detail: "In Person",
    cta: {
      label: "Learn more here",
      url: "https://github.com/purduequaic/qiskit-fall-fest-22",
      segment: { cta: "purdue-university", location: "fall-fest-page" },
    },
  },
  {
    title: "Qiskit Fall Fest Kolkata Chapter",
    image: "/images/events/fall-fest/kolkata.png",
    startDate: "October 17, 2022",
    detail: "Online",
    cta: {
      label: "Learn more here",
      url: "https://ritajitmajumdar.github.io/",
      segment: {
        cta: "qiskit-fall-fest-kolkata-chapter",
        location: "fall-fest-page",
      },
    },
  },
  {
    title: "Qiskit Fall Fest Mexico-IPN",
    image: "/images/events/fall-fest/mexico_city.png",
    startDate: "October 17, 2022",
    detail: "Online",
    cta: {
      label: "Learn more here",
      url: "https://proyectosrym.cic.ipn.mx/qcoloquio/",
      segment: {
        cta: "qiskit-fall-fest-mexico-ipn",
        location: "fall-fest-page",
      },
    },
  },
  {
    title: "University of Maryland",
    image: "/images/events/fall-fest/maryland.png",
    startDate: "October 28, 2022",
    detail: "In Person",
    cta: {
      label: "Learn more here",
      url: "https://umduqa.github.io/FallFest.html",
      segment: { cta: "university-of-maryland", location: "fall-fest-page" },
    },
  },
  {
    title: "Case Western Reserve University",
    image: "/images/events/fall-fest/ohio.png",
    startDate: "October 10, 2022",
    detail: "In Person",
    cta: {
      label: "Learn more here",
      url: "https://github.com/Case-Quantum-Computing-Club/CQC-qiskit-fall-fest-22",
      segment: {
        cta: "case-western-reserve-university",
        location: "fall-fest-page",
      },
    },
  },
  {
    title: "University of Chicago",
    image: "/images/events/fall-fest/illinois.png",
    startDate: "October 10, 2022",
    detail: "In Person",
    cta: {
      label: "Learn more here",
      url: "https://www.facebook.com/groups/ucquantum",
      segment: { cta: "university-of-chicago", location: "fall-fest-page" },
    },
  },
  {
    title: "Fundamentals of Quantum Computing (Thapar University)",
    image: "/images/events/fall-fest/patiala.png",
    startDate: "October 15, 2022",
    detail: "Hybrid",
    cta: {
      label: "Learn more here",
      url: "https://github.com/developer-student-club-thapar/Qiskit-Fall-Fest-2022",
      segment: { cta: "thapar-university", location: "fall-fest-page" },
    },
  },
  {
    title: "Penn State",
    image: "/images/events/fall-fest/pennsylvania.png",
    startDate: "November 5, 2022",
    detail: "In Person",
    cta: {
      label: "Learn more here",
      url: "",
      segment: { cta: "penn-state", location: "fall-fest-page" },
    },
  },
  {
    title: "Quest - Qiskit Fall Fest, BITS Goa Chapter",
    image: "/images/events/fall-fest/goa.png",
    startDate: "November 25, 2022",
    detail: "In Person",
    cta: {
      label: "Learn more here",
      url: "https://github.com/qBITS-github/Quest-Qiskit-Fall-Fest",
      segment: {
        cta: "quest-qiskit-fall-fest-bits-goa-chapter",
        location: "fall-fest-page",
      },
    },
  },
  {
    title: "Qiskit Fall Fest Morocco",
    image: "/images/events/fall-fest/morocco.png",
    startDate: "October 27, 2022",
    detail: "In Person",
    cta: {
      label: "Learn more here",
      url: "https://sites.google.com/view/qiskit-fall-fest-morocco/home",
      segment: { cta: "qiskit-fall-fest-morocco", location: "fall-fest-page" },
    },
  },
  {
    title: "Indian Institute of Technology Roorkee",
    image: "/images/events/fall-fest/roorkee.png",
    startDate: "October 28, 2022",
    detail: "In Person",
    cta: {
      label: "Learn more here",
      url: "https://github.com/qcgiitr/iitr-fall-fest-22",
      segment: {
        cta: "indian-institute-of-technology-roorkee",
        location: "fall-fest-page",
      },
    },
  },
  {
    title: "Escuela de Computación Cuántica",
    image: "/images/events/fall-fest/lima.png",
    startDate: "October 17, 2022",
    detail: "Online",
    cta: {
      label: "Learn more here",
      url: "https://pythonclubforphysicists.notion.site/pythonclubforphysicists/Primera-Escuela-de-Computaci-n-Cu-ntica-af219f239f90418b900cba004e27c789",
      segment: {
        cta: "escuela-de-computación-cuántica",
        location: "fall-fest-page",
      },
    },
  },
  {
    title: "Princeton University",
    image: "/images/events/fall-fest/new_jersey.png",
    startDate: "October 28, 2022",
    detail: "In Person",
    cta: {
      label: "Learn more here",
      url: "",
      segment: { cta: "princeton-university", location: "fall-fest-page" },
    },
  },
  {
    title: "University of Santiago de Compostela, Spain",
    image: "/images/events/fall-fest/santiago.png",
    startDate: "October 21, 2022",
    detail: "In Person",
    cta: {
      label: "Learn more here",
      url: "https://github.com/wyqian1027/Qiskit-Fall-Fest-USC-2022",
      segment: {
        cta: "university-of-santiago-de-compostela-spain",
        location: "fall-fest-page",
      },
    },
  },
  {
    title: "University of Texas at Austin",
    image: "/images/events/fall-fest/texas.png",
    startDate: "October 10, 2022",
    detail: "In Person",
    cta: {
      label: "Learn more here",
      url: "https://github.com/UT-Austin-Quantum-Collective/Qiskit-Fall-Fest-2022/blob/main/README.md",
      segment: {
        cta: "university-of-texas-at-austin",
        location: "fall-fest-page",
      },
    },
  },
  {
    title: "Izmir Institute of Technology",
    image: "/images/events/fall-fest/urla.png",
    startDate: "October 28, 2022",
    detail: "In Person",
    cta: {
      label: "Learn more here",
      url: "https://qisk.it/fallfesthype",
      segment: {
        cta: "izmir-institute-of-technology",
        location: "fall-fest-page",
      },
    },
  },
  {
    title: "Start Innovation hub",
    image: "/images/events/fall-fest/uyo.png",
    startDate: "October 15, 2022",
    detail: "In Person",
    cta: {
      label: "Learn more here",
      url: "https://twitter.com/Q_affinity",
      segment: { cta: "start-innovation-hub", location: "fall-fest-page" },
    },
  },
  {
    title: "Quantum Fall Fest TU Wien",
    image: "/images/events/fall-fest/vienna.png",
    startDate: "November 19, 2022",
    detail: "In Person",
    cta: {
      label: "Learn more here",
      url: "",
      segment: { cta: "quantum-fall-fest-tu-wien", location: "fall-fest-page" },
    },
  },
];

export { header, agenda, helpfulResources, fallFest2022UniversityDirectory };
