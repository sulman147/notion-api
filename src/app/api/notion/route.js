// export async function GET() {
//   const res = await fetch(
//     "https://api.notion.com/v1/databases/1289fe4abad98080b910f08a0d323cce/query",
//     {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer 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`,
//         "Notion-Version": "2022-06-28",
//         "Content-Type": "application/json",
//       },
//     }
//   );
//   const data = await res.json();

//   if (!res.ok) {
//     return Response.json({ error: data }, { status: res.status });
//   }

//   return Response.json(data.results); // 👈 This returns all data directly
// }

import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";

export async function GET(request) {
  const notion = new Client({
    auth: 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,
  });

  try {
    const response = await notion.databases.query({
      database_id: "1289fe4abad98080b910f08a0d323cce",
    });

    // Return response with CORS headers
    return new NextResponse(JSON.stringify(response), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // allow from any domain
        "Access-Control-Allow-Methods": "GET, OPTIONS",
      },
    });
  } catch (error) {
    console.error("Notion API error:", error);
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
  }
}

// Handle preflight OPTIONS request (CORS)
export async function OPTIONS(request) {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
