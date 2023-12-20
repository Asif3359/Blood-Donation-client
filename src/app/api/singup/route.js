import { NextResponse } from 'next/server';

export const POST = async (req) => {
    try {
        const { name, email, password, photo } = await req.json();
        console.log("Name :", name)
        console.log("Email :", email)
        console.log("password :", password)
        console.log("photo :", photo)
        return NextResponse.json({ Message: "User Registered" }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: "Error something in server" }, { status: 500 }, { error: error });
    }
};

export default POST;