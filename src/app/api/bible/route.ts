import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const ref = searchParams.get("ref");

  if (!ref) {
    return NextResponse.json({ error: "Missing ref parameter" }, { status: 400 });
  }

  try {
    const bibleCachePath = path.join(process.cwd(), "data", "bible-cache.json");
    if (fs.existsSync(bibleCachePath)) {
      const cache = JSON.parse(fs.readFileSync(bibleCachePath, "utf-8"));
      if (cache[ref]) {
        return NextResponse.json({ ref, text: cache[ref] });
      }

      // Try normalized match
      const clean = (s: string) => s.replace(/\s+/g, " ").trim();
      const target = clean(ref);

      for (const [key, val] of Object.entries(cache)) {
        if (clean(key) === target) {
          return NextResponse.json({ ref, text: val });
        }
      }
    }

    return NextResponse.json({ error: "Verse not found in cache", ref }, { status: 404 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to read scripture", details: String(error) }, { status: 500 });
  }
}
