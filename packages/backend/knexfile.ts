import { config } from "cfs-dotenv";

config();

export const development = {
  client: "postgres",
  connection: process.env.DATABASE_URL,
};

export const onUpdateTrigger = (table: string) => `
  CREATE TRIGGER "${table}_updated_at"
  BEFORE UPDATE ON "${table}"
  FOR EACH ROW
  EXECUTE PROCEDURE on_update_timestamp();
`;
