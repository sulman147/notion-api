export async function GET() {
  const res = await fetch(
    "https://api.notion.com/v1/databases/1289fe4abad98080b910f08a0d323cce/query",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer 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`,
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();

  if (!res.ok) {
    return Response.json({ error: data }, { status: res.status });
  }

  return Response.json(data.results); // 👈 This returns all data directly
}
