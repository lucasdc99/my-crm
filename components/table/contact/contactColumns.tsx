"use client";

import { Button } from "@/components/ui/button";
import { GenderEnum } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { Edit } from "lucide-react";
import Link from "next/link";
import SortableHeader from "../SortableHeader";
import DeleteConfirm from "./DeleteConfirm";

export interface IContactList {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: GenderEnum;
  moneyToInvest: number | null;
}

export function contactColumns({
  onDelete,
}: {
  onDelete: (contactId: number) => Promise<void>;
}): ColumnDef<IContactList>[] {
  return [
    {
      accessorKey: "firstName",
      header: ({ column }) => <SortableHeader title="First name" column={column} />,
    },
    {
      accessorKey: "lastName",
      header: ({ column }) => <SortableHeader title="Last name" column={column} />,
    },
    {
      accessorKey: "email",
      header: ({ column }) => <SortableHeader title="Email" column={column} />,
    },
    {
      accessorKey: "gender",
      header: ({ column }) => <SortableHeader title="Gender" column={column} />,
      cell: ({ row }) => {
        return <div className="capitalize">{row.original.gender}</div>;
      },
    },
    {
      accessorKey: "moneyToInvest",
      header: ({ column }) => <SortableHeader title="Money to invest" column={column} />,
      cell: ({ row }) => {
        const { moneyToInvest } = row.original;

        if (!moneyToInvest) {
          return "---";
        }

        const formatted = new Intl.NumberFormat("fr-FR", {
          style: "currency",
          currency: "EUR",
        }).format(moneyToInvest);

        return formatted;
      },
    },
    {
      id: "actions",
      cell: ({ row }) => {
        return (
          <div className="flex justify-end">
            <Button variant="ghost" className="h-8 w-8 p-0" asChild>
              <Link href={`/contacts/${row.original.id}/edit`}>
                <span className="sr-only">Edit contact</span>
                <Edit className="h-4 w-4" />
              </Link>
            </Button>
            <DeleteConfirm contactId={row.original.id} onDelete={onDelete} />
          </div>
        );
      },
    },
  ];
}
