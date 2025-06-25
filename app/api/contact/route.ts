import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured")
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 })
    }

    try {
      // Send email to you (Kaavya)
      const { data, error } = await resend.emails.send({
        from: "Portfolio Contact <noreply@yourdomain.com>", // You'll need to update this
        to: ["kaavyakri@gmail.com"],
        subject: `Portfolio Contact: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #9333ea 0%, #2563eb 100%); padding: 20px; border-radius: 8px 8px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 24px;">New Portfolio Contact</h1>
            </div>
            <div style="background: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px; border: 1px solid #e2e8f0;">
              <div style="margin-bottom: 20px;">
                <h3 style="color: #1e293b; margin: 0 0 10px 0;">Contact Details:</h3>
                <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
                <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
                <p style="margin: 5px 0;"><strong>Subject:</strong> ${subject}</p>
              </div>
              
              <div style="margin-top: 20px;">
                <h3 style="color: #1e293b; margin: 0 0 10px 0;">Message:</h3>
                <div style="background: white; padding: 15px; border-radius: 6px; border-left: 4px solid #9333ea;">
                  ${message.replace(/\n/g, "<br>")}
                </div>
              </div>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
                <p style="color: #64748b; font-size: 14px; margin: 0;">
                  This message was sent from your portfolio contact form.
                </p>
              </div>
            </div>
          </div>
        `,
        replyTo: email, // This allows you to reply directly to the sender
      })

      if (error) {
        console.error("Resend error:", error)
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
      }

      // Log successful submission
      console.log("Contact form submission sent successfully:", {
        name,
        email,
        subject,
        messageId: data?.id,
        timestamp: new Date().toISOString(),
      })

      return NextResponse.json(
        {
          message: "Message sent successfully! I'll get back to you soon.",
        },
        { status: 200 },
      )
    } catch (emailError) {
      console.error("Email sending error:", emailError)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
