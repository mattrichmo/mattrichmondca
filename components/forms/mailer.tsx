// email-server.ts
import { SMTPServer } from "smtp-server";
import nodemailer from "nodemailer"; // Import nodemailer

const server = new SMTPServer({
  onData(stream, session, callback) {
    let data = "";
    stream.on("data", (chunk) => {
      data += chunk;
    });

    stream.on("end", () => {
      const mailData = Buffer.from(data, "base64").toString();
      sendEmail(mailData);
      callback();
    });
  },
});

server.listen(25, "0.0.0.0", () => {
  console.log("Email server listening on port 25");
});

function sendEmail(mailData: string) {
  const transporter = nodemailer.createTransport({
    host: "your-smtp-server-hostname",
    port: 25,
  });

  const mailOptions = {
    from: "your-email@example.com",
    to: "yourself@example.com",
    subject: "Form Response",
    text: mailData,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
}
