import { SessionProvider } from 'next-auth/react'
import { AppProps } from 'next/app'

import ListOfPosts from './ListOfPosts'

export default function PostPage () {
  return (
    <>
      <h3>Mira los posts</h3>
      <section>
        <ListOfPosts />
      </section>
    </>
  )
}
