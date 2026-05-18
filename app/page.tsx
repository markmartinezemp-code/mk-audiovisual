"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-white text-black font-sans">

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-semibold tracking-tight"
        >
          MK Audiovisual
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl"
        >
          Producción audiovisual moderna, elegante y profesional.
          Especializado en imagen, narrativa y técnica.
        </motion.p>

        <motion.a
          href="#contacto"
          whileHover={{ scale: 1.05 }}
          className="mt-10 px-6 py-3 border border-black rounded-full text-sm hover:bg-black hover:text-white transition"
        >
          Contactar
        </motion.a>
      </section>

      {/* SOBRE MI */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-4xl font-medium mb-10"
        >
          Sobre mí
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-gray-600 text-lg leading-relaxed"
        >
          Soy operador de cámara, realizador, productor y técnico de vídeo.
          Trabajo en proyectos audiovisuales aportando una visión estética cuidada,
          técnica precisa y narrativa visual.

          Me especializo tanto en producciones broadcast como en proyectos
          independientes, adaptándome a cada cliente para conseguir resultados
          profesionales y modernos.
        </motion.p>
      </section>

      {/* SERVICIOS */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium mb-12">Servicios</h2>

          <div className="grid md:grid-cols-3 gap-8">

            {["Grabación y Fotografía","Técnico de vídeo broadcast","Proyectos audiovisuales"].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="p-6 border rounded-2xl bg-white hover:shadow-xl transition"
              >
                <h3 className="text-xl font-medium mb-3">{item}</h3>
                <p className="text-gray-600">
                  Servicio profesional enfocado en calidad visual, detalle técnico
                  y resultados modernos.
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-24 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-medium mb-10">Contacto</h2>

        <form action="https://formspree.io/f/xxxxx" method="POST" className="space-y-6">
          <input type="text" name="name" placeholder="Nombre" required className="w-full p-3 border rounded-lg" />
          <input type="email" name="email" placeholder="Email" required className="w-full p-3 border rounded-lg" />
          <textarea name="message" placeholder="Mensaje" required className="w-full p-3 border rounded-lg h-32" />

          <button type="submit" className="px-6 py-3 bg-black text-white rounded-full hover:opacity-80 transition">
            Enviar
          </button>
        </form>

        <div className="mt-10 text-gray-600">
          <p>📞 +34 636 893 279</p>
          <p>📸 Instagram: mk.audiovisual_</p>
        </div>
      </section>

    </main>
  );
}