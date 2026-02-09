interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export function ContactEmail({
  firstName,
  lastName,
  email,
  message,
}: EmailTemplateProps) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
      <h2>📩 New Contact Form Submission</h2>

      <p>
        <strong>Name:</strong> {firstName} {lastName}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>

      <hr />

      <p>
        <strong>Message:</strong>
      </p>
      <p>{message}</p>
    </div>
  );
}
