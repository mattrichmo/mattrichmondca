'use client'
import React, { useState, useEffect } from "react";
import Table from "./components/table";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link";




export default function FilmCV() {
// Define the row type for TypeScript
type Row = {
  date: string;
  title: string;
  director: string;
  dop: string;
  keyGrip: string;
  role: string;
  type: string;
};

// If you need a type for the array of row objects
type TableData = Row[];

const { theme } = useTheme();
const opacity = theme === "dark" ? 0.1 : 0.5;
const blendMode = theme === "dark" ? "darken" : "lighten";

const [tableData, setTableData] = useState<TableData>([]);

const dataUrl = "https://docs.google.com/spreadsheets/d/1T-Wf8mObysBwOsWNM8nOcFtMZtwTHN5Xg-69LtEtKhc/export?format=tsv";

useEffect(() => {
  fetch(dataUrl)
    .then((response) => response.text())
    .then((data) => {
      const rows = data.split("\n");
      const rowData: TableData = []; // Define as an empty array of type TableData, which is an array of Row
      rows.slice(1).forEach((row) => {
        const [date, title, director, dop, keyGrip, role, type] = row.split("\t"); // Split by tab instead of comma
        rowData.push({
          date: formatDate(date),
          title,
          director,
          dop,
          keyGrip,
          role,
          type,
        });
      });

      // Sort rowData by date in descending order
      rowData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

      setTableData(rowData); // Set the full array into state after processing all rows
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}, []);

// Helper function to format date from DD/MM/YYYY to YYYY-MM-DD
const formatDate = (date: string): string => {
  const [day, month, year] = date.split("/");
  return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
};
  

  return (
    <section className="mx-4 flex flex-col items-center gap-6 pb-4 pt-6 md:mx-12 md:py-10">
      <div className="xs:mt-6 max-w-full">
        <h1 className="ml-2 mt-8 text-left text-2xl leading-tight tracking-tighter">
          Grip Based in Vancouver, BC, Canada
        </h1>
        <p className="ml-2 mt-6 text-lg">
          I love to build, love to rig, and love to plan for those crazy shot
          ideas. If you have a crazy project idea, I&apos;d love to hear about it.
        </p>
        <p className="ml-2 mt-6 text-sm">
        </p>
        <div className="mx-2 mb-12 md:mx-4">
          <p className="text-md ml-2 mt-12 text-left leading-tight tracking-tighter">
            Recent Work:
          </p>
        </div>
        <div className="mb-12 md:mx-4">
          <Table filmsData={tableData} id="GripResume" />
        </div>
      </div>
    </section>
  );
}
