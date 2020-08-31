import { createServer } from "http";
import next from "next";
import { BrowserWindow } from "electron";

const createNextDevServer = (dir: string, win: BrowserWindow) => {
  const dev = process.env.NODE_ENV !== "production";
  const app = next({ dev, dir });
  const handle = app.getRequestHandler();

  app.prepare().then(() => {
    createServer((req, res) => {
      if (req.headers["user-agent"].indexOf("Electron") === -1) {
        res.writeHead(404);
        res.end();
        return;
      }

      res.setHeader("Access-Control-Request-Method", "GET");

      if (req.method !== "GET") {
        res.writeHead(405);
        res.end("Method Not Allowed");
        return;
      }

      return handle(req, res);
    }).listen(3000, () => {
      console.log("what is this", this);
      console.log("> Ready on http://localhost:3000");

      win.on("close", () => {
        win = null;
      });
    });
  });
};

export { createNextDevServer };
