import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Début du seed de la base de données...\n');

  // Nettoyer la base de données
  console.log('🗑️  Nettoyage de la base de données...');
  await prisma.vote.deleteMany();
  await prisma.comment.deleteMany();
  await prisma.media.deleteMany();
  await prisma.post.deleteMany();
  await prisma.writerLink.deleteMany();
  await prisma.writer.deleteMany();
  await prisma.profileShow.deleteMany();
  await prisma.relation.deleteMany();
  await prisma.experience.deleteMany();
  await prisma.formation.deleteMany();
  await prisma.skill.deleteMany();
  await prisma.companyAdmin.deleteMany();
  await prisma.verification.deleteMany();
  await prisma.session.deleteMany();
  await prisma.account.deleteMany();
  await prisma.company.deleteMany();
  await prisma.user.deleteMany();

  // Créer des utilisateurs
  console.log('👥 Création des utilisateurs...');
  const users = await Promise.all([
    prisma.user.create({
      data: {
        name: 'Alice Martin',
        email: 'alice.martin@example.com',
        firstName: 'Alice',
        lastName: 'Martin',
        image: 'https://i.pravatar.cc/150?img=1',
        emailVerified: true,
        isRoot: true,
      },
    }),
    prisma.user.create({
      data: {
        name: 'Bob Dupont',
        email: 'bob.dupont@example.com',
        firstName: 'Bob',
        lastName: 'Dupont',
        image: 'https://i.pravatar.cc/150?img=2',
        emailVerified: true,
      },
    }),
    prisma.user.create({
      data: {
        name: 'Claire Bernard',
        email: 'claire.bernard@example.com',
        firstName: 'Claire',
        lastName: 'Bernard',
        image: 'https://i.pravatar.cc/150?img=3',
        emailVerified: true,
      },
    }),
    prisma.user.create({
      data: {
        name: 'David Rousseau',
        email: 'david.rousseau@example.com',
        firstName: 'David',
        lastName: 'Rousseau',
        image: 'https://i.pravatar.cc/150?img=4',
        emailVerified: true,
      },
    }),
    prisma.user.create({
      data: {
        name: 'Emma Lefebvre',
        email: 'emma.lefebvre@example.com',
        firstName: 'Emma',
        lastName: 'Lefebvre',
        image: 'https://i.pravatar.cc/150?img=5',
        emailVerified: true,
      },
    }),
  ]);

  // Créer des compétences pour les utilisateurs
  console.log('💪 Ajout des compétences...');
  await prisma.skill.createMany({
    data: [
      { name: 'JavaScript', level: 5, userId: users[0].id },
      { name: 'TypeScript', level: 4, userId: users[0].id },
      { name: 'React', level: 5, userId: users[0].id },
      { name: 'Node.js', level: 4, userId: users[1].id },
      { name: 'Python', level: 5, userId: users[1].id },
      { name: 'Django', level: 4, userId: users[1].id },
      { name: 'UI/UX Design', level: 5, userId: users[2].id },
      { name: 'Figma', level: 5, userId: users[2].id },
      { name: 'Adobe XD', level: 4, userId: users[2].id },
      { name: 'DevOps', level: 5, userId: users[3].id },
      { name: 'Docker', level: 4, userId: users[3].id },
      { name: 'Kubernetes', level: 3, userId: users[3].id },
      { name: 'Project Management', level: 5, userId: users[4].id },
      { name: 'Scrum', level: 4, userId: users[4].id },
      { name: 'Agile', level: 5, userId: users[4].id },
    ],
  });

  // Créer des entreprises
  console.log('🏢 Création des entreprises...');
  const companies = await Promise.all([
    prisma.company.create({
      data: {
        name: 'TechCorp Solutions',
        activity: 'Développement logiciel',
        description: 'Leader dans le développement de solutions innovantes',
        image: 'https://ui-avatars.com/api/?name=TechCorp&background=0D8ABC&color=fff',
      },
    }),
    prisma.company.create({
      data: {
        name: 'DesignHub Agency',
        activity: 'Design & UX',
        description: 'Agence de design spécialisée en expérience utilisateur',
        image: 'https://ui-avatars.com/api/?name=DesignHub&background=E91E63&color=fff',
      },
    }),
    prisma.company.create({
      data: {
        name: 'CloudMasters Inc',
        activity: 'Infrastructure Cloud',
        description: 'Experts en infrastructure cloud et DevOps',
        image: 'https://ui-avatars.com/api/?name=CloudMasters&background=4CAF50&color=fff',
      },
    }),
  ]);

  // Créer des admins d'entreprise
  console.log('👔 Ajout des administrateurs d\'entreprise...');
  await prisma.companyAdmin.createMany({
    data: [
      { role: 'CEO', companyId: companies[0].id, userId: users[0].id },
      { role: 'CTO', companyId: companies[0].id, userId: users[1].id },
      { role: 'Creative Director', companyId: companies[1].id, userId: users[2].id },
      { role: 'DevOps Lead', companyId: companies[2].id, userId: users[3].id },
    ],
  });

  // Créer des formations
  console.log('🎓 Ajout des formations...');
  await prisma.formation.createMany({
    data: [
      {
        name: 'Master Informatique',
        startDate: new Date('2015-09-01'),
        endDate: new Date('2017-06-30'),
        description: 'Spécialisation en développement web',
        userId: users[0].id,
      },
      {
        name: 'Licence Informatique',
        startDate: new Date('2012-09-01'),
        endDate: new Date('2015-06-30'),
        description: 'Formation généraliste en informatique',
        userId: users[1].id,
      },
      {
        name: 'École de Design',
        startDate: new Date('2014-09-01'),
        endDate: new Date('2018-06-30'),
        description: 'Formation en design graphique et UX',
        userId: users[2].id,
      },
    ],
  });

  // Créer des expériences professionnelles
  console.log('💼 Ajout des expériences professionnelles...');
  await prisma.experience.createMany({
    data: [
      {
        name: 'Développeur Full-Stack',
        startDate: new Date('2018-01-01'),
        endDate: null,
        description: 'Développement d\'applications web modernes avec React et Node.js',
        companyId: companies[0].id,
        userId: users[0].id,
      },
      {
        name: 'Développeur Backend',
        startDate: new Date('2016-06-01'),
        endDate: new Date('2020-12-31'),
        description: 'Développement d\'APIs REST avec Python/Django',
        companyId: companies[0].id,
        userId: users[1].id,
      },
      {
        name: 'UX Designer',
        startDate: new Date('2019-03-01'),
        endDate: null,
        description: 'Conception d\'interfaces utilisateur et prototypage',
        companyId: companies[1].id,
        userId: users[2].id,
      },
      {
        name: 'Ingénieur DevOps',
        startDate: new Date('2020-01-01'),
        endDate: null,
        description: 'Gestion de l\'infrastructure cloud et automatisation',
        companyId: companies[2].id,
        userId: users[3].id,
      },
    ],
  });

  // Créer des relations entre utilisateurs
  console.log('🤝 Création des relations...');
  await prisma.relation.createMany({
    data: [
      { userId: users[0].id, relationId: users[1].id, status: true },
      { userId: users[1].id, relationId: users[0].id, status: true },
      { userId: users[0].id, relationId: users[2].id, status: true },
      { userId: users[2].id, relationId: users[0].id, status: true },
      { userId: users[1].id, relationId: users[3].id, status: true },
      { userId: users[3].id, relationId: users[1].id, status: true },
      { userId: users[2].id, relationId: users[4].id, status: true },
      { userId: users[4].id, relationId: users[2].id, status: true },
      { userId: users[0].id, relationId: users[4].id, status: false }, // Demande en attente
    ],
  });

  // Créer des Writers (utilisateurs et entreprises qui peuvent poster)
  console.log('✍️  Création des writers...');
  const writers = await Promise.all([
    prisma.writer.create({ data: { userId: users[0].id } }),
    prisma.writer.create({ data: { userId: users[1].id } }),
    prisma.writer.create({ data: { userId: users[2].id } }),
    prisma.writer.create({ data: { userId: users[3].id } }),
    prisma.writer.create({ data: { userId: users[4].id } }),
    prisma.writer.create({ data: { companyId: companies[0].id } }),
    prisma.writer.create({ data: { companyId: companies[1].id } }),
  ]);

  // Créer des liens Writer (users qui peuvent poster au nom d'entreprises)
  console.log('🔗 Création des liens Writer...');
  await prisma.writerLink.createMany({
    data: [
      { userWriterId: writers[0].id, companyWriterId: writers[5].id }, // Alice peut poster pour TechCorp
      { userWriterId: writers[1].id, companyWriterId: writers[5].id }, // Bob peut poster pour TechCorp
      { userWriterId: writers[2].id, companyWriterId: writers[6].id }, // Claire peut poster pour DesignHub
    ],
  });

  // Créer des posts
  console.log('📝 Création des posts...');
  const posts = await Promise.all([
    prisma.post.create({
      data: {
        content: '🚀 Super contente de rejoindre TechCorp Solutions ! Hâte de travailler sur des projets innovants avec cette équipe talentueuse.',
        writerId: writers[0].id,
        createdAt: new Date('2024-11-10T10:00:00Z'),
      },
    }),
    prisma.post.create({
      data: {
        content: '💡 Les meilleures pratiques en développement backend : \n1. Clean Code\n2. Tests unitaires\n3. Documentation\n4. Code reviews\n\nQu\'en pensez-vous ?',
        writerId: writers[1].id,
        createdAt: new Date('2024-11-11T14:30:00Z'),
      },
    }),
    prisma.post.create({
      data: {
        content: '🎨 Nouveau projet terminé ! Fière de présenter le redesign complet de l\'application mobile pour un de nos clients. Le feedback est incroyable !',
        writerId: writers[2].id,
        createdAt: new Date('2024-11-12T09:15:00Z'),
      },
    }),
    prisma.post.create({
      data: {
        content: '🐳 Docker vs Kubernetes : Pourquoi vous devriez utiliser les deux ensemble. Thread 🧵',
        writerId: writers[3].id,
        createdAt: new Date('2024-11-13T16:45:00Z'),
      },
    }),
    prisma.post.create({
      data: {
        content: '📢 TechCorp Solutions recrute ! Nous recherchons des développeurs Full-Stack passionnés. Envoyez-nous votre CV !',
        writerId: writers[5].id, // Post de l'entreprise
        createdAt: new Date('2024-11-14T08:00:00Z'),
      },
    }),
    prisma.post.create({
      data: {
        content: '✨ DesignHub Agency est ravie d\'annoncer le lancement de notre nouveau service de Design System. Contactez-nous pour en savoir plus !',
        writerId: writers[6].id, // Post de l'entreprise
        createdAt: new Date('2024-11-13T11:20:00Z'),
      },
    }),
  ]);

  // Créer des médias pour certains posts
  console.log('🖼️  Ajout des médias...');
  await prisma.media.createMany({
    data: [
      {
        nom: 'techcorp-office.jpg',
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
        altText: 'Bureau TechCorp',
        description: 'Notre nouveau bureau',
        type: 'image',
        postId: posts[0].id,
      },
      {
        nom: 'mobile-redesign.jpg',
        url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800',
        altText: 'Redesign mobile',
        description: 'Nouveau design de l\'app mobile',
        type: 'image',
        postId: posts[2].id,
      },
    ],
  });

  // Créer des votes sur les posts
  console.log('👍 Ajout des votes...');
  await prisma.vote.createMany({
    data: [
      { writerId: writers[1].id, postId: posts[0].id, status: true },
      { writerId: writers[2].id, postId: posts[0].id, status: true },
      { writerId: writers[3].id, postId: posts[0].id, status: true },
      { writerId: writers[0].id, postId: posts[1].id, status: true },
      { writerId: writers[2].id, postId: posts[1].id, status: true },
      { writerId: writers[0].id, postId: posts[2].id, status: true },
      { writerId: writers[1].id, postId: posts[2].id, status: true },
      { writerId: writers[4].id, postId: posts[2].id, status: false }, // Dislike
      { writerId: writers[0].id, postId: posts[3].id, status: true },
      { writerId: writers[1].id, postId: posts[4].id, status: true },
      { writerId: writers[2].id, postId: posts[4].id, status: true },
      { writerId: writers[3].id, postId: posts[4].id, status: true },
    ],
  });

  // Créer des commentaires
  console.log('💬 Ajout des commentaires...');
  const comments = await Promise.all([
    prisma.comment.create({
      data: {
        content: 'Félicitations Alice ! Bienvenue dans l\'équipe 🎉',
        postId: posts[0].id,
        writerId: writers[1].id,
      },
    }),
    prisma.comment.create({
      data: {
        content: 'Excellents conseils ! J\'ajouterais aussi l\'importance du refactoring régulier.',
        postId: posts[1].id,
        writerId: writers[0].id,
      },
    }),
    prisma.comment.create({
      data: {
        content: 'Le design est superbe ! Bravo 👏',
        postId: posts[2].id,
        writerId: writers[0].id,
      },
    }),
    prisma.comment.create({
      data: {
        content: 'Très intéressant ! Pourrais-tu partager plus de détails sur l\'orchestration ?',
        postId: posts[3].id,
        writerId: writers[1].id,
      },
    }),
  ]);

  // Créer des réponses aux commentaires
  console.log('↩️  Ajout des réponses aux commentaires...');
  await Promise.all([
    prisma.comment.create({
      data: {
        content: 'Merci beaucoup ! 😊',
        postId: posts[0].id,
        commentId: comments[0].id,
        writerId: writers[0].id,
      },
    }),
    prisma.comment.create({
      data: {
        content: 'Tout à fait d\'accord ! Le refactoring est essentiel.',
        postId: posts[1].id,
        commentId: comments[1].id,
        writerId: writers[1].id,
      },
    }),
    prisma.comment.create({
      data: {
        content: 'Bien sûr ! Je prépare un article détaillé sur le sujet 📝',
        postId: posts[3].id,
        commentId: comments[3].id,
        writerId: writers[3].id,
      },
    }),
  ]);

  // Créer des votes sur les commentaires
  console.log('👍 Ajout des votes sur les commentaires...');
  await prisma.vote.createMany({
    data: [
      { writerId: writers[0].id, commentId: comments[0].id, status: true },
      { writerId: writers[2].id, commentId: comments[0].id, status: true },
      { writerId: writers[1].id, commentId: comments[1].id, status: true },
      { writerId: writers[2].id, commentId: comments[2].id, status: true },
      { writerId: writers[3].id, commentId: comments[2].id, status: true },
    ],
  });

  // Créer des vues de profil
  console.log('👀 Ajout des vues de profil...');
  await prisma.profileShow.createMany({
    data: [
      { idUser1: users[0].id, idUser2: users[1].id },
      { idUser1: users[1].id, idUser2: users[0].id },
      { idUser1: users[2].id, idUser2: users[0].id },
      { idUser1: users[3].id, idUser2: users[2].id },
      { idUser1: users[4].id, idUser2: users[3].id },
      { idUser1: users[0].id, idUser2: users[3].id },
    ],
  });

  console.log('\n✅ Seed terminé avec succès !\n');
  console.log('📊 Statistiques :');
  console.log(`   - ${users.length} utilisateurs`);
  console.log(`   - ${companies.length} entreprises`);
  console.log(`   - ${posts.length} posts`);
  console.log(`   - ${comments.length} commentaires principaux`);
  console.log('   - 15 compétences');
  console.log('   - 9 relations');
  console.log('   - 6 vues de profil');
  console.log('\n🔐 Comptes de test :');
  console.log('   - alice.martin@example.com (Admin)');
  console.log('   - bob.dupont@example.com');
  console.log('   - claire.bernard@example.com');
  console.log('   - david.rousseau@example.com');
  console.log('   - emma.lefebvre@example.com');
}

main()
  .catch((e) => {
    console.error('❌ Erreur lors du seed :', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
