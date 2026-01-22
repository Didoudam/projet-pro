import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function cleanDuplicates() {
  console.log('Cleaning duplicate relations...');

  try {
    // Récupérer toutes les relations
    const allRelations = await prisma.relation.findMany({
      orderBy: [
        { userId: 'asc' },
        { relationId: 'asc' },
        { createdAt: 'asc' }
      ]
    });

    console.log(`Found ${allRelations.length} relations`);

    const seen = new Set<string>();
    const toDelete: string[] = [];

    for (const relation of allRelations) {
      // Créer une clé unique pour la paire (en triant les IDs pour éviter les doublons A->B et B->A)
      const key = [relation.userId, relation.relationId].sort().join('|');

      if (seen.has(key)) {
        // Doublon trouvé
        toDelete.push(relation.id);
      } else {
        seen.add(key);
      }
    }

    if (toDelete.length > 0) {
      console.log(`Deleting ${toDelete.length} duplicate relations...`);

      await prisma.relation.deleteMany({
        where: {
          id: {
            in: toDelete
          }
        }
      });

      console.log('✓ Duplicates removed');
    } else {
      console.log('✓ No duplicates found');
    }

    // Afficher le résultat
    const finalCount = await prisma.relation.count();
    console.log(`\n✅ Done! ${finalCount} unique relations remaining`);

  } catch (error) {
    console.error('Error:', error);
  }

  await prisma.$disconnect();
}

cleanDuplicates();
