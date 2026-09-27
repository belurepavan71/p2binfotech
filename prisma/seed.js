const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const username = process.env.ADMIN_USERNAME || 'admin';
  const password = process.env.ADMIN_PASSWORD || 'changeme123';
  const passwordHash = await bcrypt.hash(password, 10);

  const admin = await prisma.adminUser.upsert({
    where: { username },
    update: {},
    create: { username, passwordHash },
  });
  console.log(`Admin user ready: ${admin.username}`);

  const jobs = [
    {
      title: 'Backend Engineer — Fintech Platforms',
      slug: 'backend-engineer-fintech-platforms',
      department: 'Engineering',
      location: 'Pune, India (Hybrid)',
      type: 'Full-time',
      summary: 'Build and harden the ledger and payments infrastructure behind our fintech clients.',
      description:
        "You'll work on core banking and payment systems that process real transaction volume from day one. This role sits close to the infrastructure team, so you'll care as much about failure modes and observability as you do about feature work.",
      requirements: [
        '3+ years building backend services in Node.js, Go or similar',
        'Experience with PostgreSQL and transactional data systems',
        'Comfort working with payment or ledger systems is a plus',
        'You write tests and think about edge cases before they bite you',
      ],
      isPublished: true,
    },
    {
      title: 'Frontend Engineer — Product',
      slug: 'frontend-engineer-product',
      department: 'Engineering',
      location: 'Remote (India)',
      type: 'Full-time',
      summary: 'Ship polished interfaces for our edtech and healthcare platform products.',
      description:
        "You'll build the interfaces our clients' end users touch every day — classrooms, dashboards and patient portals. We care about performance and accessibility as much as visual polish.",
      requirements: [
        '2+ years with React or Next.js in production',
        'Solid CSS fundamentals and an eye for detail',
        'Experience with animation libraries (Framer Motion or similar) is a plus',
      ],
      isPublished: true,
    },
    {
      title: 'Cloud & DevOps Engineer',
      slug: 'cloud-devops-engineer',
      department: 'Infrastructure',
      location: 'Pune, India',
      type: 'Full-time',
      summary: 'Own the IaaS and PaaS layer our client platforms run on.',
      description:
        "You'll design and operate the cloud infrastructure, CI/CD pipelines and monitoring that keep client platforms online. This is a hands-on role across AWS/GCP, Kubernetes and infrastructure-as-code.",
      requirements: [
        'Experience with AWS or GCP in production environments',
        'Familiarity with Docker, Kubernetes and infrastructure-as-code (Terraform)',
        'A calm head during incidents and a habit of writing things down afterward',
      ],
      isPublished: true,
    },
    {
      title: 'Product Designer',
      slug: 'product-designer',
      department: 'Design',
      location: 'Remote (India)',
      type: 'Contract',
      summary: 'Shape product experiences across fintech, edtech and healthcare clients.',
      description:
        "You'll partner with founders directly to turn early ideas into usable, trustworthy product experiences — then work with engineering to see them shipped.",
      requirements: [
        'A portfolio showing end-to-end product design work',
        'Comfort designing for data-heavy, regulated products',
        'Proficiency in Figma and a systems-first approach to design',
      ],
      isPublished: false,
    },
  ];

  for (const job of jobs) {
    await prisma.job.upsert({
      where: { slug: job.slug },
      update: {},
      create: job,
    });
  }
  console.log(`Seeded ${jobs.length} job listings.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
