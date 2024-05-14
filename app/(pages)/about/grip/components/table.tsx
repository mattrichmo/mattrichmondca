import React, { useState, useEffect } from "react";
import {
  Table as UITable,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

interface Film {
  date: string;
  title: string;
  director: string;
  dop: string;
  keyGrip: string;
  role: string;
  type: string;
}

interface Props {
  filmsData: Film[];
  id: string; // Using this id prop as indicated in your comment
}

export default function Table({ filmsData, id }: Props) {
  const [sortColumn, setSortColumn] = useState<keyof Film>('date');
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // Function to sort the data based on column and direction
  const sortData = (column: keyof Film, direction: "asc" | "desc") => {
    filmsData.sort((a, b) => {
      if (a[column] < b[column]) return direction === "asc" ? -1 : 1;
      if (a[column] > b[column]) return direction === "asc" ? 1 : -1;
      return 0;
    });
  };

  // Sorting function that modifies the sorting state and sorts the data
  const handleSort = (column: keyof Film) => {
    const newDirection = sortColumn === column && sortDirection === "asc" ? "desc" : "asc";
    setSortColumn(column);
    setSortDirection(newDirection);
    sortData(column, newDirection);
  };

  // Sort data initially by date in descending order when the component mounts
  useEffect(() => {
    sortData('date', 'desc');
  }, []); // Empty dependency array to run only once on mount

  

  // Pagination logic to get current page data
  const paginatedFilms = filmsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <div className = "mt-2 mb-2">
        <Link href="/about/grip/export" className={`${buttonVariants({ variant: "outline" })} text-sm`}>
            LaTeX / PDF        
        </Link>
      </div>
      <UITable className="mt-2">

        
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/7 bg-muted text-primary" onClick={() => handleSort("date")}>
              Date {sortColumn === "date" && (sortDirection === "asc" ? "▲" : "▼")}
            </TableHead>
            <TableHead className="w-2/7 bg-muted text-primary" onClick={() => handleSort("title")}>
              Title {sortColumn === "title" && (sortDirection === "asc" ? "▲" : "▼")}
            </TableHead>
            <TableHead className="w-1/7 bg-muted text-primary" onClick={() => handleSort("director")}>
              Director {sortColumn === "director" && (sortDirection === "asc" ? "▲" : "▼")}
            </TableHead>
            <TableHead className="w-1/7 bg-muted text-primary" onClick={() => handleSort("dop")}>
              DOP {sortColumn === "dop" && (sortDirection === "asc" ? "▲" : "▼")}
            </TableHead>
            <TableHead className="w-1/7 bg-muted text-primary" onClick={() => handleSort("keyGrip")}>
              Key Grip {sortColumn === "keyGrip" && (sortDirection === "asc" ? "▲" : "▼")}
            </TableHead>
            <TableHead className="w-1/7 bg-muted text-primary" onClick={() => handleSort("role")}>
              Role {sortColumn === "role" && (sortDirection === "asc" ? "▲" : "▼")}
            </TableHead>
            <TableHead className="w-1/7 bg-muted text-primary" onClick={() => handleSort("type")}>
              Type {sortColumn === "type"&& (sortDirection === "asc" ? "▲" : "▼")}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedFilms.map((film, index) => (
            <TableRow key={index}>
              <TableCell className="text-xs">{film.date}</TableCell>
              <TableCell className="font-medium">{film.title}</TableCell>
              <TableCell>{film.director}</TableCell>
              <TableCell>{film.dop}</TableCell>
              <TableCell>{film.keyGrip}</TableCell>
              <TableCell>{film.role}</TableCell>
              <TableCell>{film.type}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </UITable>
      {filmsData.length > itemsPerPage && (
        <div className="flex items-center justify-between space-x-2 py-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === Math.ceil(filmsData.length / itemsPerPage)}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}
