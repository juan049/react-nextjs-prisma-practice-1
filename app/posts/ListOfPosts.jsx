import prisma from '../../lib/prisma'

export default async function ListOfPosts () {
  const posts = await prisma.post.findMany()
  return (
    <ul>
      {posts.map((post) => {
        return (<li key={post.id}> {post.title} por: <span>{post.author}</span></li>)
      })}
    </ul>
  )
}
