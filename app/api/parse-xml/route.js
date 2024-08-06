// app/api/parse-xml/route.js

import { parseStringPromise } from "xml2js";
import fetch from "node-fetch";

export async function GET() {
  const url = "https://zenn.dev/hasilan/feed/"; // 固定のURLを指定

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch XML");
    }
    const xml = await response.text();
    const result = await parseStringPromise(xml, { explicitArray: false });
    return new Response(JSON.stringify(result), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
