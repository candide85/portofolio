import nodeMailer from "nodemailer"

export const transporter = nodeMailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "liamstiduotechnology@gmail.com",
        pass: "elhx wvfc nsal mcja"
    }
})