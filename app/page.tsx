"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-white text-black font-sans">

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        {/* LOGO */}
        <motion.img
          src="/logo.png"
          alt="MK Audiovisual logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-40 md:w-56 mb-8"
        />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-semibold tracking-tight"
        >
          Producción audiovisual profesional
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-lg text-gray-600 max-w-xl"
        >
          Trabajo con empresas, marcas y proyectos independientes creando contenido visual moderno, elegante y adaptado a cada necesidad.
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
          Desarrollo proyectos audiovisuales con una combinación de técnica y creatividad,
          adaptándome a todo tipo de producciones.

          Trabajo tanto en entornos broadcast como en proyectos para empresas,
          contenido digital y producciones independientes, ofreciendo siempre
          un resultado profesional y cuidado.
        </motion.p>
      </section>

      {/* SERVICIOS */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium mb-12">Servicios</h2>

          <div className="grid md:grid-cols-3 gap-8">

            {["Grabación y Fotografía","Producción para empresas","Técnico broadcast"].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="p-6 border rounded-2xl bg-white hover:shadow-xl transition"
              >
                <h3 className="text-xl font-medium mb-3">{item}</h3>
                <p className="text-gray-600">
                  Soluciones audiovisuales adaptadas a cada cliente,
                  con enfoque profesional y estética moderna.
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

        <div className="mt-10 text-gray-600 space-y-2">
          <p>📞 +34 636 893 279</p>
        <p>
  📸 Instagram: 
  <a 
    href="https://instagram.com/mk.audiovisual_" 
    target="_blank" 
    rel="noopener noreferrer"
    className="underline ml-1"
  >
    @mk.audiovisual_
  </a>
</p>
        </div>
      </section>

    </main>
  );
}