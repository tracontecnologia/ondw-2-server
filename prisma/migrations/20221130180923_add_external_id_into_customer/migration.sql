/*
  Warnings:

  - Added the required column `externalId` to the `Customer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Customer" ADD COLUMN     "externalId" VARCHAR(255) NOT NULL;
