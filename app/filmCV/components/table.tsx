import React from "react";
import { useState } from "react";
import { Table as UITable, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

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
}

export default function Table({ filmsData }: Props) {
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const groups = filmsData.reduce((acc, film) => {
    const group = acc.find((g) => g.type === film.type);
    if (group) {
      group.films.push(film);
    } else {
      acc.push({ type: film.type, films: [film] });
    }
    return acc;
  }, [] as { type: string; films: Film[] }[]);

  const sortedGroups = groups.map((group) => {
    const sortedFilms = group.films.sort((a, b) => {
      if (sortColumn === null) {
        return 0;
      }
      const aValue = a[sortColumn];
      const bValue = b[sortColumn];
      if (aValue < bValue) {
        return sortDirection === "asc" ? -1 : 1;
      } else if (aValue > bValue) {
        return sortDirection === "asc" ? 1 : -1;
      } else {
        return 0;
      }
    });
    return { type: group.type, films: sortedFilms };
  });

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  return (
    <UITable>
      <TableCaption>Grip Resume</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/7" onClick={() => handleSort("date")}>
            Date {sortColumn === "date" && (sortDirection === "asc" ? "▲" : "▼")}
          </TableHead>
          <TableHead className="w-1/7" onClick={() => handleSort("title")}>
            Title {sortColumn === "title" && (sortDirection === "asc" ? "▲" : "▼")}
          </TableHead>
          <TableHead className="w-1/7" onClick={() => handleSort("director")}>
            Director {sortColumn === "director" && (sortDirection === "asc" ? "▲" : "▼")}
          </TableHead>
          <TableHead className="w-1/7" onClick={() => handleSort("dop")}>
            DOP {sortColumn === "dop" && (sortDirection === "asc" ? "▲" : "▼")}
          </TableHead>
          <TableHead className="w-1/7" onClick={() => handleSort("keyGrip")}>
            Key Grip {sortColumn === "keyGrip" && (sortDirection === "asc" ? "▲" : "▼")}
          </TableHead>
          <TableHead className="w-1/7" onClick={() => handleSort("role")}>
            Role {sortColumn === "role" && (sortDirection === "asc" ? "▲" : "▼")}
          </TableHead>
          <TableHead className="w-1/7" onClick={() => handleSort("type")}>
            Type {sortColumn === "type" && (sortDirection === "asc" ? "▲" : "▼")}
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sortedGroups.map((group) => (
          <React.Fragment key={group.type}>
            {group.films.map((film) => (
              <TableRow key={film.title}>
                <TableCell>{film.date}</TableCell>
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
  );
}