import gamestream from "../img/GameStream.png";
import pawcare from "../img/PawCare.png";
import avatarPC from "../img/avatarPC.png";
import avatarGS from "../img/avatarGS.png";
import { useHistory } from "react-router-dom";

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
    <div className="bg-white py-20 sm:py-30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Estos son algunos de mis proyectos, te invito a clickear sobre cada
            uno para ver más detalles
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {posts.map((post) => (
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
          ))}
        </div>
      </div>
    </div>
  );
}
