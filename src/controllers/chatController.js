import Message from '../models/Message.js';

class ChatController {
  async getChatHistory(req, res) {
    try {
      const messages = await Message.find().sort({ timestamp: 1 }).limit(20);
      res.status(200).json(messages);
    } catch (error) {
      res.status(500).json({ message: 'Error al recuperar el historial de mensajes', error });
    }
  }

  async sendMessage(req, res) {
    const { content } = req.body;
    const username = req.user.username;

    try {
      const message = new Message({
        content,
        user: username,
      });
      await message.save();
      res.status(201).json(message);
    } catch (error) {
      res.status(500).json({ message: 'Error al enviar el mensaje', error });
    }
  }
}

export default new ChatController();