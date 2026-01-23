import { Mode } from '@catalyse/fastify';
import fastifyReactRouterDev from '@catalyse/fastify-react-router/dev';
import { createServer, reactRouterOptions } from './httpd';
import config from './config';

const httpd = createServer();

await httpd.register(fastifyReactRouterDev, reactRouterOptions);

await httpd.listen({
  host: '::1',
  port: config.httpd.port
});
