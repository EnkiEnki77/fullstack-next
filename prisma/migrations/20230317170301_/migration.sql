/*
  Warnings:

  - A unique constraint covering the columns `[ownerId,name]` on the table `Project` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE INDEX "Project_ownerId_id_idx" ON "Project"("ownerId", "id");

-- CreateIndex
CREATE UNIQUE INDEX "Project_ownerId_name_key" ON "Project"("ownerId", "name");

-- CreateIndex
CREATE INDEX "Task_ownerId_idx" ON "Task"("ownerId");
