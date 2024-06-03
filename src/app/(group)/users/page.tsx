import { UserTable } from "@/components/pages/users/UserTable";

export default function Profile() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="mb-4  mt-10 text-2xl font-bold  "> All Users </h1>
      <div className="w-full max-w-4xl">
        <UserTable />
      </div>
    </div>
  );
}
