/*
  Warnings:

  - Added the required column `platform` to the `Billing` table without a default value. This is not possible if the table is not empty.
  - Added the required column `platform` to the `Customer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Billing" ADD COLUMN     "platform" VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE "Customer" ADD COLUMN     "platform" VARCHAR(255) NOT NULL;
