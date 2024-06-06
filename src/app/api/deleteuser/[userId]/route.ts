// app/api/deleteUser/[userId].js
import User from "@/models/User";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const DELETE = async (request) => {
  const { userId } = request.params;

  await connect();

  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return new NextResponse("User not found", { status: 404 });
    }
    return new NextResponse("User deleted successfully", { status: 200 });
  } catch (error) {
    return new NextResponse("Failed to delete user", { status: 500 });
  }
};
