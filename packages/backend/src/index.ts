import './database'

import Fastify, { FastifyRequest, FastifyReply } from 'fastify'
import mercurius from 'mercurius'
import resolvers from './resolvers'
import schema from './graphql/schema'
import cors from '@fastify/cors'

const app = Fastify()

const buildContext = async (req: FastifyRequest, _reply: FastifyReply) => {
  return {
    userId: req.headers["user-id"]
  }
}

app.register(mercurius, {
  schema,
  resolvers,
  context: buildContext
})

app.register(cors, {
  origin: true,
  credentials: true,
});

const port = process.env.PORT ? parseInt(process.env.PORT) : 8081;
app.listen({ port }, function (err, address) {
  if (err) {
    throw err;
  }
  console.log(`Server listening on ${address}`);
  console.log(`GraphQl server ready at ${address}/graphql`);
  console.log(`Playground ready at ${address}/graphiql`);
});