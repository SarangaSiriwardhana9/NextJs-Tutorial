// app\api\getUsers\route.ts
import User from "@/models/User";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  await connect();

  try {
    const users = await User.find({});
    return new NextResponse(JSON.stringify(users), { status: 200 });
  } catch (error) {
    return new NextResponse("Error fetching users", { status: 500 });
  }
};
