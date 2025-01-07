import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    if (!process.env.BEEHIIV_API_KEY || !process.env.BEEHIIV_PUBLICATION_ID) {
      console.error("Missing required environment variables");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const { email } = await request.json();

    console.log("Attempting to subscribe:", email);
    console.log("Using publication ID:", process.env.BEEHIIV_PUBLICATION_ID);

    // Updated API endpoint to include publication ID in the URL
    const response = await fetch(
      `https://api.beehiiv.com/v2/publications/${process.env.BEEHIIV_PUBLICATION_ID}/subscriptions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.BEEHIIV_API_KEY}`,
        },
        body: JSON.stringify({
          email: email,
          reactivate_existing: false,
          send_welcome_email: true,
          utm_source: "website",
          utm_medium: "direct",
        }),
      }
    );

    console.log("Beehiiv response status:", response.status);
    const data = await response.text(); // Get response as text first
    console.log("Beehiiv response text:", data);

    if (!response.ok) {
      return NextResponse.json(
        { error: `Beehiiv API error: ${response.status} - ${data}` },
        { status: response.status }
      );
    }

    let jsonData;
    try {
      jsonData = JSON.parse(data); // Try to parse as JSON
    } catch (e) {
      console.error("Failed to parse JSON:", e);
      return NextResponse.json(
        { error: `Invalid response from Beehiiv: ${data}` },
        { status: 500 }
      );
    }

    return NextResponse.json(jsonData, { status: response.status });
  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json(
      { error: "Failed to subscribe: " + (error as Error).message },
      { status: 500 }
    );
  }
}
