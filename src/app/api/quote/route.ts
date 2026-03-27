import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { NextResponse } from "next/server";

const ses = new SESClient({
  region: process.env.AWS_SES_REGION || "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, service, message } = body;

    if (!name || !phone || !service || !message) {
      return NextResponse.json(
        { error: "Name, phone, service, and message are required." },
        { status: 400 }
      );
    }

    if (name.length > 100 || phone.length > 20 || (email && email.length > 254) || service.length > 100 || message.length > 1000) {
      return NextResponse.json(
        { error: "One or more fields exceed the maximum length." },
        { status: 400 }
      );
    }

    const htmlBody = `
      <h2>New Quote Request</h2>
      <table style="border-collapse:collapse;width:100%;max-width:500px;">
        <tr><td style="padding:8px 12px;font-weight:bold;color:#555;">Name</td><td style="padding:8px 12px;">${escapeHtml(name)}</td></tr>
        <tr><td style="padding:8px 12px;font-weight:bold;color:#555;">Phone</td><td style="padding:8px 12px;"><a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a></td></tr>
        <tr><td style="padding:8px 12px;font-weight:bold;color:#555;">Email</td><td style="padding:8px 12px;">${email ? escapeHtml(email) : "Not provided"}</td></tr>
        <tr><td style="padding:8px 12px;font-weight:bold;color:#555;">Service</td><td style="padding:8px 12px;">${escapeHtml(service)}</td></tr>
        <tr><td style="padding:8px 12px;font-weight:bold;color:#555;">Message</td><td style="padding:8px 12px;">${escapeHtml(message)}</td></tr>
      </table>
    `;

    const command = new SendEmailCommand({
      Source: process.env.SES_FROM_EMAIL!,
      Destination: {
        ToAddresses: [process.env.SES_TO_EMAIL!],
      },
      ReplyToAddresses: email && isValidEmail(email) ? [email] : undefined,
      Message: {
        Subject: { Data: `New Quote Request: ${sanitize(service)} — ${sanitize(name)}` },
        Body: {
          Html: { Data: htmlBody },
          Text: {
            Data: `New Quote Request\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email || "Not provided"}\nService: ${service}\nMessage: ${message}`,
          },
        },
      },
    });

    await ses.send(command);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("SES send error:", error);
    return NextResponse.json(
      { error: "Failed to send your request. Please call us directly." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function sanitize(str: string): string {
  return str.replace(/[\r\n]/g, " ").trim();
}

function isValidEmail(str: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
}
