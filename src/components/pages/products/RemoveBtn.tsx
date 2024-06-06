//components\RemoveBtn.jsx
"use client";
 
import { useRouter } from "next/navigation";
 
export default function RemoveBtn({ id }) {
    const router = useRouter();
    const removeProduct= async () => {
        const confirmed = confirm("Are you sure?");
 
        if (confirmed) {
            const res = await fetch(`http://localhost:3000/api/products?id=${id}`, {
                method: "DELETE",
            });
 
            if (res.ok) {
                router.refresh();
            }
        }
    };
 
    return (
        <button onClick={removeProduct} className="px-4 py-2 font-semibold text-white bg-red-400 rounded-md hover:bg-red-500">
            Delete
        </button>
    );
}