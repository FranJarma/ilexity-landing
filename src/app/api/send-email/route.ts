import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ message: "Todos los campos son requeridos" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USERS.split(' '),
      subject: "Nuevo mensaje de contacto desde la landing page",
      text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Correo enviado exitosamente" }, { status: 200 });
  } catch (error) {
    console.error("Error enviando correo:", error);
    return NextResponse.json({ message: "Error enviando el correo" }, { status: 500 });
  }
}
