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
    <Card className="border-gray-300    max-h-[50vh] overflow-y-auto">
      <CardHeader className="pb-4 ">
        <CardTitle className="text-lg font-semibold ">{tableName}</CardTitle>
        <CardDescription className="">{tableDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            {/* Table header */}
            <TableRow className="border-gray-300 rounded-sm capitalize ">
              {TableHeadTitles?.map((title: string, index: number) => {
                return (
                  <TableHead key={index} className=" font-medium">
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
