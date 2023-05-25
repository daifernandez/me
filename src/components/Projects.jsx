import gamestream from "../img/GameStream.png";
import pawcare from "../img/PawCare.png";
import avatarPC from "../img/avatarPC.png";
import avatarGS from "../img/avatarGS.png";
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
    datetime: "2020-03-16",
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
    author: {
      name: "Proyecto Grupal",
      imageUrl: avatarPC,
    },
  },
  // More posts...
];

export default function Projects() {
  const redirect = useHistory();
  return (
    <div className="bg-white dark:bg-slate-900 py-20 sm:py-30">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h3 className="text-base font-semibold leading-5 text-indigo-500">
            Proyectos
          </h3>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            <div className="mx-auto">
              <p className="mt-5 mb-10 text-base leading-7 text-gray-700 dark:text-gray-400">
                Estos son algunos de mis Proyectos más recientes.
              </p>
            </div>
          </p>
        </div>

        <div className="mx-auto mt-5 mb-5 max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-5 lg:mx-0 lg:max-w-none ">
          <Splide options={{ rewind: true }} aria-label="React Splide Example">
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
                    <time dateTime={post.datetime} className="mr-8">
                      {post.date}
                    </time>
                    <div className="-ml-4 flex items-center gap-x-4">
                      <svg
                        viewBox="0 0 2 2"
                        className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                      >
                        <circle cx={1} cy={1} r={1} />
                      </svg>
                      <div className="flex gap-x-2.5">
                        <img
                          src={post.author.imageUrl}
                          alt=""
                          className="h-6 w-6 flex-none rounded-full bg-white/10"
                        />
                        {post.author.name}
                      </div>
                    </div>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                    <button
                      onClick={
                        post.title === "GameStream"
                          ? () => redirect.push("/projects/gamestream")
                          : () => redirect.push("/projects/pawcare")
                      }
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
            <p className="mt-10 text-base leading-7 text-gray-700 dark:text-gray-400">
              Te invito a hacer click en cada uno para obtener más detalles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
