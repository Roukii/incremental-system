import Head from 'next/head'
import dynamic from 'next/dynamic'

const Game = dynamic(() => import('components/game'), { ssr: false })

export default function Home() {

  return (
    <div className="container">
      <Head>
        <title>Hello World! System Alpha.0.0.1 - In the void</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Game />
    </div>
  )
}