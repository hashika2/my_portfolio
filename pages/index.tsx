import React from 'react'
import Head from 'next/head'
import Home from './Home'

const Index = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home/>
    </div>
  )
}

export default Index;
