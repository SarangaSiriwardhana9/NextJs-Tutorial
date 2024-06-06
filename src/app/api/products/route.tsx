//app\api\products\route.js
import connect from "@/utils/db";
import Product from "@/models/ProductModel";
import { NextResponse } from "next/server";
 
export async function GET() {
    await connect();
    const products = await Product.find();
    return NextResponse.json({ products });
}
 
export async function POST(request) {
    const { name, image,price,category } = await request.json();
    await connect();
    await Product.create({ name, image, price, category });
    return NextResponse.json({ message: "Product Created" }, { status: 201 });
}
 
export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connect();
    await Product.findByIdAndDelete(id);
    return NextResponse.json({ message: "Product deleted" }, { status: 200 });
}