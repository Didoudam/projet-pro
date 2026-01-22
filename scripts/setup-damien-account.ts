import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function setupAccount() {
  console.log('Setting up Damien account...');

  try {
    const user = await prisma.user.findUnique({
      where: { email: 'guilbaud.damien.85260@gmail.com' }
    });

    if (!user) {
      throw new Error('User not found');
    }

    // 1. Mettre à jour les infos utilisateur
    await prisma.user.update({
      where: { id: user.id },
      data: {
        firstName: 'Damien',
        lastName: 'Guilbaud',
        image: 'https://i.pravatar.cc/150?img=50',
        emailVerified: true,
        isRoot: true,
      }
    });
    console.log('✓ User info updated');

    // 2. Créer le writer s'il n'existe pas
    const existingWriter = await prisma.writer.findFirst({
      where: { userId: user.id }
    });

    if (!existingWriter) {
      await prisma.writer.create({
        data: { userId: user.id }
      });
      console.log('✓ Writer created');
    }

    // 3. Ajouter comme admin de WebFlow Studio
    const webFlowStudio = await prisma.company.findFirst({
      where: { name: 'WebFlow Studio' }
    });

    if (webFlowStudio) {
      const existingAdmin = await prisma.companyAdmin.findFirst({
        where: {
          userId: user.id,
          companyId: webFlowStudio.id
        }
      });

      if (!existingAdmin) {
        await prisma.companyAdmin.create({
          data: {
            role: 'SUPER_ADMIN',
            companyId: webFlowStudio.id,
            userId: user.id,
          }
        });
        console.log('✓ Added as admin of WebFlow Studio');
      }

      // 4. Créer une expérience actuelle chez WebFlow
      const existingExp = await prisma.experience.findFirst({
        where: {
          userId: user.id,
          companyId: webFlowStudio.id
        }
      });

      if (!existingExp) {
        await prisma.experience.create({
          data: {
            name: 'CEO & Lead Developer',
            startDate: new Date('2021-01-01'),
            endDate: null,
            description: 'Fondation et direction de WebFlow Studio, développement d\'applications web modernes',
            companyId: webFlowStudio.id,
            userId: user.id,
          }
        });
        console.log('✓ Experience added');
      }
    }

    // 5. Ajouter quelques compétences
    const skills = [
      { name: 'Full-Stack Development', level: 5 },
      { name: 'React', level: 5 },
      { name: 'Node.js', level: 5 },
      { name: 'TypeScript', level: 5 },
      { name: 'Next.js', level: 5 },
    ];

    for (const skill of skills) {
      const existing = await prisma.skill.findFirst({
        where: {
          userId: user.id,
          name: skill.name
        }
      });

      if (!existing) {
        await prisma.skill.create({
          data: {
            ...skill,
            userId: user.id
          }
        });
      }
    }
    console.log('✓ Skills added');

    // 6. Ajouter quelques relations avec d'autres utilisateurs
    const alice = await prisma.user.findUnique({ where: { email: 'alice.martin@example.com' } });
    const bob = await prisma.user.findUnique({ where: { email: 'bob.dupont@example.com' } });
    const claire = await prisma.user.findUnique({ where: { email: 'claire.bernard@example.com' } });

    const usersToConnect = [alice, bob, claire].filter(Boolean);

    for (const otherUser of usersToConnect) {
      if (!otherUser) continue;

      const existingRelation = await prisma.relation.findFirst({
        where: {
          userId: user.id,
          relationId: otherUser.id
        }
      });

      if (!existingRelation) {
        await prisma.relation.createMany({
          data: [
            { userId: user.id, relationId: otherUser.id, status: true },
            { userId: otherUser.id, relationId: user.id, status: true },
          ]
        });
      }
    }
    console.log('✓ Relations added');

    console.log('\n✅ Account setup complete!');
    console.log('You are now:');
    console.log('  - Admin/Root user');
    console.log('  - CEO of WebFlow Studio');
    console.log('  - Connected with Alice, Bob, and Claire');
  } catch (error) {
    console.error('Error:', error);
  }

  await prisma.$disconnect();
}

setupAccount();
