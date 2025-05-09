import database from "@/infra/db/client";
import { NextResponse } from "next/server";

export async function GET() {
  const updatedAt = new Date().toISOString();

  const dataBaseVersionResult = await database.query("SHOW server_version;");
  const dataBaseVersionValue = dataBaseVersionResult.rows[0].server_version;

  const dataBaseMaxConnectionsResult = await database.query(
    "SHOW max_connections;",
  );
  const dataBaseMaxConnectionsValue =
    dataBaseMaxConnectionsResult.rows[0].max_connections;

  const databaseName = process.env.POSTGRES_DB;
  const dataBaseOpenedConnectionsResult = await database.query({
    text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName],
  });
  const dataBaseOpenedConnectionsValue =
    dataBaseOpenedConnectionsResult.rows[0].count;

  return NextResponse.json(
    {
      updated_at: updatedAt,
      dependencies: {
        database: {
          version: dataBaseVersionValue,
          max_connections: parseInt(dataBaseMaxConnectionsValue),
          opened_connections: dataBaseOpenedConnectionsValue,
        },
      },
    },
    { status: 200 },
  );
}
