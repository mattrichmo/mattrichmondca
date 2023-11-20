
import React, { useState } from "react";
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
  id: string;  // Add this line
}

export default function Table({ filmsData }: Props) {
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const paginatedFilms = filmsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  function handleSort(column: string) {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  }

  return (
    <div>
      <UITable className="mt-12">
        <TableHeader>
          <TableRow>
            <TableHead
              className="w-1/7 bg-muted text-primary"
              onClick={() => handleSort("date")}
            >
              Date{" "}
              {sortColumn === "date" && (sortDirection === "asc" ? "▲" : "▼")}
            </TableHead>
            <TableHead
              className="w-2/7 bg-muted text-primary"
              onClick={() => handleSort("title")}
            >
              Title{" "}
              {sortColumn === "title" && (sortDirection === "asc" ? "▲" : "▼")}
            </TableHead>
            <TableHead
              className="w-1/7 bg-muted text-primary"
              onClick={() => handleSort("director")}
            >
              Director{" "}
              {sortColumn === "director" && (sortDirection === "asc" ? "▲" : "▼")}
            </TableHead>
            <TableHead
              className="w-1/7 bg-muted text-primary"
              onClick={() => handleSort("dop")}
            >
              DOP{" "}
              {sortColumn === "dop" && (sortDirection === "asc" ? "▲" : "▼")}
            </TableHead>
            <TableHead
              className="w-1/7 bg-muted text-primary"
              onClick={() => handleSort("keyGrip")}
            >
              Key Grip{" "}
              {sortColumn === "keyGrip" && (sortDirection === "asc" ? "▲" : "▼")}
            </TableHead>
            <TableHead
              className="w-1/7 bg-muted text-primary"
              onClick={() => handleSort("role")}
            >
              Role{" "}
              {sortColumn === "role" && (sortDirection === "asc" ? "▲" : "▼")}
            </TableHead>
            <TableHead
              className="w-1/7 bg-muted text-primary"
              onClick={() => handleSort("type")}
            >
              Type{" "}
              {sortColumn === "type" && (sortDirection === "asc" ? "▲" : "▼")}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedFilms.map((film) => (
            <TableRow key={film.title}>
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
