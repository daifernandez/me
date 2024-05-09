import gamestream from "../img/GameStream.png";
import pawcare from "../img/PawCare.png";
import avatarPC from "../img/avatarPC.png";
import avatarGS from "../img/avatarGS.png";
import capellari from "../img/capellari.jpeg";
import { useHistory } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const posts = [
  {
    id: 1,
    title: "GameStream",
    href: "https://gamestream.dev",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl: gamestream,
    date: "Ene 2023",
    author: {
      name: "Proyecto Individual",
      imageUrl: avatarGS,
    },
  },
  {
    id: 2,
    title: "PawCare",
    href: "https://pawcare.vercel.app",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl: pawcare,
    date: "Feb 2023",
    author: {
      name: "Proyecto Grupal",
      imageUrl: avatarPC,
    },
  },
  {
    id: 3,
    title: "Capellari",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl: capellari,
    date: "Dic 2023",
    author: {
      name: "Proyecto Individual",
      imageUrl: avatarPC,
    },
  },
];
const categories = [
  {
    id: 1,
    title: "Desarrollo Web",
    projects: [
      {
        id: 1,
        title: "GameStream",
        href: "https://gamestream.dev",
        description:
          "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        imageUrl: gamestream,
        date: "Ene 2023",
        datetime: "2020-03-16",
        category: { title: "Desarrollo Web" },
        author: {
          name: "Proyecto Individual",
          imageUrl: avatarGS,
        },
      },
      {
        id: 2,
        title: "PawCare",
        href: "https://pawcare.vercel.app",
        description:
          "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        imageUrl: pawcare,
        date: "Feb 2023",
        datetime: "2020-03-16",
        category: { title: "Desarrollo Web" },
        author: {
          name: "Proyecto Grupal",
          imageUrl: avatarPC,
        },
      },
      {
        id: 3,
        title: "Capellari",
        href: "#",
        description:
          "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        imageUrl: capellari,
        date: "Dic 2023",
        datetime: "2020-03-16",
        category: { title: "Desarrollo Web" },
        author: {
          name: "Proyecto Individual",
          imageUrl: avatarPC,
        },
      },
    ],
  },
];

export default function Projects() {
  const redirect = useHistory();

  const handleClick = (title) => {
    if (title === "GameStream") {
      redirect.push("/projects/gamestream");
    }
    if (title === "Capellari") {
      redirect.push("/projects/capellari");
    } else {
      redirect.push("/projects/pawcare");
    }
  };

  return (
    <div className="animate-fade animate-once animate-duration-1000 animate-ease-in bg-white dark:bg-slate-900 py-20 sm:py-30">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="mt-6 text-lg leading-8 text-gray-600">
            <div className="mx-auto">
              <p className="mb-10 text-base leading-7 text-gray-700 dark:text-gray-400">
                {categories.map((category) => (
                  <div className="space-y-16 border-t border-gray-200 sm:mt-1 sm:pt-1  dark:border-slate-700">
                    <div className="items-center gap-x-4 text-xs mt-5">
                      <div className="grid grid-cols-1 text-sm font-semibold text-indigo-600 dark:text-indigo-500 mb-4 mt-20">
                        {category.title}
                      </div>
                      {/* <div className="dark:text-gray-500">{category.title}</div> */}
                      <div className="mx-auto mt-5 mb-5 max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-5 lg:mx-0 lg:max-w-none ">
                        <Splide
                          options={{ rewind: true }}
                          aria-label="React Splide Example"
                        >
                          {posts.map((post) => (
                            <SplideSlide>
                              <article
                                key={post.id}
                                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
                              >
                                <img
                                  src={post.imageUrl}
                                  alt=""
                                  className="absolute inset-0 -z-10 h-full w-full object-cover"
                                />
                                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                                  <time className="mr-8">{post.date}</time>
                                  <div className="-ml-4 flex items-center gap-x-4">
                                    <svg
                                      viewBox="0 0 2 2"
                                      className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                                    >
                                      <circle cx={1} cy={1} r={1} />
                                    </svg>
                                    <div className="flex gap-x-2.5">
                                      {/* <img
                                        src={post.author.imageUrl}
                                        alt=""
                                        className="h-6 w-6 flex-none rounded-full bg-white/10"
                                      /> */}
                                      {post.author.name}
                                    </div>
                                  </div>
                                </div>
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                                  <button
                                    onClick={() => handleClick(post.title)}
                                  >
                                    <span className="absolute inset-0" />
                                    {post.title}
                                  </button>
                                </h3>
                              </article>
                            </SplideSlide>
                          ))}
                        </Splide>

                        <div className="text-center">
                          <p className="mt-5 text-base leading-7 text-gray-700 dark:text-gray-400">
                            Te invito a hacer click en cada uno para obtener más
                            detalles.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </p>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
