"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

/* Intro animada del logo MK (la animación está en /public/intro-mk.svg).
   - Se muestra una vez por sesión (al cerrar y volver a abrir la pestaña vuelve a salir).
   - Si el visitante tiene activado "reducir movimiento", no se muestra.
   - El visitante puede saltarla con el botón "Saltar" o pulsando Escape.
   - Para cambiar la duración, modifica DURACION (milisegundos). */
const DURACION = 5400;

export default function Intro() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (reduce || sessionStorage.getItem("mk-intro") === "1") {
      setVisible(false);
      return;
    }
    sessionStorage.setItem("mk-intro", "1");

    const previo = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => setVisible(false), DURACION);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setVisible(false);
    };
    document.addEventListener("keydown", onKey);

    return () => {
      clearTimeout(t);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previo;
    };
  }, [reduce]);

  /* Al cerrarse la intro, devolvemos el scroll */
  useEffect(() => {
    if (!visible) document.body.style.overflow = "";
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          role="dialog"
          aria-label="MK Audiovisual"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black px-6"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <img
            src="/intro-mk.svg"
            alt="MK Audiovisual"
            className="block max-h-[70svh] w-full max-w-[820px]"
          />

          <button
            onClick={() => setVisible(false)}
            className="absolute bottom-8 right-6 rounded-full border border-white/40 px-5 py-2 text-sm font-semibold text-white/80 transition hover:border-white hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Saltar
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
