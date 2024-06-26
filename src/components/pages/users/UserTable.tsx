import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Edit, Trash } from "lucide-react";
import Link from "next/link";

export function UserTable({ users, onDelete }) {
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
          <TableRow key={user._id} className="border-t border-gray-300">
            <TableCell>{user._id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.mobile}</TableCell>
            <TableCell className="text-right pr-4">
              <Button asChild variant="outline" size="sm">
                <Link href={`/edit/${user._id}`}>
                  <Edit className="w-4 h-4 mr-1" />
                  Edit
                </Link>
              </Button>
              <Button variant="outline" size="sm" className="text-red-600 hover:text-red-800" onClick={() => onDelete(user._id)}>
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
