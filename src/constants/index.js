import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Student",
    company_name: "Erasmushogeschool Brussel",
    icon: starbucks,
    iconBg: "#383E56",
    date: "september 2021 - Juli 2022",
    points: [
      "In het eerste jaar van de opleiding Informatica aan de Erasmushogeschool Brussel heb ik een brede basis gelegd in verschillende aspecten van informatica. Ik leerde programmeren, werken met databanken, webontwikkeling en softwareontwerp, maar ook technische onderwerpen zoals hoe wifi werkt en hoe een computer precies functioneert. Door deze brede aanpak kreeg ik een goed overzicht van het vakgebied, maar na één jaar merkte ik dat ik me vooral wilde verdiepen in web- en app-development. Dit eerste jaar heeft me niet alleen technische kennis gegeven, maar ook geholpen om mijn interesses en toekomstige richting binnen de informatica duidelijker te bepalen.",
      
    ],
  },
  {
    title: "Student",
    company_name: "Thomas More Hogeschool",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "September 2022 - Juli 2025",
    points: [
      "Programmeren & development: HTML, CSS, JavaScript, React Native, Node.js, SQL, Vue.js",
      "Webontwikkeling & design: Webdevelopment en webdesign, Content Management Systems (CMS), zoals WordPress, Cascading Style Sheets (CSS) voor styling, Animatie en interactieve elementen",
      "Design tools & prototyping: Adobe XD, Figma",
      "Versiebeheer & samenwerking: Github",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "Super fijn om je er bij te hebben.",
    name: "Zander Meys",
    designation: "Oprichter",
    company: "Collectiv.",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQGAyeRvVWzVsg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1677502461443?e=1758758400&v=beta&t=ael23XNTQ6ASU5FRlUU5RYY0MuwXhAKrpgaHCu1BWC8",
  },
  
];

const projects = [
  {
    name: "Breezd",
    description:
      "Stoppen met vapen? Breezd helpt je! Breezd is je persoonlijke stopmaatje. Tel je puffs, bekijk je voortgang in duidelijke grafieken en bespaar geld terwijl je afbouwt. Samen zetten we stappen naar een vapevrije toekomst",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/JonasVanRoy6/Bachelorproef",
  },
  {
    name: "Ijsjes configurator",
    description:
      "Voor een project heb ik een 3D-configurator ontwikkeld waarmee klanten hun eigen ijsjes kunnen samenstellen. De configurator is gemaakt met Three.js en stelt gebruikers in staat om ingrediënten te kiezen en een visueel overzicht van hun ijsje te zien. Wanneer het ijsje klaar is, wordt de bestelling automatisch doorgestuurd naar de eigenaar van de ijsjeswinkel, zodat deze direct verwerkt kan worden. https://herexamen-build-configurator.vercel.app/",
    tags: [
      {
        name: "Vue.js",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Three.js",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/JonasVanRoy6/Herexamen_Build_Configurator",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
