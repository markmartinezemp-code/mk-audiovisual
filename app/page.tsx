"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";

/* ---------- Tipografías ---------- */
const display = Bricolage_Grotesque({ subsets: ["latin"] });
const body = Hanken_Grotesk({ subsets: ["latin"] });

/* ---------- Paleta ----------
   Tinta    #0C0F1A  (fondos oscuros y texto)
   Hielo    #EEF0F4  (fondos claros)
   Cobalto  #2433FF  (acento y sección de contacto)
   Blanco   #FFFFFF
   Gris     #5B6070  (texto secundario)
*/

/* ---------- TUS PROYECTOS ----------
   Para añadir uno, copia un bloque y cambia los datos.
   - imagen:    foto de portada (en /public)
   - video:     (opcional) archivo en /public/videos, p. ej. "/videos/concierto.mp4"
   - enlace:    (opcional) enlace a una publicación o noticia
   - categoria: los filtros se crean solos con las categorías que uses
*/
type Proyecto = {
  titulo: string;
  detalle: string;
  categoria: string;
  imagen: string;
  video?: string;
  enlace?: string;
};

const proyectos: Proyecto[] = [
  {
    titulo: "Operador de cámara",
    detalle: "Steadycam en eventos",
    categoria: "Eventos",
    imagen: "/steadycam.jpg",
  },
  {
    titulo: "Proyecto Catarroja",
    detalle: "Producción audiovisual en Catarroja",
    categoria: "Producción",
    imagen: "/catarroja.jpg",
    enlace:
      "https://nostresport.com/la-campana-viral-del-catarroja-cf-consigue-300-abonados-en-su-primera-semana/",
  },
];

const servicios = [
  ["Operador de cámara", "Cámara y steadycam en eventos y conciertos."],
  ["Realización", "Realización de eventos y producciones audiovisuales."],
  ["Producción audiovisual", "Proyectos para marcas, empresas y productoras."],
];

const TELEFONO = "+34 636 893 279";
const WHATSAPP = "https://wa.me/34636893279";

/* ---------- Intro animada del logo ----------
   La animación está en /public/intro-mk.svg
   - Sale una vez por sesión (al cerrar y volver a abrir la pestaña, vuelve a salir).
   - Si el visitante tiene activado "reducir movimiento", no se muestra.
   - Se puede saltar con el botón "Saltar" o con Escape.
   - Para cambiar la duración, modifica DURACION_INTRO (milisegundos). */
const DURACION_INTRO = 5400;

