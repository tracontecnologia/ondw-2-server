/*
  Warnings:

  - Added the required column `externalId` to the `Billing` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Billing" ADD COLUMN     "boletoNumber" VARCHAR(255),
ADD COLUMN     "externalId" VARCHAR(255) NOT NULL,
ADD COLUMN     "pixCode" VARCHAR(255);
