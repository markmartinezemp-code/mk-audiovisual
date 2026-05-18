import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black font-light">
      {/* NAV */}
      <nav className="w-full max-w-6xl mx-auto flex justify-between items-center py-6 px-4">
        <h1 className="text-lg tracking-tight">MK Audiovisual</h1>
        <div className="flex gap-6 text-sm">
          <a href="#sobre" className="hover:opacity-60">Sobre mí</a>
          <a href="#servicios" className="hover:opacity-60">Servicios</a>
          <a href="#contacto" className="border px-4 py-2 rounded-full hover:bg-black hover:text-white transition">Contacto</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="text-center mt-20 px-4">
        <h2 className="text-5xl md:text-7xl tracking-tight mb-6">
          Producción audiovisual
          <br />
          con visión profesional
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Especializado en imagen, narrativa visual y técnica. Trabajo en proyectos audiovisuales creando contenido elegante, moderno y efectivo.
        </p>
      </section>

      {/* SOBRE MI */}
      <section id="sobre" className="max-w-5xl mx-auto mt-32 px-4">
        <h3 className="text-3xl mb-8">Sobre mí</h3>
        <div className="grid md:grid-cols-2 gap-10">
          <p className="text-gray-600 leading-relaxed">
            Soy operador de cámara, realizador, productor y técnico de vídeo con experiencia en distintos entornos audiovisuales. Mi trabajo combina precisión técnica con una visión creativa orientada a resultados profesionales.
          </p>
          <p className="text-gray-600 leading-relaxed">
            He participado en producciones tanto en broadcast como en proyectos independientes, adaptándome a cada necesidad para ofrecer contenido visual de alta calidad.
          </p>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="max-w-6xl mx-auto mt-32 px-4">
        <h3 className="text-3xl mb-12">Servicios</h3>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-2xl hover:shadow-xl transition">
            <h4 className="text-xl mb-3">Grabación</h4>
            <p className="text-gray-600">Cobertura profesional de eventos, proyectos y contenido audiovisual.</p>
          </div>

          <div className="p-6 border rounded-2xl hover:shadow-xl transition">
            <h4 className="text-xl mb-3">Fotografía</h4>
            <p className="text-gray-600">Creación de contenido visual cuidado con estética moderna y profesional.</p>
          </div>

          <div className="p-6 border rounded-2xl hover:shadow-xl transition">
            <h4 className="text-xl mb-3">Técnico Broadcast</h4>
            <p className="text-gray-600">Trabajo en televisión, directos y producciones técnicas avanzadas.</p>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="max-w-xl mx-auto mt-32 mb-24 px-4 text-center">
        <h3 className="text-3xl mb-6">Contacta conmigo</h3>
        <p className="text-gray-600 mb-8">
          Si tienes un proyecto o necesitas servicios audiovisuales, puedes escribirme directamente.
        </p>

        <form
          action="https://formspree.io/f/tu_codigo"
          method="POST"
          className="flex flex-col gap-4 text-left"
        >
          <input type="text" name="name" placeholder="Nombre" required className="p-3 border rounded-lg" />
          <input type="email" name="email" placeholder="Email" required className="p-3 border rounded-lg" />
          <textarea name="message" placeholder="Mensaje" required className="p-3 border rounded-lg" />

          <button className="border py-3 rounded-full hover:bg-black hover:text-white transition">
            Enviar mensaje
          </button>
        </form>

        <div className="mt-10 text-gray-600">
          <p className="mb-2">Teléfono: +34 636893279</p>
          <p>
            Instagram: 
            <a href="https://instagram.com/mk.audiovisual" target="_blank" className="underline ml-1">
              @mk.audiovisual_
            </a>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-sm text-gray-400 pb-10">
        © {new Date().getFullYear()} MK Audiovisual
      </footer>
    </main>
  );
}