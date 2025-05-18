# Microservicio de Chat

Este proyecto es un microservicio de chat en grupo construido con Express.js y Socket.IO, que permite la comunicación en tiempo real entre los usuarios. Utiliza MongoDB para la persistencia de datos y JWT para la autenticación de usuarios.

## Estructura del Proyecto

```
microservicio-chat
├── src
│   ├── app.js                # Punto de entrada de la aplicación
│   ├── server.js             # Inicia el servidor HTTP y configura Socket.IO
│   ├── config
│   │   └── db.js             # Configuración de la base de datos MongoDB
│   ├── controllers
│   │   └── chatController.js  # Lógica del chat
│   ├── middleware
│   │   └── auth.js           # Middleware de autenticación JWT
│   ├── models
│   │   └── Message.js        # Modelo de datos para los mensajes
│   ├── routes
│   │   └── auth.js           # Rutas de autenticación
│   └── utils
│       └── jwt.js            # Funciones para manejar JWT
├── package.json               # Configuración de npm
├── .env                       # Variables de entorno
└── README.md                  # Documentación del proyecto
```

## Instalación

1. Clona el repositorio:
   ```
   git clone <URL_DEL_REPOSITORIO>
   cd chatdannis
   ```

2. Instala las dependencias:
   ```
   npm install
   ```

3. Configura las variables de entorno en el archivo `.env`:
   ```
   MONGODB_URI=<TU_URI_DE_MONGODB>
   JWT_SECRET=<TU_CLAVE_SECRETA>
   PORT=<PUERTO_DE_TU_ELECCIÓN>
   ```

## Uso

1. Inicia el servidor:
   ```
   npm start
   ```

2. Abre tu navegador y accede a `http://localhost:<PUERTO_DE_TU_ELECCIÓN>` para interactuar con la aplicación.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.