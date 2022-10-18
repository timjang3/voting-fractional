import { Knex } from "knex";

import { onUpdateTrigger } from "../knexfile";

const ON_UPDATE_TIMESTAMP_FUNCTION = `
  CREATE OR REPLACE FUNCTION on_update_timestamp()
  RETURNS trigger AS $$
  BEGIN
    NEW.updated_at = now();
    RETURN NEW;
  END;
$$ language 'plpgsql';
`;

const DROP_ON_UPDATE_TIMESTAMP_FUNCTION = `DROP FUNCTION on_update_timestamp`;


export async function up(knex: Knex): Promise<void> {
  await knex.raw(ON_UPDATE_TIMESTAMP_FUNCTION);
  await knex.schema.createTable("vote", (table) => {
    table.string("id").notNullable().primary();
    table.string("project_id").notNullable();
    table.string("user_id").notNullable();
    table.timestamps(true, true);
  });
  await knex.raw(onUpdateTrigger("vote"));
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("vote");
  await knex.raw(DROP_ON_UPDATE_TIMESTAMP_FUNCTION);
}
