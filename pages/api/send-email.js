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
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                type: 'OAuth2',
                user: 'arielwalconblas@gmail.com',
                clientId: '834955275944-roejri9e13caldno2ccoso395aem10th.apps.googleusercontent.com',
                clientSecret: '5t2uIn7hcYOzysNmYaMaiwAJ',
                refreshToken: '1//040OS-efxRyXrCgYIARAAGAQSNwF-L9IrBZFi0-3Nk1yLf0B589CGfEd_BTUr2kDxv2NZi16HQOuippSRi90ABY9B_RnLmki33qE',
                accessToken: 'ya29.a0AfH6SMB4tfUUAiAXygvRPyJJDluw9zOC8Np050bdVfSRAo17fbsd21XU2xexWgWU_G_klgW1wxvWVuoDdmU-oDeCalQ3SfNDNHE7toVVhBUgGUPsDxiv_2tPCWEyY-vvd5-GbkyxBCFF6o8_5_OAjEFWeqqk3iA7d8s',
                // expires: 1484314697598
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