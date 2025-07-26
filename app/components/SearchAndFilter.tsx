import React from "react";
import { Card, CardContent, CardTitle, CardHeader } from "./shared/ui/card";
import { Filter, Search } from "lucide-react";
import { Input } from "./shared/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./shared/ui/select";

const SearchAndFilter = ({ placeholder }: { placeholder: string }) => {
  return (
    <Card className="border-gray-200 shadow-sm bg-white">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-gray-900">Search & Filter</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-2.5 size-4 text-gray-400" />
            <Input type="text" placeholder={placeholder} className="pl-10 border-gray-200 focus:border-blue-400" />
          </div>
          <div className="flex gap-3">
            <Select>
              <SelectTrigger className="w-[140px] border-gray-200">
                <Filter className="mr-2 size-4" />
                <SelectValue placeholder="All Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="confirmed">Confirmed</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="checked-out">Checked Out</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SearchAndFilter;
