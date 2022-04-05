// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import nodemailer from 'nodemailer';
require("dotenv").config();
export default async (req, res) => {

  const { name, email, message, phone } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  });

  try {
    const emailRes = await transporter.sendMail({
    from: email,
    to: 'decentr4l@gmail.com',
    subject: `Mensaje desde la web Decentr4l ${name}`,
    html: `<p>Tienes un nuevo mensaje</p><br>
    <p><strong>Nombre: </strong> ${name} </p><br>
    <p><strong>telegram: </strong> ${phone} </p><br>
    <p><strong>Mensaje: </strong> ${message} </p><br>

    `,
    });

    console.log('Message Sent');
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(req.body);
};