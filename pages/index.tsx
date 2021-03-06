import Head from 'next/head'
import dynamic from 'next/dynamic'
import 'tailwindcss/tailwind.css'

const Game = dynamic(() => import('components/game'), { ssr: false })

export default function Home() {

  return (
    <div className="mx-auto">
      <Head>
        <title>Hello World! System Alpha.0.0.1 - In the void</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Game />
    </div>
  )
}