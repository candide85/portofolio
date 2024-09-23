import express from 'express'
import cors from 'cors'
import mail_router from './routes/mailsRouter.js'


const app = express()


app.use(express.json())
app.use(cors({
    origin: `https://portofolio-frontend-beta.vercel.app/`
}))

app.use('/api', mail_router)


export default app;