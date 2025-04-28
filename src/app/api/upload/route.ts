import { NextRequest, NextResponse } from "next/server";

// Helper for reading the file, for now we'll just confirm upload.
export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get('resume');

  if (!file || typeof file === "string") {
    return NextResponse.json({ message: "No file uploaded." }, { status: 400 });
  }

  // In real world, process the file (parse, analyze etc)
  // For now we give a mock "analysis" result:
  return NextResponse.json({
    message: "File uploaded successfully! ATS analysis: (coming soon)."
  });
}