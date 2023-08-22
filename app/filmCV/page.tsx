'use client'
import { useState, useEffect } from "react";
import Table from "@/app/filmCV/components/table";
import Link from "next/link";

export default function FilmCV() {
  const [filmsData, setFilmsData] = useState([]);

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex max-w-[980px] flex-col items-start gap-4 mb-24">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl" style={{ lineHeight: "1.5" }}>
          Seasoned, <br className="hidden sm:inline" />
          but not Crusty, Grip. <br className="hidden sm:inline" /> Let's build cool shots. <br className="hidden sm:inline" />
          Or view some <Link href="/filmCV/gripshots"><u>grip pics</u></Link> 
        </h1>
      </div>
      <h2 className="text-2xl font-extrabold leading-tight tracking-tighter md:text-3xl mb-12" style={{ lineHeight: "1.5" }}>
        Grip Resume 
      </h2>
      <Table filmsData={filmsData} />
    </div>
  );
}