export default function Disponibilidad() {
  return (
    <section
      id="disponibilidad"
      className="py-24 px-6 bg-[#f8f8f8]"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-6">
          Disponibilidad
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Consulta rápidamente mis fechas disponibles para nuevos proyectos.
        </p>

        <div className="bg-white rounded-3xl p-8 shadow-sm border">

          <div className="flex flex-col md:flex-row justify-center gap-8">

            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-green-500"></div>
              <span className="text-lg font-medium">
                Disponible
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-red-500"></div>
              <span className="text-lg font-medium">
                Sin disponibilidad
              </span>
            </div>

          </div>

          <div className="mt-10 text-center text-gray-500">
            Calendario sincronizado próximamente con Google Calendar.
          </div>

        </div>

      </div>
    </section>
  );
}