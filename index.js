#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const folderName = process.argv[2];

if (!folderName) {
  console.log("❌ Please provide a folder name");
  process.exit(1);
}

// Get latest Express version
const expressVersion = execSync("npm show express version").toString().trim();

// Create main project folder
fs.mkdirSync(folderName);

fs.mkdirSync(path.join(folderName,"src"));
// Create subfolders
const folders = ["controllers", "models", "routes", "config", "middlewares","utils"];
folders.forEach((folder) => {
  fs.mkdirSync(path.join(folderName,"src",folder));
});

// Create basic files
fs.writeFileSync(
  path.join(folderName, ".env"),
`PORT=3000`
);

fs.writeFileSync(
  path.join(folderName,"src","config", "db.config.js"),
`// Database logic...
const ConnectDB = async () => {
  try {
    
  } catch (error) {
    console.error("Database Error ❌", error);
    process.exit(1);
  }
};

export default ConnectDB;`
);

fs.writeFileSync(
  path.join(folderName,"src","models", "user.model.js"),
  "// User Model logic..."
);

fs.writeFileSync(
  path.join(folderName,"src","middlewares", "errorHandler.js"),
`// All errors handler logic...
const errorHandler = async (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Something Went Wrong!";

  if (process.env.NODE_ENV === "development") {
    console.error(err.stack);
  }

  res.status(statusCode).json({
    success: false,
    status: statusCode,
    message: message,
    // Optionally include stack trace in development mode
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
};

export default errorHandler;`
);

fs.writeFileSync(
  path.join(folderName,"src","middlewares", "tryCatchHandler.js"),
`// TryCatch Error handler logic...
const TryCatchHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    next(error);
  }
};

export default TryCatchHandler;`
);

fs.writeFileSync(
  path.join(folderName,"src","controllers", "auth.controller.js"),
`// Auth Controller logic here...
const HomeController = async (req, res) => {
  return res.status(200).json({ message: "Welcome to MyApp" });
};

export { HomeController };`
);

fs.writeFileSync(
  path.join(folderName,"src","routes", "auth.route.js"),
`// Auth logic here, like login, signup....
import express from "express";
import { HomeController } from "../controllers/auth.controller.js";

const AuthRouter = express.Router();

AuthRouter.route("/").get(HomeController);

export { AuthRouter };`
);

fs.writeFileSync(path.join(folderName,"src","app.js"),
`import express from "express";
import { AuthRouter } from "./routes/auth.route.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();
app.use(express.json());

// Routes
app.use("/api/v1", AuthRouter);

// Error handler
app.use(errorHandler);

export default app;`
)

fs.writeFileSync(
  path.join(folderName, "server.js"),
`// Connect DB and start server logic............
import ConnectDB from "./src/config/db.config.js";
import app from './src/app.js'

const PORT = process.env.PORT || 4000;

// Connect MongoDB first, then run server....
ConnectDB().then(() => {
  app.listen(PORT, () => {
    console.log(\`🚀 Server running on http://localhost:\${PORT}/api/v1/\`);
  });
});`
);

fs.writeFileSync(
  path.join(folderName, "package.json"),
`{
  "name": "${folderName}",
  "version": "1.0.0",
  "type":"module",
  "main": "server.js",
  "scripts": {
    "dev":"node --env-file=.env --watch server.js",
    "start":"node --env-file=.env server.js"
  },
  "dependencies":{
    "express": "^${expressVersion}"
  }
}`
);

fs.writeFileSync(path.join(folderName,".gitignore"),
`# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.env
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?`
)

// Done
console.log(`✅ Project "${folderName}" created.`);
console.log("👉 Now run:");
console.log(`   cd ${folderName}`);
console.log("   npm install");
console.log("   npm run dev || npm start");
