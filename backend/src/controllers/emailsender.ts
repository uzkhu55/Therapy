import { Request, Response } from "express";
import nodemailer from "nodemailer";

const emailSender = async (sendEmail: string, subject: string, html: any) => {
  try {
    const transport = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "uzkhuthef@gmail.com",
        pass: "fbvelrxjtwijqrsi", // Use environment variables for security
      },
    });

    const options = {
      from: "uzkhuthef@gmail.com",
      to: sendEmail,
      subject: subject,
      html: html,
    };

    await transport.sendMail(options);
  } catch (error: any) {
    throw new Error("Email sending failed: " + error.message);
  }
};

export const sendMailer = async (req: Request, res: Response) => {
  const { sendEmail, subject, html } = req.body;

  try {
    await emailSender(sendEmail, subject, html);
    res.status(200).send("Successfully send email");
  } catch (error) {
    res.status(400).send("Failed to send email");
  }
};
