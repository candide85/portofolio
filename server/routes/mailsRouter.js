import { send_email } from "../controllers/mailsController.js";
import express from 'express'

const mail_router = express.Router()


mail_router.post("/sendEmail", send_email)



export default mail_router

