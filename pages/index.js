import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import {GiChefToque} from 'react-icons/gi'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
        <div>
          <h1>Chef it Up</h1>
          <h3>An app to make fun recipes</h3>
          <Link href="/Improv">
            <GiChefToque></GiChefToque>
          </Link>


        </div>
  )
}