function Intro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reducido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducido || sessionStorage.getItem("mk-intro") === "1") {
      setVisible(false);
      return;
    }

    document.body.style.overflow = "hidden";

    const cerrar = () => {
      sessionStorage.setItem("mk-intro", "1");
      document.body.style.overflow = "";
      setVisible(false);
    };

    const t = setTimeout(cerrar, DURACION_INTRO);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") cerrar();
    };
    document.addEventListener("keydown", onKey);
    window.addEventListener("click", cerrar);

    return () => {
      clearTimeout(t);
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("click", cerrar);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          role="dialog"
          aria-label="MK Audiovisual"
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: 99999,
            background: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <img
            src="/intro-mk.svg"
            alt="MK Audiovisual"
            style={{ display: "block", width: "100%", maxWidth: 820, maxHeight: "70vh" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ---------- Cabecera ---------- */
function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 text-white transition-colors duration-300 ${
        scrolled ? "bg-[#0C0F1A]/85 backdrop-blur" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-3" aria-label="MK Audiovisual, inicio">
          <img
            src="/logo.jpeg"
            alt=""
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className={`${display.className} hidden text-lg font-bold sm:block`}>
            MK Audiovisual
          </span>
        </a>

        <nav className="flex items-center gap-5 text-sm font-medium md:gap-8 md:text-base">
          <a href="#trabajos" className="hidden hover:underline sm:block">
            Trabajos
          </a>
          <a href="#disponibilidad" className="hidden hover:underline sm:block">
            Disponibilidad
          </a>
          <a
            href="#contacto"
            className="rounded-full bg-white px-5 py-2 font-semibold text-[#0C0F1A] transition hover:bg-[#EEF0F4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Pedir presupuesto
          </a>
        </nav>
      </div>
    </header>
  );
}

/* ---------- Calendario de disponibilidad ---------- */
function Disponibilidad() {
  return (
    <div>
      <h2
        className={`${display.className} text-4xl font-extrabold leading-tight tracking-tight md:text-5xl`}
      >
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

export default function Home() {
  const reduce = useReducedMotion();
  const [filtro, setFiltro] = useState("Todos");
  const [activo, setActivo] = useState<Proyecto | null>(null);
  const cerrarRef = useRef<HTMLButtonElement>(null);

  const categorias = ["Todos", ...Array.from(new Set(proyectos.map((p) => p.categoria)))];
  const visibles =
    filtro === "Todos" ? proyectos : proyectos.filter((p) => p.categoria === filtro);

  /* Visor: Escape para cerrar, bloquea el scroll y enfoca el botón */
  useEffect(() => {
    if (!activo) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActivo(null);
    };
    document.addEventListener("keydown", onKey);
    const previo = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    cerrarRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previo;
    };
  }, [activo]);

  const lineas = ["Cámara y realización", "para eventos, conciertos", "y empresas."];

  return (
    <main className={`${body.className} overflow-x-hidden bg-[#EEF0F4] text-[#0C0F1A]`}>
      <Intro />
      <Header />

      {/* ================= HERO ================= */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-[#0C0F1A] text-white">
        {/* Pon tu reel en /public/reel.mp4 (sin audio, 15-20 s, menos de 8 MB) */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay={!reduce}
          muted
          loop
          playsInline
          preload="metadata"
          poster="/steadycam.jpg"
          aria-hidden="true"
        >
          <source src="/reel.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0F1A] via-[#0C0F1A]/40 to-[#0C0F1A]/50" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-32 md:pb-24">
          <h1
            className={`${display.className} text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl lg:text-8xl`}
          >
            {lineas.map((linea, i) => (
              <span key={linea} className="block overflow-hidden pb-1">
                <motion.span
                  className="block"
                  initial={reduce ? false : { y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.1 + i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {linea}
                </motion.span>
              </span>
            ))}
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/85 md:text-xl">
            Soy MK Audiovisual. Grabo y realizo tus eventos y proyectos con
            equipo propio y trato directo.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contacto"
              className="rounded-full bg-[#2433FF] px-8 py-3.5 font-semibold text-white transition hover:bg-[#3a48ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Pedir presupuesto
            </a>
            <a
              href="#trabajos"
              className="rounded-full border border-white/70 px-8 py-3.5 font-semibold transition hover:bg-white hover:text-[#0C0F1A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Ver trabajos
            </a>
            <a href="#disponibilidad" className="text-white/85 underline underline-offset-4 hover:text-white">
              Consultar disponibilidad
            </a>
          </div>
        </div>
      </section>

      {/* ================= SOBRE MÍ + SERVICIOS ================= */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2
              className={`${display.className} text-4xl font-extrabold leading-tight tracking-tight md:text-5xl`}
            >
              Sobre mí
            </h2>
            <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-[#5B6070]">
              Soy técnico de vídeo especializado en operador de cámara,
              realización y producción audiovisual. Trabajo en eventos,
              conciertos y proyectos profesionales para marcas, empresas y
              producciones audiovisuales.
            </p>
          </div>

          <ul className="border-b border-[#0C0F1A]/15 lg:col-span-7">
            {servicios.map(([titulo, texto]) => (
              <li
                key={titulo}
                className="group grid gap-2 border-t border-[#0C0F1A]/15 py-8 transition-colors hover:text-[#2433FF] md:grid-cols-2 md:gap-8"
              >
                <h3
                  className={`${display.className} text-3xl font-bold leading-tight tracking-tight md:text-4xl`}
                >
                  {titulo}
                </h3>
                <p className="text-[#5B6070] md:self-center">{texto}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= TRABAJOS ================= */}
      <section id="trabajos" className="bg-[#0C0F1A] px-6 py-24 text-white md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <h2
              className={`${display.className} text-4xl font-extrabold leading-tight tracking-tight md:text-6xl`}
            >
              Trabajos
            </h2>

            <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar trabajos">
              {categorias.map((c) => (
                <button
                  key={c}
                  onClick={() => setFiltro(c)}
                  aria-pressed={filtro === c}
                  className={`rounded-full border px-5 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                    filtro === c
                      ? "border-white bg-white text-[#0C0F1A]"
                      : "border-white/30 text-white hover:border-white"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visibles.map((p) => (
              <button
                key={p.titulo}
                onClick={() => setActivo(p)}
                className="group relative aspect-[4/5] overflow-hidden rounded-lg text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <img
                  src={p.imagen}
                  alt={p.titulo}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105 motion-reduce:transition-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0F1A]/90 via-transparent to-transparent" />

                {(p.video || p.enlace) && (
                  <span
                    className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#0C0F1A]"
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5 translate-x-px fill-current">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                )}

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-sm font-medium text-white/75">{p.categoria}</p>
                  <h3
                    className={`${display.className} mt-1 text-2xl font-bold leading-tight`}
                  >
                    {p.titulo}
                  </h3>
                  <p className="mt-1 text-sm text-white/75">{p.detalle}</p>
                </div>
              </button>
            ))}
          </div>

          <p className="mt-10 text-white/70">
            Más trabajos en{" "}
            <a
              href="https://www.instagram.com/mk.audiovisual_/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white underline underline-offset-4"
            >
              @mk.audiovisual_
            </a>
          </p>
        </div>
      </section>

      {/* ================= DISPONIBILIDAD ================= */}
      <section id="disponibilidad" className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <Disponibilidad />
        </div>
      </section>

      {/* ================= CONTACTO ================= */}
      <section id="contacto" className="bg-[#2433FF] px-6 py-24 text-white md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2
              className={`${display.className} text-4xl font-extrabold leading-tight tracking-tight md:text-6xl`}
            >
              Cuéntame tu proyecto
            </h2>
            <p className="mt-6 max-w-sm text-lg text-white/90">
              Dime qué necesitas y para qué fecha. Te respondo con
              disponibilidad y presupuesto.
            </p>

            <div className="mt-10 flex flex-col items-start gap-4">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-7 py-3.5 font-semibold text-[#2433FF] transition hover:bg-[#EEF0F4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Escríbeme por WhatsApp
              </a>
              <a
                href="tel:+34636893279"
                className="text-lg underline underline-offset-4 hover:text-white/80"
              >
                {TELEFONO}
              </a>
              <a
                href="https://www.instagram.com/mk.audiovisual_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg underline underline-offset-4 hover:text-white/80"
              >
                @mk.audiovisual_
              </a>
            </div>
          </div>

          <form
            action="https://formspree.io/f/mzdwzpjr"
            method="POST"
            className="space-y-7 lg:col-span-7"
          >
            <div className="grid gap-7 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm text-white/85">
                  Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-1 w-full border-b border-white/60 bg-transparent py-3 text-lg outline-none transition focus:border-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm text-white/85">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full border-b border-white/60 bg-transparent py-3 text-lg outline-none transition focus:border-white"
                />
              </div>
              <div>
                <label htmlFor="tipo" className="text-sm text-white/85">
                  Tipo de trabajo
                </label>
                <select
                  id="tipo"
                  name="tipo"
                  defaultValue="Evento"
                  className="mt-1 w-full border-b border-white/60 bg-transparent py-3 text-lg outline-none transition focus:border-white [&>option]:text-[#0C0F1A]"
                >
                  <option>Evento</option>
                  <option>Concierto</option>
                  <option>Empresa o marca</option>
                  <option>Otro</option>
                </select>
              </div>
              <div>
                <label htmlFor="fecha" className="text-sm text-white/85">
                  Fecha prevista
                </label>
                <input
                  id="fecha"
                  name="fecha"
                  type="date"
                  className="mt-1 w-full border-b border-white/60 bg-transparent py-3 text-lg outline-none transition [color-scheme:dark] focus:border-white"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="text-sm text-white/85">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 w-full resize-none border-b border-white/60 bg-transparent py-3 text-lg outline-none transition focus:border-white"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-[#0C0F1A] px-12 py-4 font-semibold text-white transition hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
            >
              Enviar mensaje
            </button>
          </form>
        </div>

        <p className="mx-auto mt-24 max-w-7xl text-sm text-white/80">
          © 2026 MK Audiovisual
        </p>
      </section>

      {/* ================= VISOR DE TRABAJOS ================= */}
      {activo && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activo.titulo}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0C0F1A]/95 p-4"
          onClick={() => setActivo(null)}
        >
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button
              ref={cerrarRef}
              onClick={() => setActivo(null)}
              className="absolute -top-12 right-0 rounded-full border border-white/50 px-5 py-1.5 text-sm font-semibold text-white hover:bg-white hover:text-[#0C0F1A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Cerrar
            </button>

            {activo.video ? (
              <video
                src={activo.video}
                poster={activo.imagen}
                controls
                autoPlay
                playsInline
                className="max-h-[70vh] w-full rounded-lg bg-black"
              />
            ) : (
              <img
                src={activo.imagen}
                alt={activo.titulo}
                className="max-h-[70vh] w-full rounded-lg object-contain"
              />
            )}

            <div className="mt-5 flex flex-wrap items-center justify-between gap-4 text-white">
              <div>
                <h3 className={`${display.className} text-2xl font-bold`}>{activo.titulo}</h3>
                <p className="text-white/75">{activo.detalle}</p>
              </div>
              {activo.enlace && (
                <a
                  href={activo.enlace}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-6 py-2.5 font-semibold text-[#0C0F1A] hover:bg-[#EEF0F4]"
                >
                  Ver más
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
