import Knex from "knex";
import { knexSnakeCaseMappers, Model } from "objection";

import { development } from "../knexfile";

const knex = Knex({
  ...development,
  ...knexSnakeCaseMappers(),
});

Model.knex(knex);

export default knex;
