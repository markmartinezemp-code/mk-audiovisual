"use client";

import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type EventDate = string;

export default function Disponibilidad() {
  const [busyDays, setBusyDays] = useState<EventDate[]>([]);

  const calendarId = "markmartinezemp@gmail.com";
  const API_KEY = "TU_API_KEY"; // 👈 TU KEY

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
            calendarId
          )}/events?key=${API_KEY}&singleEvents=true&orderBy=startTime`
        );

        const data = await response.json();
        console.log("EVENTOS:", data);

        if (data.items) {
          const dates = data.items.map((event: any) => {
            return (
              event.start?.date ||
              event.start?.dateTime?.split("T")[0]
            );
          });

          setBusyDays(dates);

          // 👇 LOG QUE TE FALTABA
          console.log("FECHAS OCUPADAS:", dates);
        }
      } catch (error) {
        console.error("Error cargando calendario", error);
      }
    };

    fetchEvents();
  }, []);

  // 👇 FUNCIÓN YA ARREGLADA
  const isBusy = (date: Date) => {
    const formatted = date.toISOString().split("T")[0];
    return busyDays.includes(formatted);
  };

  return (
    <section
      id="disponibilidad"
      className="bg-black text-white py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Disponibilidad
        </h2>

        <p className="text-gray-400 text-center mb-10">
          Consulta mis días disponibles para nuevos proyectos.
        </p>

        <div className="bg-zinc-900 rounded-3xl p-6 shadow-xl border border-zinc-800">
          <Calendar
            className="w-full border-none bg-transparent text-white"
            tileClassName={({ date }) =>
              isBusy(date) ? "busy-day" : "free-day"
            }
          />

          <div className="flex justify-center gap-8 mt-8 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
              <span>Disponible</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-red-500"></div>
              <span>Sin disponibilidad</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .react-calendar {
          background: transparent;
          width: 100%;
          border: none;
        }

        .react-calendar__tile {
          border-radius: 12px;
          padding: 14px 0;
          transition: 0.2s ease;
          color: white;
        }

        .react-calendar__tile:hover {
          background: #27272a;
        }

        .busy-day {
          background: rgba(239, 68, 68, 0.2) !important;
          color: #ef4444 !important;
          border: 1px solid #ef4444;
        }

        .free-day {
          background: rgba(34, 197, 94, 0.15) !important;
          color: #22c55e !important;
          border: 1px solid #22c55e;
        }

        .react-calendar__navigation button {
          color: white;
          font-size: 18px;
        }
      `}</style>
    </section>
  );
}