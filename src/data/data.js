import gamestream from "../img/GameStream.png";
import pawcare from "../img/PawCare.png";
import capellari from "../img/capellari.jpeg";
import avatarPC from "../img/avatarPC.png";
import avatarGS from "../img/avatarGS.png";
import avatarHenry from "../img/avatarHenry.jpeg";
import avatarMed from "../img/avatarMed.jpeg";
import avatarOH from "../img/avatarOH.png";

const education = [
  {
    id: 1,
    where: "Coderhouse",
    description:
      "14 horas dictadas a lo largo de 7 semanas, cumpliendo todos los requisitos académicos exigidos.",
    date: "2023",
    category: { title: "Tecnología" },
    title: {
      name: "NextJS",
    },
    experience: [
      {
        id: 1,
        type: "comment",
        experience: {
          activity: "Proyecto Final",
          title: "FullStack Web Developer",
        },
        imageUrl: capellari,
        title: "Capellari",
        description: "Página e-commerce.",
        date: "",
        imageProject: capellari,
        project: {
          id: 1,
          title: "Capellari",
          href: "",
          imageUrl: "",
          date: "Dic 2023",
          author: {
            name: "Proyecto Final",
            imageUrl: "",
          },
        },
      },
    ],
  },
  {
    id: 2,
    where: "Henry",
    description:
      "Modalidad Full-time con mas de 800 horas en tecnologías como Javascript, NodeJS, React, Redux y ExpressJS",
    date: "2023",
    category: { title: "Tecnología" },
    title: {
      name: "Full Stack Web Developer",
    },
    experience: [
      {
        id: 2,
        type: "comment",
        experience: {
          activity: "Proyecto Final",
          title: "FullStack Web Developer",
        },
        imageUrl: avatarPC,
        title: "Pawcare",
        description: "Página web para servicio de guardería de mascotas.",
        date: "",
        imageProject: pawcare,
        project: {
          id: 2,
          title: "PawCare",
          href: "https://pawcare.vercel.app",
          imageUrl: pawcare,
          date: "Feb 2023",
          datetime: "2020-03-16",
          author: {
            name: "Proyecto Grupal",
            imageUrl: avatarPC,
          },
        },
      },
      {
        id: 3,
        type: "comment",
        experience: {
          activity: "Proyecto Individual",
          title: "FullStack Web Developer",
        },
        imageUrl: avatarGS,
        title: "GameStream",
        description:
          "Creación de una página web, consumiendo una API con información sobre videojuegos.",
        date: "",
        imageProject: gamestream,
        project: {
          id: 3,
          title: "GameStream",
          href: "https://gamestream.dev",
          imageUrl: gamestream,
          date: "Ene 2023",
          datetime: "2020-03-16",
          author: {
            name: "Proyecto Individual",
            imageUrl: avatarGS,
          },
        },
      },
    ],
  },
  {
    id: 4,
    where: "Platzi",
    description: "Ruta de Aprendizaje de Desarrollo de Aplicaciones iOS",
    date: "2022",
    category: { title: "Tecnología" },
    title: {
      name: "Apple FullStack Developer - iOS Mobile Developer",
      role: "iOS Mobile Developer",
    },
  },
  {
    id: 5,
    where: "Universidad Complutense de Madrid - Google Activate",
    description: "Curso de Desarrollo de Apps Móviles",
    date: "2021",
    category: { title: "Tecnología" },
    title: {
      name: "Curso de Desarrollo de Apps Moviles",
      role: "",
    },
  },
  {
    id: 6,
    where: "Ateneo Argentino de Odontología | Universidad de Favaloro",
    description: "Caracter teórico con prácticas en clínica y evaluación",
    date: "2010",
    category: { title: "Salud" },
    title: {
      name: "Auxiliar de Odontología",
      role: "",
    },
    jobs: [
      {
        id: 7,
        title: "Auxiliar en Odontología",
        activity: "Medicus S.A.",
        imageUrl: avatarMed,
        aptitudes:
          "Resolución de problemas · Comunicación · Trabajo en equipo · Habilidades sociales · Programación de citas",
        date: "- 5 años 9 meses",
      },
      {
        id: 8,
        title: "Asistente Dental",
        activity: "Odontologia del Hacer",
        imageUrl: avatarOH,
        aptitudes:
          "Resolución de problemas · Comunicación · Trabajo en equipo · Habilidades sociales · Asistencia de administración · Programación de citas",
        date: "- 6 años 5 meses",
      },
    ],
  },
];

export default education;
