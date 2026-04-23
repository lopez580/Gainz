-- CreateTable
CREATE TABLE `RoutineExercise` (
    `id` VARCHAR(191) NOT NULL,
    `routineId` VARCHAR(191) NOT NULL,
    `exerciseId` VARCHAR(191) NOT NULL,
    `sets` INTEGER NOT NULL DEFAULT 3,
    `reps` INTEGER NOT NULL DEFAULT 10,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `RoutineExercise` ADD CONSTRAINT `RoutineExercise_routineId_fkey` FOREIGN KEY (`routineId`) REFERENCES `Routine`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RoutineExercise` ADD CONSTRAINT `RoutineExercise_exerciseId_fkey` FOREIGN KEY (`exerciseId`) REFERENCES `Exercise`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
