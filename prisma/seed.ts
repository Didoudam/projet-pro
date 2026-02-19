import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

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
        name: 'Damien Guilbaud',
        email: 'guilbaud.damien.85260@gmail.com',
        firstName: 'Damien',
        lastName: 'Guilbaud',
        image: 'https://i.pravatar.cc/150?img=50',
        emailVerified: true,
        isRoot: true,
      },
    }),
    prisma.user.create({
      data: {
        name: 'Alice Martin',
        email: 'alice.martin@example.com',
        firstName: 'Alice',
        lastName: 'Martin',
        image: 'https://i.pravatar.cc/150?img=1',
        emailVerified: true,
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
    prisma.user.create({
      data: {
        name: 'François Moreau',
        email: 'francois.moreau@example.com',
        firstName: 'François',
        lastName: 'Moreau',
        image: 'https://i.pravatar.cc/150?img=6',
        emailVerified: true,
      },
    }),
    prisma.user.create({
      data: {
        name: 'Gabrielle Petit',
        email: 'gabrielle.petit@example.com',
        firstName: 'Gabrielle',
        lastName: 'Petit',
        image: 'https://i.pravatar.cc/150?img=9',
        emailVerified: true,
      },
    }),
    prisma.user.create({
      data: {
        name: 'Hugo Lambert',
        email: 'hugo.lambert@example.com',
        firstName: 'Hugo',
        lastName: 'Lambert',
        image: 'https://i.pravatar.cc/150?img=8',
        emailVerified: true,
      },
    }),
    prisma.user.create({
      data: {
        name: 'Isabelle Simon',
        email: 'isabelle.simon@example.com',
        firstName: 'Isabelle',
        lastName: 'Simon',
        image: 'https://i.pravatar.cc/150?img=10',
        emailVerified: true,
      },
    }),
    prisma.user.create({
      data: {
        name: 'Julien Mercier',
        email: 'julien.mercier@example.com',
        firstName: 'Julien',
        lastName: 'Mercier',
        image: 'https://i.pravatar.cc/150?img=11',
        emailVerified: true,
      },
    }),
    prisma.user.create({
      data: {
        name: 'Karen Dubois',
        email: 'karen.dubois@example.com',
        firstName: 'Karen',
        lastName: 'Dubois',
        image: 'https://i.pravatar.cc/150?img=47',
        emailVerified: true,
      },
    }),
    prisma.user.create({
      data: {
        name: 'Louis Garnier',
        email: 'louis.garnier@example.com',
        firstName: 'Louis',
        lastName: 'Garnier',
        image: 'https://i.pravatar.cc/150?img=13',
        emailVerified: true,
      },
    }),
    prisma.user.create({
      data: {
        name: 'Marie Faure',
        email: 'marie.faure@example.com',
        firstName: 'Marie',
        lastName: 'Faure',
        image: 'https://i.pravatar.cc/150?img=48',
        emailVerified: true,
      },
    }),
    prisma.user.create({
      data: {
        name: 'Nicolas Vincent',
        email: 'nicolas.vincent@example.com',
        firstName: 'Nicolas',
        lastName: 'Vincent',
        image: 'https://i.pravatar.cc/150?img=15',
        emailVerified: true,
      },
    }),
    prisma.user.create({
      data: {
        name: 'Olivia Roux',
        email: 'olivia.roux@example.com',
        firstName: 'Olivia',
        lastName: 'Roux',
        image: 'https://i.pravatar.cc/150?img=16',
        emailVerified: true,
      },
    }),
    prisma.user.create({
      data: {
        name: 'Pierre Girard',
        email: 'pierre.girard@example.com',
        firstName: 'Pierre',
        lastName: 'Girard',
        image: 'https://i.pravatar.cc/150?img=17',
        emailVerified: true,
      },
    }),
    prisma.user.create({
      data: {
        name: 'Quentin Andre',
        email: 'quentin.andre@example.com',
        firstName: 'Quentin',
        lastName: 'Andre',
        image: 'https://i.pravatar.cc/150?img=18',
        emailVerified: true,
      },
    }),
    prisma.user.create({
      data: {
        name: 'Rose Blanc',
        email: 'rose.blanc@example.com',
        firstName: 'Rose',
        lastName: 'Blanc',
        image: 'https://i.pravatar.cc/150?img=49',
        emailVerified: true,
      },
    }),
    prisma.user.create({
      data: {
        name: 'Sébastien Guerin',
        email: 'sebastien.guerin@example.com',
        firstName: 'Sébastien',
        lastName: 'Guerin',
        image: 'https://i.pravatar.cc/150?img=20',
        emailVerified: true,
      },
    }),
    prisma.user.create({
      data: {
        name: 'Thomas Muller',
        email: 'thomas.muller@example.com',
        firstName: 'Thomas',
        lastName: 'Muller',
        image: 'https://i.pravatar.cc/150?img=21',
        emailVerified: true,
      },
    }),
    prisma.user.create({
      data: {
        name: 'Ursula Boyer',
        email: 'ursula.boyer@example.com',
        firstName: 'Ursula',
        lastName: 'Boyer',
        image: 'https://i.pravatar.cc/150?img=44',
        emailVerified: true,
      },
    }),
    prisma.user.create({
      data: {
        name: 'Victor Roy',
        email: 'victor.roy@example.com',
        firstName: 'Victor',
        lastName: 'Roy',
        image: 'https://i.pravatar.cc/150?img=23',
        emailVerified: true,
      },
    }),
    prisma.user.create({
      data: {
        name: 'Wendy Perrin',
        email: 'wendy.perrin@example.com',
        firstName: 'Wendy',
        lastName: 'Perrin',
        image: 'https://i.pravatar.cc/150?img=45',
        emailVerified: true,
      },
    }),
    prisma.user.create({
      data: {
        name: 'Xavier Morel',
        email: 'xavier.morel@example.com',
        firstName: 'Xavier',
        lastName: 'Morel',
        image: 'https://i.pravatar.cc/150?img=25',
        emailVerified: true,
      },
    }),
    prisma.user.create({
      data: {
        name: 'Yves Fournier',
        email: 'yves.fournier@example.com',
        firstName: 'Yves',
        lastName: 'Fournier',
        image: 'https://i.pravatar.cc/150?img=26',
        emailVerified: true,
      },
    }),
    prisma.user.create({
      data: {
        name: 'Zoé Giraud',
        email: 'zoe.giraud@example.com',
        firstName: 'Zoé',
        lastName: 'Giraud',
        image: 'https://i.pravatar.cc/150?img=27',
        emailVerified: true,
      },
    }),
    prisma.user.create({
      data: {
        name: 'Arthur Leclerc',
        email: 'arthur.leclerc@example.com',
        firstName: 'Arthur',
        lastName: 'Leclerc',
        image: 'https://i.pravatar.cc/150?img=28',
        emailVerified: true,
      },
    }),
    prisma.user.create({
      data: {
        name: 'Béatrice Bonnet',
        email: 'beatrice.bonnet@example.com',
        firstName: 'Béatrice',
        lastName: 'Bonnet',
        image: 'https://i.pravatar.cc/150?img=29',
        emailVerified: true,
      },
    }),
    prisma.user.create({
      data: {
        name: 'Céline Dupuis',
        email: 'celine.dupuis@example.com',
        firstName: 'Céline',
        lastName: 'Dupuis',
        image: 'https://i.pravatar.cc/150?img=30',
        emailVerified: true,
      },
    }),
  ]);

  // Créer des compétences pour les utilisateurs
  console.log('💪 Ajout des compétences...');
  await prisma.skill.createMany({
    data: [
      // Damien
      { name: 'Full-Stack Development', level: 5, userId: users[0].id },
      { name: 'React', level: 5, userId: users[0].id },
      { name: 'Node.js', level: 5, userId: users[0].id },
      { name: 'TypeScript', level: 4, userId: users[0].id },
      { name: 'Next.js', level: 5, userId: users[0].id },
      // Alice
      { name: 'JavaScript', level: 5, userId: users[1].id },
      { name: 'TypeScript', level: 4, userId: users[1].id },
      { name: 'React', level: 5, userId: users[1].id },
      // Bob
      { name: 'Node.js', level: 4, userId: users[2].id },
      { name: 'Python', level: 5, userId: users[2].id },
      { name: 'Django', level: 4, userId: users[2].id },
      // Claire
      { name: 'UI/UX Design', level: 5, userId: users[3].id },
      { name: 'Figma', level: 5, userId: users[3].id },
      { name: 'Adobe XD', level: 4, userId: users[3].id },
      // David
      { name: 'DevOps', level: 5, userId: users[4].id },
      { name: 'Docker', level: 4, userId: users[4].id },
      { name: 'Kubernetes', level: 3, userId: users[4].id },
      // Emma
      { name: 'Project Management', level: 5, userId: users[5].id },
      { name: 'Scrum', level: 4, userId: users[5].id },
      { name: 'Agile', level: 5, userId: users[5].id },
      // François
      { name: 'Java', level: 5, userId: users[6].id },
      { name: 'Spring Boot', level: 4, userId: users[6].id },
      // Gabrielle
      { name: 'Marketing Digital', level: 5, userId: users[7].id },
      { name: 'SEO', level: 4, userId: users[7].id },
      // Hugo
      { name: 'Data Science', level: 5, userId: users[8].id },
      { name: 'Python', level: 5, userId: users[8].id },
      // Isabelle
      { name: 'Cybersecurity', level: 5, userId: users[9].id },
      { name: 'Penetration Testing', level: 4, userId: users[9].id },
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
    prisma.company.create({
      data: {
        name: 'DataViz Pro',
        activity: 'Data Science & Analytics',
        description: 'Solutions de visualisation et analyse de données',
        image: 'https://ui-avatars.com/api/?name=DataViz&background=9C27B0&color=fff',
      },
    }),
    prisma.company.create({
      data: {
        name: 'SecureNet Systems',
        activity: 'Cybersécurité',
        description: 'Protection et sécurisation des systèmes d\'information',
        image: 'https://ui-avatars.com/api/?name=SecureNet&background=F44336&color=fff',
      },
    }),
    prisma.company.create({
      data: {
        name: 'WebFlow Studio',
        activity: 'Développement Web',
        description: 'Création de sites web et applications modernes',
        image: 'https://ui-avatars.com/api/?name=WebFlow&background=FF6B00&color=fff',
      },
    }),
  ]);

  // Le compte sera créé après le seed via Better Auth
  console.log('⚠️  Compte credential sera créé manuellement après le seed');

  // Créer des admins d'entreprise
  console.log('👔 Ajout des administrateurs d\'entreprise...');
  await prisma.companyAdmin.createMany({
    data: [
      // Damien admin de WebFlow Studio
      { role: 'SUPER_ADMIN', companyId: companies[5].id, userId: users[0].id },
      { role: 'ADMIN', companyId: companies[5].id, userId: users[1].id },
      // Autres admins
      { role: 'SUPER_ADMIN', companyId: companies[0].id, userId: users[1].id },
      { role: 'ADMIN', companyId: companies[0].id, userId: users[2].id },
      { role: 'ADMIN', companyId: companies[1].id, userId: users[3].id },
      { role: 'ADMIN', companyId: companies[2].id, userId: users[4].id },
      { role: 'ADMIN', companyId: companies[3].id, userId: users[8].id },
      { role: 'ADMIN', companyId: companies[4].id, userId: users[9].id },
    ],
  });

  // Créer des formations
  console.log('🎓 Ajout des formations...');
  await prisma.formation.createMany({
    data: [
      // Damien
      {
        name: 'Master Développement Web',
        startDate: new Date('2018-09-01'),
        endDate: new Date('2020-06-30'),
        description: 'Spécialisation en développement full-stack',
        userId: users[0].id,
      },
      {
        name: 'Licence Informatique',
        startDate: new Date('2015-09-01'),
        endDate: new Date('2018-06-30'),
        description: 'Formation généraliste en informatique',
        userId: users[0].id,
      },
      // Autres
      {
        name: 'Master Informatique',
        startDate: new Date('2015-09-01'),
        endDate: new Date('2017-06-30'),
        description: 'Spécialisation en développement web',
        userId: users[1].id,
      },
      {
        name: 'École de Design',
        startDate: new Date('2014-09-01'),
        endDate: new Date('2018-06-30'),
        description: 'Formation en design graphique et UX',
        userId: users[3].id,
      },
      {
        name: 'Master Data Science',
        startDate: new Date('2016-09-01'),
        endDate: new Date('2018-06-30'),
        description: 'Spécialisation en analyse de données',
        userId: users[8].id,
      },
    ],
  });

  // Créer des expériences professionnelles
  console.log('💼 Ajout des expériences professionnelles...');
  await prisma.experience.createMany({
    data: [
      // Damien - Expérience actuelle
      {
        name: 'CEO & Lead Developer',
        startDate: new Date('2021-01-01'),
        endDate: null,
        description: 'Fondation et direction de WebFlow Studio, développement d\'applications web modernes',
        companyId: companies[5].id,
        userId: users[0].id,
      },
      // Damien - Expérience passée
      {
        name: 'Développeur Full-Stack',
        startDate: new Date('2018-06-01'),
        endDate: new Date('2020-12-31'),
        description: 'Développement d\'applications React et Node.js',
        companyId: companies[0].id,
        userId: users[0].id,
      },
      // Alice
      {
        name: 'CTO',
        startDate: new Date('2022-01-01'),
        endDate: null,
        description: 'Direction technique de WebFlow Studio',
        companyId: companies[5].id,
        userId: users[1].id,
      },
      {
        name: 'Développeur Full-Stack',
        startDate: new Date('2018-01-01'),
        endDate: new Date('2021-12-31'),
        description: 'Développement d\'applications web modernes avec React et Node.js',
        companyId: companies[0].id,
        userId: users[1].id,
      },
      // Bob
      {
        name: 'Développeur Backend',
        startDate: new Date('2016-06-01'),
        endDate: null,
        description: 'Développement d\'APIs REST avec Python/Django',
        companyId: companies[0].id,
        userId: users[2].id,
      },
      // Claire
      {
        name: 'UX Designer',
        startDate: new Date('2019-03-01'),
        endDate: null,
        description: 'Conception d\'interfaces utilisateur et prototypage',
        companyId: companies[1].id,
        userId: users[3].id,
      },
      // David
      {
        name: 'Ingénieur DevOps',
        startDate: new Date('2020-01-01'),
        endDate: null,
        description: 'Gestion de l\'infrastructure cloud et automatisation',
        companyId: companies[2].id,
        userId: users[4].id,
      },
      // Hugo
      {
        name: 'Data Scientist',
        startDate: new Date('2019-01-01'),
        endDate: null,
        description: 'Analyse et visualisation de données complexes',
        companyId: companies[3].id,
        userId: users[8].id,
      },
      // Isabelle
      {
        name: 'Security Analyst',
        startDate: new Date('2020-06-01'),
        endDate: null,
        description: 'Audit de sécurité et tests d\'intrusion',
        companyId: companies[4].id,
        userId: users[9].id,
      },
      // Autres expériences actuelles
      {
        name: 'Marketing Manager',
        startDate: new Date('2021-01-01'),
        endDate: null,
        description: 'Gestion des campagnes marketing digital',
        companyId: companies[5].id,
        userId: users[7].id,
      },
      {
        name: 'Senior Developer',
        startDate: new Date('2020-03-01'),
        endDate: null,
        description: 'Développement Java et Spring Boot',
        companyId: companies[0].id,
        userId: users[6].id,
      },
    ],
  });

  // Créer des relations entre utilisateurs
  console.log('🤝 Création des relations...');
  await prisma.relation.createMany({
    data: [
      // Relations de Damien (acceptées)
      { userId: users[0].id, relationId: users[1].id, status: true }, // Damien <-> Alice
      { userId: users[1].id, relationId: users[0].id, status: true },
      { userId: users[0].id, relationId: users[2].id, status: true }, // Damien <-> Bob
      { userId: users[2].id, relationId: users[0].id, status: true },
      { userId: users[0].id, relationId: users[3].id, status: true }, // Damien <-> Claire
      { userId: users[3].id, relationId: users[0].id, status: true },
      { userId: users[0].id, relationId: users[7].id, status: true }, // Damien <-> Gabrielle
      { userId: users[7].id, relationId: users[0].id, status: true },

      // Demandes en attente pour Damien
      { userId: users[4].id, relationId: users[0].id, status: false }, // David -> Damien (en attente)
      { userId: users[8].id, relationId: users[0].id, status: false }, // Hugo -> Damien (en attente)

      // Autres relations acceptées
      { userId: users[1].id, relationId: users[2].id, status: true }, // Alice <-> Bob
      { userId: users[2].id, relationId: users[1].id, status: true },
      { userId: users[1].id, relationId: users[3].id, status: true }, // Alice <-> Claire
      { userId: users[3].id, relationId: users[1].id, status: true },
      { userId: users[2].id, relationId: users[4].id, status: true }, // Bob <-> David
      { userId: users[4].id, relationId: users[2].id, status: true },
      { userId: users[3].id, relationId: users[5].id, status: true }, // Claire <-> Emma
      { userId: users[5].id, relationId: users[3].id, status: true },
      { userId: users[4].id, relationId: users[8].id, status: true }, // David <-> Hugo
      { userId: users[8].id, relationId: users[4].id, status: true },
      { userId: users[5].id, relationId: users[9].id, status: true }, // Emma <-> Isabelle
      { userId: users[9].id, relationId: users[5].id, status: true },
      { userId: users[6].id, relationId: users[10].id, status: true }, // François <-> Julien
      { userId: users[10].id, relationId: users[6].id, status: true },
      { userId: users[7].id, relationId: users[11].id, status: true }, // Gabrielle <-> Karen
      { userId: users[11].id, relationId: users[7].id, status: true },
      { userId: users[8].id, relationId: users[12].id, status: true }, // Hugo <-> Louis
      { userId: users[12].id, relationId: users[8].id, status: true },
      { userId: users[9].id, relationId: users[13].id, status: true }, // Isabelle <-> Marie
      { userId: users[13].id, relationId: users[9].id, status: true },

      // Quelques demandes en attente
      { userId: users[10].id, relationId: users[15].id, status: false }, // Julien -> Olivia
      { userId: users[14].id, relationId: users[16].id, status: false }, // Nicolas -> Pierre
    ],
  });

  // Créer des Writers (utilisateurs et entreprises qui peuvent poster)
  console.log('✍️  Création des writers...');
  const writers = await Promise.all([
    ...users.slice(0, 20).map(user => prisma.writer.create({ data: { userId: user.id } })),
    ...companies.map(company => prisma.writer.create({ data: { companyId: company.id } })),
  ]);

  // Créer des liens Writer (users qui peuvent poster au nom d'entreprises)
  console.log('🔗 Création des liens Writer...');
  await prisma.writerLink.createMany({
    data: [
      // Damien peut poster pour WebFlow
      { userWriterId: writers[0].id, companyWriterId: writers[25].id },
      // Alice peut poster pour WebFlow et TechCorp
      { userWriterId: writers[1].id, companyWriterId: writers[25].id },
      { userWriterId: writers[1].id, companyWriterId: writers[20].id },
      // Bob peut poster pour TechCorp
      { userWriterId: writers[2].id, companyWriterId: writers[20].id },
      // Claire peut poster pour DesignHub
      { userWriterId: writers[3].id, companyWriterId: writers[21].id },
      // David peut poster pour CloudMasters
      { userWriterId: writers[4].id, companyWriterId: writers[22].id },
    ],
  });

  // Créer des posts
  console.log('📝 Création des posts...');
  const posts = await Promise.all([
    // Posts de Damien
    prisma.post.create({
      data: {
        content: '🚀 Fier d\'annoncer le lancement officiel de WebFlow Studio ! Notre mission : créer des applications web modernes et performantes. Hâte de travailler avec vous tous !',
        writerId: writers[0].id,
        createdAt: new Date('2024-11-01T10:00:00Z'),
      },
    }),
    prisma.post.create({
      data: {
        content: '💡 Les 5 principes essentiels du développement Full-Stack moderne :\n1. Architecture modulaire\n2. Tests automatisés\n3. CI/CD\n4. Documentation claire\n5. Clean Code\n\nQu\'ajouteriez-vous ?',
        writerId: writers[0].id,
        createdAt: new Date('2024-11-15T14:30:00Z'),
      },
    }),
    // Posts d'Alice
    prisma.post.create({
      data: {
        content: '🎉 Super contente de rejoindre WebFlow Studio en tant que CTO ! Des projets passionnants nous attendent.',
        writerId: writers[1].id,
        createdAt: new Date('2024-11-10T10:00:00Z'),
      },
    }),
    prisma.post.create({
      data: {
        content: '💡 Les meilleures pratiques en développement backend : \n1. Clean Code\n2. Tests unitaires\n3. Documentation\n4. Code reviews\n\nQu\'en pensez-vous ?',
        writerId: writers[2].id,
        createdAt: new Date('2024-11-11T14:30:00Z'),
      },
    }),
    prisma.post.create({
      data: {
        content: '🎨 Nouveau projet terminé ! Fière de présenter le redesign complet de l\'application mobile pour un de nos clients. Le feedback est incroyable !',
        writerId: writers[3].id,
        createdAt: new Date('2024-11-12T09:15:00Z'),
      },
    }),
    prisma.post.create({
      data: {
        content: '🐳 Docker vs Kubernetes : Pourquoi vous devriez utiliser les deux ensemble. Thread 🧵',
        writerId: writers[4].id,
        createdAt: new Date('2024-11-13T16:45:00Z'),
      },
    }),
    prisma.post.create({
      data: {
        content: '📊 L\'importance de la visualisation de données dans la prise de décision. Nouveau projet Data Viz disponible sur notre portfolio !',
        writerId: writers[8].id,
        createdAt: new Date('2024-11-14T11:00:00Z'),
      },
    }),
    prisma.post.create({
      data: {
        content: '🔐 Les 3 erreurs les plus courantes en cybersécurité que j\'observe régulièrement chez mes clients. Thread important 👇',
        writerId: writers[9].id,
        createdAt: new Date('2024-11-15T09:30:00Z'),
      },
    }),
    // Posts des entreprises
    prisma.post.create({
      data: {
        content: '📢 WebFlow Studio recrute ! Nous recherchons des développeurs Full-Stack passionnés par React et Node.js. Rejoignez une équipe dynamique et innovante !',
        writerId: writers[25].id,
        createdAt: new Date('2024-11-16T08:00:00Z'),
      },
    }),
    prisma.post.create({
      data: {
        content: '📢 TechCorp Solutions recrute ! Nous recherchons des développeurs Full-Stack passionnés. Envoyez-nous votre CV !',
        writerId: writers[20].id,
        createdAt: new Date('2024-11-14T08:00:00Z'),
      },
    }),
    prisma.post.create({
      data: {
        content: '✨ DesignHub Agency est ravie d\'annoncer le lancement de notre nouveau service de Design System. Contactez-nous pour en savoir plus !',
        writerId: writers[21].id,
        createdAt: new Date('2024-11-13T11:20:00Z'),
      },
    }),
  ]);

  // Créer des médias pour certains posts
  console.log('🖼️  Ajout des médias...');
  await prisma.media.createMany({
    data: [
      {
        nom: 'webflow-launch.jpg',
        url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
        altText: 'Lancement WebFlow Studio',
        description: 'Notre équipe lors du lancement',
        type: 'image',
        postId: posts[0].id,
      },
      {
        nom: 'mobile-redesign.jpg',
        url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800',
        altText: 'Redesign mobile',
        description: 'Nouveau design de l\'app mobile',
        type: 'image',
        postId: posts[4].id,
      },
    ],
  });

  // Créer des votes sur les posts
  console.log('👍 Ajout des votes...');
  await prisma.vote.createMany({
    data: [
      // Votes sur le post de Damien
      { writerId: writers[1].id, postId: posts[0].id, status: true },
      { writerId: writers[2].id, postId: posts[0].id, status: true },
      { writerId: writers[3].id, postId: posts[0].id, status: true },
      { writerId: writers[7].id, postId: posts[0].id, status: true },
      { writerId: writers[8].id, postId: posts[0].id, status: true },
      // Votes sur le deuxième post de Damien
      { writerId: writers[1].id, postId: posts[1].id, status: true },
      { writerId: writers[2].id, postId: posts[1].id, status: true },
      { writerId: writers[4].id, postId: posts[1].id, status: true },
      // Autres votes
      { writerId: writers[0].id, postId: posts[2].id, status: true },
      { writerId: writers[2].id, postId: posts[2].id, status: true },
      { writerId: writers[0].id, postId: posts[3].id, status: true },
      { writerId: writers[3].id, postId: posts[3].id, status: true },
      { writerId: writers[0].id, postId: posts[4].id, status: true },
      { writerId: writers[1].id, postId: posts[4].id, status: true },
      { writerId: writers[2].id, postId: posts[4].id, status: true },
      { writerId: writers[5].id, postId: posts[4].id, status: false }, // Dislike
      { writerId: writers[0].id, postId: posts[5].id, status: true },
      { writerId: writers[1].id, postId: posts[8].id, status: true },
      { writerId: writers[2].id, postId: posts[8].id, status: true },
      { writerId: writers[3].id, postId: posts[8].id, status: true },
      { writerId: writers[0].id, postId: posts[8].id, status: true },
    ],
  });

  // Créer des commentaires
  console.log('💬 Ajout des commentaires...');
  const comments = await Promise.all([
    // Commentaires sur les posts de Damien
    prisma.comment.create({
      data: {
        content: 'Félicitations Damien ! Super projet, hâte de voir ce que vous allez créer 🎉',
        postId: posts[0].id,
        writerId: writers[1].id,
      },
    }),
    prisma.comment.create({
      data: {
        content: 'Bravo pour le lancement ! Bonne chance pour la suite 🚀',
        postId: posts[0].id,
        writerId: writers[2].id,
      },
    }),
    prisma.comment.create({
      data: {
        content: 'Excellents conseils ! J\'ajouterais aussi l\'importance du refactoring régulier.',
        postId: posts[1].id,
        writerId: writers[1].id,
      },
    }),
    // Autres commentaires
    prisma.comment.create({
      data: {
        content: 'Félicitations Alice ! Bienvenue dans l\'équipe 🎉',
        postId: posts[2].id,
        writerId: writers[2].id,
      },
    }),
    prisma.comment.create({
      data: {
        content: 'Le design est superbe ! Bravo 👏',
        postId: posts[4].id,
        writerId: writers[0].id,
      },
    }),
    prisma.comment.create({
      data: {
        content: 'Très intéressant ! Pourrais-tu partager plus de détails sur l\'orchestration ?',
        postId: posts[5].id,
        writerId: writers[2].id,
      },
    }),
  ]);

  // Créer des réponses aux commentaires
  console.log('↩️  Ajout des réponses aux commentaires...');
  await Promise.all([
    prisma.comment.create({
      data: {
        content: 'Merci Alice ! On va faire de grandes choses ensemble 😊',
        postId: posts[0].id,
        commentId: comments[0].id,
        writerId: writers[0].id,
      },
    }),
    prisma.comment.create({
      data: {
        content: 'Merci Bob ! 🙏',
        postId: posts[0].id,
        commentId: comments[1].id,
        writerId: writers[0].id,
      },
    }),
    prisma.comment.create({
      data: {
        content: 'Tout à fait d\'accord ! Le refactoring est essentiel pour maintenir la qualité du code.',
        postId: posts[1].id,
        commentId: comments[2].id,
        writerId: writers[0].id,
      },
    }),
    prisma.comment.create({
      data: {
        content: 'Bien sûr ! Je prépare un article détaillé sur le sujet 📝',
        postId: posts[5].id,
        commentId: comments[5].id,
        writerId: writers[4].id,
      },
    }),
  ]);

  // Créer des votes sur les commentaires
  console.log('👍 Ajout des votes sur les commentaires...');
  await prisma.vote.createMany({
    data: [
      { writerId: writers[0].id, commentId: comments[0].id, status: true },
      { writerId: writers[2].id, commentId: comments[0].id, status: true },
      { writerId: writers[1].id, commentId: comments[2].id, status: true },
      { writerId: writers[2].id, commentId: comments[4].id, status: true },
      { writerId: writers[3].id, commentId: comments[4].id, status: true },
    ],
  });

  // Créer des vues de profil
  console.log('👀 Ajout des vues de profil...');
  await prisma.profileShow.createMany({
    data: [
      { idUser1: users[0].id, idUser2: users[1].id },
      { idUser1: users[1].id, idUser2: users[0].id },
      { idUser1: users[2].id, idUser2: users[0].id },
      { idUser1: users[3].id, idUser2: users[0].id },
      { idUser1: users[4].id, idUser2: users[0].id },
      { idUser1: users[0].id, idUser2: users[3].id },
      { idUser1: users[1].id, idUser2: users[2].id },
      { idUser1: users[2].id, idUser2: users[1].id },
      { idUser1: users[3].id, idUser2: users[4].id },
      { idUser1: users[5].id, idUser2: users[6].id },
    ],
  });

  console.log('\n✅ Seed terminé avec succès !\n');
  console.log('📊 Statistiques :');
  console.log(`   - ${users.length} utilisateurs`);
  console.log(`   - ${companies.length} entreprises`);
  console.log(`   - ${posts.length} posts`);
  console.log(`   - ${comments.length} commentaires principaux`);
  console.log(`   - ${await prisma.relation.count()} relations`);
  console.log(`   - ${await prisma.profileShow.count()} vues de profil`);
  console.log('\n🔐 Votre compte :');
  console.log('   - Email: guilbaud.damien.85260@gmail.com');
  console.log('   - Mot de passe: Damien85!');
  console.log('   - Rôle: Admin/Root');
  console.log('   - Entreprise administrée: WebFlow Studio');
  console.log('\n🔐 Autres comptes de test :');
  console.log('   - alice.martin@example.com');
  console.log('   - bob.dupont@example.com');
  console.log('   - claire.bernard@example.com');
  console.log('   - etc...');
}

main()
  .catch((e) => {
    console.error('❌ Erreur lors du seed :', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
