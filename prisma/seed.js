const { faker } = require('@faker-js/faker')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const POSTS = []

for (let i = 0; i < 15; i++) {
  POSTS.push({
    title: `Post ${i}`,
    author: faker.person.firstName()
  })
}

async function main () {
  for (let j = 0; j < POSTS.length; j++) {
    await prisma.post.create({
      data: { title: POSTS[j].title, author: POSTS[j].author }
    })
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
