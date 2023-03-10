import avatarHenry from "../img/avatarHenry.jpeg";
import avatarMed from "../img/avatarMed.jpeg";
import avatarOH from "../img/avatarOH.png";

const activity = [
  {
    id: 1,
    type: "comment",
    experience: { where: "Henry", title: "FullStack Web Developer" },
    imageUrl: avatarHenry,
    job: "PawCare - Proyecto Final. En el cual trabajé junto a 6 compañeros utilizando la metodología Scrum para crear una página web para servicio de guardería de mascotas. La página debía tener las siguientes funcionalidades: búsqueda, filtros combinados, ordenamientos, autenticación local y de terceros, pasarela de pagos, deploy, panel de administrador, valoraciones, comentarios y notificaciones vía email.",
    obs: "Las tecnologías utilizadas fueron: JavaScript, React, Redux, Bootstrap , NodeJS, Express, Google login, MercadoPago, Auth0, Cloudinary, distintas librerías y frameworks. ",
    date: "3 semanas",
  },
  {
    id: 1,
    type: "comment",
    experience: { where: "Henry", title: "FullStack Web Developer" },
    imageUrl: avatarHenry,
    job: "GameStream - Proyecto Individual destinado a la creación de una página web, consumiendo una API con información sobre videojuegos. El proyecto debía contar con las funcionalidades de búsquedas, filtrados, ordenamientos y creación de actividades.",
    obs: "Las tecnologías utilizadas fueron: JavaScript, React, Redux, CSS, NodeJS, Express, Sequelize y PostgreSQL.",
    date: "2 semanas",
  },
  {
    id: 2,
    type: "comment",
    experience: { where: "Medicus S.A.", title: "Auxiliar en Odontología" },
    imageUrl: avatarMed,
    job: "Tareas realizadas: Manejo de liquidación de prestadores, historia clínica de pacientes con auditado. Bioseguridad y esterilización. Manejo y preparación de materiales e instrumental a ultilizar en distintas especialidad. Coordinación con laboratorios. Preparación del paciente. Manejo y preparación del área en quirófano con asistencia en técnica a 4 manos. Organización y sanidad en área clínica.",
    obs: "Aptitudes: Resolución de problemas · Comunicación · Trabajo en equipo · Habilidades sociales · Programación de citas",
    date: "5 años 9 meses",
  },
  {
    id: 3,
    type: "assigne",
    experience: { where: "Odontologia del Hacer", title: "Asistente Dental" },
    imageUrl: avatarOH,
    job: "Tareas realizadas: Manejo de fichas, anotación y auditado. Bioseguridad y esterilización. Manejo y preparación de materiales e instrumental. Coordinación con proveedores, laboratorios. Preparación del paciente. Liquidación a prepagas. Coordinacion de turnos. Asistencia a profesionales en técnica a 4 manos. Revelado de radiografías periapicales. Organización y sanidad en área clínica.",
    obs: "Aptitudes: Resolución de problemas · Comunicación · Trabajo en equipo · Habilidades sociales · Asistencia de administración · Programación de citas",
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
                        {activityItem.experience.title}
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        {activityItem.experience.where} - {activityItem.date}
                      </p>
                    </div>
                    <div className="mt-2 text-sm text-gray-700">
                      <p>{activityItem.job}</p>
                      <p>{activityItem.obs}</p>
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
