// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // Configure Zoho SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.in",
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_EMAIL_USER,
        pass: process.env.ZOHO_EMAIL_PASS, // App-specific password
      },
    });

    // Send the email
    await transporter.sendMail({
      // from: `"Vizlyx Contact" <${process.env.ZOHO_EMAIL_USER}>`,
      from: `"${name} via Vizlyx Contact" <${process.env.ZOHO_EMAIL_USER}>`,
      to: process.env.ZOHO_EMAIL_USER, // You can add more recipients
      subject: `New Contact Form Message from ${name}`,
      replyTo: email, // User’s actual email (safe)
      text: `
Name: ${name}
Email: ${email}
Message:
${message}
      `,
    });

    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
