import avatarHenry from "../img/avatarHenry.jpeg";
import avatarMed from "../img/avatarMed.jpeg";
import avatarOH from "../img/avatarOH.png";

const activity = [
  {
    id: 1,
    type: "comment",
    experience: { where: "Henry", title: "FullStack Web Developer" },
    imageUrl: avatarHenry,
    title: "Pawcare",
    description:
      "Proyecto Final. En el cual trabajé junto a 6 compañeros utilizando la metodología Scrum para crear una página web para servicio de guardería de mascotas.",
    funcionalidades:
      "búsqueda, filtros combinados, ordenamientos, autenticación local y de terceros, pasarela de pagos, deploy, panel de administrador, valoraciones, comentarios y notificaciones vía email.",
    tecnologies:
      "JavaScript, React, Redux, Bootstrap , NodeJS, Express, Google login, MercadoPago, Auth0, Cloudinary, distintas librerías y frameworks.",
    date: "3 semanas",
  },
  {
    id: 1,
    type: "comment",
    experience: { where: "Henry", title: "FullStack Web Developer" },
    imageUrl: avatarHenry,
    title: "GameStream",
    description:
      "Proyecto Individual destinado a la creación de una página web, consumiendo una API con información sobre videojuegos.",
    funcionalidades:
      "búsquedas, filtrados, ordenamientos y creación de actividades",
    tecnologies:
      "JavaScript, React, Redux, CSS, NodeJS, Express, Sequelize y PostgreSQL.",
    date: "2 semanas",
  },
  {
    id: 2,
    type: "comment",
    experience: { where: "Medicus S.A.", title: "Auxiliar en Odontología" },
    imageUrl: avatarMed,
    description: "",
    funcionalidades:
      "Manejo de liquidación de prestadores, historia clínica de pacientes con auditado. Bioseguridad y esterilización. Manejo y preparación de materiales e instrumental a ultilizar en distintas especialidad. Coordinación con laboratorios. Preparación del paciente. Manejo y preparación del área en quirófano con asistencia en técnica a 4 manos. Organización y sanidad en área clínica.",
    aptitudes:
      "Resolución de problemas · Comunicación · Trabajo en equipo · Habilidades sociales · Programación de citas",
    date: "5 años 9 meses",
  },
  {
    id: 3,
    type: "assigne",
    experience: { where: "Odontologia del Hacer", title: "Asistente Dental" },
    imageUrl: avatarOH,
    description: "",
    funcionalidades:
      "Manejo de fichas, anotación y auditado. Bioseguridad y esterilización. Manejo y preparación de materiales e instrumental. Coordinación con proveedores, laboratorios. Preparación del paciente. Liquidación a prepagas. Coordinacion de turnos. Asistencia a profesionales en técnica a 4 manos. Revelado de radiografías periapicales. Organización y sanidad en área clínica.",
    aptitudes:
      "Resolución de problemas · Comunicación · Trabajo en equipo · Habilidades sociales · Asistencia de administración · Programación de citas",
    date: "6 años 5 meses",
  },
];

export default function Experience() {
  return (
    <div className="bg-white dark:bg-slate-900 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-10 lg:px-20">
        <ul className="-mb-8 space-y-16 ">
          {activity.map((activityItem, activityItemIdx) => (
            <li key={activityItem.id}>
              <div className="relative pb-10">
                {activityItemIdx !== activity.length - 1 ? (
                  <span
                    className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200 dark:bg-slate-700"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="relative flex items-start space-x-3">
                  <>
                    <div className="relative">
                      <img
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white dark:ring-slate-700"
                        src={activityItem.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div>
                        <div className="text-sm dark:text-white">
                          {activityItem.experience.title}
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500 ">
                          {activityItem.experience.where} - {activityItem.date}
                        </p>
                      </div>
                      <div className="mt-2 text-sm text-gray-700 dark:text-gray-400">
                        {activityItem.title && (
                          <p className="text-gray-900 font-medium">
                            {activityItem.title}
                          </p>
                        )}
                        <p>{activityItem.description}</p>
                        {activityItem.funcionalidades && (
                          <>
                            <p className="text-gray-500 mt-3">
                              Funcionalidades:
                            </p>
                            <p className="text-gray-500">
                              {activityItem.funcionalidades}
                            </p>
                          </>
                        )}

                        <p className="text-gray-500 mt-2">{activityItem.obs}</p>
                        {activityItem.tecnologies && (
                          <>
                            <p className="text-gray-500">
                              Tecnologías utilizadas:
                            </p>
                            <p className="text-gray-500">
                              {activityItem.tecnologies}
                            </p>
                          </>
                        )}
                        {activityItem.aptitudes && (
                          <>
                            <p className="text-gray-500 mt-3">Aptitudes:</p>
                            <p className="text-gray-500">
                              {activityItem.aptitudes}
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                  </>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
