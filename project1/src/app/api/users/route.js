import { NextResponse } from "next/server";

export const GET = async (req) => {
  // Your logic here

  return NextResponse("It works!", { status: 200  });
};
