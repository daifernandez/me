import { CheckIcon, AcademicCapIcon } from "@heroicons/react/20/solid";

const timeline = [
  {
    id: 11,
    content: "Curso de",
    target: "Desarrollo de Aplicaciones para Apple Watch",
    date: "Jun. 2022",
    icon: CheckIcon,
    iconBackground: "bg-emerald-400",
  },
  {
    id: 10,
    content: "Curso ",
    target: "Profesional de Git y GitHub",
    date: "May. 2022",
    icon: CheckIcon,
    iconBackground: "bg-emerald-400",
  },
  {
    id: 9,
    content: "Curso de",
    target: "SwiftUI: Porteo y Ciclo de Vida de Aplicaciónes",
    date: "Mar. 2022",
    icon: CheckIcon,
    iconBackground: "bg-emerald-400",
  },
  {
    id: 8,
    content: "Curso de",
    target: "Desarrollo de Aplicaciones iOS con Swift",
    date: "Feb. 2022",
    icon: CheckIcon,
    iconBackground: "bg-emerald-400",
  },
  {
    id: 7,
    content: "Curso de",
    target: "Programación orientada a objetos en Swift",
    date: "Ene. 2022",
    icon: CheckIcon,
    iconBackground: "bg-emerald-400",
  },
  {
    id: 6,
    content: "Curso de",
    target: "Programación orientada a objetos: POO",
    date: "Ene. 2022",
    icon: CheckIcon,
    iconBackground: "bg-emerald-400",
  },
  {
    id: 5,
    content: "Curso de",
    target: "SwiftUI desde Cero",
    date: "Ene. 2022",
    icon: CheckIcon,
    iconBackground: "bg-emerald-400",
  },
  {
    id: 4,
    content: "Curso de",
    target: "Programación en Swift: Funciones",
    date: "Nov. 2021",
    icon: CheckIcon,
    iconBackground: "bg-emerald-400",
  },
  {
    id: 3,
    content: "Curso de",
    target: "Programación en Swift",
    date: "Oct. 2021",
    icon: CheckIcon,
    iconBackground: "bg-emerald-400",
  },
  {
    id: 2,
    content: "Curso de",
    target: "Programación Estruturada",
    date: "Oct. 2021",
    icon: CheckIcon,
    iconBackground: "bg-emerald-400",
  },
  {
    id: 1,
    content: "Curso de",
    target: "Introducción a Swift",
    date: "Oct. 2021",
    icon: CheckIcon,
    iconBackground: "bg-emerald-400",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const posts = [
  {
    id: 1,
    title: "Henry",
    where: "FullStack Developer",
    description:
      "Modalidad Full-time con mas de 800 horas en tecnologías como Javascript, NodeJS, React, Redux y ExpressJS",
    date: "Feb. 2023",
    category: { title: "Tecnología" },
    author: {
      name: "Full Stack Web Developer",
      role: "",
    },
  },
  {
    id: 2,
    title: "Platzi",
    where: "",
    description: "Ruta de Aprendizaje de Desarrollo de Aplicaciones iOS",
    date: "Jun. 2022",
    category: { title: "Tecnología" },
    author: {
      name: "Apple FullStack Developer",
      role: "iOS Mobile Developer",
    },
  },
  {
    id: 3,
    title: "Universidad Complutense de Madrid",
    where: "Google Activate",
    description: "Curso de Desarrollo de Apps Móviles",
    date: "2021",
    category: { title: "Tecnología" },
    author: {
      name: "Curso de Desarrollo de Apps Moviles",
      role: "",
    },
  },
  {
    id: 4,
    title: "Ateneo Argentino de Odontología",
    where: "Universidad de Favaloro, Buenos Aires, Argentina",
    description: "Caracter teórico con prácticas en clínica y evaluación",
    date: "2010",
    category: { title: "Salud" },
    author: {
      name: "Auxiliar de Odontología",
      role: "Universidad de Favaloro, Buenos Aires, Argentina",
    },
  },
];

export default function Education() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {posts.map((post) => (
          <div className="space-y-16 border-t border-gray-200 sm:mt-1 sm:pt-1">
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs mt-5">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>

                {post.category.title}
              </div>
              <div className="group relative">
                <h4 className="mt-4  text-lg font-semibold leading-5 text-gray-600">
                  <span className="absolute inset-0" />
                  {post.title}
                </h4>
                <p className="mt-4 text-sm leading-6 text-gray-600 line-clamp-3">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4 mb-8">
                <AcademicCapIcon
                  stroke="#9e9e9e"
                  fill="none"
                  className="h-10 w-10 rounded-full bg-white-40"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-lg text-indigo-600">
                    <span className="absolute inset-0 " />
                    {post.author.name}
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
              {post.title === "Platzi" ? (
                <div className="flow-root mb-10">
                  <ul className="-mb-8">
                    {timeline.map((event, eventIdx) => (
                      <li key={event.id}>
                        <div className="relative pb-7">
                          {/* {eventIdx !== timeline.length - 1 ? (
                            <span
                              className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                              aria-hidden="true"
                            />
                          ) : null} */}
                          <div className="relative flex space-x-3">
                            <div>
                              <span
                                className={classNames(
                                  event.iconBackground,
                                  "h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"
                                )}
                              >
                                <event.icon
                                  className="h-5 w-5 text-white"
                                  aria-hidden="true"
                                />
                              </span>
                            </div>
                            <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                              <div>
                                <p className="font-medium text-gray-900">
                                  {event.target}
                                </p>
                              </div>
                              <div className="whitespace-nowrap text-right text-sm text-gray-500">
                                <time dateTime={event.datetime}>
                                  {event.date}
                                </time>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </article>
          </div>
        ))}
      </div>
    </div>
  );
}
