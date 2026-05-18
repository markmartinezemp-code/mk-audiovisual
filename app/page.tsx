"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-white text-black font-sans overflow-x-hidden">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">

        <motion.img
          src="/logo.jpeg"
          alt="MK Audiovisual logo"
          initial={{ scale: 1.4, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.25 }}
          transition={{ duration: 2 }}
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-white/70" />

        <div className="relative z-10 px-6 max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-4xl md:text-6xl font-semibold"
          >
            MK Audiovisual
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-6 text-lg text-gray-700"
          >
            Producción audiovisual profesional para empresas, marcas y contenido digital.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-10 flex justify-center gap-4 flex-wrap"
          >
            <a href="#contacto" className="px-6 py-3 bg-black text-white rounded-full hover:opacity-80 transition">
              Solicitar presupuesto
            </a>
            <a href="#portfolio" className="px-6 py-3 border border-black rounded-full hover:bg-black hover:text-white transition">
              Ver trabajos
            </a>
          </motion.div>
        </div>
      </section>

      {/* SOBRE MI */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-medium mb-10">
          Sobre mí
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} className="text-gray-600 text-lg leading-relaxed">
          Soy operador de cámara, realizador, productor y técnico de vídeo.
          Trabajo tanto en entornos broadcast como en proyectos audiovisuales para empresas.

          Ayudo a marcas y negocios a mejorar su imagen a través de contenido visual profesional.
        </motion.p>
      </section>

      {/* SERVICIOS */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-medium mb-12">
            Servicios
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {["Grabación y Fotografía","Producción audiovisual","Técnico broadcast"].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ y: -10 }}
                className="p-8 border rounded-2xl bg-white hover:shadow-2xl transition"
              >
                <h3 className="text-xl font-medium mb-4">{item}</h3>
                <p className="text-gray-600">
                  Servicio profesional adaptado a cada cliente con resultados de alto nivel.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 px-6 max-w-6xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-medium mb-12">
          Portfolio
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="h-56 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500"
            >
              Proyecto {item}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-24 px-6 max-w-3xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-medium mb-10">
          Contacto
        </motion.h2>

        {/* FORMULARIO FORMSPREE */}
        <form action="https://formspree.io/f/mzdwzpjr" method="POST" className="space-y-6">
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="Nuevo mensaje desde tu web" />

          <input type="text" name="name" placeholder="Nombre" required className="w-full p-3 border rounded-lg" />
          <input type="email" name="email" placeholder="Email" required className="w-full p-3 border rounded-lg" />
          <textarea name="message" placeholder="Cuéntame tu proyecto" required className="w-full p-3 border rounded-lg h-32" />

          <button type="submit" className="px-6 py-3 bg-black text-white rounded-full hover:opacity-80 transition w-full">
            Enviar mensaje
          </button>
        </form>

        {/* CONTACTO DIRECTO */}
        <div className="mt-10 text-gray-600 space-y-2 text-center">
          <p>📞 +34 636 893 279</p>
          <p>
            📸 Instagram:
            <a href="https://instagram.com/mk.audiovisual_" target="_blank" rel="noopener noreferrer" className="underline ml-1">
              @mk.audiovisual_
            </a>
          </p>
        </div>
      </section>

    </main>
  );
}