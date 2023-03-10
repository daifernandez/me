import avatarHenry from "../img/avatarHenry.jpeg";
import avatarMed from "../img/avatarMed.jpeg";
import avatarOH from "../img/avatarOH.png";

const activity = [
  {
    id: 1,
    type: "comment",
    experience: { where: "Henry", title: "FullStack Web Developer" },
    imageUrl: avatarHenry,
    job: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. ",
    date: "3 semanas",
  },
  {
    id: 1,
    type: "comment",
    experience: { where: "Henry", title: "FullStack Web Developer" },
    imageUrl: avatarHenry,
    job: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. ",
    date: "2 semanas",
  },
  {
    id: 2,
    type: "comment",
    experience: { where: "Medicus S.A.", title: "Auxiliar en Odontología" },
    imageUrl: avatarMed,
    job: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. ",
    date: "5 años 9 meses",
  },
  {
    id: 3,
    type: "assigne",
    experience: { where: "Odontologia del Hacer", title: "Asistente Dental" },
    imageUrl: avatarOH,
    job: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. ",
    date: "6 años 5 meses",
  },
];

export default function Experience() {
  return (
    <div className="flow-root mt-20 justify-center ml-5 mr-5 mb-5">
      <ul role="list" className="-mb-8">
        {activity.map((activityItem, activityItemIdx) => (
          <li key={activityItem.id}>
            <div className="relative pb-8">
              {activityItemIdx !== activity.length - 1 ? (
                <span
                  className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex items-start space-x-3">
                <>
                  <div className="relative">
                    <img
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white"
                      src={activityItem.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div>
                      <div className="text-sm">
                        <a
                          href={activityItem.experience.href}
                          className="font-medium text-gray-900"
                        >
                          {activityItem.experience.title}
                        </a>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        {activityItem.experience.where} - {activityItem.date}
                      </p>
                    </div>
                    <div className="mt-2 text-sm text-gray-700">
                      <p>{activityItem.job}</p>
                    </div>
                  </div>
                </>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
