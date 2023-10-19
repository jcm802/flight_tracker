import Head from 'next/head'
import Header from '../components/Header'
import Dashboard from './dashboard/Dashboard'
import SideMenu from '../components/SideMenu'
import { useSession } from 'next-auth/react';
import React from 'react';
import Login from '../components/Login';
import scss from './Home.module.scss';

export default function Home(): JSX.Element {
  const { data: session } = useSession();
  return (
    <>
      <Head>
        <title>JCM Data</title>
        <meta name="description" content="Data Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={scss.main}>
        {session ? (
            <><SideMenu /><Dashboard /></>
          )
        : null}
        <Login />
      </main>
    </>
  )
}
