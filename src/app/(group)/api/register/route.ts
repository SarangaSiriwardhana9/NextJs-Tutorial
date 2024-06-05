import User from "@/models/User";
import connect from "@/utils/db";

export const POST = async (request: any) => {
    const { name, email, password } = await request.json();

    await connect();

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return {
                status: 400,
                body: { message: "Email already registered" },
            };
        }

        const newUser = new User({ name, email, password });
        await newUser.save();

        return {
            status: 201,
            body: { message: "User created successfully" },
        };
    } catch (error) {
        console.error("Error creating user:", error);
        return {
            status: 500,
            body: { message: "Internal Server Error" },
        };
    }
};

export default POST;
