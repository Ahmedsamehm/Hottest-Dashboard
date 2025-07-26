import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./shared/ui/card";
import { TableHeader, TableRow, TableHead, Table } from "./shared/ui/table";

type Props = {
  TableHeadTitles: string[];
  children: React.ReactNode;
  tableDescription: string;
  tableName: string;
};
const TableMenu = ({ TableHeadTitles, tableDescription, tableName, children }: Props) => {
  return (
    <Card className="border-gray-200 shadow-sm bg-white">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-gray-900">{tableName}</CardTitle>
        <CardDescription className="text-gray-500">{tableDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-gray-200">
              {TableHeadTitles?.map((title: string, index: number) => {
                return (
                  <TableHead key={index} className="text-gray-600 font-medium">
                    {title}
                  </TableHead>
                );
              })}
            </TableRow>
          </TableHeader>
          {children}
        </Table>
      </CardContent>
    </Card>
  );
};

export default TableMenu;
