"use client";

import { motion } from "framer-motion";
import Disponibilidad from "@/components/Disponibilidad";

export default function Home() {
  return (
    <main className="bg-white text-black overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f5f5f5]">

        {/* LOGO GIGANTE OCUPANDO TODO */}
        <div className="absolute inset-0 z-[1]">

          <img
            src="/logo.jpeg"
            alt="MK Audiovisual"
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              opacity-[0.18]
            "
          />

        </div>

        {/* CAPA SUAVE PARA LEER EL TEXTO */}
        <div className="absolute inset-0 bg-white/35 z-[2]" />

        {/* CONTENIDO */}
        <div className="relative z-[3] text-center px-6 max-w-5xl">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold"
          >
            MK Audiovisual
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 text-lg md:text-xl text-gray-700"
          >
            Operador de cámara · Realizador · Producción audiovisual
          </motion.p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">

            <a
              href="#portfolio"
              className="px-7 py-3 bg-black text-white rounded-full hover:scale-105 transition"
            >
              Ver trabajos
            </a>

            <a
              href="#contacto"
              className="px-7 py-3 border border-black rounded-full hover:bg-black hover:text-white transition"
            >
              Contacto
            </a>

          </div>

        </div>
      </section>

      {/* ================= SOBRE MI ================= */}
      <section className="py-24 px-6 max-w-5xl mx-auto">

        <h2 className="text-4xl font-semibold mb-8">
          Sobre mí
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed">
          Soy técnico de vídeo especializado en operador de cámara ,
          realización y producción audiovisual. Trabajo en eventos,
          conciertos y proyectos profesionales para marcas,
          empresas y producciones audiovisuales.
        </p>

      </section>

      {/* ================= PORTFOLIO ================= */}
      <section
        id="portfolio"
        className="py-24 px-6 max-w-7xl mx-auto"
      >

        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16">
          Trabajos destacados
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* STEADYCAM */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden h-[500px] group"
          >

            <img
              src="/steadycam.jpg"
              alt="Operador steadycam"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute bottom-0 p-8 text-white">
              <h3 className="text-3xl font-semibold">
                Operador de cámara
              </h3>

              <p className="text-gray-200">
                Operador de cámara · Eventos · Realización
              </p>
            </div>

          </motion.div>

          {/* CATARROJA */}
          <motion.a
            href="https://www.instagram.com/p/DOJ9jJijSr6/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden h-[500px] block group"
          >

            <img
              src="/catarroja.jpg"
              alt="Proyecto Catarroja"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute bottom-0 p-8 text-white">

              <h3 className="text-3xl font-semibold">
                Proyecto destacado
              </h3>

              <p className="text-gray-200">
                Producción audiovisual en Catarroja
              </p>

              <span className="inline-block mt-4 px-4 py-2 bg-white text-black rounded-full">
                Ver vídeo
              </span>

            </div>
          </motion.a>

        </div>
      </section>
  <Disponibilidad />

{/* ================= CONTACTO ================= */}
<section
  id="contacto"
  className="py-24 px-6 max-w-3xl mx-auto"
></section>

      {/* ================= CONTACTO ================= */}
      <section
        id="contacto"
        className="py-24 px-6 max-w-3xl mx-auto"
      >

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
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-4 border rounded-xl"
            required
          />

          <textarea
            name="message"
            placeholder="Mensaje"
            className="w-full p-4 border rounded-xl h-32"
            required
          />

          <button className="w-full bg-black text-white py-4 rounded-full">
            Enviar mensaje
          </button>

        </form>
<div className="mt-10 text-center text-gray-600">
  <p>📞 +34 636 893 279</p>

  <a
    href="https://www.instagram.com/mk.audiovisual_/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
  >
    📸 @mk.audiovisual_
  </a>
</div>

      </section>

    </main>
  );
}