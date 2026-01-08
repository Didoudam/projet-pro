import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function deleteUser() {
  const email = 'guilbaud.damien.85260@gmail.com';

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    console.log('User not found');
    await prisma.$disconnect();
    return;
  }

  // Supprimer toutes les dépendances
  await prisma.media.deleteMany({ where: { post: { writer: { userId: user.id } } } });
  await prisma.vote.deleteMany({ where: { writer: { userId: user.id } } });
  await prisma.comment.deleteMany({ where: { writer: { userId: user.id } } });
  await prisma.post.deleteMany({ where: { writer: { userId: user.id } } });
  await prisma.writerLink.deleteMany({ where: { userWriter: { userId: user.id } } });
  await prisma.writer.deleteMany({ where: { userId: user.id } });
  await prisma.profileShow.deleteMany({ where: { OR: [{ idUser1: user.id }, { idUser2: user.id }] } });
  await prisma.relation.deleteMany({ where: { OR: [{ userId: user.id }, { relationId: user.id }] } });
  await prisma.experience.deleteMany({ where: { userId: user.id } });
  await prisma.formation.deleteMany({ where: { userId: user.id } });
  await prisma.skill.deleteMany({ where: { userId: user.id } });
  await prisma.companyAdmin.deleteMany({ where: { userId: user.id } });
  await prisma.account.deleteMany({ where: { userId: user.id } });
  await prisma.session.deleteMany({ where: { userId: user.id } });
  await prisma.user.delete({ where: { id: user.id } });

  console.log('✅ User deleted successfully');
  console.log('You can now sign up with: guilbaud.damien.85260@gmail.com');

  await prisma.$disconnect();
}

deleteUser();
