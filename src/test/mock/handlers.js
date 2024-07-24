// src/mocks/handlers.js
import { graphql } from 'msw';

export const handlers = [
  graphql.query('HelloQuery', (req, res, ctx) => {
    return res(
      ctx.data({
        hello: 'Hello, world!',
      })
    );
  }),
];