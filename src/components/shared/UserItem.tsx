'use client'
import { signOut, useSession } from "next-auth/react";

export default function UserItem() {
    const { data: session }: any = useSession();
    console.log(session?.user?.name);
console.log(session?.user?.email);
    return(
        <div className="flex items-center justify-start gap-2 border rounded-[16px] p-2">
            {/* name and email */}
            <div className="avatar rounded-full min-h-12 min-w-12 bg-emerald-500 text-white font-[700] flex items-center justify-center">
                <p>JD</p>
            </div>

            <div className="grow">
            <p className="text-lg font-bold"> {session?.user?.name} </p>
            <p className="text-sm text-gray-500">
                {session?.user?.email}
            </p>
            </div>
        </div>
    )
}