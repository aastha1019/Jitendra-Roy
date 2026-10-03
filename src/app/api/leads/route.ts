import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export const runtime = "nodejs";

const dataDirectory = path.join(process.cwd(), "data");
const csvFilePath = path.join(dataDirectory, "leads.csv");

const CSV_HEADERS = [
  "Lead ID",
  "Date",
  "Time",
  "Name",
  "Phone",
  "Email",
  "Property Type",
  "Location",
  "Requirement",
  "Message",
];

function escapeCsv(value: unknown) {
  const text = String(value ?? "").replace(/\r?\n|\r/g, " ").trim();
  return `"${text.replace(/"/g, '""')}"`;
}


export async function GET() {
  return NextResponse.json({
    success: true,
    message: "Lead API is working",
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {name,phone,email,propertyType,location,requirement,message,} = body;


    if (!name?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Name is required.",
        },
        { status: 400 }
      );
    }

    if (!phone?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Phone number is required.",
        },
        { status: 400 }
      );
    }

    if (!propertyType?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Property type is required.",
        },
        { status: 400 }
      );
    }

    if (!location?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Location is required.",
        },
        { status: 400 }
      );
    }

    if (!requirement?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Requirement is required.",
        },
        { status: 400 }
      );
    }

    if (!message?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Message is required.",
        },
        { status: 400 }
      );
    }

    if (
      email?.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        email.trim()
      )
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }


    const now = new Date();

    const leadId = `LR-${now.getTime()}`;

    const date = now.toLocaleDateString("en-IN");

    const time = now.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });


    await fs.mkdir(dataDirectory, {
      recursive: true,
    });

    try {
      await fs.access(csvFilePath);
    } catch {
      await fs.writeFile(
        csvFilePath,
        CSV_HEADERS.join(",") + "\n",
        "utf8"
      );
    }


    const row = [leadId,date,time,name,phone,email || "",propertyType,location,requirement,message,].map(escapeCsv).join(",");

    await fs.appendFile(
      csvFilePath,
      row + "\n",
      "utf8"
    );

    console.log(
      `Lead saved successfully: ${leadId}`
    );

    return NextResponse.json(
      {
        success: true,
        message:
          "Your enquiry has been submitted successfully.",
        leadId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(
      "LEAD_SUBMISSION_ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Unable to save your enquiry. Please try again.",
      },
      { status: 500 }
    );
  }
}