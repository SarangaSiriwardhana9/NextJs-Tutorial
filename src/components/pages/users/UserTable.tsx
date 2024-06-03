import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Edit, Trash } from "lucide-react";

export function UserTable() {
  const users = [
    {
      id: "USR001",
      name: "John Doe",
      email: "john.doe@example.com",
      mobile: "123-456-7890",
    },
    {
      id: "USR002",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      mobile: "098-765-4321",
    },
    {
      id: "USR003",
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      mobile: "555-123-4567",
    },
    {
      id: "USR004",
      name: "Bob Brown",
      email: "bob.brown@example.com",
      mobile: "444-567-8901",
    },
    {
      id: "USR005",
      name: "Charlie Davis",
      email: "charlie.davis@example.com",
      mobile: "333-678-9012",
    },
  ];

  return (
    <Table className="w-full border-collapse border border-gray-300">
      <TableHeader>
        <TableRow className="bg-gray-100">
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Mobile</TableHead>
          <TableHead className="text-right pr-4">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id} className="border-t border-gray-300">
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.mobile}</TableCell>
            <TableCell className="text-right pr-4">
              <Button asChild variant="outline" size="sm">
                <Link href={`/edit/${user.id}`}>
                  <Edit className="w-4 h-4 mr-1" />
                  Edit
                </Link>
              </Button>
              <Button variant="outline" size="sm" className="text-red-600 hover:text-red-800">
                <Trash className="w-4 h-4 mr-1" />
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow className="bg-gray-100">
          <TableCell colSpan={4} className="text-right pr-4">
            Total Users
          </TableCell>
          <TableCell className="text-right pr-4">{users.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
