import { NextResponse } from "next/server";

export function GET(request) {
    return NextResponse.json({
        message: "worked api getting data",
    });
}