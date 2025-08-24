import React, { useEffect, useState } from "react";
import { Card, CardContent, CardTitle, CardHeader } from "./shared/ui/card";
import { Filter, Search } from "lucide-react";
import { Input } from "./shared/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./shared/ui/select";
import { SelectOption } from "../Types/types";
import { useDashBoard } from "../context/dashBoardContext";

type Props = {
  placeholder: string;
  type: string;
  filterOptions: SelectOption[];
};
const SearchAndFilter = ({ placeholder, type, filterOptions }: Props) => {
  "use memo";
  const { setSearch, setFilter, search } = useDashBoard();
  const [inputValue, setInputValue] = useState(search);

  const handleFilterChange = (value: string) => {
    setFilter(value);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearch(inputValue);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue, setSearch]);

  useEffect(() => {
    setInputValue(search);
  }, [search]);
  return (
    <Card className="shadow-sm border-1 shadow-gray-500  dark:border-none hover:shadow-xs  duration-300  bg-background  text-accent-foreground">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold ">Search & Filter</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-2.5 size-4 text-gray-400" />
            <Input type={type} placeholder={placeholder} className="pl-10 border-gray-200 focus:border-blue-400" value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
          <div className="flex gap-3">
            <Select onValueChange={handleFilterChange}>
              <SelectTrigger className="w-[140px] border-gray-200">
                <Filter className="mr-2 size-4" />
                <SelectValue placeholder="All Status" />
              </SelectTrigger>
              <SelectContent>
                {filterOptions.map((option: { value: string; label: string }, index: number) => (
                  <SelectItem key={index} value={option?.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SearchAndFilter;
