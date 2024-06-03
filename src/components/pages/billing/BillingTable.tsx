// @ts-ignore
'use client';
import { useState } from "react";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableRow,TableHeader } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Edit, Trash } from "lucide-react";
import { ToastDestructive } from "@/components/shared/toast/ToastDestructive";

export function BillingTable() {
  const [billingData, setBillingData] = useState([
    {
      id: "BILL001",
      userName: "John Doe",
      email: "john.doe@example.com",
      productId: "PROD001",
      billingId: "BLD001",
    },
    {
      id: "BILL002",
      userName: "Jane Smith",
      email: "jane.smith@example.com",
      productId: "PROD002",
      billingId: "BLD002",
    },
  ]);

  const handleDelete = (id) => {
    setBillingData(billingData.filter((data) => data.id !== id));
  };

  return (
    <Table className="w-full border-collapse border border-gray-300">
      <TableHeader>
        <TableRow className="bg-gray-100">
          <TableHead>User Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Product ID</TableHead>
          <TableHead>Billing ID</TableHead>
          <TableHead className="text-right pr-4">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {billingData.map((data) => (
          <TableRow key={data.id} className="border-t border-gray-300">
            <TableCell>{data.userName}</TableCell>
            <TableCell>{data.email}</TableCell>
            <TableCell>{data.productId}</TableCell>
            <TableCell>{data.billingId}</TableCell>
            <TableCell className="text-right pr-4">
              <ToastDestructive onDelete={() => handleDelete(data.id)} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow className="bg-gray-100">
          <TableCell colSpan={4} className="text-right pr-4">
            Total Billing Data
          </TableCell>
          <TableCell className="text-right pr-4">{billingData.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
