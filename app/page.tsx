"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-white text-black font-sans">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">

        {/* LOGO FULL BACKGROUND */}
        <motion.img
          src="/logo.jpeg"
          alt="MK Audiovisual logo"
          initial={{ scale: 1.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.25 }}
          transition={{ duration: 1.8 }}
          className="absolute w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-white/70" />

        {/* TEXTO ENCIMA */}
        <div className="relative z-10 px-6 max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-4xl md:text-6xl font-semibold tracking-tight"
          >
            Producción audiovisual profesional
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-6 text-lg text-gray-700"
          >
            Desarrollo proyectos audiovisuales para empresas, marcas y clientes
            individuales, combinando técnica, estética y narrativa visual.
          </motion.p>

          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.05 }}
            className="mt-10 inline-block px-6 py-3 border border-black rounded-full text-sm hover:bg-black hover:text-white transition"
          >
            Contactar
          </motion.a>
        </div>
      </section>

      {/* SOBRE MI */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-medium mb-10">Sobre mí</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Soy operador de cámara, realizador, productor y técnico de vídeo.
          Trabajo en proyectos audiovisuales tanto en entornos broadcast como
          en producciones para empresas y contenido digital.

          Mi enfoque combina precisión técnica con una estética moderna,
          adaptándome a cada proyecto para ofrecer resultados profesionales.
        </p>
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
                  Producciones audiovisuales adaptadas a cada cliente con enfoque
                  profesional y estética actual.
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
            <a href="https://instagram.com/mk.audiovisual_" target="_blank" rel="noopener noreferrer" className="underline ml-1">
              @mk.audiovisual_
            </a>
          </p>
        </div>
      </section>

    </main>
  );
}