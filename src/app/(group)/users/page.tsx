'use client'
import { UserTable } from "@/components/pages/users/UserTable";

export default function Users() {
  return (
    <div className="   ">
      <h1 className="mb-4 text-center   mt-10 text-4xl text-slate-700 font-serif font-bold "> All Users </h1>
      <div className="w-full max-w-4xl">
        <UserTable />
      </div>
    </div>
  );
}
