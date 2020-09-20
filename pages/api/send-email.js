require('dotenv').config()
const nodemailer = require('nodemailer')

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
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
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