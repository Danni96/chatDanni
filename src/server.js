import http from 'http'
import { Server } from 'socket.io'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import app from './app.js'
import Message from './models/Message.js'

dotenv.config()
connectDB()

const server = http.createServer(app)
const io = new Server(server, {
  cors: { origin: '*' }
})

io.on('connection', async (socket) => {
  console.log('Usuario conectado')

  // Envía los ultimos 20 mensajes al conectar
  const lastMessages = await Message.find().sort({ timestamp: 1 }).limit(20)
  lastMessages.forEach(msg => {
    socket.emit('chat message', {
      content: msg.content,
      user: msg.user,
      timestamp: msg.timestamp
    })
  })

  socket.on('chat message', async (msg) => {
    if (!msg.content || !msg.user) return;
    const saved = await Message.create({
      content: msg.content,
      user: msg.user
    })
    io.emit('chat message', {
      content: saved.content,
      user: saved.user,
      timestamp: saved.timestamp
    })
  })

  socket.on('disconnect', () => {
    console.log('Usuario desconectado')
  })
})

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})