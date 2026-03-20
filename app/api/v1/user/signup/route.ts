import { client } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const body = await req.json();

    const user = await client.user.create({
        data: {
            username: body.username,
            password: body.password
        }
    })

    return NextResponse.json({
        message: "User creation succesfull",
        user
    });
}