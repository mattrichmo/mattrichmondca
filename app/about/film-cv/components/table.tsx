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

// Define the Film interface
interface Film {
  date: string;
  title: string;
  director: string;
  dop: string;
  keyGrip: string;
  role: string;
  type: string;
}

// Define the Props interface
interface Props {
  filmsData: Film[];
}

// Define the Table component
export default function Table({ filmsData }: Props) {
  // Define state variables for sorting and pagination
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Group the films by type
  const groups = filmsData.reduce(
    (acc, film) => {
      const group = acc.find((g) => g.type === film.type);
      if (group) {
        group.films.push(film);
      } else {
        acc.push({ type: film.type, films: [film] });
      }
      return acc;
    },
    [] as { type: string; films: Film[] }[]
  );

  // Paginate the groups of films
  const paginatedGroups = groups.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Function to handle column sorting
  function handleSort(column: string) {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  }

  // Render the table component
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
        <TableBody >
          {paginatedGroups.map((group) => (
            <React.Fragment key={group.type}>
              {group.films
                .slice()
                .sort((a, b) => {
                  if (sortColumn === null) {
                    return 0;
                  }
                  const aValue = a[sortColumn as keyof Film];
                  const bValue = b[sortColumn as keyof Film];
                  if (aValue < bValue) {
                    return sortDirection === "asc" ? -1 : 1;
                  } else if (aValue > bValue) {
                    return sortDirection === "asc" ? 1 : -1;
                  } else {
                    return 0;
                  }
                })
                .map((film) => (
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
            </React.Fragment>
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
            disabled={currentPage === Math.ceil(groups.length / itemsPerPage)}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}
