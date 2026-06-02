export default function Disponibilidad() {
  return (
    <section
      id="disponibilidad"
      className="py-24 px-6 bg-[#f8f8f8]"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-6">
          Disponibilidad
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Consulta mis fechas disponibles para nuevos proyectos.
        </p>

        <div className="flex justify-center gap-8 mb-10 flex-wrap">

          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-green-500"></div>
            <span>Disponible</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-red-500"></div>
            <span>No disponible</span>
          </div>

        </div>

        <div className="bg-white rounded-3xl overflow-hidden shadow-md border">

          <iframe
            src="https://calendar.google.com/calendar/embed?src=markmartinezemp%40gmail.com&ctz=Europe%2FMadrid"
            style={{ border: 0 }}
            width="100%"
            height="700"
            loading="lazy"
          />

        </div>

      </div>
    </section>
  );
}