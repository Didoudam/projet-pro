import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function check() {
  const user = await prisma.user.findUnique({
    where: { email: 'guilbaud.damien.85260@gmail.com' }
  });

  console.log(user ? 'User exists' : 'User not found');
  await prisma.$disconnect();
}

check();
