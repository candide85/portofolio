import express from 'express'
import cors from 'cors'
import mail_router from './routes/mailsRouter.js'


const app = express()


app.use(express.json())
app.use(cors({
    credentials: true,
    origin: [`http://localhost:5173`,`https://portofolio-frontend-beta.vercel.app`],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}))

app.use('/api', mail_router)


export default app;