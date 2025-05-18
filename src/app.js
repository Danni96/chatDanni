import express from 'express'
import cors from 'cors'
import authRoutes from './routes/auth.js'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')))

// Middleware
app.use(cors())
app.use(express.json())

// Rutas
app.use('/api', authRoutes)

export default app