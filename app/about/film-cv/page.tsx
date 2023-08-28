"use client"
import React, { useState, useEffect } from "react";
import Table from "@/app/about/film-cv/components/table";
import Link from "next/link";

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
      <div className="mb-24 flex max-w-[980px] flex-col items-start gap-4">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl" style={{ lineHeight: "1.5" }}>
          Seasoned, <br className="hidden sm:inline" />
          but not Crusty, Grip. <br className="hidden sm:inline" /> Let`&apos`s build cool shots. <br className="hidden sm:inline" />
          Or view some <Link href="/filmCV/gripshots"><u>grip pics</u></Link> 
        </h1>
      </div>
      <h2 className="mb-12 text-2xl font-extrabold leading-tight tracking-tighter md:text-3xl" style={{ lineHeight: "1.5" }}>
        Grip Resume 
      </h2>
      <Table filmsData={filmsData} />
    </div>
  );
}
