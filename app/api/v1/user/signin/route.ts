import { client } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest)
{
    const body = await req.json();

    const user = await client.user.findUnique({
        where: {
            username: body.username
        }
    })

    if(!user)
    {
        return NextResponse.json(
            { message: "User Not Found!" },
            { status: 400 }
        );
    }

    if(user.password !== body.password)
    {
        return NextResponse.json(
            { message: "Invalid password" },
            { status: 401 }
        );
    }

    return NextResponse.json({
        message: "User signed in!",
        user
    })
}