import Head from 'next/head'
import Header from '../components/Header'
import Dashboard from './dashboard/Dashboard'
import SideMenu from '../components/SideMenu'
import styles from '@/styles/Home.module.css';
import { useSession } from 'next-auth/react';
import React from 'react';
import Login from '../components/Login';

export default function Home() {
  const { data: session } = useSession();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Data Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        {session ? (
            <><SideMenu /><Dashboard /></>
          )
        : null}
        <Login />
      </main>
    </>
  )
}
