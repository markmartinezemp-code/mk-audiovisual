"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-white text-black font-sans overflow-x-hidden">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center">

        {/* Fondo */}
        <img
          src="/logo.jpeg"
          alt="MK Audiovisual"
          className="absolute w-full h-full object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-white/70" />

        {/* Contenido HERO */}
        <div className="relative z-10 text-center px-6 max-w-3xl">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-semibold"
          >
            MK Audiovisual
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-gray-700"
          >
            Operador de cámara · Steadicam · Producción audiovisual
          </motion.p>

          <div className="mt-10 flex gap-4 justify-center flex-wrap">
            <a
              href="#portfolio"
              className="px-6 py-3 bg-black text-white rounded-full"
            >
              Ver trabajos
            </a>

            <a
              href="#contacto"
              className="px-6 py-3 border border-black rounded-full"
            >
              Contacto
            </a>
          </div>
        </div>
      </section>

      {/* DEBUG (PRUEBA IMAGEN - IMPORTANTE) */}
      <section className="py-10 flex justify-center">
        <img
          src="/steadycam.jpg"
          style={{ width: "300px" }}
          alt="DEBUG STEADYCAM"
        />
      </section>

      {/* SOBRE MÍ */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl font-semibold mb-8">
          Sobre mí
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed">
          Soy operador de cámara especializado en steadycam, realización y producción audiovisual.
          Trabajo en eventos, conciertos y proyectos profesionales para marcas y empresas.
        </p>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 px-6 max-w-6xl mx-auto">

        <h2 className="text-4xl font-semibold text-center mb-16">
          Trabajos destacados
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* STEADYCAM */}
          <div className="relative rounded-3xl overflow-hidden h-[500px]">

            <img
              src="/steadycam.jpg"
              alt="Steadycam"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute bottom-0 p-8 text-white">
              <h3 className="text-3xl font-semibold">
                Operador de cámara
              </h3>
              <p className="text-gray-200">
                Steadicam · Eventos · Realización
              </p>
            </div>

          </div>

          {/* CATARROJA */}
          <a
            href="https://www.instagram.com/p/DOJ9jJijSr6/"
            target="_blank"
            className="relative rounded-3xl overflow-hidden h-[500px] block"
          >

            <img
              src="/catarroja.jpg"
              alt="Catarroja"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute bottom-0 p-8 text-white">
              <h3 className="text-3xl font-semibold">
                Proyecto destacado
              </h3>

              <p className="text-gray-200">
                Producción audiovisual
              </p>

              <span className="inline-block mt-4 px-4 py-2 bg-white text-black rounded-full">
                Ver vídeo
              </span>
            </div>

          </a>

        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-24 px-6 max-w-3xl mx-auto">

        <h2 className="text-4xl font-semibold mb-10">
          Contacto
        </h2>

        <form
          action="https://formspree.io/f/mzdwzpjr"
          method="POST"
          className="space-y-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            className="w-full p-4 border rounded-xl"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-4 border rounded-xl"
          />

          <textarea
            name="message"
            placeholder="Mensaje"
            className="w-full p-4 border rounded-xl h-32"
          />

          <button className="w-full bg-black text-white py-4 rounded-full">
            Enviar
          </button>
        </form>

      </section>

    </main>
  );
}