import { transporter } from "../utils/mailer.js"


export const send_email = async (req, res) => {
    const { firstname, lastname, phone, email, subject, message } = req.body

    const mailOptions = {
        from: email,
        to: "liamstiduotechnology@gmail.com",
        subject,
        text: `Firstname: ${firstname}\Lastname: ${lastname}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if(err) {
            return res.status(500).send(err.toString());
        }
        res.status(200).send('Email sent: ' + info.response);
    })
}
