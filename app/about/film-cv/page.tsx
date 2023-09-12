"use client"
import React, { useState, useEffect } from "react";
import Table from "@/app/about/film-cv/components/table";
import Link from "next/link";
import { useTheme } from "next-themes"


export default function FilmCV() {
  // Define the Film type inline
  type Film = {
    date: string;
    title: string;
    director: string;
    dop: string;
    keyGrip: string;
    role: string;
    type: string;
  };

  const { theme } = useTheme()
  const opacity = theme === "dark" ? 0.1 : 0.5


  const blendMode = theme === "dark" ? "darken" : "lighten"

  const [filmsData, setFilmsData] = useState<Film[]>([]);

  useEffect(() => {
    const spreadsheetUrl = "https://docs.google.com/spreadsheets/d/1T-Wf8mObysBwOsWNM8nOcFtMZtwTHN5Xg-69LtEtKhc/export?format=csv";

    fetch(spreadsheetUrl)
      .then(response => response.text())
      .then(data => {
        const rows = data.split("\n");
        const header = rows[0].split(",");
        const rowData = rows.slice(1)
                  .map(row => row.split(","))
                  .map(row => ({
                      date: row[0],
                      title: row[1],
                      director: row[2],
                      dop: row[3],
                      keyGrip: row[4],
                      role: row[5],
                      type: row[6]
                  }));

        setFilmsData(rowData);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="relative">
  <div className="bg-opacity-80/80 relative mx-12 mt-12 flex flex-col items-start rounded-lg bg-white p-8 shadow-md md:ml-12" style={{ backgroundImage: 'url("/bg/bg1.jpg")', backgroundSize: 'cover', backgroundBlendMode: 'lighten', backgroundColor: `rgba(255, 255, 255, ${opacity})` }}>
            <h1 className="font-lora mb-2 text-4xl font-semibold">Grip Resume.</h1>
            <h2 className="font-lora text-2xl font-bold md:mr-24">Some Hobby Projects. View my <Link href="github.com/mattrichmo" className="text-accent hover:underline">Github</Link> for my most up to date project list.</h2>    <p className="mt-8">I open-source almost anything as I am just having a great time coding. Let&apos;s make magic.</p>
  </div>
</div>
      <div className='mb-12 ml-4 mr-4'>
      <Table filmsData={filmsData} />
      </div>
    </div>
  );
}
