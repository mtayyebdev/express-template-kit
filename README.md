# 🚀 express-template-kit

[![NPM Version](https://img.shields.io/npm/v/express-template-kit.svg)](https://www.npmjs.com/package/express-template-kit)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Downloads](https://img.shields.io/npm/dt/express-template-kit.svg)](https://www.npmjs.com/package/express-template-kit)

A clean and ready-to-use Express.js template for building modern server-side applications with minimal setup.


## 📦 Installation

```bash
npm i -g express-template-kit
```

Then run:

```bash
npx express-template-kit my-app
```

## 📁 Folder Structure
```bash
myApp/
│
├── src/
│   ├── config/               # DB, cloud configs
│   ├── controllers/          # Route logic
│   ├── middlewares/          # Auth, error, etc.
│   ├── models/               # Mongoose schemas
│   ├── routes/               # API endpoints
│   ├── utils/                # Reusable helpers
│   └── app.js                # Main express app
│
├── .env
├── .gitignore
├── package.json
└── server.js                 # Connect DB and start server
```

## ⚙️ Scripts
| Script        | Description                            |
| ------------- | -------------------------------------- |
| `npm run dev` | Starts development server with nodemon |
| `npm start`   | Starts production server               |

## 🌟 Features
- ✅ Express.js with ESM module support
- ✅ dotenv configured for environment variables
- ✅ Nodemon for live-reloading during development
- ✅ Modular folder structure (routes, controllers, middlewares)
- ✅ Error-handling middleware built-in
- ✅ Scalable and clean architecture
- ✅ Easy to extend for APIs or full-stack apps

## 🚀 Quick Start Guide
```bash
npx express-template-kit my-app
cd my-app
npm install
npm run dev
```

Server will start on: http://localhost:3000/api/v1

You can change the port and other settings in the .env file.

## 🤝 Contributing
Contributions are welcome! Here's how to contribute:

1. Fork the repository
2. Create your feature branch: git checkout -b feature/your-feature-name
3. Commit your changes: git commit -m 'Add new feature'
4. Push to the branch: git push origin feature/your-feature-name
5. Submit a pull request

## 🧑‍💻 Author
### Muhammad Tayyeb
- 🌐 https://mtayyebdev.vercel.app
- 📧 Contact: Available via portfolio site