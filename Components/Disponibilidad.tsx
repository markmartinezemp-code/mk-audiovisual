export default function Disponibilidad() {
  return (
    <div>
      <h2 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
        Disponibilidad
      </h2>
      <p className="mt-4 max-w-xl text-lg text-[#5B6070]">
        Consulta qué fechas tengo ocupadas. Si tu día está libre, escríbeme y lo
        reservamos.
      </p>

      <div className="mt-10 overflow-hidden rounded-lg border border-[#0C0F1A]/15 bg-white">
        <iframe
          title="Calendario de disponibilidad de MK Audiovisual"
          src="https://calendar.google.com/calendar/embed?src=markmartinezemp%40gmail.com&ctz=Europe%2FMadrid&hl=es&mode=MONTH&showTitle=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0"
          className="h-[640px] w-full border-0 md:h-[820px]"
          loading="lazy"
        />
      </div>

      <a
        href="#contacto"
        className="mt-8 inline-block rounded-full bg-[#0C0F1A] px-8 py-3.5 font-semibold text-white transition hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0C0F1A]"
      >
        Reservar una fecha
      </a>
    </div>
  );
}