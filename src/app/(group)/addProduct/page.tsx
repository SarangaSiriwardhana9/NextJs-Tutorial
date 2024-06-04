'use client'
import { AddFoodForm } from "@/components/pages/addProduct/AddFoodForm";

export default function addProduct() {
  return (
    <div className=" items-center justify-center ">
        <div className="   bg-gradient-to-r from-[#f3fcf9] via-[#e7f8f2] to-[#dcfdf1] mt-8   rounded-3xl shadow-xl items-center justify-center py-12 mx-16 ">
      <h1 className="text-4xl text-center  mb-6 text-slate-700   font-serif font-bold">Add Product</h1>
      <div className="flex items-center justify-center">
      <AddFoodForm />
      </div>
      </div>
      
    
    </div>
  );
}
