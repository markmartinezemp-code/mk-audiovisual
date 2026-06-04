"use client";

import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CALENDAR_ID = "markmartinezemp@gmail.com";
const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

export default function Disponibilidad() {
  const [diasOcupados, setDiasOcupados] = useState<string[]>([]);

  useEffect(() => {
    async function cargarEventos() {
      const hoy = new Date().toISOString();

      const url =
        `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
          CALENDAR_ID
        )}/events?key=${API_KEY}&singleEvents=true&orderBy=startTime&timeMin=${hoy}`;

      const res = await fetch(url);
      const data = await res.json();

      const fechas =
        data.items?.map((evento: any) => {
          const fecha =
            evento.start?.date ||
            evento.start?.dateTime?.split("T")[0];
          return fecha;
        }) || [];

      setDiasOcupados(fechas);
    }

    cargarEventos();
  }, []);

  return (
    <section
      id="disponibilidad"
      className="py-24 px-6 bg-[#f8f8f8]"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-6">
          Disponibilidad
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Consulta mi disponibilidad actualizada en tiempo real.
        </p>

        <Calendar
          tileClassName={({ date, view }) => {
            if (view !== "month") return "";

            const fecha = date.toISOString().split("T")[0];

            return diasOcupados.includes(fecha)
              ? "ocupado"
              : "libre";
          }}
        />
      </div>
    </section>
  );
}