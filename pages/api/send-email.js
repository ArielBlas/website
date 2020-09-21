require('dotenv').config()
const nodemailer = require('nodemailer')
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
    '834955275944-roejri9e13caldno2ccoso395aem10th.apps.googleusercontent.com',
    '5t2uIn7hcYOzysNmYaMaiwAJ',
    "https://developers.google.com/oauthplayground" // Redirect URL
);

oauth2Client.setCredentials({
    refresh_token: '1//04pTeVqQIC9NECgYIARAAGAQSNwF-L9IrJ1EICwrqOWye7h84KdSVY52v39kI05sc1uFZED5ZiCpDiD2IcXsd3PryrGdJXvbdnbk'
});
const accessToken = oauth2Client.getAccessToken()

export default async (req, res) => {

    if (req.method === 'POST') {
        const { user_name, user_mail, user_message } = req.body
        let contentHTML = "";
        contentHTML = `
            <h1>User Information</h1>
            <ul>
                <li>Nombre: ${user_name}</li>
                <li>Email: ${user_mail}</li>                
            </ul>
            <p>${user_message}</p>
        `;
        
        let tranporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                type: 'OAuth2',
                user: 'arielwalconblas@gmail.com',
                clientId: '834955275944-roejri9e13caldno2ccoso395aem10th.apps.googleusercontent.com',
                clientSecret: '5t2uIn7hcYOzysNmYaMaiwAJ',
                refreshToken: '1//04pTeVqQIC9NECgYIARAAGAQSNwF-L9IrJ1EICwrqOWye7h84KdSVY52v39kI05sc1uFZED5ZiCpDiD2IcXsd3PryrGdJXvbdnbk',
                accessToken: accessToken,
                // expires: 3599
            },
            tls: { 
                rechazarUnauthorized: false 
            }
        })

        await tranporter.sendMail({
            from: 'arielwalconblas@gmail.com', 
            to: 'ariel_blas_01@hotmail.com',
            subject: 'Website contact form', 
            html: contentHTML
        })

        res.json(req.body)
    }
}