"use client";

import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Disponibilidad() {
  const [busyDays, setBusyDays] = useState<string[]>([]);

  const calendarId = "markmartinezemp@gmail.com";
  const API_KEY = "TU_API_KEY";

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
            calendarId
          )}/events?key=${API_KEY}&singleEvents=true&orderBy=startTime`
        );

        const data = await res.json();

        if (data.items) {
          const dates = data.items.map((event: any) => {
            if (event.start?.dateTime) {
              return new Date(event.start.dateTime)
                .toISOString()
                .split("T")[0];
            }
            return event.start?.date;
          });

          console.log("FECHAS OCUPADAS:", dates); // 🔥 IMPORTANTE
          setBusyDays(dates);
        }
      } catch (error) {
        console.error("Error cargando eventos:", error);
      }
    };

    fetchEvents();
  }, []);

  const isBusy = (date: Date) => {
    const formatted = new Date(date)
      .toISOString()
      .split("T")[0];

    return busyDays.includes(formatted);
  };

  return (
    <div className="p-10 bg-black text-white">
      <Calendar
        tileClassName={({ date }) =>
          isBusy(date) ? "busy" : "free"
        }
      />

      <style jsx global>{`
        .busy {
          background: red !important;
          color: white !important;
        }

        .free {
          background: green !important;
          color: white !important;
        }
      `}</style>
    </div>
  );
}