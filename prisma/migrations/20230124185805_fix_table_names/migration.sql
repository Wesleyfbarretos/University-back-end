/*
  Warnings:

  - You are about to drop the column `lastName` on the `users` table. All the data in the column will be lost.
  - Added the required column `last_name` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "deleted_at" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_users" ("created_at", "deleted_at", "id", "name", "password", "updated_at") SELECT "created_at", "deleted_at", "id", "name", "password", "updated_at" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
