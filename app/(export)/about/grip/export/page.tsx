'use client'

import React, { useState, useEffect } from "react";
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

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

    // Define the array type for rows
    type TableData = Row[];

    const [tableData, setTableData] = useState<TableData>([]);

    // URL from where to fetch the data
    const dataUrl = "https://docs.google.com/spreadsheets/d/1T-Wf8mObysBwOsWNM8nOcFtMZtwTHN5Xg-69LtEtKhc/export?format=tsv";

    useEffect(() => {
        fetch(dataUrl)
            .then((response) => response.text())
            .then((data) => {
                const rows = data.split("\n");
                const rowData: TableData = [];
                rows.slice(1).forEach((row) => {
                    const [date, title, director, dop, keyGrip, role, type] = row.split("\t");
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
                rowData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
                setTableData(rowData);
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

    // PDF Document definition
    const FilmCVDocument = () => (
<Document>
    <Page size="A4" style={{ flexDirection: 'column', padding: 30, fontFamily: 'Helvetica' }}>
        <Text style={{ fontSize: 18, marginBottom: 10, textAlign: 'center', fontWeight: 'bold' }}>Matt Richmond</Text>
        <View style={{ flexDirection: 'column', marginBottom: 10 }}>
            <Text style={{ fontSize: 14, marginTop: 6 }}>Key Grip</Text>
            <Text style={{ fontSize: 14, marginTop: 6, marginBottom: 6 }}>Vancouver, BC, Canada</Text>
            <Text style={{ fontSize: 12 }}>Email: hello@mattrichmond.ca</Text>
            <Text style={{ fontSize: 12 }}>Phone: (604) 989-3632</Text>
        </View>
        <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 14, marginBottom: 4, fontWeight: 'bold', textDecoration: 'underline' }}>Professional Experience</Text>
            <View style={{ marginTop: 10, border: '1 solid black', padding: 5 }}>
                <View style={{ flexDirection: 'row', backgroundColor: '#CCCCCC', padding: 5 }}>
                    <Text style={{ width: '15%', fontSize: 10, fontWeight: 'bold' }}>Date</Text>
                    <Text style={{ width: '25%', fontSize: 10, fontWeight: 'bold' }}>Title</Text>
                    <Text style={{ width: '20%', fontSize: 10, fontWeight: 'bold' }}>Director</Text>
                    <Text style={{ width: '15%', fontSize: 10, fontWeight: 'bold' }}>DOP</Text>
                    <Text style={{ width: '15%', fontSize: 10, fontWeight: 'bold' }}>Key Grip</Text>
                    <Text style={{ width: '10%', fontSize: 10, fontWeight: 'bold' }}>Role</Text>
                </View>
                {tableData.map((row, index) => (
                    <View key={index} style={{ flexDirection: 'row', marginBottom: 4, padding: 5, borderBottom: '1 solid #E0E0E0' }}>
                        <Text style={{ width: '15%', fontSize: 10 }}>{row.date}</Text>
                        <Text style={{ width: '25%', fontSize: 10 }}>{row.title}</Text>
                        <Text style={{ width: '20%', fontSize: 10 }}>{row.director}</Text>
                        <Text style={{ width: '15%', fontSize: 10 }}>{row.dop}</Text>
                        <Text style={{ width: '15%', fontSize: 10 }}>{row.keyGrip}</Text>
                        <Text style={{ width: '10%', fontSize: 10 }}>{row.role}</Text>
                    </View>
                ))}
            </View>
        </View>
    </Page>
</Document>


    );

    return (
      <div className="p-12">
          <div className="flex flex-col">
              <div>
                  <h1 className="text-3xl font-bold">Matt Richmond</h1>
                  <h3 className="mt-2 text-lg font-bold ">Contact</h3>
                  <p className="text-sm">Email: hello@mattrichmond.ca</p>
                  <p className="text-sm">Phone: (604) 989-3632</p>
              </div>
              <h2 className="text-md mt-4">Key Grip</h2>
              <p className="text-sm">Vancouver Based Key Grip with a passion for building and creating innovative film sets.</p>
              <PDFDownloadLink document={<FilmCVDocument />} fileName="Matt Richmond - Grip CV.pdf">
                {({ blob, url, loading, error }) =>
                  loading ? 'Preparing document...' : 'Download as PDF'}
              </PDFDownloadLink>
          </div>
          <table className="mt-4 w-full text-xs">
              <thead>
                  <tr className="bg-gray-100">
                      <th className="p-2">Date</th>
                      <th>Title</th>
                      <th>Director</th>
                      <th>DOP</th>
                      <th>Key Grip</th>
                      <th>Role</th>
                      <th>Type</th>
                  </tr>
              </thead>
              <tbody>
                  {tableData.map((row, index) => (
                      <tr key={index} className="border-t border-gray-300">
                          <td className="p-2">{row.date}</td>
                          <td>{row.title}</td>
                          <td>{row.director}</td>
                          <td>{row.dop}</td>
                          <td>{row.keyGrip}</td>
                          <td>{row.role}</td>
                          <td>{row.type}</td>
                      </tr>
                  ))}
              </tbody>
          </table>
      </div>
    );
}
