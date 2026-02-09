import { Resend } from "resend";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const resend = new Resend(process.env.NEXT_PUBLIC_RESENDJS_SECRET_KEY);
// const resend = new Resend("re_aMKPYfTY_ENy2cuFQbxFKzcpk8TQfF6Bk");

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { firstName, lastName, email, message } = body;

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 },
      );
    }

    const { error } = await resend.emails.send({
      //   from: "DeskPro Contact <no-reply@deskprotechnology.com.np>",
      from: "DeskPro Contact <onboarding@resend.dev>",
      to: ["sauravprasad2050@gmail.com"],
      replyTo: email,
      subject: `New Contact Message from ${firstName} ${lastName}`,
      html: generateEmailHTML(firstName, lastName, email, message),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("CRASH:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

function generateEmailHTML(
  firstName: string,
  lastName: string,
  email: string,
  message: string,
) {
  return `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>New Contact Form Submission</title>
  </head>
  <body style="
    margin: 0;
    padding: 0;
    background-color: #f4f6f8;
    font-family: Arial, Helvetica, sans-serif;
  ">
    <table width="100%" cellpadding="0" cellspacing="0" style="padding: 24px;">
      <tr>
        <td align="center">
          <table
            width="100%"
            cellpadding="0"
            cellspacing="0"
            style="
              max-width: 600px;
              background-color: #ffffff;
              border-radius: 8px;
              overflow: hidden;
              box-shadow: 0 4px 12px rgba(0,0,0,0.08);
            "
          >
            <!-- Header -->
            <tr>
              <td
                style="
                  background-color: #0f172a;
                  padding: 20px 24px;
                  color: #ffffff;
                "
              >
                <h2 style="margin: 0; font-size: 20px;">
                  📩 New Contact Form Submission
                </h2>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding: 24px; color: #111827;">
                <p style="margin: 0 0 16px;">
                  You’ve received a new message from your website contact form.
                </p>

                <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold;">Name</td>
                    <td style="padding: 8px 0;">${firstName} ${lastName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold;">Email</td>
                    <td style="padding: 8px 0;">${email}</td>
                  </tr>
                </table>

                <div
                  style="
                    background-color: #f9fafb;
                    border-left: 4px solid #2563eb;
                    padding: 16px;
                    border-radius: 4px;
                  "
                >
                  <p style="margin: 0 0 8px; font-weight: bold;">Message</p>
                  <p style="margin: 0; white-space: pre-line;">
                    ${message}
                  </p>
                </div>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td
                style="
                  background-color: #f1f5f9;
                  padding: 16px 24px;
                  font-size: 12px;
                  color: #475569;
                "
              >
                <p style="margin: 0;">
                  This email was sent from your website contact form.
                </p>
                <p style="margin: 4px 0 0;">
                  You can reply directly to this email to respond to the user.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;
}
