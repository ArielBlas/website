// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

// type Data = {
//   name: string
// }

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }

require("dotenv").config();
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

oauth2Client.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    let contentHTML = "";
    contentHTML = `
            <h1>User Information</h1>
            <ul>
                <li>Nombre: ${name}</li>
                <li>Email: ${email}</li>                
            </ul>
            <p>${message}</p>
        `;

    const accessToken = await oauth2Client.getAccessToken();

    let tranporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        type: "OAuth2",
        user: "arielwalconblas@gmail.com",
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken,
        // expires: 3599
      },
      tls: {
        rechazarUnauthorized: false,
      },
    });

    await tranporter
      .sendMail({
        from: "arielwalconblas@gmail.com",
        to: "ariel_blas_01@hotmail.com",
        subject: "Website contact form",
        html: contentHTML,
      })
      .catch((err: any) => {
        console.log("error", err);
      });

    res.json(req.body);
  }
}
