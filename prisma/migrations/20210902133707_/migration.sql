-- AlterTable
ALTER TABLE "Entity" ADD COLUMN     "entityId" TEXT;

-- AddForeignKey
ALTER TABLE "Entity" ADD FOREIGN KEY ("entityId") REFERENCES "Entity"("id") ON DELETE SET NULL ON UPDATE CASCADE;
