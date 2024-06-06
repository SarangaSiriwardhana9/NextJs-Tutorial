// components/ProductssList.jsx
import Link from "next/link";
import Image from "next/image";
import RemoveBtn from "./RemoveBtn";

const getProducts = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/products", {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch products");
        }

        return res.json();
    } catch (error) {
        console.log("Error loading products: ", error);
    }
};

export default async function ProductssList() {
    const { products } = await getProducts();

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="justify-between items-center mb-6">
                <h1 className="mb-4 text-center mt-4 text-4xl text-slate-700 font-serif font-bold">All Items</h1>
                <Link href="/addProduct">
                    <button className="px-4 items-end justify-end py-2 font-semibold text-white bg-[#41b981] rounded-md hover:bg-[#398656]">
                        Add Product
                    </button>
                </Link>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-[#e6fff3]">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border-b-2 border-gray-300 text-left leading-4 text-[#25523d] tracking-wider">Select</th>
                            <th className="px-4 py-2 border-b-2 border-gray-300 text-left leading-4 text-[#25523d] tracking-wider">Name</th>
                            <th className="px-4 py-2 border-b-2 border-gray-300 text-left leading-4 text-[#25523d] tracking-wider">Price</th>
                            <th className="px-4 py-2 border-b-2 border-gray-300 text-left leading-4 text-[#25523d] tracking-wider">Category</th>
                            <th className="px-4 py-2 border-b-2 border-gray-300 text-left leading-4 text-[#25523d] tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product._id} className="hover:bg-gray-100">
                                <td className="px-4 py-2 border-b border-gray-300">
                                    <input type="checkbox" className="form-checkbox" />
                                </td>
                                <td className="px-4 py-2 border-b border-gray-300">
                                    <div className="flex items-center">
                                        <div className="ml-4">
                                            <div className="text-sm font-semibold text-gray-700">{product.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-2 border-b border-gray-300">${product.price}</td>
                                <td className="px-4 py-2 border-b border-gray-300">{product.category}</td>
                                <td className="px-4 py-2 border-b border-gray-300">
                                    <Link href={`/editProduct/${product._id}`}>
                                        <button className="px-4 py-2 font-semibold text-white bg-[#398656] rounded-md hover:bg-[#337c4f] mr-2">
                                            Edit
                                        </button>
                                    </Link>
                                    
                                    <RemoveBtn id={product._id} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
