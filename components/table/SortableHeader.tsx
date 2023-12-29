"use client";

import { Column } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "../ui/button";

interface ISortableHeaderProps<TData, TValue> {
  title: string;
  column: Column<TData, TValue>;
}

export default function SortableHeader<TData, TValue>(props: ISortableHeaderProps<TData, TValue>) {
  return (
    <Button variant="ghost" onClick={() => props.column.toggleSorting(props.column.getIsSorted() === "asc")}>
      {props.title}
      <ArrowUpDown className="ml-2 h-4 w-4" />
    </Button>
  );
}
