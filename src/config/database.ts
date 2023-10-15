import Database from "better-sqlite3";

const db = new Database(":memory:");

export const migrateUp = () => {
  db.exec(`CREATE TABLE IF NOT EXISTS "events" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "name" VARCHAR NOT NULL,
    "event_date" DATE NOT NULL,
    "capacity" INTEGER NOT NULL DEFAULT 1,
    "booking_started_at" DATETIME NOT NULL,
    "booking_ended_at" DATETIME NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
  )`);

  db.exec(`CREATE TABLE IF NOT EXISTS "bookings" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "event_id" INTEGER NOT NULL,
    "name" VARCHAR NOT NULL,
    "email" VARCHAR NOT NULL UNIQUE,
    "number_of_seats" INTEGER NOT NULL DEFAULT 1,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY ("event_id") REFERENCES "events" ("id")
  )`);

  db.exec(
    `CREATE INDEX IF NOT EXISTS "index_bookings_on_event_id" ON "bookings" ("event_id")`
  );

  db.exec(
    `CREATE INDEX IF NOT EXISTS "index_number_of_seats_on_bookings" ON "bookings" ("number_of_seats")`
  );

  console.log("Migration completed");
};

db.pragma("journal_mode = WAL");

export default db;
