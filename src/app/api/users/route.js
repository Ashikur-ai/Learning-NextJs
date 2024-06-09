


import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server";

connectDb();

export function GET() {
    
    const users = [
        {
          name: "John Doe",
          address: {
            street: "123 Maple Street",
            city: "Springfield",
            state: "IL",
            zip: "62704"
          }
        },
        {
          name: "Jane Smith",
          address: {
            street: "456 Oak Avenue",
            city: "Metropolis",
            state: "NY",
            zip: "10001"
          }
        },
        {
          name: "Emily Johnson",
          address: {
            street: "789 Pine Lane",
            city: "Gotham",
            state: "NJ",
            zip: "07001"
          }
        },
        {
          name: "Michael Brown",
          address: {
            street: "101 Birch Boulevard",
            city: "Star City",
            state: "CA",
            zip: "90210"
          }
        },
        {
          name: "Sarah Davis",
          address: {
            street: "202 Cedar Court",
            city: "Central City",
            state: "CO",
            zip: "80012"
          }
        }
    ];
    return NextResponse.json(users);

}
export function POST(){}
export function DELETE(request) {
    console.log("delete api called");
    return NextResponse.json({
        message: "deleted !!",
        status: true,
    },
    {status:201, statusText: "status text"}
    );
}

export function PUT(){}