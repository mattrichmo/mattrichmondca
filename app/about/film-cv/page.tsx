'use client'
import React, { useState, useEffect } from "react";
import Table from "@/app/about/film-cv/components/table";
import { useTheme } from "next-themes";

export default function FilmCV() {
  type Film = {
    date: string;
    title: string;
    director: string;
    dop: string;
    keyGrip: string;
    role: string;
    type: string;
  };

  const { theme } = useTheme();
  const opacity = theme === "dark" ? 0.1 : 0.5;
  const blendMode = theme === "dark" ? "darken" : "lighten";

  const [filmsData, setFilmsData] = useState<Film[]>([]);

  useEffect(() => {
    const spreadsheetUrl =
      "https://docs.google.com/spreadsheets/d/1T-Wf8mObysBwOsWNM8nOcFtMZtwTHN5Xg-69LtEtKhc/export?format=csv";

    fetch(spreadsheetUrl)
      .then((response) => response.text())
      .then((data) => {
        const rows = data.split("\n");
        const header = rows[0].split(",");
        const rowData = rows
          .slice(1)
          .map((row) => row.split(","))
          .map((row) => ({
            date: row[0],
            title: row[1],
            director: row[2],
            dop: row[3],
            keyGrip: row[4],
            role: row[5],
            type: row[6],
          }));

        setFilmsData(rowData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <section className="mx-4 flex flex-col items-center gap-6 pb-4 pt-6 md:mx-12 md:py-10">
      <div className="xs:mt-6 max-w-full">
        <h1 className="ml-2 mt-8 text-left text-2xl leading-tight tracking-tighter md:ml-12 md:text-3xl">
          Grip Resume.
        </h1>
        <p className="ml-2 mt-6 text-lg md:ml-12">
          I love to build, love to rig, and love to plan for those crazy shot
          ideas. If you have a crazy project idea, I&apos;d love to hear about it.
        </p>
        <div className="mx-2 mb-12 md:mx-4">
          <h2 className="ml-2 mt-12 text-left text-xl leading-tight tracking-tighter md:ml-8 md:text-xl">
            Grip Resume
          </h2>
          <Table filmsData={filmsData} id="myTable" />
        </div>
      </div>
    </section>
  );
}
