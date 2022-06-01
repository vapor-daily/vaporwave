import { createServer } from 'vite';
import { dev } from "../cfg/app";
import { viteConfig } from "./vite.config";

process.env['viteMode'] = 'development';

async function start() {
  const server = await createServer(viteConfig);
  await server.listen(dev.port);
  server.printUrls();
}

start().then();
