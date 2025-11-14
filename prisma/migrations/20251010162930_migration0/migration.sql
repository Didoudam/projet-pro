/*
  Warnings:

  - You are about to drop the column `companyId` on the `comment` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `comment` table. All the data in the column will be lost.
  - You are about to drop the column `companyId` on the `post` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `post` table. All the data in the column will be lost.
  - You are about to drop the column `votes` on the `post` table. All the data in the column will be lost.
  - You are about to drop the column `expiresAt` on the `profileshow` table. All the data in the column will be lost.
  - You are about to drop the column `idUser1` on the `relation` table. All the data in the column will be lost.
  - You are about to drop the column `idUser2` on the `relation` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId,relationId]` on the table `Relation` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `writerId` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `writerId` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `relationId` to the `Relation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Relation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `comment` DROP FOREIGN KEY `Comment_companyId_fkey`;

-- DropForeignKey
ALTER TABLE `comment` DROP FOREIGN KEY `Comment_userId_fkey`;

-- DropForeignKey
ALTER TABLE `post` DROP FOREIGN KEY `Post_companyId_fkey`;

-- DropForeignKey
ALTER TABLE `post` DROP FOREIGN KEY `Post_userId_fkey`;

-- DropForeignKey
ALTER TABLE `relation` DROP FOREIGN KEY `Relation_idUser1_fkey`;

-- DropForeignKey
ALTER TABLE `relation` DROP FOREIGN KEY `Relation_idUser2_fkey`;

-- DropIndex
DROP INDEX `Comment_companyId_fkey` ON `comment`;

-- DropIndex
DROP INDEX `Comment_userId_fkey` ON `comment`;

-- DropIndex
DROP INDEX `Post_companyId_fkey` ON `post`;

-- DropIndex
DROP INDEX `Post_userId_fkey` ON `post`;

-- DropIndex
DROP INDEX `Relation_idUser1_fkey` ON `relation`;

-- DropIndex
DROP INDEX `Relation_idUser2_fkey` ON `relation`;

-- AlterTable
ALTER TABLE `comment` DROP COLUMN `companyId`,
    DROP COLUMN `userId`,
    ADD COLUMN `writerId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `post` DROP COLUMN `companyId`,
    DROP COLUMN `userId`,
    DROP COLUMN `votes`,
    ADD COLUMN `writerId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `profileshow` DROP COLUMN `expiresAt`;

-- AlterTable
ALTER TABLE `relation` DROP COLUMN `idUser1`,
    DROP COLUMN `idUser2`,
    ADD COLUMN `relationId` VARCHAR(191) NOT NULL,
    ADD COLUMN `userId` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Writer` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NULL,
    `companyId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Vote` (
    `id` VARCHAR(191) NOT NULL,
    `writerId` VARCHAR(191) NOT NULL,
    `postId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Relation_userId_relationId_key` ON `Relation`(`userId`, `relationId`);

-- CreateIndex
CREATE UNIQUE INDEX `User_email_key` ON `User`(`email`);

-- AddForeignKey
ALTER TABLE `Writer` ADD CONSTRAINT `Writer_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Writer` ADD CONSTRAINT `Writer_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `Company`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_writerId_fkey` FOREIGN KEY (`writerId`) REFERENCES `Writer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vote` ADD CONSTRAINT `Vote_writerId_fkey` FOREIGN KEY (`writerId`) REFERENCES `Writer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vote` ADD CONSTRAINT `Vote_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `Post`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_writerId_fkey` FOREIGN KEY (`writerId`) REFERENCES `Writer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Relation` ADD CONSTRAINT `Relation_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Relation` ADD CONSTRAINT `Relation_relationId_fkey` FOREIGN KEY (`relationId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
