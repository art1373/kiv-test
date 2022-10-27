import { createServer } from "vite";
import express from "express";
import { handlers } from "./handlers";

async function createViteServer() {
  const server = await createServer({
    root: process.cwd(),
    server: {
      port: 3000,
      middlewareMode: true,
    },
  });

  const app = express();
  handlers(app);
  app.use(server.middlewares);

  app.listen(3000);
  console.log("Visit http://localhost:3000");
}

createViteServer().catch((err) => console.log(err));
